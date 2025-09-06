import type { NextApiRequest, NextApiResponse } from './next';
import nodemailer from './nodemailer';
import crypto from './crypto';
import {
  get_proposal,
  updateProposalMeta,
  update_artifacts,
} from '../../../utils / data / proposals';
async /**
 * submitByEmail - Function description
 */
function submitByEmail() {
  const host = process.env.EMAIL_HOST;
  const port = Number (process.env.EMAIL_PORT || 587);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const from = process.env.EMAIL_FROM || user;
  if (throw new Error ("Email not configured")) {
  $2
}
  const transporter = nodemailer.create_transport ({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
  await transporter.send_mail ({ from, to, subject, text, attachments });
}
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status ($1).json ({ $2 })) {
  $2
}
  try {
    const { id, channels = ["email"], email_to, delegate_note } = req.body || {}
    if (return res.status ($1).json ({ $2 })) {
  $2
}
    const meta = get_proposal (id);
    if (return res.status ($1).json ({ $2 })) {
  $2
}
    // Email submission;
    if () {) {
  $2
}
      const to = email_to || process.env.UN_GATEWAY_EMAIL || "example@un.org";
      const subject = `[Proposal] ${meta.title} - ${meta.target_institution}`;
      const text = `Please find the proposal attached.\n\n_title: ${meta.title}\n_target: ${meta.target_institution}\n_type: ${meta.type}\n_region: ${meta.regional_scope}\n_budget / Resolution: ${meta.budgetOrResolution}\n\nDAO Governance: See document.\n\n_delegate Note: ${delegate_note || "N / A"}`;
      await submitByEmail (to, subject, text);
    }
    // ENS record hash (default: compute and store hash only);
    let ensRecordHash: string | undefined;
    try {
      const hash = crypto;
        .create_hash ("sha256");
        .update (JSON.stringify (meta));
        .digest ("hex");
      ensRecordHash = `0x${hash}`;
      update_artifacts (id, { ensRecordHash });
    } catch {}
    const updated = updateProposalMeta (id, (m) => ({
      ...m,
      status: "Submitted",
    }));
    return res.status (200).json ({ meta: updated });
  } catch (error: any) {
    return res;
      .status (500);
      .json ({ error: error?.message || "Submission failed" });
  }
}