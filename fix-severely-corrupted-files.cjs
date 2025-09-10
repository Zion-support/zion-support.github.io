const fs = require("fs")
const path = require("path")
// Function to create a minimal valid React component
function createMinimalComponent(filePath) {
  const fileName = path.basename(filePath, path.extname(filePath))
  const componentName = fileName
    .replace(/[-_]/g, "")
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, "")
  const isTypeScript = filePath.endsWith(".tsx") || filePath.endsWith(".ts")
  const extension = isTypeScript ? "tsx" : "jsx"
  const typeAnnotation = isTypeScript ? ": React.FC" : ""
  return `import React from "react"
import { SEO  } from "@/components/SEO"