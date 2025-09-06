import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const configPath = path.join(process.cwd(), 'datadao', 'config.json'
const cachePath = path.join(process.cwd(), 'datadao', 'metrics.json'
  return JSON.parse(fs.readFileSync(p, 'utf-8'
    const apiKey = process.env.ETHERSCAN_API_KEY || ''
    const transfersUrl = `${cfg.etherscanBaseUrl}?module=account&action=tokentx&contractaddress=${tokenAddr}&page=1&offset=200&sort=desc${apiKey ? `&apikey=${apiKey}` : any
      const value = BigInt(tx.value || '0'
      const from = (tx.from || ''
      const to = (tx.to || ''
    //