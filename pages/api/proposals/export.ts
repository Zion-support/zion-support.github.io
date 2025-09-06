import type { NextApiRequest, NextApiResponse } from 'next';
import { PDFDocument, StandardFonts } from '[^']*';
import crypto from 'crypto';
import { updateArtifacts, getProposal, savePdf } from '[^']*';
import { create as createIpfsClient } from '[^']*';
import { ethers } from '[^']*';
import fs from 'fs';
import path from 'path';
function buildIpfsClient() {
  const projectId = null;
    return res.status(200).json({ meta: updated })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || "Export failed" });
  }
}
