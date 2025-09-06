import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import crypto from 'crypto'
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/
      const text = `Please find the proposal attached.\n\nTitle:${meta.title}\nTarget:${meta.targetInstitution}\nType:${meta.type}\nRegion:${meta.regionalScope}\nBudget/Resolution:${meta.budgetOrResolution}\n\nDAO Governance:See document.\n\nDelegate Note:${delegateNote || 'N/