#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix specific JSX structure issues
function fixJsxStructure(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix 1: Add missing imports
  const importFix = content.replace(
    /import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock } from 'lucide-react';/g,
    "import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock, Crown, Building } from 'lucide-react';"
  );
  if (importFix !== content) {
    content = importFix;
    modified = true;
  }

  // Fix 2: Fix malformed object syntax - remove duplicate properties
  const duplicatePropertyFix = content.replace(
    /(\s+description:\s*'[^']*'\s*)\s+description:\s*'[^']*'\s*}\s*\]/g,
    '$1\n    }\n  ];'
  );
  if (duplicatePropertyFix !== content) {
    content = duplicatePropertyFix;
    modified = true;
  }

  // Fix 3: Fix missing closing tags for benefits arrays
  const benefitsFix = content.replace(
    /(\s*'Custom integrations'\s*)\s*\]/g,
    '$1\n  ];'
  );
  if (benefitsFix !== content) {
    content = benefitsFix;
    modified = true;
  }

  // Fix 4: Fix missing closing tags for features arrays
  const featuresFix = content.replace(
    /(\s*description:\s*'[^']*'\s*)\s*\]/g,
    '$1\n  ];'
  );
  if (featuresFix !== content) {
    content = featuresFix;
    modified = true;
  }

  // Fix 5: Fix missing closing tags for Helmet
  const helmetFix = content.replace(
    /(\s*<meta[^>]*\/>\s*)\s*<\/Helmet>/g,
    '$1\n      </Helmet>'
  );
  if (helmetFix !== content) {
    content = helmetFix;
    modified = true;
  }

  // Fix 6: Fix missing closing tags for div elements
  const divFix = content.replace(
    /(\s*<a[^>]*>\s*[^<]*<\/a>\s*)\s*<\/div>/g,
    '$1\n            </div>'
  );
  if (divFix !== content) {
    content = divFix;
    modified = true;
  }

  // Fix 7: Fix missing closing tags for sections
  const sectionFix = content.replace(
    /(\s*<\/div>\s*)\s*<\/section>/g,
    '$1\n          </div>\n        </section>'
  );
  if (sectionFix !== content) {
    content = sectionFix;
    modified = true;
  }

  // Fix 8: Fix missing closing tags for React.Fragment
  const fragmentFix = content.replace(
    /(\s*<\/div>\s*)\s*<\/React\.Fragment>/g,
    '$1\n      </div>\n    </React.Fragment>'
  );
  if (fragmentFix !== content) {
    content = fragmentFix;
    modified = true;
  }

  // Fix 9: Fix missing closing tags for CTA sections
  const ctaFix = content.replace(
    /(\s*Learn More\s*<\/a>\s*)\s*<\/div>\s*<\/section>/g,
    '$1\n            </div>\n          </div>\n        </section>'
  );
  if (ctaFix !== content) {
    content = ctaFix;
    modified = true;
  }

  // Fix 10: Fix missing closing tags for main div
  const mainDivFix = content.replace(
    /(\s*<\/section>\s*)\s*<\/div>\s*<\/React\.Fragment>/g,
    '$1\n      </div>\n    </React.Fragment>'
  );
  if (mainDivFix !== content) {
    content = mainDivFix;
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  }
  return false;
}

// Function to fix all problematic files
function fixAllFiles() {
  const files = [
    'app/ai-chatbot-enterprise/page.tsx',
    'app/ai-content-generation-pro/page.tsx',
    'app/ai-content-moderation/page.tsx',
    'app/ai-conversation-analytics/page.tsx',
    'app/ai-conversational-ai/page.tsx',
    'app/ai-customer-churn/page.tsx',
    'app/ai-document-intelligence/page.tsx',
    'app/ai-financial-forecasting/page.tsx',
    'app/ai-healthcare-diagnostics/page.tsx',
    'app/ai-integration-services/page.tsx',
    'app/ai-iot-analytics/page.tsx',
    'app/ai-knowledge-management/page.tsx',
    'app/ai-lead-scoring/page.tsx',
    'app/ai-predictive-modeling/page.tsx',
    'app/ai-sentiment-analysis/page.tsx',
    'app/ai-services/page.tsx',
    'app/ai-speech-synthesis/page.tsx',
    'app/ai-supply-chain-ai/page.tsx',
    'app/ai-video-analysis/page.tsx',
    'app/api-development-advanced/page.tsx',
    'app/api-development/page.tsx',
    'app/api-docs/page.tsx',
    'app/blockchain-development/page.tsx',
    'app/ai-document-processor/page.tsx',
    'app/ai-fraud-detection/page.tsx',
    'app/ai-image-recognition/page.tsx',
    'app/ai-legal-assistant/page.tsx',
    'app/ai-predictive-maintenance/page.tsx',
    'app/ai-social-media-manager/page.tsx',
    'app/ai-solutions/page.tsx',
    'app/ai-video-generator/page.tsx',
    'app/ai-voice-assistant/page.tsx',
    'app/blog/page.tsx'
  ];

  let fixedCount = 0;
  files.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      if (fixJsxStructure(filePath)) {
        fixedCount++;
      }
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

// Run the fixes
fixAllFiles();