import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createValidReactComponent(filePath) {
  const fileName = path.basename(filePath, path.extname(filePath));
  const componentName = fileName
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
    .replace(/[^a-zA-Z0-9]/g, "");

  return `import React from "react";
export default function ${componentName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">${componentName}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional ${componentName} services delivered with cutting-edge technology and expertise.
          </p>
        </div>
      </div>
    </div>
  );
}
`;
}

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    // Basic heuristic: if the file is very short or empty, rewrite it
    if (content.trim().length < 20) {
      const newContent = createValidReactComponent(filePath);
      fs.writeFileSync(filePath, newContent);
      return true;
    }
    return false;
  } catch (error) {
    const newContent = createValidReactComponent(filePath);
    fs.writeFileSync(filePath, newContent);
    return true;
  }
}

function main() {
  const targets = process.argv.slice(2);
  let changed = 0;
  for (const target of targets) {
    const filePath = path.isAbsolute(target) ? target : path.join(process.cwd(), target);
    if (fixFile(filePath)) changed += 1;
  }
  console.log(`Aggressive JS fix completed. Updated ${changed} files.`);
}

if (import.meta.main) {
  main();
}

