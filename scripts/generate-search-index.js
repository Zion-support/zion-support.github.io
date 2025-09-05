#!/usr/bin/env node /** * Generate Search Index * Creates a search index for the website content */function extractTextFromJSX (content) {
  //Simple text extraction from JSX/TSX content return content .replace (/export.*?function.*? {
  /g, '') //Remove function declarations .replace (/[ {
  
}() ]/g, ' ') //Remove brackets 
}const entry = {
  id: `$ {
  type 
}-$ {
  fileName 
}`;
title: fileName.replace (/-/g, ' ') .replace (/\b\w/g, l => l.toUpperCase () );
content: text.substring (0, 500), //Limit content length url: `/$ {
  type === 'pages'? '': type + '/' 
}$ {
  fileName 
}`;
type: type;
lastModified: stats.mtime.toISOString () 
};
}
}
}
}) 
});
// Ensure output directory exists 
}if (require.main === module) {
  generateSearchIndex () 
}module.exports = {
  generateSearchIndex 
};
