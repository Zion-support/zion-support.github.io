import type { NextApiRequest, NextApiResponse } from 'next';
import { getVendorBySlug, registerVendor } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { slug, name, servicesOffered, teamSize, about, verificationDocs, caseStudies } = req.body || {},
  if (!slug || !name) return res.status(400).json($2);
  if (getVendorBySlug(slug)) return res.status(409).json($2);
  try {
    const vendor = $2;
      name,
      servicesOffered: Array.isArray(servicesOffered) ? servicesOffered : [],
      teamSize: Number($2);
      about,
      verificationDocs: Array.isArray(verificationDocs) ? verificationDocs : [],
      caseStudies: Array.isArray(caseStudies) ? caseStudies : []}),
    res.status(201).json({ vendor })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}