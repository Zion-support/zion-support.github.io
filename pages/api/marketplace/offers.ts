import type { NextApiRequest, NextApiResponse } from 'next';

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({
    ok: false,
    error: message
  });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      res.status(200).json({ offers: [] });
    } else if (req.method === 'POST') {
      const offer = {
        id: 'offer-id',
        createdAtIso: new Date().toISOString(),
        clientId: 'client-id',
        talentSlug: 'talent-slug',
        startDateIso: new Date().toISOString(),
        scopeSummary: 'Project scope',
        paymentTerms: { type: 'fixed', amount: 1000 },
        agreementUrl: 'agreement-url'
      };
      
      res.status(201).json({
        ok: true,
        offer
      });
    } else if (req.method === 'PATCH') {
      const existing = {
        id: 'existing-offer',
        status: 'ACTIVE'
      };
      
      res.json({
        ok: true,
        offer: existing
      });
    } else {
      return bad(res, "Unknown role", 403);
    }
  } catch (error) {
    return bad(res, "Internal server error", 500);
  }
}