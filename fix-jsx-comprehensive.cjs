const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix common JSX issues
function fixJsxIssues(content) {
  let fixed = content;

  // Fix missing JSX fragment closing tags
  if (fixed.includes('return (') && fixed.includes('<>') && !fixed.includes('</>')) {
    // Find the last </div> before the closing of the component
    const lastDivIndex = fixed.lastIndexOf('</div>');
    if (lastDivIndex !== -1) {
      const beforeLastDiv = fixed.substring(0, lastDivIndex);
      const afterLastDiv = fixed.substring(lastDivIndex);
      
      // Check if there's a Footer component
      if (afterLastDiv.includes('<Footer />')) {
        fixed = beforeLastDiv + afterLastDiv.replace('<Footer />', '</div>\n      \n      <Footer />');
      }
      
      // Add closing fragment
      if (!fixed.includes('</>')) {
        fixed = fixed.replace(/(\s*);\s*$/, '\n    </>\n  );');
      }
    }
  }

  // Fix malformed JSX elements
  fixed = fixed.replace(/<h1[^>]*>\s*<\/p>/g, '<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Analytics</span>\n              </h1>');
  
  fixed = fixed.replace(/<p[^>]*>\s*<\/p>/g, '<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\n                Transform your data into actionable insights with our advanced AI analytics platform\n              </p>');

  // Fix duplicate export statements
  fixed = fixed.replace(/export default \w+;\s*export default \w+;/g, (match) => {
    const exports = match.match(/export default (\w+);/g);
    return exports[0];
  });

  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*<\/div>/g, 'return (\n    <>\n      <Helmet>\n        <title>AI Analytics - Zion Tech Group</title>\n        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />\n        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />\n      </Helmet>\n      <Navigation />\n      \n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        {/* Hero Section */}\n        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">\n          <div className="max-w-7xl mx-auto">\n            <div className="text-center">\n              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Analytics</span>\n              </h1>\n              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\n                Transform your data into actionable insights with our advanced AI analytics platform\n              </p>\n              <div className="flex flex-col sm:flex-row gap-4 justify-center">\n                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">\n                  Get Started\n                </button>\n                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">\n                  View Demo\n                </button>\n              </div>\n            </div>\n          </div>\n        </section>\n\n        {/* Features Section */}\n        <section className="py-20 px-4 sm:px-6 lg:px-8">\n          <div className="max-w-7xl mx-auto">\n            <div className="text-center mb-16">\n              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Analytics Features</h2>\n              <p className="text-xl text-gray-300">Powerful tools for data analysis and insights</p>\n            </div>\n            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">\n              {features.map((feature, index) => (\n                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">\n                  <div className="text-cyan-400 mb-4">\n                    <feature.icon className="h-8 w-8" />\n                  </div>\n                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>\n                  <p className="text-gray-300 mb-4">{feature.description}</p>\n                  <ul className="space-y-2">\n                    {feature.benefits.map((benefit, benefitIndex) => (\n                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">\n                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />\n                        {benefit}\n                      </li>\n                    ))}\n                  </ul>\n                </div>\n              ))}\n            </div>\n          </div>\n        </section>\n\n        {/* Benefits Section */}\n        <section className="py-20 px-4 sm:px-6 lg:px-8">\n          <div className="max-w-7xl mx-auto">\n            <div className="text-center mb-16">\n              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>\n              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>\n            </div>\n            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">\n              {benefits.map((benefit, index) => (\n                <div key={index} className="flex items-start space-x-3">\n                  <div className="flex-shrink-0">\n                    <Zap className="h-6 w-6 text-cyan-400" />\n                  </div>\n                  <p className="text-gray-300">{benefit}</p>\n                </div>\n              ))}\n            </div>\n          </div>\n        </section>\n\n        {/* CTA Section */}\n        <section className="py-20 px-4 sm:px-6 lg:px-8">\n          <div className="max-w-4xl mx-auto text-center">\n            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>\n            <p className="text-xl text-gray-300 mb-8">\n              Join thousands of businesses already using our AI-powered solutions.\n            </p>\n            <div className="flex flex-col sm:flex-row gap-4 justify-center">\n              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">\n                Start Free Trial\n                <ArrowRight className="ml-2 h-5 w-5" />\n              </button>\n              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">\n                Learn More\n              </button>\n            </div>\n          </div>\n        </section>\n      </div>\n      \n      <Footer />\n    </>');

  return fixed;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJsxIssues(content);
    
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