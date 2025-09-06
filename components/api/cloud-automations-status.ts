import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import path from "path"
  const dir = path.resolve(process.cwd(), "data/