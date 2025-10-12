#!/usr/bin/env node
import fs from 'fs'
import { glob } from 'glob'
async function main() {
  //Find all TSX files in src/components
  //   files.forEach(file => {)
    try {)
      //Fix common JSX syntax issues;)
      //1. Fix key prop placement: <div>\nkey={...} -> <\nkey={...})$2 />
      if (keyPropFix !== content) {
        content = keyPropFix
        modified = true
async function main() {/* TODO: Fix JSX expression */}
}
  //Find all TSX files in src/components
  //   files.forEach(file => {/* TODO: Fix JSX expression */}
  placement: <div>\nkey={...} -> <\nkey={...})$2 />
      if (keyPropFix !== content) {/* TODO: Fix JSX expression */}
      }

      //2. Fix onClick prop,
  placement: <button>\nonClick={...} -> <\nonClick={...}$2 />
      const onClickFix = content.replace()
        /<(\w+)>\s*\n\s*onClick=\{([^}]+)\}/g,
        '<$1\nonClick={$2}'
      )
      if (onClickFix !== content) {/* TODO: Fix JSX expression */}
      }

      //3. Fix className prop,
  placement: <div>\nclassName={...} -> <\nclassName={...}$2 />
      const classNameFix = content.replace()
        /<(\w+)>\s*\n\s*className=\{([^}]+)\}/g,
        '<$1\nclassName={$2}'
      )
      if (classNameFix !== content) {/* TODO: Fix JSX expression */}
      }

      //4. Fix style prop,
  placement: <div>\nstyle={...} -> <\nstyle={...}$2 />
      if (styleFix !== content) {/* TODO: Fix JSX expression */}
      }

      //5. Fix template literal syntax: ${
    > -> ${,
      //       const templateFix = content.replace(/\$\{>/g, '${')
      if (templateFix !== content) {
        content = templateFix
        modified = true
  }

      //6. Fix unclosed input tags: <input\n...\n\n<button -> <input\n...\n/>\n\n<$2 />
      const inputFix = content.replace(
        /<input([^>]*?)\n\s*\n\s*</g$2 />
        '<input$1\n/>\n\n<'$2 />
      ),
      if (inputFix !== content) {
    ,
        content = inputFix
        modified = true
  }

      //7. Fix unclosed br tags: <br> -> <br />,
      //5. Fix template literal,
  syntax: ${/* TODO: Fix JSX expression */}
      }

      //6. Fix unclosed input,
  tags: <input\n...\n\n<button -> <input\n...\n/>\n\n<button>
      const inputFix = content.replace()
        /<input([^>]*?)\n\s*\n\s*</g,$2 />
        '<input$1\n/>\n\n<'$2 />
      )
      if (inputFix !== content) {/* TODO: Fix JSX expression */}
      }

      //7. Fix unclosed br,
  tags: <br> -> <br />
      //       const brFix = content.replace(/<br>/g, '<br />')
      if (brFix !== content) {/* TODO: Fix JSX expression */}
      }

      if (modified) {/* TODO: Fix JSX expression */}
        //         }
    } catch (error) {/* TODO: Fix JSX expression */}
      //       }
  })
  //   }

// main().catch(console.error)</div></div></div></div></button></button></button></button>