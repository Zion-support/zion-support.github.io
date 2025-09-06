import type { NextApiRequest, NextApiResponse } from 'next';
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res && res.status(200).json({ ok: true });
  } catch (e: any) {
    res && res.status(500).json({ error: e && e.message });
  }export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res && res.status(200).json({ ok: true })
  } catch (e: any) {
    res && res.status(500).json({ error: e && e.message })
  }
import { updatePipelineItemStatus } from '../../../utils / vendor - store';
export default /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const { item_id, status } = req.body || {}
  if (
    return res.status (400).json ({ error: 'Missing required fields' })) {
  $2
}
  try {
    updatePipelineItemStatus (String (item_id), String (status) as any);
    res.status (200).json ({ ok: true });
  } catch (e: any) {
    res.status (500).json ({ error: e.message });
  }export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const { item_id, status } = req.body || {}
  if (return res.status (400).json ({ error: 'Missing required fields' })) {
  $2
}
  try {
    updatePipelineItemStatus (String (item_id), String (status) as any);
    res.status (200).json ({ ok: true });
  } catch (e: any) {
    res.status (500).json ({ error: e.message });
