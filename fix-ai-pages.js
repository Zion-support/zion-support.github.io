<<<<<<< HEAD
import React from 'react';

export default function Component() {
  return (
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
  );
=======
import fs from "fs";
import path from "path";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// #!/usr/bin/env node


const aiPageTemplate = `import React from 'react';

export default function {PAGE_NAME}() {
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

// Get all AI service directories
function getAIServiceDirectories() {
  const appDir = "./app";
  const directories = [];

  try {
    const items = fs.readdirSync(appDir);
    for (const item of items) {
      const itemPath = path.join(appDir, item);
      if (fs.statSync(itemPath).isDirectory() && item.startsWith("ai-")) {
        const pagePath = path.join(itemPath, "page.tsx");
        if (fs.existsSync(pagePath)) {
          directories.push({
//             path: pagePath,
//             name:
//               item
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join("") + "Page",
//             title: item
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" "),
            description: `Advanced ${item
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")} solutions powered by AI.`,
          });
        }
      }
    }
  } catch (error) {
    // }

  return directories;
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
}
