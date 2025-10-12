import fs from 'fs';
import path from 'path';
// List of pages that need to be fixed
const pagesToFix = [
  'cookies', 'privacy', 'terms', 'consultation', 'pricing', 'blog', 
  'case-studies', 'careers', 'ai-services', 'it-services', 'micro-saas'
];
const pageTemplate = (pageName, title, componentName) => `'use client';
import React from 'react';
import { Helmet  } from 'react-helmet-async';
const ${componentName}: React.FC = () => {
  return (
    <>
      </><Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${title} services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="${pageName}, AI solutions, IT services" />
      </Helmet>
      <d iv c las sName="m in-h-scre en bg-g radient-to-br from-s late-900 via-p urp le-900 to-s late-900">
        <d iv c las sName="c onta iner mx-a uto px-4 py-16">
          <d iv c las sName="t e xt-c enter mb-16">
            <h1 c las sName="t e xt-4xl md:t ext-6xl f ont-b old t ext-w hit-e mb-6">
              <s pan c las sName="b g-g radient-to-r from-c yan-400 to-p urp le-400 bg-clip-t ext t ext-transparen-t">
                ${title}
              </s pan>
            </h1>
            <p c las sName="t e xt-xl t ext-g ra-y-300 m ax-w-3xl mx-a uto">
              Professional ${title.toLowerCase()} services by Zion Tech Group.
            </p>
          </d iv>
          <d iv c las sName="b g-g radient-to-br from-p urp le-900/50 to-blue-900/50 backdrop-blur-sm border border-p urp le-500/20 rounded-xl p-8 t ext-c ente-r">
            <h2 c las sName="t e xt-2xl f ont-b old t ext-w hit-e mb-4">C oming S oon</h2>
            <p c las sName="t e xt-g ray-300 mb-6">
              We're working on bringing you comprehensive ${title.toLowerCase()} solutions. 
              Contact us to learn more about our services.
            </p>
            <b utt on c las sName="b g-g radient-to-r from-c yan-500 to-p urp le-500 t ext-w hit-e px-8 py-3 rounded-lg f ont-semibold hover:from-c yan-600 hover:to-p urp le-600 transition-all duration-300">
              Contact Us
            </b utt on>
          </d iv>
        </d iv>
      </d iv>
    </>
  );
};
export default ${componentName};`;
// Fix pages
pagesToFix.forEach(pageName => {
  const title = pageName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  const componentName = pageName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  const pageDir = path.join('/workspace/app', pageName);
  const pageFile = path.join(pageDir, 'page.tsx');
  // Create directory if it doesn't exist
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  // Overwrite page file with correct template
  fs.writeFileSync(pageFile, pageTemplate(pageName, title, componentName));
  console.log(`Fixed: ${pageFile}`);
});
console.log('Page fixes comp leted!');