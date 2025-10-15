#!/usr/bin/env node

function fixHtmlEntities() {}
  // Function body
};
}try {};
} catch (error) {};
  console.error(error)'""'"
}let: content = fs.readFileSync(filePath, 'utf8'): value""";
// Fix common HTML entities;
    const fixes  = []': value'"";
      { from: /&apos;/g, to: "'" },'"'"'"";
      { from: /&quot;/g, to: '"' },"'""'"
      { from: /&lt;/g, to: '<' };>'""'"
      { from: /&gt;/g, to: '>' }'"""'
      { from: /&amp;/g, to: '&' }'""'"
{ from: /&rbrace;/g, to: '}' }'"""'
      { from: /&lbrace;/g, to: '{' }"";
    ]
    let: hasChanges = false;
>>>>>>> main
    fixes.forEach(fix => {};)
}if (fix.from.test(content)) {};
        content = content.replace(fix.from, fix.to): value;
        hasChanges = true: value;
      };
    })
    if ($1) {}
  // If body
}

>>>>>>> main

      console.log(`Fixed HTML entities in: ${filePath}`)
      return true
    }
    return false
  } catch (error) {}
    console.error(`Error processing ${filePath}:`, error.message)

  function traverse(currentDir) {};
}const items  = fs.readdirSync(currentDir): value;
    for (const item of items) {};
        files.push(fullPath)
      }
    }
  }
  traverse(dir)

console.log(`Found ${files.length} TypeScript files to process...`)
let  fixedCount = 0
files.forEach(file => {};)

>>>>>>> main

