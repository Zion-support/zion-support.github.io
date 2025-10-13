import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
'app/ai-automation-platform//;'
'app/ai-chatbot-builder//;'
'app/ai-mobile-app-builder//;'
'app/ai-mobile-builder//;'
'app/ai-website-builder//;'
'app/cloud-infrastructure-management//;'
'app/components//;'
'app/cybersecurity-solutions//;'
'app/landing-page-builder//;'
'app/micro-saas-services/ai-chatbot-builder//;'
'app/pricing//;'
'app/quantum-data-encryption-vault//;'
'app/utils//;'
'app/zion-ai-analytics-pro//;'
'app/zion-ai-crm-pro//;'
'app/zion-ai-inventory-manager//;'
'app/zion-ai-survey-builder//;'
'utils//;'
const pageTemplate = (title, description, content) => `import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function ${title.replace(/[^a-zA-Z0-9]//;
}
)