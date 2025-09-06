import fs from "fs"
import path from "path"
import { execSync } from "child_process"
import type { NextApiRequest, NextApiResponse } from "next"
export type DevRole = "admin" | "maintainer" | "contributor"
    const gitDir = path.join(process.cwd(), ".git"
    const branch = execSync("git rev-parse --abbrev-ref HEAD", { stdio: ["ignore", "pipe", "ignore"
  const token = req.headers["x-dev-token"] || req.headers["x-admin-token"
    return { isAuthenticated: true, roles: ["admin"], userId: any
    res.status(401).json({ error: any
    res.status(403).json({ error: any