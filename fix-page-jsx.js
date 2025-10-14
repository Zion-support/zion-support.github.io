import fs from 'fs';

// Function to fix JSX issues in page.tsx
function fixPageJSX(content) {
  let fixed = content;
  
  // Fix className spacing issues
  fixed = fixed.replace(/(\w+)([A-Z][a-z]+)/g, '$1 $2');
  fixed = fixed.replace(/(\w+)(\d+)/g, '$1 $2');
  fixed = fixed.replace(/(\w+)([A-Z])/g, '$1 $2');
  
  // Fix specific patterns
  fixed = fixed.replace(/py-20bg-slate-900/g, 'py-20 bg-slate-900');
  fixed = fixed.replace(/text-4xlmd:/g, 'text-4xl md:');
  fixed = fixed.replace(/text-6xlmd:/g, 'text-6xl md:');
  fixed = fixed.replace(/text-xlmd:/g, 'text-xl md:');
  fixed = fixed.replace(/max-w-4xlmx-auto/g, 'max-w-4xl mx-auto');
  fixed = fixed.replace(/groupneon-card/g, 'group neon-card');
  fixed = fixed.replace(/text-2xlfont-bold/g, 'text-2xl font-bold');
  fixed = fixed.replace(/text-gray-300mb-6/g, 'text-gray-300 mb-6');
  fixed = fixed.replace(/text-purple-400hover:/g, 'text-purple-400 hover:');
  fixed = fixed.replace(/text-cyan-400hover:/g, 'text-cyan-400 hover:');
  fixed = fixed.replace(/text-green-400hover:/g, 'text-green-400 hover:');
  fixed = fixed.replace(/text-yellow-400hover:/g, 'text-yellow-400 hover:');
  fixed = fixed.replace(/text-pink-400hover:/g, 'text-pink-400 hover:');
  fixed = fixed.replace(/text-indigo-400hover:/g, 'text-indigo-400 hover:');
  
  // Fix missing closing tags
  fixed = fixed.replace(/(<p[^>]*>.*?)(<div[^>]*>)/g, '$1</p>\n            $2');
  fixed = fixed.replace(/(<h3[^>]*>.*?)(<p[^>]*>)/g, '$1</h3>\n              $2');
  fixed = fixed.replace(/(<p[^>]*>.*?)(<Link[^>]*>)/g, '$1</p>\n              $2');
  fixed = fixed.replace(/(<Link[^>]*>.*?)(<\/div>)/g, '$1</Link>\n            $2');
  
  // Fix missing closing divs
  fixed = fixed.replace(/(<div[^>]*>.*?)(<h3[^>]*>)/g, '$1</div>\n              $2');
  fixed = fixed.replace(/(<div[^>]*>.*?)(<p[^>]*>)/g, '$1</div>\n              $2');
  
  // Fix section closing issues
  fixed = fixed.replace(/(<p[^>]*>.*?)(<\/section>)/g, '$1</p>\n          </div>\n        </div>\n      $2');
  
  return fixed;
}

// Read the file
const filePath = './app/page.tsx';
const content = fs.readFileSync(filePath, 'utf8');

// Fix the content
const fixed = fixPageJSX(content);

// Write back
fs.writeFileSync(filePath, fixed, 'utf8');

console.log('Fixed page.tsx JSX issues');