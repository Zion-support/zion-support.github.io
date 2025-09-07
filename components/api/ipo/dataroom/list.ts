<<<<<<< HEAD

<<<<<<< HEAD













=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { appendAuditLog, resolveDataPath  } from '../../../../utils/api/storage';
  if (!fs.existsSync(dir)) return res.status(200).json([])const files = fs.readdirSync(dir).map((name) => ({ name }))if (!fs.existsSync(dir)) return res.status(200).json([])const files = fs.readdirSync(dir).map((name) => ({ name }))if (!fs.existsSync(dir)) return res.status(200).json([])const files = fs.readdirSync(dir).map((name) => ({ name }))export default function handler() {const section  = String(req.query.section |\"General\")