const fs = require("fs");
const path = require("path");

// Template for components
const createComponent = (name) => `import React from 'react';

interface ${name}Props {
  className?: string;
  children?: React.ReactNode;
}

const ${name}: React.FC<${name}Props> = ({ className = '', children, ...props }) => {
  return (
    <div className={\`${name.toLowerCase()}-component \${className}\`} {...props}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">${name}</h3>
          <p className="text-gray-300">This component is ready for implementation.</p>
        </div>
      )}
    </div>
  );
};

export default ${name};`;

// Find all component files
const findComponentFiles = () => {
  const componentFiles = [];

  const scanDirectory = (dir) => {
    const items = fs.readdirSync(dir);
    items.forEach((item) => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.endsWith(".tsx") && !item.includes("page.tsx")) {
        componentFiles.push(fullPath);
      }
    });
  };

  scanDirectory("app/components");
  return componentFiles;
};

// Fix all component files
const fixComponents = () => {
  const componentFiles = findComponentFiles();

  componentFiles.forEach((filePath) => {
    try {
      const fileName = path.basename(filePath, ".tsx");
      const content = createComponent(fileName);

      fs.writeFileSync(filePath, content);
      console.log(`Fixed component: ${filePath}`);
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  });
};

fixComponents();
console.log("All components have been fixed!");
