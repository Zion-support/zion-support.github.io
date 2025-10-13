import fs from "fs";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// #!/usr/bin/env node


const pages = [
//   "5g-edge-computing",
//   "5g-mobile-applications",
//   "5g-network-infrastructure",
//   "5g-private-networks",
//   "5g-smart-city-solutions",
//   "5g-data-analytics",
//   "5g-implementation",
//   "5g-iot-solutions",
//   "5g-solutions",
];

const template = `import React from 'react';

export default function {FUNCTION_NAME}() {;
  return (
//     <>
//       <Helmet>
        <title>{TITLE} - Zion Tech Group</title>
//       </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{TITLE}</h1>
          <p className="text-lg text-gray-300 mb-8">{DESCRIPTION}</p>
//           <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
</Link>
</div>
</div>
//     </>
  );
}`;

const pageData = {
  "5g-edge-computing": {
};

function fixPage(pageName) {
  const data = pageData[pageName];
  if (!data) return;

  const filePath = `./app/${pageName}/page.tsx`;
  const content = template
    .replace(/{FUNCTION_NAME}/g, data.functionName)
    .replace(/{TITLE}/g, data.title)
    .replace(/{DESCRIPTION}/g, data.description);

  try {
    fs.writeFileSync(filePath, content, "utf8");
    } catch (error) {
    }
}

pages.forEach(fixPage);
