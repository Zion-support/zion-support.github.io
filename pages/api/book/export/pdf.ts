import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';
export const config = null;
    res.status(200).send(pdfBuffer)
  } catch (e: any) {
    try { await browser.close() } catch {}
    res.status(500).json({ error: e?.message || 'Failed to render PDF' })
  }
};