#!/usr/bin/env node;

import fs from "fs";
import path from "path";
import { fileURLToPath  } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// List of all corrupted files that need to be completely rewritten;
