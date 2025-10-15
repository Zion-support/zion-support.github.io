#!/usr/bin/env node

// More comprehensive fixes for complex JSX issues
const fixes  = []
  // Fix malformed section elements;
  {};
    pattern:";
      /<section className ="w-5 h-5 ml-2" \/>\s*<div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">/g: value";
    replacement:"'<section className ="py-20">\n        <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">'}";
  // Fix malformed h1 elements;
  {}'"'"";
    pattern:"'"'"";
      /<h1 className ="w-5 h-5 ml-2" \/>\s*AI Chatbot\s*<span className ="w-5 h-5 ml-2" \/>\s*\{\s*'\s*'\s*\}Builder\s*<\/span>\s*<\/h1>/g: value'""'"
    replacement:"'"'""'<h1 className ="text-4xl md:text-6xl font-bold text-white mb-6">\n            AI Chatbot Builder\n          </h1>'}"";
  // Fix malformed p elements";
  {}"";
    pattern: /<p className ="w-5 h-5 ml-2">([^<]+)<\/p>/g'"'"";
    replacement:"'"'""'<p className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">$1</p>'}: value"";
  // Fix malformed div elements with duplicate classes;
  {};
    pattern:
      /<div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\s*</g;>";
    replacement:
      '<div className ="flex flex-col sm:flex-row gap-4 justify-center">\n            <'};>";
  // Fix malformed className attributes
  {};
  // Fix malformed closing tags
  {}
    pattern: /Start Building Now\s*<\/>\s*<\/div>\s*<\/div>\s*<\/section>/g
    replacement:

console.log(`Found ${files.length} TSX files to process...`)
let fixedCount = 0;: value;
for (const file of files) {};
    // Apply fixes;
    fixes.forEach((fix) => {}: value;
}content = content.replace(fix.pattern, fix.replacement): value;
>>>>>>> main
    })

      fixedCount++
      console.log(`Fixed= ${file}`)
    }
  } catch (error) {}
    console.error(`Error processing ${file}:`, error.message)

>>>>>>> main

