import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Find all files with merge conflicts
const findConflictFiles = () => {
  try {