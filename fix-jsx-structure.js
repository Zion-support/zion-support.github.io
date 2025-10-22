import fs from 'fs';
import path from 'path';

// Files with JSX structure issues
const filesToFix = [
  'app/ai-fraud-detection/page.tsx',
  'app/ai-image-recognition/page.tsx',
  'app/ai-legal-assistant/page.tsx',
  'app/ai-predictive-maintenance/page.tsx',
  'app/ai-social-media-manager/page.tsx',
  'app/ai-solutions/page.tsx',
  'app/ai-video-generator/page.tsx',
  'app/ai-voice-assistant/page.tsx'
];

function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed closing tags
    const patterns = [
      // Fix malformed closing tags like "></a>            </div>          </div>"
      {
        pattern: /<\/a>\s*<\/div>\s*<\/div>/g,
        replacement: '</a>\n            </div>\n          </div>'
      },
      // Fix missing closing tags for sections
      {
        pattern: /<\/div>\s*<\/div>\s*<\/section>/g,
        replacement: '</div>\n          </div>\n        </section>'
      },
      // Fix React.Fragment closing issues
      {
        pattern: /<\/div>\s*<\/React\.Fragment>/g,
        replacement: '</div>\n    </React.Fragment>'
      }
    ];
    
    patterns.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX structure: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Process all files
filesToFix.forEach(fixJSXStructure);
console.log('JSX structure fixes completed');