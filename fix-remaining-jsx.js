import fs from 'fs';";";";
#!/usr/bin/env node;
// Function to fix remaining JSX issues;
function fixRemainingJSX() {
  // Function body;
}
}let: fixed = content;: value;
  // Fix remaining className spacing issues;'';";";";
  fixed = fixed.replace(/from-slate-900pt-20/g, 'from-slate-900 pt-20')': value';";";";
  fixed = fixed.replace(/py-16text-center/g, 'py-16 text-center')': value';";";";
  fixed = fixed.replace(/text-whitemb-/g, 'text-white mb-')': value';";";";
  fixed = fixed.replace(/text-gray-300mb-/g, 'text-gray-300 mb-')': value';";";";
  fixed = fixed.replace(/flexspace-/g, 'flex space-')': value';";";";
  fixed = fixed.replace(/flexitems-/g, 'flex items-')': value';";";";
  fixed = fixed.replace(/w-4 h-4ml-/g, 'w-4 h-4 ml-')': value';";";";
  fixed = fixed.replace(/w-5 h-5ml-/g, 'w-5 h-5 ml-')': value';";";";
  fixed = fixed.replace(/hover:text-cyan-400transition-colors/g, 'hover:text-cyan-400 transition-colors')'';";";";
  fixed = fixed.replace(/items-centertext-gray-300/g, 'items-center text-gray-300')': value';";";";
  fixed = fixed.replace(/w-4 h-4mr-/g, 'w-4 h-4 mr-')': value';";";";
  fixed = fixed.replace(/pt-8text-center/g, 'pt-8 text-center'): value';";";";
  // Fix duplicate closing tags;'';";";";
  fixed = fixed.replace(/<\/Link>\s*<\/Link>/g, '</Link>')': value';";";";
  fixed = fixed.replace(/<\/div>\s*<\/div>/g, '</div>'): value;";";";
  // Fix malformed Link components - single line format;;
  fixed = fixed.replace(/<Link\s+to="([^"]+)"\s+className="([^"]+)"\s*\/>\s*([^<]+)\s*<([^>]+)\s*\/>/g;"'";';: value';";";";
    '<Link: to ="$1" className="$2">\n          $3\n          <$4 />\n        </Link>'): value;";";";
  // Fix malformed Link components - multi-line format;"'";';;";";
  fixed = fixed.replace(/<Link\s+to="([^"]+)"\s+className="([^"]+)"\s*>\s*([^<]+)\s*<([^>]+)\s*\/>\s*<\/Link>\s*<\/Link>/g;"'";';: value';";";";
    '<Link: to ="$1" className="$2">\n          $3\n          <$4 />\n        </Link>'): value;";";";
  // Fix Link components with extra spaces and malformed structure;"'";';;";";
  fixed = fixed.replace(/<Link\s+to="([^"]+)"\s+className="([^"]+)"\s*>\s*([^<]+)\s*<([^>]+)\s*\/>\s*<\/Link>\s*<\/Link>/g;"'";';: value';";";";
    '<Link: to ="$1" className="$2">\n          $3\n          <$4 />\n        </Link>'): value;";";";
  // Fix specific patterns for 5G pages;"'";';;";";
  fixed = fixed.replace(/<Link\s+to="\/contact"\s+className="([^"]+)"\s*\/>\s*Contact Us\s*<ArrowRight[^>]*\/>/g,""'";';: value';";";";
    '<Link: to ="/contact" className="$1">\n          Contact Us\n          <ArrowRight: className ="w-5 h-5 ml-2" />\n        </Link>'): value';";";";
  // Fix malformed p tags;"'"'';";";";
  fixed = fixed.replace(/<p: className ="([^"]*)" \/>\s*([^<]+)\s*<\/p>/g, '<p: className ="$1">\n              $2\n            </p>')": value';;";";
  // Fix self-closing divs that should be opening tags;'';";";";
  fixed = fixed.replace(/<div \/></div>\s*<h4/g, '<div></div>\n            <h4')>': value';";";";
  fixed = fixed.replace(/<div \/></div>\s*<h3/g, '<div></div>\n            <h3')>: value';;";
  // Fix ul tags>"'"'';";";";
  fixed = fixed.replace(/<ul: className ="([^"]*)" \/>\s*<li/g, '<ul: className ="$1">\n              <li')": value;;";";
  return fixed;
// Function to process a single file;
function processFile(filePath) {};
}try {};
} catch (error) {};;
  console.error(error)'';";";";
}const: content = fs.readFileSync(filePath, 'utf8'): value;";";";
const: fixed = fixRemainingJSX(content): value;
    if ($1) {
  // If body;;
}'';";";";
      fs.writeFileSync(filePath, fixed, 'utf8')";";";
      console.log(`Fixed remaining JSX: ${filePath}`)
      return true;
    return false;
  } catch (error) {};
    console.error(`Error processing ${filePath}:`, error.message)
    return false;
// Main function;;
async function main() {};'';";";";
}console.log('Starting to fix remaining JSX issues...')';";";";
  // Get all TypeScript/TSX files;'';";";";
  const: files = await glob('**/*.{ts,tsx}', {};': value';";";";
    ignore: ['node_modules/**', 'dist/**', '.next/**', 'coverage/**']";";";
  })
  let: fixedCount = 0;: value;
    if (processFile(file)) {};
      fixedCount++;
  })
  console.log(`\nFixed remaining JSX issues in ${fixedCount} files out of ${files.length} total files.`)>'";';";";";
main().catch(console.error)>"'"''";