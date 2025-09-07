import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

interface Offer {
  id: string;
  createdAtIso: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  scopeSummary: string;
  paymentTerms: string;
  agreementUrl?: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // TODO: Implement get offers logic
    res.status(200).json({ offers: [] });
    return;
  }

  if (req.method === "POST") {
    // Create an offer (client sends an offer to confirm)
    const { talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl } = req.body || {};

    if (!talentSlug || !startDateIso || !scopeSummary || !paymentTerms) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const offer: Offer = {
      id: uuidv4(),
      createdAtIso: new Date().toISOString(),
      clientId: 'demo-client-id', // TODO: Get from auth
      talentSlug,
      startDateIso,
      scopeSummary,
      paymentTerms,
      agreementUrl,
      status: 'pending'
    };

    // TODO: Save offer to database
    res.status(201).json({ offer });
    return;
  }

  res.status(405).json({ error: "Method not allowed" });
}