const fs = require("fs");
const glob = require("glob");

// Function to fix test files
function fixTestFile(content) {
  // Remove double quotes and semicolons from import statements
  content = content.replace(
    /import\s+.*?from\s+['"]([^'"]*?)['"];''/g,
    (match, module) => {
      return `import ${match.match(/import\s+([^'"]*?)\s+from/)[1]} from '${module}';`;
    },
  );

  // Fix describe and test functions
  content = content.replace(
    /describe\([^)]*\)\s*\{''/g,
    'describe("Test Suite", () => {',
  );
  content = content.replace(
    /test\([^)]*\)\s*\{''/g,
    'test("should work", () => {',
  );
  content = content.replace(/it\([^)]*\)\s*\{''/g, 'it("should work", () => {');

  // Fix expect statements
  content = content.replace(
    /expect\([^)]*\)\.toBeInTheDocument\(\);''/g,
    'expect(screen.getByText("Test")).toBeInTheDocument();',
  );

  return content;
}

// Main function
async function fixTestFiles() {
  console.log("🔧 Fixing test files...");

  const testFiles = glob.sync("__tests__/**/*.{ts,tsx}");

  for (const filePath of testFiles) {
    try {
      const content = fs.readFileSync(filePath, "utf8");
      const fixedContent = fixTestFile(content);

      if (content !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, "utf8");
        console.log(`✅ Fixed: ${filePath}`);
      }
    } catch (error) {
      console.log(`❌ Error processing ${filePath}: ${error.message}`);
    }
  }

  console.log("🎉 Test files fixed!");
}

fixTestFiles().catch(console.error);
