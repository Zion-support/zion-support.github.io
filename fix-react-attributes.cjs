const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix React attributes
function fixReactAttributes(content) {
  // Fix class to className
  content = content.replace(/\bclass\s*=/g, 'className=');
  
  // Fix Name to name in JSX attributes
  content = content.replace(/\bName\s*=/g, 'name=');
  
  // Fix other common React attribute issues
  content = content.replace(/\bfor\s*=/g, 'htmlFor=');
  content = content.replace(/\btabindex\s*=/g, 'tabIndex=');
  content = content.replace(/\bautofocus\s*=/g, 'autoFocus=');
  content = content.replace(/\bautocomplete\s*=/g, 'autoComplete=');
  content = content.replace(/\bautocapitalize\s*=/g, 'autoCapitalize=');
  content = content.replace(/\bautocorrect\s*=/g, 'autoCorrect=');
  content = content.replace(/\bspellcheck\s*=/g, 'spellCheck=');
  content = content.replace(/\bcontenteditable\s*=/g, 'contentEditable=');
  content = content.replace(/\baccesskey\s*=/g, 'accessKey=');
  content = content.replace(/\bdatetime\s*=/g, 'dateTime=');
  content = content.replace(/\bformaction\s*=/g, 'formAction=');
  content = content.replace(/\bformenctype\s*=/g, 'formEncType=');
  content = content.replace(/\bformmethod\s*=/g, 'formMethod=');
  content = content.replace(/\bformnovalidate\s*=/g, 'formNoValidate=');
  content = content.replace(/\bformtarget\s*=/g, 'formTarget=');
  content = content.replace(/\bnovalidate\s*=/g, 'noValidate=');
  content = content.replace(/\breadonly\s*=/g, 'readOnly=');
  content = content.replace(/\bmaxlength\s*=/g, 'maxLength=');
  content = content.replace(/\bminlength\s*=/g, 'minLength=');
  content = content.replace(/\bmultiple\s*=/g, 'multiple=');
  content = content.replace(/\brequired\s*=/g, 'required=');
  content = content.replace(/\bdisabled\s*=/g, 'disabled=');
  content = content.replace(/\bchecked\s*=/g, 'checked=');
  content = content.replace(/\bselected\s*=/g, 'selected=');
  content = content.replace(/\bhidden\s*=/g, 'hidden=');
  content = content.replace(/\bdefer\s*=/g, 'defer=');
  content = content.replace(/\basync\s*=/g, 'async=');
  content = content.replace(/\bcharset\s*=/g, 'charSet=');
  content = content.replace(/\bhttp-equiv\s*=/g, 'httpEquiv=');
  content = content.replace(/\baccept-charset\s*=/g, 'acceptCharset=');
  content = content.replace(/\baccept\s*=/g, 'accept=');
  content = content.replace(/\baction\s*=/g, 'action=');
  content = content.replace(/\bmethod\s*=/g, 'method=');
  content = content.replace(/\benctype\s*=/g, 'encType=');
  content = content.replace(/\bnovalidate\s*=/g, 'noValidate=');
  content = content.replace(/\btarget\s*=/g, 'target=');
  content = content.replace(/\btype\s*=/g, 'type=');
  content = content.replace(/\bvalue\s*=/g, 'value=');
  content = content.replace(/\bplaceholder\s*=/g, 'placeholder=');
  content = content.replace(/\bpattern\s*=/g, 'pattern=');
  content = content.replace(/\bmin\s*=/g, 'min=');
  content = content.replace(/\bmax\s*=/g, 'max=');
  content = content.replace(/\bstep\s*=/g, 'step=');
  content = content.replace(/\bsize\s*=/g, 'size=');
  content = content.replace(/\brows\s*=/g, 'rows=');
  content = content.replace(/\bcols\s*=/g, 'cols=');
  content = content.replace(/\bwrap\s*=/g, 'wrap=');
  content = content.replace(/\bdir\s*=/g, 'dir=');
  content = content.replace(/\blang\s*=/g, 'lang=');
  content = content.replace(/\bid\s*=/g, 'id=');
  content = content.replace(/\btitle\s*=/g, 'title=');
  content = content.replace(/\balt\s*=/g, 'alt=');
  content = content.replace(/\bsrc\s*=/g, 'src=');
  content = content.replace(/\bwidth\s*=/g, 'width=');
  content = content.replace(/\bheight\s*=/g, 'height=');
  content = content.replace(/\bdata-\w+\s*=/g, (match) => match);
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixReactAttributes(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting React attributes fixes...');

// Find all TypeScript/JSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

let fixedCount = 0;
let totalFiles = files.length;

console.log(`Found ${totalFiles} files to process...`);

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (processFile(fullPath)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} out of ${totalFiles} files.`);
console.log('React attributes fixes completed!');