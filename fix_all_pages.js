import fs from 'fs';
import path from 'path';
// List of pages that need to be completely rewritten
const pagesToRewrite = [
  'enterprise-security',
  'services-advertising', 
  'smart-city-infrastructure',
  'task-manager-pro'
];
// Template for a basic page
const pageTemplate = (pageName, title, description, keywords) => `import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../../layout'
const ${pageName}Page: React.FC = () => {
  return (
    <Layout
      title="${title} - Zion Tech Group"
      description="${description}"
      keywords="${keywords}"
    >
      <d iv c las sName="m in-h-scre en bg-g rad ient-to-br from-s late-900 via-purple-900 to-s late-900 py-20">
        <d iv c las sName="m ax-w-7xl mx-a uto px-4 sm:px-6 lg:px-8">
          <d iv c las sName="t e xt-c enter mb-16">
            <h1 c las sName="t e xt-4xl md:t ext-6xl f ont-b old t ext-w hit-e mb-6">
              <s pan c las sName="b g-g rad ient-to-r from-purple-400 to-b lue-400 bg-clip-t ext t ext-transparen-t">
                ${title}
              </s pan>
            </h1>
            <p c las sName="t e xt-xl t ext-g ra-y-300 m ax-w-3xl mx-a uto">
              ${description}
            </p>
          </d iv>
          <d iv c las sName="g r id g rid-c ols-1 md:g rid-c ols-2 lg:g rid-c ols-3 g ap-8">
            <d iv c las sName="b g-w hite/10 b ack drop-b lur-sm roun ded-xl p-6 bord er bord er-w hite/20">
              <h3 c las sName="t e xt-xl f ont-s emi bold t ext-w hit-e mb-4">F eature 1</h3>
              <p c las sName="t e xt-g ray-300 mb-4">
                D escription of the first key feature or service.
              </p>
              <ul c las sName="t e xt-g ray-300 s pace-y-2">
                <li>* Benefit 1</li>
                <li>* Benefit 2</li>
                <li>* Benefit 3</li>
                <li>* Benefit 4</li>
              </ul>
            </d iv>
            <d iv c las sName="b g-w hite/10 b ack drop-b lur-sm roun ded-xl p-6 bord er bord er-w hite/20">
              <h3 c las sName="t e xt-xl f ont-s emi bold t ext-w hit-e mb-4">F eature 2</h3>
              <p c las sName="t e xt-g ray-300 mb-4">
                D escription of the second key feature or service.
              </p>
              <ul c las sName="t e xt-g ray-300 s pace-y-2">
                <li>* Benefit 1</li>
                <li>* Benefit 2</li>
                <li>* Benefit 3</li>
                <li>* Benefit 4</li>
              </ul>
            </d iv>
            <d iv c las sName="b g-w hite/10 b ack drop-b lur-sm roun ded-xl p-6 bord er bord er-w hite/20">
              <h3 c las sName="t e xt-xl f ont-s emi bold t ext-w hit-e mb-4">F eature 3</h3>
              <p c las sName="t e xt-g ray-300 mb-4">
                D escription of the third key feature or service.
              </p>
              <ul c las sName="t e xt-g ray-300 s pace-y-2">
                <li>* Benefit 1</li>
                <li>* Benefit 2</li>
                <li>* Benefit 3</li>
                <li>* Benefit 4</li>
              </ul>
            </d iv>
          </d iv>
        </d iv>
      </d iv>
    </Layout>
  )
}
export default ${pageName}Page`;
// Page configurations
const pageConfigs = {
  'enterprise-security': {
    title: 'Enterprise Security',
    description: 'Comprehensive enterprise security solutions including cybersecurity, compliance, and risk management.',
    keywords: 'enterprise security, cybersecurity, compliance, risk management, data protection'
  },
  'services-advertising': {
    title: 'Services Advertising',
    description: 'Professional advertising services to promote your business and reach your target audi ence effectively.',
    keywords: 'advertising services, marketing, digital marketing, business promotion'
  },
  'smart-city-infrastructure': {
    title: 'Smart City Infrastructure',
    description: 'Advanced smart city infrastructure solutions including IoT, data analytics, and urban planning technology.',
    keywords: 'smart city, infrastructure, IoT, urban planning, data analytics'
  },
  'task-manager-pro': {
    title: 'Task Manager Pro',
    description: 'Professional task management solution with advanced features for project planning and team c ollaboration.',
    keywords: 'task management, project planning, team c ollaboration, productivity tools'
  }
};
// Rewrite pages
for (const page of pagesToRewrite) {
  const pagePath = `/workspa ce/app/${page}/page.tsx`;
  const config = pageConfigs[page];
  const componentName = page.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  const content = pageTemplate(componentName, config.title, config.description, config.keywords);
  try {
    fs.writeFileSync(pagePath, content);
    console.log(`Rewrote ${page} page`);
  } catch (error) {
    console.error(`Error rewriting ${page}:`, error.message);
  }
}
console.log('Page rewriting completed');