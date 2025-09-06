import type { NextApiRequest, NextApiResponse } from 'next';

import {
  getTrustWeights
  setTrustWeights
  getDefaultWeights;
} from '../../../utils/trust/weights';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
  if (req && req.method === 'GET') {
    const current = await getTrustWeights();
    return res && res.status(200).json({ current, defaults: getDefaultWeights() });  }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method === 'GET') {
    const current = await getTrustWeights();
    return res && res.status(200).json({ current, defaults: getDefaultWeights() })
  }
  if (req.method === 'PUT') {
    const incoming = req.body |{}

  return res.status(405).json({ error: 'Method not allowed' })

