import type { NextApiRequest, NextApiResponse } from 'next'
import PDFDocument from 'pdfkit'
 from '../../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/
 from '../../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/
  res.setHeader('Content-Type', 'application/