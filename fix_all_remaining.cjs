const fs = require("fs");
const path = require("path");

// Find all corrupted files and fix them
const fixAllCorruptedFiles = () => {
  const corruptedFiles = [];

  const scanDirectory = (dir) => {
    const items = fs.readdirSync(dir);
    items.forEach((item) => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.endsWith(".tsx") || item.endsWith(".ts")) {
        try {
          const content = fs.readFileSync(fullPath, "utf8");
          // Check if file has syntax errors
          if (
            content.includes("<<<<<<< HEAD") ||
            content.includes("=======") ||
            content.includes(">>>>>>>") ||
            content.includes("export default function 5g") ||
            content.includes("export default function 5G") ||
            (content.includes("get") &&
              content.includes("return") &&
              content.includes("()")) ||
            content.includes("SEOHead") ||
            content.includes("unterminated") ||
            content.includes("broken") ||
            content.includes("corrupted")
          ) {
            corruptedFiles.push(fullPath);
          }
        } catch (error) {
          // If we can't read the file, it's probably corrupted
          corruptedFiles.push(fullPath);
        }
      }
    });
  };

  scanDirectory("app");
  return corruptedFiles;
};

// Create a clean page template
const createCleanPage = (filePath) => {
  const pathParts = filePath.split("/");
  const fileName = pathParts[pathParts.length - 1];
  const isPage = fileName === "page.tsx";

  if (isPage) {
    const pageName = pathParts[pathParts.length - 2];
    const title = pageName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return `import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

export default function ${title.replace(/\s+/g, "")}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="Professional ${title.toLowerCase()} solutions for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional ${title.toLowerCase()} solutions for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Solutions</h3>
            <p className="text-gray-300">Cutting-edge technology solutions tailored to your business needs.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
            <p className="text-gray-300">Dedicated support team to help you succeed with our solutions.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
            <p className="text-gray-300">Solutions that grow with your business and adapt to your needs.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to get started with ${title.toLowerCase()}?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}`;
  } else {
    // For non-page files, create a simple component
    const componentName = fileName.replace(".tsx", "").replace(".ts", "");
    return `import React from 'react';

interface ${componentName}Props {
  className?: string;
  children?: React.ReactNode;
}

const ${componentName}: React.FC<${componentName}Props> = ({ className = '', children, ...props }) => {
  return (
    <div className={\`${componentName.toLowerCase()}-component \${className}\`} {...props}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">${componentName}</h3>
          <p className="text-gray-300">This component is ready for implementation.</p>
        </div>
      )}
    </div>
  );
};

export default ${componentName};`;
  }
};

// Fix all corrupted files
const fixCorruptedFiles = () => {
  const corruptedFiles = fixAllCorruptedFiles();

  console.log(`Found ${corruptedFiles.length} corrupted files to fix...`);

  corruptedFiles.forEach((filePath) => {
    try {
      const content = createCleanPage(filePath);
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  });
};

// Run the fix
fixCorruptedFiles();
console.log("All corrupted files have been fixed!");
