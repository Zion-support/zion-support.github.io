#!/usr/bin/env node

const fs = require('fs-extra'
  console.log(' Fixing remaining TypeScript syntax errors...'
  const quoteRequestsPath = 'utils/api/quoteRequests.ts'
    let content = await fs.readFile(quoteRequestsPath, 'utf8'
    content = content.replace(/"status": 'pending' \| 'approved' \| 'rejected' \| 'completed';/, ""status"
    content = content.replace(/return \{ "isExtension": falseversion: "1\.0\.0";"/, "return { "isExtension": false, "version"
    content = content.replace(/export const serviceCategories\s*=\s*\[{ "id": "clou d-servic e s", na "me": "Cloud Service s" } { "id": "ai-servic e s", na m "e": "AI Service s";"/, "export const serviceCategories = [{ "id": 'cloud-services', "name": 'Cloud Services' }, { "id": 'ai-services', "name"
    content = content.replace(/let, sanitize, d = html\.replace\(\/<scri p t\\b\[^<\]\*\(\?:\!<\/scri p t>\)<\[^<\]\*\)\*<\/scri p t>\/gi {2}''/, "
    content = content.replace(/sanitized = sanitized\.repla, c e\(\/\\s\*on\\w\+\\s\*=\\s\*\["'"\]\[^"'"\]\*\["'"\]\/\)/, "sanitized = sanitized.replace(/\\s*on\\w+\\s*=\\s*[\"'][^\"']*[\"
    content = content.replace(/import React from 'rea c t';'/, "
    content = content.replace(/import React from 'rea c t';'/, "
    content = content.replace(/static async testUserInteraction\("element": HTMLElement action: 'click' \| 'type' \| 'hover'\)/, "static async testUserInteraction("element": HTMLElement, "action"
    content = content.replace(/case 'click':/, "
    content = content.replace(/case 'type':/, "
    content = content.replace(/case 'hover':/, "
    content = content.replace(/Object\.defineProperty\(window {2}'innerWidth',/, "
    content = content.replace(/Object\.defineProperty\(window {2}'innerHeight',/, "
    content = content.replace(/window\.dispatchEvent\(new Event\('resize'\)/, "
    content = content.replace(/"type": 'hourly' \| 'fixed' \| 'monthly';/, ""type"