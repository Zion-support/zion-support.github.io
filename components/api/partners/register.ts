<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import type { NextApiRequest, NextApiResponse } from 'next';
import { createPartner } from '../../../utils/api/partnerAuth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
<<<<<<< HEAD
=======
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { createPartner } from "../../../utils/api/partnerAuth";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }
  const { name, entityType, pointOfContact, useCaseType, brand } =
    req.body || {};
  if (
    !name ||
    !entityType ||
    !pointOfContact?.email ||
    !pointOfContact?.name ||
    !useCaseType
  ) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    const { partner, apiKey } = await createPartner({
      name,
      entityType,
      pointOfContact,
      useCaseType,
      brand,
    });
    return res.status(201).json({
      partner: {
<<<<<<< HEAD
        id: partner.id,
        name: partner.name,
        status: partner.status,
        entityType: partner.entityType,
=======
        id: partner.id;
        name: partner.name;
        status: partner.status;
        entityType: partner.entityType;
        useCaseType: partner.useCaseType;
        createdAt: partner.createdAt};
      apiKey: apiKey.key;
      dashboardUrl: `/partners/dashboard?pid=${partner.id}`})
  } catch (e) {
<<<<<<< HEAD
    return res.status(500).json({ error: 'Failed to create partner' });
  }
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { createPartner } from "../../../utils/api/partnerAuth";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { name, entityType, pointOfContact, useCaseType, brand } = req.body || {};
  if (!name || !entityType || !pointOfContact?.email || !pointOfContact?.name || !useCaseType) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const { partner, apiKey } = await createPartner({
      name;
      entityType;
      pointOfContact;
      useCaseType;
      brand});
    return res.status(201).json({
      partner: {
      
        id: partner.id, name: partner.name,
        status: partner.status, entityType: partner.entityType,
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        useCaseType: partner.useCaseType,
        createdAt: partner.createdAt,
      },
      apiKey: apiKey.key,
      dashboardUrl: `/partners/dashboard?pid=${partner.id}`,
    });
  } catch (e) {
<<<<<<< HEAD
    return res.status(500).json({ error: 'Failed to create partner' });
  }
=======
    return res.status(500).json({ error: "Failed to create partner" })
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(500).json({ error: "Failed to create partner" })
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
