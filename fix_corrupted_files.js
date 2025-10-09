#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
//Function to fix corrupted text by removing erroneous commas
function fixCorruptedText(text) {
  //Pattern to match commas that are incorrectly placed in the middle of words
  //This looks for commas that are followed by a space and then a lowercase letter
  //or commas that are in the middle of identifiers
  let _fixed = text;
  //Fix common patterns of corruption
  //Remove commas that are incorrectly placed in the middle of words
  fixed = fixed.replace(/([a-zA-Z]),\s*([a-zA-Z])/g, '$1$2');
  //Fix specific patterns that appear in the corrupted files
  fixed = fixed.replace(/impo,\s*r,\s*t/g, 'import');
  fixed = fixed.replace(/fr,\s*o,\s*m/g, 'from');
  fixed = fixed.replace(/descri,\s*b,\s*e/g, 'describe');
  fixed = fixed.replace(/it\s*\(/g, 'it(');
  fixed = fixed.replace(/expe,\s*c,\s*t/g, 'expect');
  fixed = fixed.replace(/toBeGreaterTh,\s*a,\s*n/g, 'toBeGreaterThan');
  fixed = fixed.replace(/toBeLessTh,\s*a,\s*n/g, 'toBeLessThan');
  fixed = fixed.replace(/toHaveLeng,\s*t,\s*h/g, 'toHaveLength');
  fixed = fixed.replace(/toBeGreaterThanOrEqu,\s*a,\s*l/g, 'toBeGreaterThanOrEqual');
  fixed = fixed.replace(/toBeLessThanOrEqu,\s*a,\s*l/g, 'toBeLessThanOrEqual');
  fixed = fixed.replace(/forEa,\s*c,\s*h/g, 'forEach');
  fixed = fixed.replace(/Obje,\s*c,\s*t/g, 'Object');
  fixed = fixed.replace(/valu,\s*e,\s*s/g, 'values');
  fixed = fixed.replace(/leng,\s*t,\s*h/g, 'length');
  fixed = fixed.replace(/categori,\s*e,\s*s/g, 'categories');
  fixed = fixed.replace(/uniqueCategori,\s*e,\s*s/g, 'uniqueCategories');
  fixed = fixed.replace(/groupe,\s*d/g, 'grouped');
  fixed = fixed.replace(/select,\s*e,\s*d/g, 'selected');
  fixed = fixed.replace(/scor,\s*e/g, 'score');
  fixed = fixed.replace(/banne,\s*r,\s*s/g, 'banners');
  fixed = fixed.replace(/testBanne,\s*r,\s*s/g, 'testBanners');
  fixed = fixed.replace(/compone,\s*n,\s*t/g, 'component');
  fixed = fixed.replace(/priori,\s*t,\s*y/g, 'priority');
  fixed = fixed.replace(/catego,\s*r,\s*y/g, 'category');
  fixed = fixed.replace(/impressio,\s*n,\s*s/g, 'impressions');
  fixed = fixed.replace(/clic,\s*k,\s*s/g, 'clicks');
  fixed = fixed.replace(/acti,\s*v,\s*e/g, 'active');
  fixed = fixed.replace(/breakthrou,\s*g,\s*h/g, 'breakthrough');
  fixed = fixed.replace(/enterpri,\s*s,\s*e/g, 'enterprise');
  fixed = fixed.replace(/innovati,\s*o,\s*n/g, 'innovation');
  fixed = fixed.replace(/lastSho,\s*w,\s*n/g, 'lastShown');
  fixed = fixed.replace(/undefin,\s*e,\s*d/g, 'undefined');
  fixed = fixed.replace(/Dat,\s*e/g, 'Date');
  fixed = fixed.replace(/n,\s*o,\s*w/g, 'now');
  fixed = fixed.replace(/hou,\s*r,\s*s/g, 'hours');
  fixed = fixed.replace(/neve,\s*r-shown/g, 'never-shown');
  fixed = fixed.replace(/correctl,\s*y/g, 'correctly');
  fixed = fixed.replace(/specified/g, 'specified');
  fixed = fixed.replace(/visib,\s*l,\s*e/g, 'visible');
  fixed = fixed.replace(/rotationInterv,\s*a,\s*l/g, 'rotationInterval');
  fixed = fixed.replace(/priorityWeig,\s*h,\s*t/g, 'priorityWeight');
  fixed = fixed.replace(/freshnessWeig,\s*h,\s*t/g, 'freshnessWeight');
  fixed = fixed.replace(/engagementWeig,\s*h,\s*t/g, 'engagementWeight');
  fixed = fixed.replace(/maxVisib,\s*l,\s*e/g, 'maxVisible');
  fixed = fixed.replace(/rotationInterv,\s*a,\s*l/g, 'rotationInterval');
  fixed = fixed.replace(/priorityWeig,\s*h,\s*t/g, 'priorityWeight');
  fixed = fixed.replace(/freshnessWeig,\s*h,\s*t/g, 'freshnessWeight');
  fixed = fixed.replace(/engagementWeig,\s*h,\s*t/g, 'engagementWeight');
  fixed = fixed.replace(/eve,\s*r,\s*y/g, 'every');
  fixed = fixed.replace(/tr,\s*u,\s*e/g, 'true');
  fixed = fixed.replace(/fal,\s*s,\s*e/g, 'false');
  fixed = fixed.replace(/le,\s*t/g, 'let');
  fixed = fixed.replace(/i,\s*n/g, 'in');
  fixed = fixed.replace(/f,\s*o,\s*r/g, 'for');
  fixed = fixed.replace(/si,\s*z,\s*e/g, 'size');
  fixed = fixed.replace(/gro,\s*u,\s*p/g, 'group');
  fixed = fixed.replace(/limi,\s*t/g, 'limit');
  fixed = fixed.replace(/m,\s*a,\s*p/g, 'map');
  fixed = fixed.replace(/Se,\s*t/g, 'Set');
  fixed = fixed.replace(/valu,\s*e,\s*s/g, 'values');
  fixed = fixed.replace(/forEa,\s*c,\s*h/g, 'forEach');
  fixed = fixed.replace(/Obje,\s*c,\s*t/g, 'Object');
  fixed = fixed.replace(/toBeLessThanOrEqu,\s*a,\s*l/g, 'toBeLessThanOrEqual');
  fixed = fixed.replace(/toBeGreaterThanOrEqu,\s*a,\s*l/g, 'toBeGreaterThanOrEqual');
  fixed = fixed.replace(/toHaveLeng,\s*t,\s*h/g, 'toHaveLength');
  fixed = fixed.replace(/toBeGreaterTh,\s*a,\s*n/g, 'toBeGreaterThan');
  fixed = fixed.replace(/toBeLessTh,\s*a,\s*n/g, 'toBeLessThan');
  fixed = fixed.replace(/expe,\s*c,\s*t/g, 'expect');
  fixed = fixed.replace(/descri,\s*b,\s*e/g, 'describe');
  fixed = fixed.replace(/it\s*\(/g, 'it(');
  fixed = fixed.replace(/fr,\s*o,\s*m/g, 'from');
  fixed = fixed.replace(/impo,\s*r,\s*t/g, 'import');
  //Fix object property syntax
  fixed = fixed.replace(
    /\{\s*'\s*id:\s*'([^']+)',\s*'\s*compone,\s*n,\s*t:\s*'([^']+)',\s*'\s*priori,\s*t,\s*y:\s*(\d+)\s*'\s*catego,\s*r,\s*y:\s*'([^']+)',\s*'\s*impressio,\s*n,\s*s:\s*(\d+)\s*clic,\s*k,\s*s:\s*(\d+)\s*acti,\s*v,\s*e:\s*(true|false)\s*\}/g,
    "{ id: '$1', component: '$2', priority: $3, category: '$4', impressions: $5, clicks: $6, active: $7 }"
  );
  //Fix array syntax
  fixed = fixed.replace(/\[\s*\{/g, '[{');
  fixed = fixed.replace(/\}\s*\]/g, '}]');
  //Fix function calls
  fixed = fixed.replace(/calculateEngagementSco,\s*r,\s*e/g, 'calculateEngagementScore');
  fixed = fixed.replace(/calculateFreshnessSco,\s*r,\s*e/g, 'calculateFreshnessScore');
  fixed = fixed.replace(/calculateBannerSco,\s*r,\s*e/g, 'calculateBannerScore');
  fixed = fixed.replace(/selectBannersForDispl,\s*a,\s*y/g, 'selectBannersForDisplay');
  fixed = fixed.replace(/groupBannersByCatego,\s*r,\s*y/g, 'groupBannersByCategory');
  fixed = fixed.replace(/selectBalancedBanne,\s*r,\s*s/g, 'selectBalancedBanners');
  //Fix variable names
  fixed = fixed.replace(/testBanner,\s*s/g, 'testBanners');
  fixed = fixed.replace(/BannerConf,\s*i,\s*g/g, 'BannerConfig');
  //Remove duplicate content (looks like there might be merge conflict markers)
  fixed = fixed.replace(/=======.*?=======/gs, '');
  //Clean up extra semicolons and commas
  fixed = fixed.replace(/;+/g, ';');
  fixed = fixed.replace(/,\s*,/g, ',');
  fixed = fixed.replace(/;\s*;/g, ';');
  return fixed;
}
//Function to process a file
function processFile(filePath) {
  try {
    //     const content = fs.readFileSync(filePath, 'utf8');
    //     const fixedContent = fixCorruptedText(content);
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      //       return true;
    }
    return false;
  } catch (error) {
    //     return false;
  }
}
//Function to recursively find and process files
function processDirectory(dirPath) {
  let _processedCount = 0;
  try {
    //     const items = fs.readdirSync(dirPath);
    for (const item of items) {
      //       const fullPath = path.join(dirPath, item);
      const _stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        //Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build'].includes(item)) {
          processedCount += processDirectory(fullPath);
        }
      } else if (
        item.endsWith('.ts') ||
        item.endsWith('.tsx') ||
        item.endsWith('.js') ||
        item.endsWith('.jsx')
      ) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  } catch (error) {
    //     }
  return processedCount;
}
//Main execution
// // const processedCount = processDirectory('./src');
// 
