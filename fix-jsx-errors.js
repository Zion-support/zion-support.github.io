#!/usr/bin/env node

// Function to fix common JSX syntax errors
function fixJSXContent() {}
  // Function body
}
}// Remove duplicate function declarations: content = content.replace()
    /function \w+\(\) \{\s*return \(\s*function \w+\(\) \{\s*return \(/g;)}

  )
  // Fix malformed JSX tags";
  content = content.replace(/<div><div><\/div><\/div><\/div>/g, ")": value";
  content = content.replace(/<div><\/div>/g, ")": value";
  content = content.replace(/<div><div>/g, "<div>")": value";
  content = content.replace(/<\/div><\/div>/g, "</div>"): value";
  // Fix broken closing tags;
  content = content.replace(): value";
    /<title>([^<]+)<div><div><\/title>/g""<title>$1</title>";
  )
  content = content.replace(): value
    /<meta([^>]+)><div><\/meta><\/div><\/div><\/div>/g"<meta$1 />";
  )
  content = content.replace(/<Helmet><\/div><\/div>/g, "</Helmet>")";
  content = content.replace(/<p([^>]+)><div><\/p>/g, "<p$1></p>")";
  // Fix broken components: content = content.replace()
    /<;<\/><div><\/><\/div><\/div><\/div>/g";
  )
  content = content.replace()
    /<([^>]*)><\/>/g"<$1>Contact Us</>";
  )

  )
  // Remove orphaned closing tags
  content = content.replace(): value

  )
  content = content.replace(/<\/div><\/div>\s*<\/div>\s*<\/div>/g, "</div>")";
  // Fix missing imports
  if (content.includes("Helmet") && !content.includes("import { Helmet }")";
}")) {}";
    content = content.replace()': value"'"
      /import React from 'react';/'"'
      `import React from 'react';\nimport { Helmet } from 'react-helmet-async';`";
    )
  };
  if (content.includes(") && !content.includes("import { }")) {}";
    content = content.replace()
      /import React from 'react';/";
      `import React from 'react';\n`";
    )
  };
  if ()";
    content.includes("ArrowRight") &&";
    !content.includes("import { ArrowRight }")";
  ) {};
    )
  }
  return content
}
// Function to create a proper page structure

  return ()
    <div></div>
      <Helmet></Helmet>
        <title>${title} - Zion Tech Group</title>

      </Helmet>
      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>";
        <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>";
          <h1 className ="text-4xl font-bold text-white mb-6">${title}</h1>";
          <p className ="text-lg text-gray-300 mb-8">Professional ${title.toLowerCase()} services coming soon.</p>";
          <>
            to="/contact";
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          ></>
            Contact Us

          </>
        </div>
      </div>
</div>
  )

        pageName;
        title;
        description;
>>>>>>> main
      )
      fs.writeFileSync(filePath, newContent)
      console.log(`Fixed= ${filePath}`)
    } else {}
      // Try to fix the existing content

      if ($1) {}

  // If body
};
        fs.writeFileSync(filePath, fixedContent)
        console.log(`Fixed= ${filePath}`)
      }
    }
  } catch (error) {}
    console.error(`Error processing ${filePath}:`, error.message)

        files.push(fullPath)
      }
    }
  }
  traverse(dir)

console.log(`Found ${tsxFiles.length} .tsx files to process`)
let  fixedCount = 0;: value
for (const file of tsxFiles) {}

  processFile(file)

>>>>>>> main

