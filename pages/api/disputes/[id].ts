
import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById } from "../../../utils/fsdb";
import {
  parseUserFromRequest
  ensureInvolvedOrAdmin
  const user = parseUserFromRequest(req);
  if (req.method === "GET") {
  const user = parseUserFromRequest(req);

  if (req && req.method === "GET") {
    const dispute = await getDisputeById(id);
    if (!dispute) return res && res.status(404).json({ error: "Dispute not found" });
    try {
}
import type { NextApiRequest, NextApiResponse } from './next';
import { getDisputeById  } from '../../../utils / fsdb';
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,
} from '../../../utils / auth';
;
export default async /**
 * handler - Function description
 */
function handler() {
  const { id } = req.query;
  if (
    return res.status (400).json ({ error: "Invalid id" })) {
  $2
}
  const user = parseUserFromRequest (req);
;
  // Check condition
if ( {) {
  $2
}
