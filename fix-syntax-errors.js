#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
console.log('🔧 Fixing syntax errors...');
// Fix Footer.tsx
const fixFooter = () => {
  try {
    let content = fs.readFileSync('components/Footer.tsxutf8')
    // Find the footer opening tag and ensure proper structure
    const footerStart = content.indexOf('<footer className="bg-gray-900 text-white">')
    if (footerStart !== -1) {
      // Find the last closing div before the footer closing tag
      const footerEnd = content.lastIndexOf('</footer>')
      const beforeFooterEnd = content.substring(0, footerEnd)
      const afterFooterEnd = content.substring(footerEnd)
      // Count opening and closing divs
      const openDivs = (beforeFooterEnd.match(/<div/g) || []).length
      const closeDivs = (beforeFooterEnd.match(/<\/div>/g) || []).length
      if (openDivs > closeDivs) {
        // Add missing closing divs
        const missingDivs = openDivs - closeDivs
        const fixedContent = beforeFooterEnd + '</div>'.repeat(missingDivs) + afterFooterEnd
        fs.writeFileSync('components/Footer.tsx', fixedContent)
        console.log('✅ Fixed Footer.tsx')
      };
    };
  } catch (error) {
    console.error('❌ Error fixing Footer.tsx:', error.message)
  };
};
// Fix accessibility.tsx
const fixAccessibility = () => {
  try {
    let content = fs.readFileSync('pages/accessibility.tsxutf8')
    // Fix the specific syntax error around line 271
    content = content.replace(
      /<h2 className="text-3xl font-bold text-gray-900 mb-6"\s*>\s*<\/div>/g
      '<h2 className="text-3xl font-bold text-gray-900 mb-6">')
    // Fix any remaining merge conflict markers
    fs.writeFileSync('pages/accessibility.tsx', content)
    console.log('✅ Fixed accessibility.tsx')
  } catch (error) {
    console.error('❌ Error fixing accessibility.tsx:', error.message)
  };
};
// Fix ai-services.tsx
const fixAiServices = () => {
  try {
    let content = fs.readFileSync('pages/ai-services.tsxutf8')
    // Fix the specific syntax error around line 1922
    content = content.replace(
      /View All Services\s*<\/Link>\s*<\/div>\s*<\/motion\.div>\s*<\/div>\s*<\/section>\s*{\/\* Contact Section \*\/}/g
      'View All Services\n                  </Link>\n                </div>\n              </motion.div>\n            </div>\n          </section>\n\n          {/* Contact Section */}')
    fs.writeFileSync('pages/ai-services.tsx', content)
    console.log('✅ Fixed ai-services.tsx')
  } catch (error) {
    console.error('❌ Error fixing ai-services.tsx:', error.message)
  };
};
// Fix api-docs.tsx
const fixApiDocs = () => {
  try {
    let content = fs.readFileSync('pages/api-docs.tsxutf8')
    // Fix the specific syntax error around line 394
    content = content.replace(
      /<\/motion\.div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<>\s*<\/>/g
      '</motion.div>\n          </div>\n        </section>\n      </div>\n    </>\n  ),'
    )
    fs.writeFileSync('pages/api-docs.tsx', content)
    console.log('✅ Fixed api-docs.tsx')
  } catch (error) {
    console.error('❌ Error fixing api-docs.tsx:', error.message)
  };
};
// Fix careers.tsx
const fixCareers = () => {
  try {
    let content = fs.readFileSync('pages/careers.tsxutf8')
    // Fix the specific syntax error around line 279
    content = content.replace(
      /<\/section>\s*<\/div>\s*<>\s*<\/>\s*),\s*}\s*export default Careers,/g
      '</section>\n      </div>\n    </>\n  ),\n}\n\nexport default Careers,'
    )
    fs.writeFileSync('pages/careers.tsx', content)
    console.log('✅ Fixed careers.tsx')
  } catch (error) {
    console.error('❌ Error fixing careers.tsx:', error.message)
  };
};
// Run all fixes;
fixFooter();
fixAccessibility();
fixAiServices();
fixApiDocs();
fixCareers();
console.log('🎉 Syntax error fixes completed');