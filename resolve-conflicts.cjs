const fs = require("fs");
const path = require("path");

const conflictedFiles = [
  "app/ai-automation/page.tsx",
  "app/ai-customer-support/page.tsx",
  "app/ai-cybersecurity/page.tsx",
  "app/ai-data-analytics/page.tsx",
  "app/ai-data-visualization/page.tsx",
  "app/ai-fintech/page.tsx",
  "app/ai-healthcare/page.tsx",
  "app/ai-marketing/page.tsx",
  "app/ai-sales-automation/page.tsx",
  "app/ai-workflow-automation/page.tsx",
  "app/ar-vr-solutions/page.tsx",
  "app/autonomous-systems/page.tsx",
  "app/backup-recovery/page.tsx",
  "app/blockchain-integration-services/page.tsx",
  "app/cloud-migration/page.tsx",
  "app/consultation/page.tsx",
  "app/iot-edge-computing/page.tsx",
  "app/it-infrastructure/page.tsx",
  "app/it-support/page.tsx",
  "app/micro-saas/page.tsx",
  "app/quantum-computing/page.tsx",
  "app/status/page.tsx",
];

conflictedFiles.forEach((filePath) => {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    content = content.replace(