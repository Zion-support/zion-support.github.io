
  // Fix malformed h1 elements;
  {};'";';";";";
    pattern:"'"'';";";";
      /<h1: className ="w-5 h-5 ml-2" \/>\s*AI Chatbot\s*<span: className ="w-5 h-5 ml-2" \/>\s*\{\s*'\s*'\s*\}Builder\s*<\/span>\s*<\/h1>/g;: value';";";";
    replacement:"'"'';";";";
      '<h1: className ="text-4xl md:text-6xl font-bold text-white mb-6">\n            AI Chatbot Builder\n          </h1>'};;";";
  // Fix malformed p elements;;";";
  {};";";
    pattern: /<p: className ="w-5 h-5 ml-2">([^<]+)<\/p>/g;'";';;";";
    replacement:"'"'';";";";
      '<p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">$1</p>'};: value;;";";
  // Fix malformed div elements with duplicate classes;

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
console.log(`\nFixed ${fixedCount} files.`)"'"''";