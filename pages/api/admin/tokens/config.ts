
import type { NextApiRequest, NextApiResponse } from "next",import { getConfig } from "../../../../utils/token/service",import { tokenStore } from "../../../../utils/token/storage",export default function handler() {if (req.method === "GET") {return res.status(200).json(getConfig())}
  if (req.method === "POST") {if (req.method === "POST") {const body = req.body || {},const current = tokenStore.getConfig(),const updated = { ...current, ...body },tokenStore.setConfig(updated),return res.status(200).json(updated)}
  return res.status(405).json({ error: "Method not allowed" })}return res.status(200).json(updated)}
  return res.status(405).json({ error: "Method not allowed" })}const body = req.body || {}
    const current = tokenStore.getConfig()const updated = { ...current, ...body }
    tokenStore.setConfig(updated)return res.status(200).json(updated)}
  return res.status(405).json({ error: "Method not allowed" })}}if (req.method === 'POST') {const { updated } = req.body || {}if (updated) {tokenStore.setConfig(updated)return res.status(200).json({ success: true })}
  }return res.status(405).json({ error: "Method not allowed" })}