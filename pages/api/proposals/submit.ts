import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { getProposal, updateProposalMeta, updateArtifacts } from '[^']*';

async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {
  const host = null;
    return res.status(200).json({ meta: updated })
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message || "Submission failed" });
  }
}
