import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';

const supabaseUrl = process.env.SUPABASE_URL as string;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
const supabase = createClient(supabaseUrl, serviceKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, password } = req.body as { email: string; password: string };

  // hash only if not already hashed to avoid double hashing
  const hashedPassword = password.startsWith('$2')
    ? password
    : await bcrypt.hash(password, 10);

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password: hashedPassword,
  });

  console.log('Supabase signIn response:', { data, error });

  if (error || !data?.session) {
    if (error?.status === 400 && /confirm/.test(error.message.toLowerCase())) {
      res.status(400).json({ error: 'Please confirm your email' });
      return;
    }
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }

  const token = data.session.access_token;
  res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/`);
  return res.status(200).json({ user: data.user, token });
}
