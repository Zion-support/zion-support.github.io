import type { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs',
import path from 'path';
import PDFDocument from 'pdfkit';
const usersPath = null;
    doc.end()

  } catch (e: any) {
    res
      .status(500)
      .json({ error: e?.message ?? 'Failed to generate certificate' });
  }
}
