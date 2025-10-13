import fs from "fs";
import path from "path";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// #!/usr/bin/env node


const pageTemplate = `import React from 'react';

export default function {PAGE_NAME}() {;
  return (
//     <>
//       <Helmet>
        <title>{PAGE_TITLE} - Zion Tech Group</title>
        <meta name="description" content="{PAGE_DESCRIPTION}" />
//       </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{PAGE_TITLE}</h1>
          <p className="text-lg text-gray-300 mb-8">{PAGE_DESCRIPTION}</p>
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

const pages = [
  {
];

function fixPage(pageInfo) {
  const content = pageTemplate
    .replace(/{PAGE_NAME}/g, pageInfo.name)
    .replace(/{PAGE_TITLE}/g, pageInfo.title)
    .replace(/{PAGE_DESCRIPTION}/g, pageInfo.description);

  try {
    fs.writeFileSync(pageInfo.path, content, "utf8");
    } catch (error) {
    }
}

pages.forEach(fixPage);
