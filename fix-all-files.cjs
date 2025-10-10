const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    const patterns = [
      // Fix missing closing tags for various elements
      { regex: /(<h[1-6][^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</h$2' },
      { regex: /(<p[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</p>$2' },
      { regex: /(<label[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</label>$2' },
      { regex: /(<button[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</button>$2' },
      { regex: /(<div[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</div>$2' },
      { regex: /(<a[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</a>$2' },
      { regex: /(<span[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</span>$2' },
      { regex: /(<select[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</select>$2' },
      { regex: /(<textarea[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</textarea>$2' },
      { regex: /(<option[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</option>$2' },
      { regex: /(<li[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</li>$2' },
      { regex: /(<ul[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</ul>$2' },
      { regex: /(<ol[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</ol>$2' },
      { regex: /(<section[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</section>$2' },
      { regex: /(<article[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</article>$2' },
      { regex: /(<header[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</header>$2' },
      { regex: /(<footer[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</footer>$2' },
      { regex: /(<nav[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</nav>$2' },
      { regex: /(<main[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</main>$2' },
      { regex: /(<aside[^>]*>.*?)\s*;\s*$(\s*<\/)/gm, replacement: '$1</aside>$2' },
      
      // Fix other common patterns
      { regex: /([^>])\s*;\s*$(\s*<[a-zA-Z])/gm, replacement: '$1$2' },
      { regex: /([^>])\s*;\s*$(\s*<\/[a-zA-Z])/gm, replacement: '$1$2' },
      
      // Fix extra closing tags
      { regex: /<\/div><\/div>(\s*<\/div>)/gm, replacement: '</div>$1' },
      { regex: /<\/h[1-6]><\/h[1-6]>/gm, replacement: '</h1>' },
      { regex: /<\/p><\/p>/gm, replacement: '</p>' },
    ];
    
    // Apply all patterns
    patterns.forEach(pattern => {
      content = content.replace(pattern.regex, pattern.replacement);
    });
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find all .tsx and .ts files
function findFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Find and fix all files
const appDir = '/workspace/app';
const files = findFiles(appDir);

console.log(`Found ${files.length} files to check...`);

files.forEach(fixFile);

console.log('All files processed!');