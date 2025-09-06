import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

interface Offer {
  id: string;
  createdAtIso: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  scopeSummary: string;
  paymentTerms: {
    type: 'hourly' | 'fixed' | 'milestone';
    amount: number;
    currency: string;
    milestones?: Array<{
      id: string;
      name: string;
      amount: number;
      dueDate: string;
    }>;
  };
  agreementUrl?: string;
  status: 'PENDING' | 'ACCEPTED' | 'DECLINED' | 'ACTIVE' | 'COMPLETED';
}

const offers: Offer[] = [];

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({
    ok: false,
    error: message
  });
}

function saveOffer(offer: Offer) {
  const index = offers.findIndex(o => o.id === offer.id);
  if (index >= 0) {
    offers[index] = offer;
  } else {
    offers.push(offer);
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      // Create offer
      const { clientId, talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl } = req.body;
      
      if (!clientId || !talentSlug || !startDateIso || !scopeSummary || !paymentTerms) {
        return bad(res, 'Missing required fields');
      }

      const offer: Offer = {
        id: uuidv4(),
        createdAtIso: new Date().toISOString(),
        clientId,
        talentSlug,
        startDateIso,
        scopeSummary,
        paymentTerms: paymentTerms as Offer['paymentTerms'],
        agreementUrl,
        status: 'PENDING'
      };

      saveOffer(offer);
      return res.status(201).json({
        ok: true,
        offer
      });
    } else if (req.method === 'PATCH') {
      // Update offer
      const { id, action } = req.body;
      
      if (!id || !action) {
        return bad(res, 'Offer ID and action are required');
      }

      const existing = offers.find(o => o.id === id);
      if (!existing) {
        return bad(res, 'Offer not found', 404);
      }

      if (action === 'accept') {
        existing.status = 'ACCEPTED';
        saveOffer(existing);
        return res.json({
          ok: true,
          offer: existing
        });
      } else if (action === 'decline') {
        existing.status = 'DECLINED';
        saveOffer(existing);
        return res.json({
          ok: true,
          offer: existing
        });
      }

      return bad(res, 'Unknown action');
    } else if (req.method === 'GET') {
      // List offers
      return res.json({
        ok: true,
        offers
      });
    } else {
      res.setHeader('Allow', ['GET', 'POST', 'PATCH']);
      return res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error('Offers error:', error);
    return bad(res, 'Internal server error', 500);
  }
}