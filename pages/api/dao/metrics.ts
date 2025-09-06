
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
const configPath = path.join(process.cwd(), "data", "dao", "config.json");
const cachePath = path.join(process.cwd(), "data", "dao", "metrics.json");
async function fetchJson(url: string) {

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const configPath = path.join(process.cwd(), 'datadaoconfig.json'),;
const cachePath = path.join(process.cwd(), 'datadaometrics.json'),;
async function fetchJson(url: string) {;

  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.json();
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, "utf-8"));

;
function readJson(p: string) {;
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
function writeJson(p: string, v: any) {
  fs.writeFileSync(p, JSON.stringify(v, null, 2));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export default async function handler(
  _req: NextApiRequest
  res: NextApiResponse
) {

  try {;

;
export default async function handler(req, res) {

  try {

    const cfg = readJson(configPath);
    const cache = readJson(cachePath);
    const now = Date.now();
    const oneWeekMs = 7 * 24 * 60 * 60 * 1000;

  }
}