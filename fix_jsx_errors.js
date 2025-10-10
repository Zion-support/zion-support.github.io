#!/usr/bin/env node
import fs from 'fs'
function fixJSXErrors(filePath) {
  try {
    //Fix malformed JSX elements like: className="..." <span> -> className="..." /> <span>
    const patterns = [
      {
        //Fix CheckCircleIcon and similar patterns
        pattern: /(<CheckCircleIcon[^>]*>)\s*<span/g
        replacement: '$1 />\n                  <span'}
      {
        //Fix other icon patterns
        pattern: /(<[A-Z][a-zA-Z]*Icon[^>]*>)\s*<[^/]/g
        replacement: '$1 />\n                <'}
      {
        //Fix closing tag issues
        pattern: /(<[A-Z][a-zA-Z]*Icon[^>]*>)\s*<\/[^>]*>/g
        replacement: '$1 />\n              </'}
      {
        //Fix ArrowRightIcon patterns
        pattern: /(<ArrowRightIcon[^>]*>)\s*<\/Link>/g
        replacement: '$1 />\n            </Link>'}
      {
        //Fix TruckIcon patterns
        pattern: /(<TruckIcon[^>]*>)\s*<\/div>/g
        replacement: '$1 />\n          </div>'}]
    patterns.forEach(fix => {)
      //       const newContent = content.replace(fix.pattern, fix.replacement)
      if (newContent !== content) {
        content = newContent
        modified = true
      }
function fixJSXErrors(filePath) {}
      }
      {}
      }
      {}
      }
      {}
      }
      {}
      }]
    patterns.forEach(fix => {}
      })
    })
    if (modified) {}
    }
    return false
  } catch (error) {}
  }
}
// Fix the specific file
// const filePath = process.argv[2]
if (filePath) {}
} else {}
  //   }
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>