#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX syntax errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix missing closing </a> tags
  fixed = fixed.replace(/<a\s+[^>]*href="[^"]*"[^>]*>\s*([^<]+)\s*(?!<\/a>)/g, (match, text) => {
    return match + '</a>';
  });
  
  // Fix missing closing </div> tags before </section>
  fixed = fixed.replace(/(<div[^>]*>[\s\S]*?)(<\/section>)/g, (match, divContent, sectionClose) => {
    if (!divContent.includes('</div>')) {
      return divContent + '</div>' + sectionClose;
    }
    return match;
  });
  
  // Fix missing closing </section> tags before </div>
  fixed = fixed.replace(/(<section[^>]*>[\s\S]*?)(<\/div>)/g, (match, sectionContent, divClose) => {
    if (!sectionContent.includes('</section>')) {
      return sectionContent + '</section>' + divClose;
    }
    return match;
  });
  
  // Fix missing closing </React.Fragment> tags
  fixed = fixed.replace(/(<React\.Fragment>[\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>)/g, (match, fragmentContent, divCloses) => {
    if (!fragmentContent.includes('</React.Fragment>')) {
      return fragmentContent + '</React.Fragment>' + divCloses;
    }
    return match;
  });
  
  // Fix missing closing tags for div elements
  fixed = fixed.replace(/(<div[^>]*>[\s\S]*?)(\s*<\/div>\s*<\/div>\s*<\/div>)/g, (match, divContent, closingDivs) => {
    const openDivs = (divContent.match(/<div/g) || []).length;
    const closeDivs = (divContent.match(/<\/div>/g) || []).length;
    if (openDivs > closeDivs) {
      const missingDivs = openDivs - closeDivs;
      return divContent + '</div>'.repeat(missingDivs) + closingDivs;
    }
    return match;
  });
  
  // Fix missing closing tags for section elements
  fixed = fixed.replace(/(<section[^>]*>[\s\S]*?)(\s*<\/div>\s*<\/div>\s*<\/div>)/g, (match, sectionContent, closingDivs) => {
    const openSections = (sectionContent.match(/<section/g) || []).length;
    const closeSections = (sectionContent.match(/<\/section>/g) || []).length;
    if (openSections > closeSections) {
      const missingSections = openSections - closeSections;
      return sectionContent + '</section>'.repeat(missingSections) + closingDivs;
    }
    return match;
  });
  
  // Fix specific patterns found in the files
  // Fix missing closing </a> in specific patterns
  fixed = fixed.replace(/(<a\s+[^>]*href="[^"]*"[^>]*>\s*[^<]+)\s*(<\/div>)/g, '$1</a>$2');
  
  // Fix missing closing </div> in specific patterns
  fixed = fixed.replace(/(<div[^>]*>[\s\S]*?)(\s*<\/section>)/g, (match, divContent, sectionClose) => {
    if (!divContent.includes('</div>')) {
      return divContent + '</div>' + sectionClose;
    }
    return match;
  });
  
  // Fix missing closing </section> in specific patterns
  fixed = fixed.replace(/(<section[^>]*>[\s\S]*?)(\s*<\/div>\s*<\/div>)/g, (match, sectionContent, divCloses) => {
    if (!sectionContent.includes('</section>')) {
      return sectionContent + '</section>' + divCloses;
    }
    return match;
  });
  
  // Fix missing closing </React.Fragment> in specific patterns
  fixed = fixed.replace(/(<React\.Fragment>[\s\S]*?)(\s*<\/div>\s*<\/div>\s*<\/div>)/g, (match, fragmentContent, divCloses) => {
    if (!fragmentContent.includes('</React.Fragment>')) {
      return fragmentContent + '</React.Fragment>' + divCloses;
    }
    return match;
  });
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(filePath, content) {
  let fixed = content;
  
  // Fix about/page.tsx specific issues
  if (filePath.includes('about/page.tsx')) {
    // Fix missing closing </a> tags
    fixed = fixed.replace(/(<a\s+[^>]*href="[^"]*"[^>]*>\s*[^<]+)\s*(<\/div>)/g, '$1</a>$2');
    
    // Fix missing closing </div> tags
    fixed = fixed.replace(/(<div[^>]*>[\s\S]*?)(\s*<\/section>)/g, (match, divContent, sectionClose) => {
      if (!divContent.includes('</div>')) {
        return divContent + '</div>' + sectionClose;
      }
      return match;
    });
    
    // Fix missing closing </section> tags
    fixed = fixed.replace(/(<section[^>]*>[\s\S]*?)(\s*<\/div>\s*<\/div>)/g, (match, sectionContent, divCloses) => {
      if (!sectionContent.includes('</section>')) {
        return sectionContent + '</section>' + divCloses;
      }
      return match;
    });
  }
  
  // Fix accessibility/page.tsx specific issues
  if (filePath.includes('accessibility/page.tsx')) {
    // Fix missing closing </a> tags
    fixed = fixed.replace(/(<a\s+[^>]*href="[^"]*"[^>]*>\s*[^<]+)\s*(<\/div>)/g, '$1</a>$2');
    
    // Fix missing closing </div> tags
    fixed = fixed.replace(/(<div[^>]*>[\s\S]*?)(\s*<\/section>)/g, (match, divContent, sectionClose) => {
      if (!divContent.includes('</div>')) {
        return divContent + '</div>' + sectionClose;
      }
      return match;
    });
    
    // Fix missing closing </section> tags
    fixed = fixed.replace(/(<section[^>]*>[\s\S]*?)(\s*<\/div>\s*<\/div>)/g, (match, sectionContent, divCloses) => {
      if (!sectionContent.includes('</section>')) {
        return sectionContent + '</section>' + divCloses;
      }
      return match;
    });
  }
  
  return fixed;
}

// Main function to process all files
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  console.log('🔍 Scanning for TSX files...');
  
  const files = await glob(pattern);
  files.forEach(filePath => {
    try {
      console.log(`📝 Processing: ${filePath}`);
      
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = fixJSXErrors(content);
      fixed = fixSpecificFile(filePath, fixed);
      
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`✅ Fixed: ${filePath}`);
      } else {
        console.log(`ℹ️  No changes needed: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  });
  
  console.log('🎉 JSX error fixing completed!');
}

main().catch(console.error);