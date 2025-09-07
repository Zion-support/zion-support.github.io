import type { NextApiRequest, NextApiResponse } from "next"
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if($2) {
    return res.status(405).json({ error: "Method not allowed" })
  const { providerId } = req.body
  if($2) {
    return res.status(400).json({ error: "Invalid providerId" })
  // Mock implementation
  return res.status(200).json({ success: true })
