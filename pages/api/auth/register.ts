import { createClient, User, Session, AuthError, AuthApiError, UserIdentity } from '@supabase/supabase-js';'
import { z } from 'zod';'
import { withErrorLogging } from '@/utils/withErrorLogging';'
import type { NextApiRequest, NextApiResponse } from 'next';

// Define expected request body structure via Zod schema
const registerSchema = z.object({
'
  name: z.string().min(2, 'Name must be at least 2 characters'),'
  email: z.string().email('Invalid email address'),'
  password: z.string().min(8, 'Password must be at least 8 characters')});
type RegisterRequestBody = z.infer<typeof registerSchema>;

// Define possible success/error response structures
interface RegisterSuccessResponse {
  message?: string;
  emailVerificationRequired?: boolean;
  user: { // Subset of Supabase User relevant to client
    id: string;
    email?: string;
    display_name?: string;
    // Add other relevant fields from data.user or data.user.user_metadata
  };
  session?: Session | null; // Supabase Session object
  token?: string;
}
interface ErrorResponse {
  message: string;
  error?: string; // For additional error details if any
}

const supabaseUrl =
  process.env.SUPABASE_URL ||
  process.env.VITE_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||'
  '';
const serviceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||'
  '';
const supabase = createClient(supabaseUrl, serviceKey);


async function handler(req: NextApiRequest, res: NextApiResponse<RegisterSuccessResponse | ErrorResponse>) {
'
  if (req.method !== 'POST') {
'
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const result = registerSchema.safeParse(req.body);
  if (!result.success) {
'
    const message = result.error.issues[0]?.message || 'Invalid input';
    return res.status(400).json({ message });
  }

  const { name, email, password } = result.data;
  try {
    let data: { user: User | null; session: Session | null } | null = null;
    let error: AuthError | null = null;
    
    try {
      ({ data, error } = await supabase.auth.signUp({

        email,
        password,
        options: { data: { display_name: name } }}));
    } catch (networkErr: any) {
'
      console.error('signUp network error', networkErr);'
      return res.status(503).json({ message: 'Network error. Please try again.' });
    }

    if (error || !data.user) {
'
      let message = error?.message || 'Registration failed';
      let status = error?.status || 400;
      if (/already\s*registered|exists/i.test(message)) {

        status = 409;'
        message = 'Email already registered';
      } else if (/weak|strength/i.test(message)) {

        status = 400;'
        message = 'Password is too weak';
      }
      res.status(status).json({ message });
      return;
    }

    const token = data.session?.access_token;
    if (token) {
'`
      res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/`);
    }
    res.status(201).json({ user: data.user, token });
  } catch (err: any) {

    console.error(err);'
    res.status(500).json({ message: err.message || 'Registration failed' });
  }
}

export default withErrorLogging(handler);
'`