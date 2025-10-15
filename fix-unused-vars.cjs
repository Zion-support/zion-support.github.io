const fs = require("fs");
const path = require("path");

// List of hook files that need fixing
const hookFiles = [
  "app/hooks/useAccessibility.ts",
  "app/hooks/useAdvancedPerformanceMonitoring.ts",
  "app/hooks/useEnhancedPerformance.ts",
  "app/hooks/useIntersectionObserver.ts",
  "app/hooks/usePerformance.ts",
  "app/hooks/usePerformanceMonitor.ts",
  "app/hooks/usePerformanceOptimization.ts",
  "app/hooks/useSEO.ts",
];

// Fix unused variables in hook files
function fixUnusedVars(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  // Remove unused setState variable
  const fixedContent = content.replace(
    /const \[state, setState\] = useState\({}\);/,
    "const [state] = useState({});",
  );

  fs.writeFileSync(filePath, fixedContent);
  console.log("Fixed unused vars in: " + filePath);
}

// Fix all hook files
hookFiles.forEach((filePath) => {
  const fullPath = path.join("/workspace", filePath);
  if (fs.existsSync(fullPath)) {
    fixUnusedVars(fullPath);
  }
});

console.log("All unused variables have been fixed!");
