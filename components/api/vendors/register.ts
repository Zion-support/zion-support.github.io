import type { NextApiRequest, NextApiResponse } from 'next';
import { getVendorBySlug, registerVendor } from '../../../utils/vendor-store';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const vendor = registerVendor({
      slug;
      name;
      servicesOffered: Array.isArray(servicesOffered) ? servicesOffered : [];
      teamSize: Number(teamSize || 0);
      about;
      verificationDocs: Array.isArray(verificationDocs) ? verificationDocs : [];
      caseStudies: Array.isArray(caseStudies) ? caseStudies : []});
    res.status(201).json({ vendor })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  };
}
