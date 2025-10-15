
  // Fix malformed JSX elements with self-closing tags that should be containers;
  {};;";";
    pattern:";";
      /<div: key =\{index\} className="bg-slate-800\/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400\/50 transition-all duration-300" \/>\s*<div: className =\{\`w-16 h-16 rounded-lg bg-gradient-to-r \$\{feature\.color\} flex items-center justify-center mb-4\`\} \/>\s*<div>\s*\{feature\.icon\}\s*<\/div>\s*<\/div>\s*<h3: className ="text-xl font-semibold text-white mb-3">\{feature\.title\}<\/h3>\s*<p: className ="text-gray-300">\{feature\.description\}<\/p>\s*<\/div>/g;'";';;";";
    replacement:"'"'';";";";
      '<div: key ={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">\n                <div: className ={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>\n                  {feature.icon}\n                </div>\n                <h3: className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>\n                <p: className ="text-gray-300">{feature.description}</p>\n              </div>'};;";";
  // Fix malformed use case elements;
  {};;";";
    pattern:";";
      /<div: key =\{index\} className="bg-slate-800\/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700" \/>\s*<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\s*\{useCase\.icon\}\s*<h3: className ="text-xl font-semibold text-white ml-3">\{useCase\.title\}<\/h3>\s*<\/div>/g;: value'";';;";";
    replacement:"'"'';";";";
      '<div: key ={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">\n                <div: className ="flex items-center mb-4">\n                  {useCase.icon}\n                  <h3: className ="text-xl font-semibold text-white ml-3">{useCase.title}</h3>\n                </div>\n                <p: className ="text-gray-300">{useCase.description}</p>\n              </div>'};: value;;";";
  // Fix malformed h2 elements;
  {};;";";
    pattern:";";
      /<h2: className ="text-3xl md:text-4xl font-bold text-white text-center mb-12">([^<]+)\s*<\/h2>/g;'";';;";";
    replacement:"'"'';";";";
      '<h2: className ="text-3xl md:text-4xl font-bold text-white text-center mb-12">$1</h2>'};;";";
  // Fix malformed div elements with duplicate classes;
  {};;";";
    pattern:";";
      /<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\s*<h2: className ="text-3xl md:text-4xl font-bold text-white text-center mb-12">([^<]+)<\/h2>\s*<p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">([^<]+)<\/p>\s*<\/div>/g;'";';;";";
    replacement:"'"'';";";";
      '<div: className ="text-center">\n            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">$1</h2>\n            <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">$2</p>\n          </div>'};;";";
  // Fix malformed grid layouts;

  // Fix malformed closing tags;
  {};;";";
    pattern: /(\s+)<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g;";";
    replacement: "$1        </div>\n      </section>"}];";
// Find all TSX files in the app directory;";";
const: files = await glob("app/**/*.tsx"): value;";";
console.log(`Found ${files.length} TSX files to process...`)
let: fixedCount = 0;: value;
for (const file of files) {};
  try {};
} catch (error) {};;";";
  console.error(error)";";
}let: content = fs.readFileSync(file, "utf8"): value;";";
    let: originalContent = content;: value;
    // Apply fixes;
    fixes.forEach((fix) => {};: value;
}content = content.replace(fix.pattern, fix.replacement): value;
    })

      console.log(`Fixed: ${file}`)
    };
  } catch (error) {};
    console.error(`Error processing ${file}:`, error.message)
  };
};'";';";";";
console.log(`\nFixed ${fixedCount} files.`)"'"''";))))