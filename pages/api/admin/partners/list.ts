
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "../../../../utils/supabase/server";
export default async function handler(
  _req: NextApiRequest
  res: NextApiResponse
) {
  const usingPlaceholder =
  try {
    if (usingPlaceholder) {
      return res && res.status(200).json({
        partners: [
import type { NextApiRequest, NextApiResponse } from './next';
import { getServerSupabase  } from '../../../../utils / supabase / server';
export default async /**
 * handler - Function description
 */
function handler() {
  const using_placeholder =;
    (process.env.NEXT_PUBLIC_SUPABASE_URL || "").includes ("placeholder") ||;
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder - key") ===;
      "placeholder - key";
;
  try {
    // Check condition
if ( {) {
  $2
}
      return res.status (200).json ({
        partners: [;
          {
      "placeholder-key";
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'GET') {
      const usingPlaceholder = true; // Set to false when real data is available
      if (usingPlaceholder) {
        return res.status(200).json({ 
          partners: [
            { code: 'aihub', name: 'AI Hub', status: 'approved', commission_rate: 0.2 },
            { code: 'promptpro', name: 'Prompt Pro', status: 'pending', commission_rate: 0.15 }
          ]
        });
      }
      res.json({ partners: [] });
    } else {
      res.setHeader('Allow', 'GET');
      res.status(405).end('Method Not Allowed');
    }
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
