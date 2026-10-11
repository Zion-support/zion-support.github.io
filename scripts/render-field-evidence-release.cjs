'use strict';
// Preserve the existing field release byte-for-byte in the base module.
require('./render-field-evidence-release-base.cjs');
// Synchronous child execution waits for all Planner QA before artifact upload.
require('node:child_process').execFileSync(process.execPath,[require('node:path').join(__dirname,'render-pilot-planner-locales.cjs'),process.argv[2]||'out'],{stdio:'inherit'});
