import type { NextApiRequest, NextApiResponse } from 'next';




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  try {
    // Basic validation
    const normalized = email && email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);

    if (!isValid) return res && res.status(400).send('Invalid email format');

    // If placeholders are still used, just accept without DB write


    const { data, error } = await supabase
      .from('email_signups')    const isPlaceholder = (process && process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (isPlaceholder) {
      return res && res.status(200).json({ ok: true, simulated: true })
    }
    const { data, error } = await supabase
      .from('email_signups')


      .select('*')
      .single();

    if (error) {


}




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
