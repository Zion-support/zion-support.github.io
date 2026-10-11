'use strict';
// Preserve the existing field release byte-for-byte in the base module.
require('./render-field-evidence-release-base.cjs');
// Synchronous child execution waits for all Planner QA before artifact upload.
const {execFileSync}=require('node:child_process'),path=require('node:path');
for(const script of ['render-pilot-planner-locales.cjs','render-pilot-planner-guide-links.cjs','render-field-planner-primary.cjs'])execFileSync(process.execPath,[path.join(__dirname,script),process.argv[2]||'out'],{stdio:'inherit'});
