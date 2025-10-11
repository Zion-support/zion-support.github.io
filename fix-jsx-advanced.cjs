const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix specific JSX issues
function fixJsxIssues(content, filePath) {
  let fixed = content;
  const fileName = path.basename(filePath, '.tsx');
  
  // Extract the main component name from filename
  const componentName = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';

  // Fix malformed imports and component declarations
  if (fixed.includes('const PagePage: React.FC = () => {')) {
    fixed = fixed.replace('const PagePage: React.FC = () => {', `const ${componentName}: React.FC = () => {`);
  }

  // Fix export statements
  if (fixed.includes('export default PagePage;')) {
    fixed = fixed.replace('export default PagePage;', `export default ${componentName};`);
  }

  // Fix duplicate export statements
  fixed = fixed.replace(/export default \w+;\s*export default \w+;/g, (match) => {
    const exports = match.match(/export default (\w+);/g);
    return exports[0];
  });

  // Fix malformed return statements that start with closing tags
  if (fixed.includes('return (') && fixed.includes('</div>') && !fixed.includes('<>')) {
    // Find the return statement and fix it
    const returnMatch = fixed.match(/return\s*\(\s*<\/div>/);
    if (returnMatch) {
      const beforeReturn = fixed.substring(0, returnMatch.index);
      const afterReturn = fixed.substring(returnMatch.index + returnMatch[0].length);
      
      // Create a proper JSX structure
      const properJsx = `return (
    <>
      <Helmet>
        <title>${componentName.replace('Page', '')} - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered solutions for your business" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions, automation" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">${componentName.replace('Page', '')}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced AI-powered solutions to transform your business operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>`;
      
      fixed = beforeReturn + properJsx + afterReturn;
    }
  }

  // Fix missing JSX fragment closing tags
  if (fixed.includes('<>') && !fixed.includes('</>')) {
    // Find the last section or div before the component end
    const lastSectionIndex = Math.max(
      fixed.lastIndexOf('</section>'),
      fixed.lastIndexOf('</div>')
    );
    
    if (lastSectionIndex !== -1) {
      const beforeLast = fixed.substring(0, lastSectionIndex);
      const afterLast = fixed.substring(lastSectionIndex);
      
      // Add proper closing structure
      if (afterLast.includes('<Footer />')) {
        fixed = beforeLast + afterLast.replace('<Footer />', '</div>\n      \n      <Footer />');
      }
      
      // Add closing fragment if missing
      if (!fixed.includes('</>')) {
        fixed = fixed.replace(/(\s*);\s*$/, '\n    </>\n  );');
      }
    }
  }

  // Fix malformed JSX elements
  fixed = fixed.replace(/<h1[^>]*>\s*<\/p>/g, '<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Analytics</span>\n              </h1>');
  
  fixed = fixed.replace(/<p[^>]*>\s*<\/p>/g, '<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\n                Transform your data into actionable insights with our advanced AI analytics platform\n              </p>');

  // Fix JSX expressions that must have one parent element
  fixed = fixed.replace(/JSX expressions must have one parent element/g, '');

  // Fix missing closing tags for div elements
  const divCount = (fixed.match(/<div/g) || []).length;
  const closingDivCount = (fixed.match(/<\/div>/g) || []).length;
  
  if (divCount > closingDivCount) {
    const missingDivs = divCount - closingDivCount;
    for (let i = 0; i < missingDivs; i++) {
      fixed = fixed.replace(/(\s*);\s*$/, '\n      </div>\n    </>\n  );');
    }
  }

  return fixed;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJsxIssues(content, filePath);
    
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  try {
    const files = await glob('app/**/*.tsx', { cwd: process.cwd() });
    console.log(`Found ${files.length} TSX files to check...`);

    let fixedCount = 0;
    for (const file of files) {
      if (fixFile(file)) {
        fixedCount++;
      }
    }

    console.log(`Fixed ${fixedCount} files`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();