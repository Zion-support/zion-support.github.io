#!/usr/bin/env node

import fs from 'fs';

// Fix specific remaining syntax errors
const filesToFix = [
  '/workspace/app/ai-analytics/page.tsx',
  '/workspace/app/ai-api-management/page.tsx',
  '/workspace/app/ai-api-manager/page.tsx',
  '/workspace/app/ai-autonomous-systems/page.tsx',
  '/workspace/app/ai-blockchain-analytics/page.tsx',
  '/workspace/app/ai-blockchain-solutions/page.tsx',
  '/workspace/app/ai-climate-solutions-pro/page.tsx',
  '/workspace/app/ai-cloud-infrastructure/page.tsx',
  '/workspace/app/ai-code-assistant/page.tsx',
  '/workspace/app/ai-code-security-auditor/page.tsx',
  '/workspace/app/ai-computer-vision/page.tsx',
  '/workspace/app/ai-content-delivery-network/page.tsx',
  '/workspace/app/ai-content-generation/page.tsx',
  '/workspace/app/ai-content-studio/page.tsx',
  '/workspace/app/ai-content-writer/page.tsx',
  '/workspace/app/ai-crm-assistant/page.tsx',
  '/workspace/app/blog/page.tsx',
  '/workspace/app/careers/page.tsx',
  '/workspace/app/case-studies/page.tsx'
];

function fixAiPage(content) {
  // Fix the missing comma issue around line 33
  return content.replace(
    /benefits: \['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'\]\s*title: 'Real-Time Dashboards',/g,
    "benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']\n    },\n    {\n      icon: Globe,\n      title: 'Real-Time Dashboards',"
  ).replace(
    /benefits: \['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'\]\s*}\s*title: 'Real-Time Dashboards',/g,
    "benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']\n    },\n    {\n      icon: Globe,\n      title: 'Real-Time Dashboards',"
  );
}

function fixBlogPage(content) {
  // Fix the JSX closing tag issue
  return content.replace(
    /<div className="flex items-center gap-1">\s*<Clock className="w-4 h-4" \/>\s*<span>{post\.readTime}<\/span>\s*<\/div>\s*<\/div>\s*<button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">\s*Read More <ArrowRight className="w-4 h-4 ml-1" \/>\s*<\/button>\s*<\/div>\s*<\/article>\s*\)\)\}\s*<\/div>\s*<\/div>\s*<\/section>/g,
    `<div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>`
  );
}

function fixCareersPage(content) {
  // Fix the missing comma in the benefits array
  return content.replace(
    /'Mental health support'\s*\]\s*const values = \[/g,
    "'Mental health support'\n  ];\n\n  const values = ["
  );
}

function fixCaseStudiesPage(content) {
  // Fix the missing comma in the caseStudies array
  return content.replace(
    /image: '\/images\/case-studies\/blockchain-logistics\.jpg'\s*\]\s*const stats = \[/g,
    "image: '/images/case-studies/blockchain-logistics.jpg'\n  };\n\n  const stats = ["
  );
}

const fixers = {
  '/workspace/app/ai-analytics/page.tsx': fixAiPage,
  '/workspace/app/ai-api-management/page.tsx': fixAiPage,
  '/workspace/app/ai-api-manager/page.tsx': fixAiPage,
  '/workspace/app/ai-autonomous-systems/page.tsx': fixAiPage,
  '/workspace/app/ai-blockchain-analytics/page.tsx': fixAiPage,
  '/workspace/app/ai-blockchain-solutions/page.tsx': fixAiPage,
  '/workspace/app/ai-climate-solutions-pro/page.tsx': fixAiPage,
  '/workspace/app/ai-cloud-infrastructure/page.tsx': fixAiPage,
  '/workspace/app/ai-code-assistant/page.tsx': fixAiPage,
  '/workspace/app/ai-code-security-auditor/page.tsx': fixAiPage,
  '/workspace/app/ai-computer-vision/page.tsx': fixAiPage,
  '/workspace/app/ai-content-delivery-network/page.tsx': fixAiPage,
  '/workspace/app/ai-content-generation/page.tsx': fixAiPage,
  '/workspace/app/ai-content-studio/page.tsx': fixAiPage,
  '/workspace/app/ai-content-writer/page.tsx': fixAiPage,
  '/workspace/app/ai-crm-assistant/page.tsx': fixAiPage,
  '/workspace/app/blog/page.tsx': fixBlogPage,
  '/workspace/app/careers/page.tsx': fixCareersPage,
  '/workspace/app/case-studies/page.tsx': fixCaseStudiesPage
};

function fixFile(filePath) {
  try {
    console.log(`Fixing: ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf8');
    const fixer = fixers[filePath];
    if (fixer) {
      const fixed = fixer(content);
      fs.writeFileSync(filePath, fixed);
      console.log(`  ✓ Fixed ${filePath}`);
    } else {
      console.log(`  - No specific fixer for ${filePath}`);
    }
  } catch (error) {
    console.error(`  ✗ Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('Remaining error fixes complete!');