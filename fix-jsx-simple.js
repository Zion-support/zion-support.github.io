#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixJSXFiles() {
  const appDir = path.join(process.cwd(), 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  const files = await glob(pattern);
  
  for (const filePath of files) {
    try {
      console.log(`Processing: ${filePath}`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = content;
      
      // Fix malformed closing tags using string replacement
      fixed = fixed.replace(/<</a>/g, '</a>');
      fixed = fixed.replace(/<</div>/g, '</div>');
      fixed = fixed.replace(/<</section>/g, '</section>');
      fixed = fixed.replace(/<</React\.Fragment>/g, '</React.Fragment>');
      
      // Fix malformed opening tags
      fixed = fixed.replace(/<</a>/g, '<a');
      fixed = fixed.replace(/<</div>/g, '<div');
      fixed = fixed.replace(/<</section>/g, '<section');
      
      // Write back if changed
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`Fixed: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }
  
  console.log('JSX fixing completed!');
}

fixJSXFiles().catch(console.error);