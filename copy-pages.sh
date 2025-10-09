#!/bin/bash

# Copy all the new pages from our branch to main
git show cursor/website-audit-and-update-with-deployment-863f:src/ai-automation/page.tsx > src/ai-automation/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/ai-healthcare/page.tsx > src/ai-healthcare/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/ai-fintech/page.tsx > src/ai-fintech/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/ai-content-generation/page.tsx > src/ai-content-generation/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/ai-data-analytics/page.tsx > src/ai-data-analytics/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/ai-cybersecurity/page.tsx > src/ai-cybersecurity/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/ai-workflow-automation/page.tsx > src/ai-workflow-automation/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/ai-mobile-app-development/page.tsx > src/ai-mobile-app-development/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/ai-ecommerce-solutions/page.tsx > src/ai-ecommerce-solutions/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/ai-customer-support/page.tsx > src/ai-customer-support/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/ai-sales-automation/page.tsx > src/ai-sales-automation/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/ai-data-visualization/page.tsx > src/ai-data-visualization/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/ai-lead-generation/page.tsx > src/ai-lead-generation/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/ai-document-processing/page.tsx > src/ai-document-processing/page.tsx

git show cursor/website-audit-and-update-with-deployment-863f:src/it-infrastructure/page.tsx > src/it-infrastructure/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/cybersecurity/page.tsx > src/cybersecurity/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/cloud-migration/page.tsx > src/cloud-migration/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/devops/page.tsx > src/devops/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/database/page.tsx > src/database/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/networking/page.tsx > src/networking/page.tsx

git show cursor/website-audit-and-update-with-deployment-863f:src/quantum-computing/page.tsx > src/quantum-computing/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/autonomous-systems/page.tsx > src/autonomous-systems/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/blockchain-web3/page.tsx > src/blockchain-web3/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/iot-edge-computing/page.tsx > src/iot-edge-computing/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/business-intelligence/page.tsx > src/business-intelligence/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/robotics/page.tsx > src/robotics/page.tsx

git show cursor/website-audit-and-update-with-deployment-863f:src/news/page.tsx > src/news/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/demo/page.tsx > src/demo/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/consultation/page.tsx > src/consultation/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/docs/page.tsx > src/docs/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/api-docs/page.tsx > src/api-docs/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/support/page.tsx > src/support/page.tsx
git show cursor/website-audit-and-update-with-deployment-863f:src/status/page.tsx > src/status/page.tsx

echo "All pages copied successfully!"