#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Files to fix
const filesToFix = [
  "app/blog/ai-2025-january-cutting-edge-trends-breakthrough/page.tsx",
  "app/blog/ai-2025-march-autonomous-enterprise-operations-revolution/page.tsx",
  "app/blog/ai-2026-adaptive-neural-architectures-breakthrough/page.tsx",
  "app/blog/ai-2026-advanced-neural-optimization-revolution/page.tsx",
  "app/blog/ai-2026-april-revolutionary-breakthrough/page.tsx",
  "app/blog/ai-2026-april-ultimate-breakthrough-revolution/page.tsx",
  "app/blog/ai-2026-autonomous-agent-factories/page.tsx",
  "app/blog/ai-2026-autonomous-business-intelligence-breakthrough/page.tsx",
  "app/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough/page.tsx",
  "app/blog/ai-2026-autonomous-enterprise-architecture/page.tsx",
  "app/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough/page.tsx",
  "app/blog/ai-2026-consensus-intelligence-breakthrough/page.tsx",
  "app/blog/ai-2026-enterprise-automation-revolutionary-breakthrough/page.tsx",
  "app/blog/ai-2026-enterprise-breakthrough/page.tsx",
  "app/blog/ai-2026-february-mega-breakthrough-revolution/page.tsx",
  "app/blog/ai-2026-february-ultimate-consciousness-breakthrough/page.tsx",
  "app/blog/ai-2026-hyperconscious-computing-revolution/page.tsx",
  "app/blog/ai-enterprise-transformation-ultimate-guide-2025/page.tsx",
  "app/blog/ai-trends-2026-future-enterprise-transformation/page.tsx",
  "app/contact/page.tsx",
  "app/privacy/page.tsx",
  "app/team/page.tsx",
  "app/terms/page.tsx",
];

// Fix unused Link imports
filesToFix.forEach((filePath) => {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, "utf8");

      // Remove unused Link import
      content = content.replace(
        /import { Link } from 'react-router-dom';\n/g,
        "",
      );
      content = content.replace(
        /import { Link } from 'react-router-dom';\r\n/g,
        "",
      );
      content = content.replace(
        /import { Link } from 'react-router-dom';\n\n/g,
        "",
      );

      // Remove unused Link from multi-import
      content = content.replace(
        /import { [^}]*Link[^}]* } from 'react-router-dom';\n/g,
        "",
      );
      content = content.replace(
        /import { [^}]*Link[^}]* } from 'react-router-dom';\r\n/g,
        "",
      );

      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

// Fix other common issues
const otherFiles = [
  "app/not-found.tsx",
  "app/guides/ai-2026-implementation-roadmap/page.tsx",
  "app/guides/ai-2027-implementation-roadmap/page.tsx",
];

otherFiles.forEach((filePath) => {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, "utf8");

      // Remove unused icon imports
      if (filePath.includes("not-found.tsx")) {
        content = content.replace(
          /import { [^}]*ArrowLeft[^}]* } from 'lucide-react';\n/g,
          "",
        );
        content = content.replace(
          /import { [^}]*Search[^}]* } from 'lucide-react';\n/g,
          "",
        );
        content = content.replace(
          /import { [^}]*BookOpen[^}]* } from 'lucide-react';\n/g,
          "",
        );
        content = content.replace(
          /import { [^}]*Users[^}]* } from 'lucide-react';\n/g,
          "",
        );
      }

      if (filePath.includes("ai-2026-implementation-roadmap")) {
        content = content.replace(
          /import { [^}]*Target[^}]* } from 'lucide-react';\n/g,
          "",
        );
        content = content.replace(
          /import { [^}]*CheckCircle[^}]* } from 'lucide-react';\n/g,
          "",
        );
      }

      if (filePath.includes("ai-2027-implementation-roadmap")) {
        content = content.replace(
          /import { [^}]*Calendar[^}]* } from 'lucide-react';\n/g,
          "",
        );
        content = content.replace(
          /import { [^}]*User[^}]* } from 'lucide-react';\n/g,
          "",
        );
        content = content.replace(
          /import { [^}]*Tag[^}]* } from 'lucide-react';\n/g,
          "",
        );
        content = content.replace(
          /import { [^}]*Cpu[^}]* } from 'lucide-react';\n/g,
          "",
        );
      }

      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log("Fixed unused imports!");
