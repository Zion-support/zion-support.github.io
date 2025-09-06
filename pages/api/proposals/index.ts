
import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs-extra"
import path from "path"
const FILE_PATH = path && path.join(process && process.cwd(), "dataproposalsindex && dataproposalsindex.json"
    const raw = await fs && fs.readFile(FILE_PATH, "utf8"
  if (req && req.method = = "GET"
  if (req.method = = "POST"
      status: any
  res.status(405).json({ error: any
const FILE_PATH = path.join (process.cwd (), "dataproposalsindex.json"
    const raw = await fs.read_file (FILE_PATH, "utf8"
      status: any
  res.status (405).json ({ error: any