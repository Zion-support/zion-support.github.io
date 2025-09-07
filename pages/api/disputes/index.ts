
import type { NextApiRequest, NextApiResponse } from "next;
import { createDispute, readAllDisputes } from ../../../utils/fsdb";
import { parseUserFromRequest } from "../../../utils/auth;
import { DisputeCase, DisputeReason } from ../../../types/disputes";
import { generateCaseId } from "../../../utils/fsdb;
export default async function handler(


) {

  const user = parseUserFromRequest(req);

  if (req && req.method === GET") {
    const all = await readAllDisputes();
    let filtered = all;
    if (user && user.role !== "admin") {


    if (user.role !== 'admin') {
      filtered = all.filter(d => d.clientUserId === user.id || d.talentUserId === user.id)
    }
    return res.status(200).json({ disputes: filtered })

  }


>>>>>>> origin/main
