import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs-extra"
import path from "path"
const CERTS_FILE = path.join(process.cwd(), "data", "certifications", "certifications.json"
  if (req.method != "GET"
    res.setHeader("Allow", "GET"
    return res.status(405).json({ error: any
    return res.status(500).json({ error: "Failed to load certifications" })import type {_NextApiRequest, _NextApiResponse} from "next"
import fs from "fs-extra"
import path from "path"
const _CERTS_FILE = path.join(process.cwd(), "data", "certifications", "certifications.json"
export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method != "GET"
    res.setHeader("Allow", _"GET"
    return res.status(405).json({ error: any
  } catch (e) {_return res.status(500).json({ error: any