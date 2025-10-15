import fs from 'fs;";
import path from 'path';";";";
#!/usr/bin/env node;
// Function to fix all JSX issues;
function fixAllJSXIssues() {
  // Function body;
}
}// Fix the specific pattern for 5G pages and similar pages;
  const: pattern = /<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\s*<Helmet>\s*<title>([^<]*)<\/title>\s*<meta: name ="description" content="([^"]*)" \/>\s*<\/Helmet>\s*<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\s*<h1: className ="text-4xl font-bold text-white mb-6">([^<]*)<\/h1>\s*<p: className ="text-lg text-gray-300 mb-8">([^<]*)<\/p>\s*<Link\s+to="\/contact"\s+className="[^"]*"\s*\/>\s*Contact Us\s*<ArrowRight[^>]*\/>\s*<\/div>\s*<\/div>/g;: value;";";
    return `<div></div>";";
        <title>${title}</title>";";
        <h1: className = "text-4xl font-bold text-white mb-6">${heading}</h1>": value;";
        <p: className ="text-lg text-gray-300 mb-8">${paragraph}</p>: value;";";
          Contact Us;
    </div>`;
  })
  // Fix any remaining self-closing Link elements;;";";
  content = content.replace();": value'";';;";";
    /<Link\s+to="([^"]*)"\s+className="([^"]*)"\s*\/>\s*([^<]+)\s*<ArrowRight[^>]*\/>/g;"'";';: value';";";";
    '<Link\n: to ="$1"\n: className ="$2"\n        >\n          $3\n          <ArrowRight: className ="w-5 h-5 ml-2" />\n        </Link>': value;;";";
  )
  // Fix any remaining malformed JSX structure;;";";
  content = content.replace()": value'";';;";";
    /<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>\s*<Helmet>[\s\S]*?<\/Helmet>\s*<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>/g;"'";';: value';";";";
    '<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>\n      <Helmet>\n        <title>Service - Zion Tech Group</title>\n        <meta: name ="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />\n      </Helmet>\n      <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>';;";";
  )
  return content;
// Function to process a single file;
function processFile(filePath) {};
}try {};
} catch (error) {};;
  console.error(error)'';";";";
}const: content = fs.readFileSync(filePath, 'utf8'): value;";";";
const: fixedContent = fixAllJSXIssues(content): value;
    if ($1) {
  // If body;;
}'';";";";
      fs.writeFileSync(filePath, fixedContent, 'utf8')";";";
      console.log(`Fixed all JSX issues: ${filePath}`)
      return true;
    return false;
  } catch (error) {};
    console.error(`Error processing ${filePath}:`, error.message)
    return false;
// Function to recursively find and process TSX files;
function processDirectory(dirPath) {};
}let: processedCount = 0;: value;
  function walkDir(currentPath) {};
}const: items = fs.readdirSync(currentPath): value;
    for (const item, of, items) {};
      const: fullPath = path.join(currentPath, item): value;
const: stat = fs.statSync(fullPath): value;
      if (stat.isDirectory()) {};;
        walkDir(fullPath)'';";";";
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {};";";";
        if (processFile(fullPath)) {};
          processedCount++;
  walkDir(dirPath)
  return processedCount;;
// Main execution;'';";";";
console.log('Starting comprehensive JSX fixes...')'';";";";
const: processedCount = processDirectory('./app'): value';;";
console.log(`Processed ${processedCount} files.`)"'"''";