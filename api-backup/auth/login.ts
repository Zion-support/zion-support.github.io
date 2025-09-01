import { createClient, AuthError, AuthApiError } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { User, Session } from '@supabase/supabase-js';

// Define expected request body structure
interface LoginRequestBody {
  email: string;
  password: string;
}

// Define success response structure
interface LoginSuccessResponse {
  user: User;
  session: Session;
  message: string;
}

// Define error response structure
interface ErrorResponse {
  error: string;
  code?: string;
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

export default async function handler(req: NextApiRequest, res: NextApiResponse<LoginSuccessResponse | ErrorResponse>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { email, password } = req.body as LoginRequestBody;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    // Attempt to sign in with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      console.error('Supabase signInWithPassword error:', error);

      if (error.message && /Email not confirmed/i.test(error.message)) {
        return res.status(403).json({
          error: "Email not confirmed. Please check your inbox to verify your email.",
          code: "EMAIL_NOT_CONFIRMED"
        });
      } else if (error.message && /Invalid login credentials/i.test(error.message)) {
        return res.status(401).json({
          error: "Invalid email or password.",
          code: "INVALID_CREDENTIALS"
        });
      } else {
        return res.status(400).json({
          error: error.message || "Login failed.",
          code: "LOGIN_ERROR"
        });
      }
    }

    if (!data.user || !data.session) {
      return res.status(500).json({
        error: "Login successful but no user or session returned.",
        code: "NO_SESSION"
      });
    }

    // Successfully logged in
    return res.status(200).json({
      user: data.user,
      session: data.session,
      message: "Login successful"
    });

  } catch (error) {
    console.error('Unexpected error in login handler:', error);
    return res.status(500).json({
      error: "An unexpected error occurred during login.",
      code: "UNEXPECTED_ERROR"
    });
  }
}