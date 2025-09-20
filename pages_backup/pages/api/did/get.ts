import type { NextApiRequest, NextApiResponse } from 'next',

,
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ |{}
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  const { address } = req.query as { address?: string }
  if (!address) return res.status(400).json({ error: 'Missing address' }),
  const data = store[String(address).toLowerCase()] |null,
  return res.status(200).json({ data }),
  const { address } = req.query as { address?: string },
  if (!address) return res.status(400).json({ error: 'Missing address' }),
  const data = store[String(address).toLowerCase()] || null,
  return res.status(200).json({ data }),
},
const store: Record<string, any> = (global as any).ZION_DID_STORE || {},
export default function handler(req: any, res: any) {,
  res.status(200).json({ store }),
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  const { address } = req.query as { address?: string },
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' }),
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }

}
,