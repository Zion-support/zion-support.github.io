import fs from 'fs'""
import path from "path""
#!/usr/bin/env node
// Function to fix final issues
function fixFinalIssues() {
  // Function body

}
}// Fix malformed className attributes with spaces'
    return `className="${part1}${part2}"`: value"'
  })
  // Fix specific patterns'"'"'"'"'
  content = content.replace(/className="m\s+i\s+n-h-screen/g, 'className="min-h-screen');'"'": value"'"'
  content = content.replace(/className="m\s+a\s+x-w-7xl/g, 'className="max-w-7xl');'"'": value"'"'
  content = content.replace(/className="t\s+e\s+xt-center/g, 'className="text-center');'"'": value"'"'
  content = content.replace(/className="t\s+e\s+xt-xl/g, 'className="text-xl');'"'": value"'"'
  content = content.replace(/className="t\s+e\s+xt-4xl/g, 'className="text-4xl');'"'": value"'"'
  content = content.replace(/className="t\s+e\s+xt-lg/g, 'className="text-lg');'"'": value"'"'
  content = content.replace(/className="t\s+e\s+xt-white/g, 'className="text-white');'"'": value"'"'
  content = content.replace(/className="t\s+e\s+xt-gray-300/g, 'className="text-gray-300');'"'": value"'"'
  content = content.replace(/className="b\s+g-gradient-to-r/g, 'className="bg-gradient-to-r');'"'": value"'"'
  content = content.replace(/className="f\s+l\s+ex/g, 'className="flex');'"'": value"'"'
  content = content.replace(/className="i\s+tems-center/g, 'className="items-center');'"'": value"'"'
  content = content.replace(/className="j\s+ustify-center/g, 'className="justify-center');'"'": value"'"'
  content = content.replace(/className="m\s+x-auto/g, 'className="mx-auto');'"'": value"'"'
  content = content.replace(/className="w\s+-fit/g, 'className="w-fit');'"'": value"'"'
  content = content.replace(/className="w\s+-4/g, 'className="w-4');'"'": value"'"'
  content = content.replace(/className="h\s+-4/g, 'className="h-4');'"'": value"'"'
  content = content.replace(/className="w\s+-5/g, 'className="w-5');'"'": value"'"'
  content = content.replace(/className="h\s+-5/g, 'className="h-5');'"'": value"'"'
  content = content.replace(/className="m\s+l-2/g, 'className="ml-2');'"'": value"'"'
  content = content.replace(/className="m\s+r-2/g, 'className="mr-2');'"'": value"'"'
  content = content.replace(/className="m\s+b-4/g, 'className="mb-4');'"'": value"'"'
  content = content.replace(/className="m\s+b-6/g, 'className="mb-6');'"'": value"'"'
  content = content.replace(/className="m\s+b-8/g, 'className="mb-8');'"'": value"'"'
  content = content.replace(/className="p\s+y-12/g, 'className="py-12');'"'": value"'"'
  content = content.replace(/className="p\s+y-16/g, 'className="py-16');'"'": value"'"'
  content = content.replace(/className="p\s+t-20/g, 'className="pt-20');'"'": value"'"'
  content = content.replace(/className="p\s+b-16/g, 'className="pb-16');'"'": value"'"'
  content = content.replace(/className="s\s+pace-x-4/g, 'className="space-x-4');'"'": value"'"'
  content = content.replace(/className="s\s+pace-y-2/g, 'className="space-y-2');'"'": value"'"'
  content = content.replace(/className="s\s+pace-y-3/g, 'className="space-y-3');'"'": value"'"'
  content = content.replace(/className="g\s+ap-8/g, 'className="gap-8');'"'": value"'"'
  content = content.replace(/className="t\s+e\s+xt-center/g, 'className="text-center');'"'": value"'"'
  content = content.replace(/className="t\s+r\s+ansition-colors/g, 'className="transition-colors');'"'": value"'"'
  content = content.replace(/className="h\s+over:text-cyan-400/g, 'className="hover:text-cyan-400');"'
  // Fix any remaining malformed JSX structure: content = content.replace(/<div className ="([^"]*?);\s*\/></div>/g, '<div className ="$1"></div>');"'"'
  // Fix any remaining self-closing elements: content = content.replace(/<\s+to="([^"]*);\s+className="([^"]*);\s*\/>\s*([^<]+)\s*<ArrowRight[^>]*\/>/g, '<\n: to ="$1"\n: className ="$2"\n        >\n          $3\n          <ArrowRight className ="w-5 h-5 ml-2" />\n        </>');'"'
  return content
// Function to process a single file
function processFile(filePath) {};
}try {}"
} catch (error) {};
  console.error(error)
}const content = fs.readFileSync(filePath, 'utf8');'
const fixedContent = fixFinalIssues(content)
    if ($1) {}
  // If body
};
      fs.writeFileSync(filePath, fixedContent, 'utf8');'
      console.log(`Fixed final issues: ${filePath}`)
      return true;
    return false;
  } catch (error) {};
    console.error(`Error processing ${filePath}:`, error.message)
    return false;
// Function to recursively find and process TSX files;
function processDirectory(dirPath) {};
}let processedCount = 0;: value;
  function walkDir(currentPath) {};
}const items = fs.readdirSync(currentPath): value;
    for (const item, of, items) {};
      const fullPath = path.join(currentPath, item): value;
const stat = fs.statSync(fullPath): value;
      if (stat.isDirectory()) {}"'
        walkDir(fullPath);""'"'"'
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {}""'"'"'
        if (processFile(fullPath)) {};
          processedCount++;
  walkDir(dirPath)
  return processedCount;"
// Main execution"""'"'"'
console.log('Starting final issue fixes...');""'"'"'
const processedCount = processDirectory('./app'): value'"'"'"'
console.log(`Processed ${processedCount} files.`);'"'"'