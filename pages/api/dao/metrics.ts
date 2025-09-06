import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs'
import path from 'path'
const configPath = path.join(process.cwd(), 'datadaoconfig.json'),
const cachePath = path.join(process.cwd(), 'datadaometrics.json'),

async function fetchJson(url: string) {
  const resp = await fetch(url)
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`),
  return resp.json()
}

function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'))
}

function writeJson(p: string, v: any) {
  fs.writeFileSync(p, JSON.stringify(v, null, 2))
}

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const cfg = readJson(configPath)
    const cache = readJson(cachePath)
    const now = Date.now()
    const oneWeekMs = 7 * 24 * 60 * 60 * 1000

    if (cache.updatedAt && now - cache.updatedAt < oneWeekMs) {
      return res.status(200).json({ ...cache, cached: true })
    }

    const apiKey = process.env.ETHERSCAN_API_KEY || ''
    const tokenAddr = cfg.token.address

    // Top holders (using Etherscan token holder endpoint alternative: token supply holders is limited, use rich list approximation via token transactions + unique addresses)
    // For demo simplicity: fetch last N token transfers and aggregate balances via simplistic heuristic.

    // Top holders (using Etherscan token holder endpoint alternative: token supply holders is limited, use rich list approximation via token transactions + unique addresses)
    // For demo simplicity: fetch last N token transfers and aggregate balances via simplistic heuristic.
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
    const transfersUrl = `${cfg.etherscanBaseUrl}?module=account&action=tokentx&contractaddress=${tokenAddr}&page=1&offset=200&sort=desc${apiKey ? `&apikey=${apiKey}` : ''}`
    const transfersJson = await fetchJson(transfersUrl)
    const txs = transfersJson?.result || []

  }
}