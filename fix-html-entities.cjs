const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all problematic files
const files = glob.sync('app/**/*.tsx', { cwd: '/workspace' });

console.log(`Found ${files.length} files to check`);

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix HTML entities in import statements
  if (content.includes('&apos;') || content.includes('&quot;')) {
    console.log(`Fixing HTML entities in ${file}`);
    
    // Fix quotes in import statements
    content = content.replace(/from\s+&apos;([^&]+)&apos;/g, "from '$1'");
    content = content.replace(/from\s+&quot;([^&]+)&quot;/g, 'from "$1"');
    
    // Fix quotes in JSX attributes
    content = content.replace(/className=&quot;([^&]+)&quot;/g, 'className="$1"');
    content = content.replace(/title=&quot;([^&]+)&quot;/g, 'title="$1"');
    content = content.replace(/description=&quot;([^&]+)&quot;/g, 'description="$1"');
    content = content.replace(/name=&quot;([^&]+)&quot;/g, 'name="$1"');
    content = content.replace(/type=&quot;([^&]+)&quot;/g, 'type="$1"');
    content = content.replace(/placeholder=&quot;([^&]+)&quot;/g, 'placeholder="$1"');
    content = content.replace(/alt=&quot;([^&]+)&quot;/g, 'alt="$1"');
    content = content.replace(/href=&quot;([^&]+)&quot;/g, 'href="$1"');
    content = content.replace(/src=&quot;([^&]+)&quot;/g, 'src="$1"');
    
    // Fix quotes in JSX text content
    content = content.replace(/&quot;([^&]+)&quot;/g, '"$1"');
    content = content.replace(/&apos;([^&]+)&apos;/g, "'$1'");
    
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
});

console.log('HTML entities fixes completed');