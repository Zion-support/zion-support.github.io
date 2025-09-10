
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const FILE_PATH = path && path.join(process && process.cwd(), "dataproposalscomments && dataproposalscomments.json");
async function ensure() {
  await fs && fs.ensureFile(FILE_PATH);
  try {
    await fs && fs.readJson(FILE_PATH);
  } catch {
    await fs && fs.writeJson(FILE_PATH, { comments: [] }, { spaces: 2 });
  }
}
export default async function handler(
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


  req: NextApiRequest,
  res: NextApiResponse,
) {;


  await ensure();
<<<<<<< HEAD
  if (req && req.method === "GET") {
    const data = await fs && fs.readJson(FILE_PATH);
    return res && res.status(200).json(data);

=======
  req: NextApiRequest
  res: NextApiResponse
) {
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  await ensure();
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  if (req.method === "GET") {
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data);
  }
  if (req.method === "POST") {
    const body = req.body |{}
    const data = await fs.readJson(FILE_PATH);
    const comment = {
      id: Date.now().toString()
      proposalId: body.proposalId
      region: body.region |"Global"
      author: body.author |"anon"
      text: body.text |""
      createdAt: new Date().toISOString()
    }
<<<<<<< HEAD

  req: NextApiRequest,
  res: NextApiResponse,
) {;


  await ensure();
  if (req.method === "GET") {
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data);
  }
  if (req.method === "POST") {
    const body = req.body || {};
    const data = await fs.readJson(FILE_PATH);
    const comment = {
      id: Date.now().toString(),
      proposalId: body.proposalId,
      region: body.region || "Global",
      author: body.author || "anon",
      text: body.text || "",
      createdAt: new Date().toISOString(),
    };
    data.comments.push(comment);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(comment);
  }
  res.status(405).json({ error: "Method not allowed" });
}
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
const FILE_PATH = path.join(process.cwd(), 'dataproposalscomments.json'),;
async function ensure() {;
  await fs.ensureFile(FILE_PATH);
  try { await fs.readJson(FILE_PATH) } catch { await fs.writeJson(FILE_PATH, { comments: [] }, { spaces: 2 })   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  res.status(405).json({ error: 'Method not allowed' })
}