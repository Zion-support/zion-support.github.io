import type { NextApiRequest, NextApiResponse } from 'next'
import { PDFDocument, StandardFonts } from 'pdf-lib'
import crypto from 'crypto'
import { updateArtifacts, getProposal, savePdf } from '../../../utils/data/
  const apiUrl = process.env.IPFS_API_URL || 'https: any
    .replace(/\r\n/
  } const lines = markdown .replace (/\r\n/