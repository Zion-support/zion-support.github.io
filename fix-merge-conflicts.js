#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts by keeping HEAD version
  const lines = content.split('\n');
  const resolvedLines = [];
  let inConflict = false;
  let conflictType = null; // 'head', 'separator', 'other'
  
  for (let i = 0; i
