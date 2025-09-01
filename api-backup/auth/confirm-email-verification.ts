import { createClient } from '@supabase/supabase-js';
import { PrismaClient, Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

// Define a type for the expected successful response
interface SuccessResponse {
  message: string;
  user: {
    id: string;
    email: string | null;
    emailVerified: boolean;
  };
}

// Define error response type
interface ErrorResponse {
  message: string;
  error?: string;
  details?: string;
}

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend auth API. Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}

const supabase = createClient(supabaseUrl, serviceKey);

// Initialize Prisma client
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<SuccessResponse | ErrorResponse>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
    // Get JWT from cookies or Authorization header
    const jwt = req.cookies['supabase-auth-token'] || 
                Object.keys(req.cookies).find(key => key.startsWith('sb-') && key.endsWith('-access-token')) ||
                req.headers.authorization?.split('Bearer ')[1];

    if (!jwt) {
      console.log('No Supabase auth token found in cookies or Authorization header.');
      return res.status(401).json({ message: 'Unauthorized: Auth token not found.' });
    }

    // Verify the JWT with Supabase
    const { data: { user }, error: authError } = await supabase.auth.getUser(jwt);

    if (authError || !user) {
      console.error('Auth error with token:', authError);
      return res.status(401).json({ message: 'Unauthorized: No active session or auth error.', error: authError?.message });
    }

    if (!user.email) {
      console.error('User object from Supabase does not contain an email.');
      return res.status(400).json({ message: 'Bad Request: User email not found in token.' });
    }

    // Update the user's email verification status in our database
    const updatedUser = await prisma.user.update({
      where: { email: user.email },
      data: { emailVerified: true },
      select: {
        id: true,
        email: true,
        emailVerified: true
      }
    });

    return res.status(200).json({ message: 'Email successfully verified.', user: updatedUser });

  } catch (error: unknown) {
    console.error('Error confirming email verification:', error);
    
    let errorMessage = 'Internal server error';
    let errorDetails: string | undefined = undefined;

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Prisma specific errors
      if (error.code === 'P2025') { // "Record to update not found."
        return res.status(404).json({ message: 'User not found in our database.' });
      }
      errorMessage = 'Database error during email verification.';
      errorDetails = error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }

    return res.status(500).json({ 
      message: errorMessage,
      details: errorDetails 
    });
  } finally {
    await prisma.$disconnect();
  }
}