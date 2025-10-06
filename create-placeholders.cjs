const fs = require('fs');
const path = require('path');

const pages = [
  'src/pages/services/AIVirtualAssistant.tsx',
  'src/pages/services/AIDataAnalytics.tsx',
  'src/pages/services/AIIntelligentDocumentProcessing.tsx',
  'src/pages/services/RealTimeCognitiveAutomation.tsx',
  'src/pages/services/AdvancedCybersecurityAI.tsx',
  'src/pages/blog/PostBySlug.tsx',
  'src/pages/blog/ai-2025-oct-multimodal-enterprise-intelligence/index.tsx',
  'src/pages/blog/ai-2025-oct-adaptive-learning-platforms/index.tsx',
  'src/pages/blog/ai-2025-oct-cognitive-automation-enterprise-revolution.tsx',
  'src/pages/blog/ai-2025-oct-enterprise-ai-transformation-success-strategies.tsx',
  'src/pages/blog/ai-2025-oct-next-gen-intelligent-automation-breakthrough.tsx',
  'src/pages/case-studies/global-retail-ai-transformation-2025.tsx',
  'src/pages/case-studies/healthcare-ai-transformation-2025.tsx',
  'src/pages/case-studies/global-fintech-ai-transformation-2025.tsx',
  'src/pages/blog/ai-2025-multiagent-enterprise-orchestration-revolution/index.tsx',
  'src/pages/blog/ai-2025-cognitive-computing-enterprise-transformation/index.tsx',
  'src/pages/case-studies/global-telecom-cognitive-transformation-4-7-billion.tsx'
];

const template = (title, description) => `import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${title.replace(/[^a-zA-Z0-9]/g, '')}: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">${title}</h1>
            <p className="text-xl text-gray-600 mb-8">
              ${description}
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-600">Content coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ${title.replace(/[^a-zA-Z0-9]/g, '')};
`;

pages.forEach(pagePath => {
  const dir = path.dirname(pagePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const title = path.basename(pagePath, path.extname(pagePath))
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
  
  const description = `${title} - Zion Tech Group`;
  
  fs.writeFileSync(pagePath, template(title, description));
  console.log(`Created: ${pagePath}`);
});