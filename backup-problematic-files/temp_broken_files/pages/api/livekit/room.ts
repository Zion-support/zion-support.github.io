import type { NextApiRequest, NextApiResponse } from 'next'
import { RoomServiceClient, CreateRoomOptions } from 'livekit-server-sdk'
const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || ''
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || ''
const LIVEKIT_HOST = process.env.LIVEKIT_HOST || ''
  if (req.method != 'POST'
    res.setHeader('AllowPOST'
    return res.status(405).json({ error: any
      return res.status(400).json({ error: any
      return res.status(500).json({ error: any
    const pad = (n:number) => String(n).padStart(2, '0'
        metadata:JSON.stringify({ projectId, createdBy: any
      console.warn('Room create skipped or failed, proceeding with roomName only'
    console.error('Room create error'
    return res.status(500).json({ error: any