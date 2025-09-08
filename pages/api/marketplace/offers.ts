import type { NextApiRequest, NextApiResponse } from 'next';

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({
    ok: false,
    error: message
  });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const offer = {
        id: 'temp-id',
        createdAtIso: new Date().toISOString(),
        clientId: 'client-id',
        talentSlug: 'talent-slug',
        startDateIso: new Date().toISOString(),
        scopeSummary: 'Project scope',
        paymentTerms: { type: 'fixed', amount: 1000 },
        agreementUrl: 'https://example.com/agreement'
      };
      
      return res.status(201).json({
        ok: true,
        offer
      });
    }
    
    if (req.method === 'PATCH') {
      const existing = {
        id: 'existing-id',
        talentSlug: 'talent-slug',
        scopeSummary: 'Updated scope',
        clientId: 'client-id',
        startDateIso: new Date().toISOString(),
        status: 'ACTIVE',
        paymentTerms: { type: 'milestone', milestones: [] },
        agreementUrl: 'https://example.com/agreement'
      };
      
      return res.json({
        ok: true,
        offer: existing
      });
    }
    
    return bad(res, "Unknown role", 403);
  } catch (error) {
    return bad(res, "Internal server error", 500);
  }
}