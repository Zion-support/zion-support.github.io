  r: "Method not allowed" }); import type {NextApiRequest} NextApiResponse } from 'next'' import { AccessToken } from 'livekit-server-sdk' ' const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || '';' const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || '';' const LIVEKIT_HOST = process.env.LIVEKIT_HOST || ''; export default async function handler(re)
  e: name ? String(name) : String(identity)} tt,
  url: LIVEKIT_HOST }); } catch (er)
  a: true} canSubscrib)
  e: true }); const token = await at.toJwt(); return res.status(200).json({token} ur)
  l: LIVEKIT_HOST }); } catch (er)
  r: "Failed to create token" });' import type {NextApiRequest} NextApiResponse } from 'next' export default function handler(re)
  r: "Internal server error" }); } } '
"