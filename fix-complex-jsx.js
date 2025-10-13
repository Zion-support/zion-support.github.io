import React from 'react';
#!/usr/bin/env node

import fs from "fs";
import { glob } from "glob";

// More comprehensive fixes for complex JSX issues
const fixes = [
  // Fix malformed section elements
  
  },

  // Fix malformed h1 elements
  
      /<h1 className="w-5 h-5 ml-2" \/>\s*AI Chatbot\s*<span className="w-5 h-5 ml-2" \/>\s*\{\s*'\s*'\s*\}Builder\s*<\/span>\s*<\/h1>/g,
    replacement:
      '<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n            AI Chatbot Builder\n          </h1>',
  },

  // Fix malformed p elements
  
  },

  // Fix malformed div elements with duplicate classes
  
  },

  // Fix malformed className attributes
  
  },

  // Fix malformed closing tags
  
  },

  // Fix missing closing tags in complex structures
  
      /(\s+)<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\s*<h1 className="w-5 h-5 ml-2" \/>\s*([^<]+)\s*<span className="w-5 h-5 ml-2" \/>\s*\{\s*'\s*'\s*\}\s*([^<]+)\s*<\/span>\s*<\/h1>/g,
    replacement:
      '$1<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n$1  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n$1    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n$1      $2 $3\n$1    </h1>\n$1  </div>\n$1</div>',
  },
];

// Find all TSX files in the app directory
const files = await glob("app/**/*.tsx");

let fixedCount = 0;

for (const file of files) 
    });

    // Only write if content changed
    if (content !== originalContent) 
      }
  } catch (error) 
    }
}
