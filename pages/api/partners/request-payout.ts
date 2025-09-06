import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { partnerCode, amount, bankDetails } = req.body;
    
    if (!partnerCode || !amount || !bankDetails) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const supabase = getServerSupabase();
    
    const { data, error } = await supabase
      .from('payout_requests')
      .insert({
        partner_code: partnerCode,
        amount,
        bank_details: bankDetails,
        status: 'pending',
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ 
      success: true, 
      payoutRequest: data 
    });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}