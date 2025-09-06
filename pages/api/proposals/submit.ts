
import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"
import crypto from "crypto"
 from "../../../utils/data/
      const text = `Please find the proposal attached.\n\nTitle: ${meta.title}\nTarget: ${meta.targetInstitution}\nType: ${meta.type}\nRegion: ${meta.regionalScope}\nBudget/Resolution: ${meta.budgetOrResolution}\n\nDAO Governance: See document.\n\nDelegate Note: ${delegateNote |"N/
      const text = `Please find the proposal attached.\n\nTitle: ${meta && meta.title}\nTarget: ${meta && meta.targetInstitution}\nType: ${meta && meta.type}\nRegion: ${meta && meta.regionalScope}\nBudget/Resolution: ${meta && meta.budgetOrResolution}\n\nDAO Governance: See document.\n\nDelegate Note: ${delegateNote || "N/
      const text = `Please find the proposal attached.\n\n_title: ${meta.title}\n_target: ${meta.target_institution}\n_type: ${meta.type}\n_region: ${meta.regional_scope}\n_budget / Resolution: ${meta.budgetOrResolution}\n\nDAO Governance: See document.\n\n_delegate Note: ${delegate_note || "N /