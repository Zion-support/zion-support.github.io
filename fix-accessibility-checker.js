import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "app/utils/accessibilityChecker.ts");

try {
  let content = fs.readFileSync(filePath, "utf8");

  // Fix all elementIssues.push calls to include severity and wcagLevel
  content = content.replace(
    /elementIssues\.push\(\{([^}]+)\}\)/g,
    (match, props) => {
      if (!props.includes("severity")) {
        return `elementIssues.push({${props}, severity: 'error', wcagLevel: 'A'})`;
      }
      return match;
    },
  );

  // Fix specific instances
  content = content.replace(
    /type: 'warning',/g,
    "type: 'warning',\n          severity: 'warning',\n          wcagLevel: 'AA',",
  );

  content = content.replace(
    /type: 'error',/g,
    "type: 'error',\n          severity: 'error',\n          wcagLevel: 'A',",
  );

  content = content.replace(
    /type: 'info',/g,
    "type: 'info',\n          severity: 'info',\n          wcagLevel: 'AAA',",
  );

  fs.writeFileSync(filePath, content);
  console.log("Fixed accessibility checker");
} catch (error) {
  console.error("Error fixing accessibility checker:", error.message);
}
