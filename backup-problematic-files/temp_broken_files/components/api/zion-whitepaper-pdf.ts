import type { NextApiRequest, NextApiResponse } from 'next'
import PDFDocument from 'pdfkit'
import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/
  res.setHeader('Content-Typeapplication/