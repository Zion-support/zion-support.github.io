





import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from "next",


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" }),
  const { name, url } = req.body || {},
  if (!name) return res.status(400).json({ ok: false, error: "Missing name" }),
  // Echo back URL, real impl would upload to storage (Supabase, S3, etc.)





}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
