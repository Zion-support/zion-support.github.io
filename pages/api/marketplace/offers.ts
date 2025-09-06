import { NextApiRequest, NextApiResponse } from 'next';
import {
  assertClient,
  assertTalentOrClientForOffer,
  getDemoUser,
} from '../../../utils/marketplace/auth';
import {
  getOfferById,
  listOffers,
  saveOffer,
  saveProject,
} from '../../../utils/marketplace/store';
import { Offer, PaymentTerms, Project } from '../../../utils/marketplace/types';

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const user = getDemoUser(req);
      const offers = listOffers();
      return res.status(200).json({ offers });
    }
    
    if (req.method === 'POST') {
      const user = getDemoUser(req);
      assertClient(user);
      
      const { title, description, budget, paymentTerms } = req.body;
      if (!title || !description || !budget) {
        return bad(res, 'Missing required fields');
      }
      
      const offer: Offer = {
        id: Date.now().toString(),
        title,
        description,
        budget,
        paymentTerms: paymentTerms || PaymentTerms.FIXED,
        clientId: user.id,
        createdAt: new Date().toISOString(),
        status: 'open'
      };
      
      saveOffer(offer);
      return res.status(201).json({ offer });
    }
    
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Server error' });
  }
}