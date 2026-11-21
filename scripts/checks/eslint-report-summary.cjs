'use strict';

// Public notifications contain aggregate counts only, never source or filenames.
function summarize(reportText, exitCode) {
  const status = String(exitCode ?? '');
  if (status !== '0' && status !== '1') {
    return 'ESLint did not complete successfully. Check the workflow logs for the configuration or execution failure. No passing lint result is claimed.';
  }
  let files;
  try {
    files = JSON.parse(reportText);
    if (!Array.isArray(files)) {throw new Error('Invalid report');}
    let errors = 0;
    let warnings = 0;
    for (const file of files) {
      if (!file || !Array.isArray(file.messages)) {throw new Error('Invalid file result');}
      for (const message of file.messages) {
        if (!message || ![1, 2].includes(message.severity)) {throw new Error('Invalid message');}
        if (message.severity === 2) {errors += 1;}
        else {warnings += 1;}
      }
    }
    if (status === '1' && errors + warnings === 0) {
      return 'ESLint returned failure without diagnostic counts. Check the workflow logs; no passing lint result is claimed.';
    }
    return `ESLint reported ${errors} error(s) and ${warnings} warning(s). The zero-warning gate remains unchanged. Review the workflow report before merging.`;
  } catch {
    return 'ESLint report is missing or invalid. Check the workflow logs; no passing lint result is claimed.';
  }
}

module.exports = { summarize };
