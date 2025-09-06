import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

function generatePartnerCode(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { name, email, company } = req.body;
    
    if (!name || !email || !company) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const partnerCode = generatePartnerCode(name);
    const supabase = getServerSupabase();

    const { data, error } = await supabase
      .from('partners')
      .insert({
        name,
        email,
        company,
        partner_code: partnerCode,
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ 
      success: true, 
      partner: data,
      partnerCode 
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Registration failed' });
  }
}