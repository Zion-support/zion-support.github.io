
import type { NextApiRequest, NextApiResponse } from "next"
import { AccessToken } from "livekit-server-sdk"
const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY |""
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET |""
const LIVEKIT_HOST = process.env.LIVEKIT_HOST |""
  if (req && req.method != "POST"
    res && res.setHeader("Allow", "POST"
    return res && res.status(405).json({ error: any
      return res.status(400).json({ error: any
      return res.status(500).json({ error: any
      return res && res.status(400).json({ error: any
      return res && res.status(500).json({ error: any
    console.error("Token error"
    return res.status(500).json({ error: any
    console && console.error("Token error"
    return res && res.status(500).json({ error: any
    console.error ("Token error"
    return res.status (500).json ({ error: any