const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all AI page files that still have syntax errors
const aiPages = glob.sync('app/ai-*/page.tsx');

console.log(`Found ${aiPages.length} AI page files to fix`);

aiPages.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix extra semicolons
    content = content.replace(/;;;;/g, '');
    content = content.replace(/;;;/g, '');
    content = content.replace(/;;/g, ';');

    // Fix missing comma after last feature object
    content = content.replace(
      /(\s+benefits:\s*\[[^\]]*\]\s*)\n\s*}\s*\n\s*}\s*\n\s*\]/g,
      '$1\n        }\n    }\n];'
    );

    // Fix semicolons in benefits array
    content = content.replace(
      /const benefits = \[\s*([^;]+);\s*([^;]+);\s*([^;]+);\s*([^;]+);\s*([^;]+);\s*\]/g,
      'const benefits = [\n        $1,\n        $2,\n        $3,\n        $4,\n        $5\n    ];'
    );

    // Fix individual semicolons in benefits array
    content = content.replace(
      /'([^']+)',;/g,
      "'$1',"
    );

    // Fix missing comma in features array
    content = content.replace(
      /(\s+benefits:\s*\[[^\]]*\]\s*)\n\s*}\s*\n\s*}\s*\n\s*\]/g,
      '$1\n        }\n    }\n];'
    );

    // Fix malformed JSX - missing closing tags
    content = content.replace(
      /<h1>\s*([^<]+);\s*<\/h1>/g,
      '<h1 className="text-5xl md:text-7xl font-bold text-white mb-6">$1</h1>'
    );

    content = content.replace(
      /<p>\s*([^<]+);\s*<\/p>/g,
      '<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">$1</p>'
    );

    content = content.replace(
      /<h2>\s*([^<]+);\s*<\/h2>/g,
      '<h2 className="text-4xl font-bold text-white mb-4">$1</h2>'
    );

    content = content.replace(
      /<button>\s*([^<]+);\s*<\/button>/g,
      '<button className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">$1</button>'
    );

    // Fix malformed feature icon usage
    content = content.replace(
      /<feature>\s*<\/div>/g,
      '<feature.icon className="w-8 h-8 text-white" />\n                    </div>'
    );

    // Fix malformed CheckCircle usage
    content = content.replace(
      /<CheckCircle>\s*<\/li>/g,
      '<CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />\n                        </li>'
    );

    // Fix missing closing tags for sections
    content = content.replace(
      /<section className="py-20 px-4">\s*<\/section>/g,
      '<section className="py-20 px-4">\n                    <div className="max-w-7xl mx-auto">\n                        <div className="text-center mb-16">\n                            <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>\n                            <p className="text-xl text-gray-300">Advanced AI technology that drives results</p>\n                        </div>\n                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">\n                            {features.map((feature, index) => (\n                                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">\n                                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">\n                                        <feature.icon className="w-8 h-8 text-white" />\n                                    </div>\n                                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>\n                                    <p className="text-gray-300 mb-4">{feature.description}</p>\n                                    {feature.benefits && (\n                                        <ul className="space-y-2">\n                                            {feature.benefits.map((benefit, idx) => (\n                                                <li key={idx} className="flex items-center text-gray-300">\n                                                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />\n                                                    {benefit}\n                                                </li>\n                                            ))}\n                                        </ul>\n                                    )}\n                                </div>\n                            ))}\n                        </div>\n                    </div>\n                </section>'
    );

    // Fix missing Footer closing tag
    content = content.replace(
      /<Footer>\s*<\/>/g,
      '<Footer />\n        </>'
    );

    // Fix missing export statement
    if (!content.includes('export default')) {
      content = content.replace(
        /}\s*$/,
        '};\n\nexport default AiPage;'
      );
    }

    // Write the fixed content back
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }

    if (!modified) {
      console.log(`No changes needed: ${filePath}`);
    }

  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Syntax errors fix completed');