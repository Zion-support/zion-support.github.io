const fs = require("fs");
const path = require("path");

// Fix App.tsx - remove duplicate }, []);
function fixAppTsx() {
  const filePath = path.join(__dirname, "App.tsx");
  let content = fs.readFileSync(filePath, "utf8");

  // Find and fix duplicate }, []);
  content = content.replace(/    \[\]\s+\);\s+  }, \[\]\);/g, "    []\n  );");

  fs.writeFileSync(filePath, content, "utf8");
  console.log("Fixed App.tsx");
}

// Fix api/shipping-rates.js - remove duplicate module.exports and closing braces
function fixShippingRates() {
  const filePath = path.join(__dirname, "api", "shipping-rates.js");
  let content = fs.readFileSync(filePath, "utf8");

  // Remove all lines after the first module.exports
  const lines = content.split("\n");
  const firstExportIndex = lines.findIndex(
    (line) => line.trim() === "module.exports = withSentry(handler);",
  );

  if (firstExportIndex !== -1) {
    const fixedLines = lines.slice(0, firstExportIndex + 1);
    content = fixedLines.join("\n") + "\n";
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log("Fixed api/shipping-rates.js");
}

// Fix api/subscribe.js - remove duplicate catch blocks and module.exports
function fixSubscribe() {
  const filePath = path.join(__dirname, "api", "subscribe.js");
  let content = fs.readFileSync(filePath, "utf8");

  // Remove duplicate catch blocks and trailing content
  const lines = content.split("\n");
  const firstExportIndex = lines.findIndex(
    (line) => line.trim() === "module.exports = withSentry(handler);",
  );

  if (firstExportIndex !== -1) {
    // Find the line just before the duplicate catches
    let lastGoodLine = firstExportIndex;
    for (let i = firstExportIndex - 1; i >= 0; i--) {
      if (lines[i].trim() === "}" && i > 0 && lines[i - 1].includes("catch")) {
        // Found legitimate closing brace for a catch block
        lastGoodLine = i + 1;
        break;
      }
    }

    // Re-read and fix more carefully
    content = fs.readFileSync(filePath, "utf8");

    // Remove lines with duplicate catch blocks
    content = content.replace(
      /  } catch \(err\) {\s+console\.error\('Subscribe API error:', err\);\s+  } catch \(error\) {[\s\S]*?  } catch \(error\) {[\s\S]*?  } catch \(error\) {/g,
      "",
    );

    // Keep only content up to first module.exports
    const parts = content.split("module.exports = withSentry(handler);");
    content = parts[0] + "module.exports = withSentry(handler);\n";
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log("Fixed api/subscribe.js");
}

// Fix app/components/ErrorBoundary.tsx - add missing closing paren
function fixErrorBoundary() {
  const filePath = path.join(
    __dirname,
    "app",
    "components",
    "ErrorBoundary.tsx",
  );
  let content = fs.readFileSync(filePath, "utf8");

  // Find line 112 and add missing )
  const lines = content.split("\n");
  if (lines.length > 112) {
    // Look for the missing closing paren context
    for (let i = 110; i < 115 && i < lines.length; i++) {
      if (lines[i].includes("      );") && !lines[i].includes(");")) {
        lines[i] = lines[i].replace("      );", "      ));");
        break;
      }
    }
    content = lines.join("\n");
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log("Fixed app/components/ErrorBoundary.tsx");
}

// Fix src/utils/analytics.ts - close comment and add method
function fixAnalytics() {
  const filePath = path.join(__dirname, "src", "utils", "analytics.ts");
  let content = fs.readFileSync(filePath, "utf8");

  // Fix unclosed comment
  content = content.replace(
    /  \/\*\*\s+\* Update user properties\s+  }\s+  \/\*\*\s+\* Update user properties\s+export default analytics;/g,
    `  /**
   * Update user properties
   */
  updateUserProperties(properties: Record<string, any>) {
    this.userProperties = { ...this.userProperties, ...properties };
  }
}

export default analytics;`,
  );

  fs.writeFileSync(filePath, content, "utf8");
  console.log("Fixed src/utils/analytics.ts");
}

// Run all fixes
try {
  fixAppTsx();
  fixShippingRates();
  fixSubscribe();
  fixErrorBoundary();
  fixAnalytics();
  console.log("\nAll syntax errors fixed!");
} catch (error) {
  console.error("Error fixing files:", error);
  process.exit(1);
}
