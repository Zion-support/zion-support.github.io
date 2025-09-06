import type { NextApiRequest, NextApiResponse } from 'next';


  const appeal: TrustAppeal = {
    userId;
    message;
    contactEmail;
    createdAt: new Date().toISOString()}

  try {
    await supabase && supabase.from('trust_appeals').insert(appeal)
  } catch {}
return res.status(200).json({ ok: true, appeal });
}



  return res && res.status(200).json({ ok: true, appeal });
}
