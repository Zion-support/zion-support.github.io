import type { NextApiRequest, NextApiResponse } from "next"
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if($2) {
    return res.status(405).json({ error: 'Method not allowed' })
  try {
    // Mock data for now
    const disputes = []
    return res.status(200).json({ disputes })
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' })
