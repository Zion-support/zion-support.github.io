const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');

// Fix malformed JSX tags
// Pattern: <div className="..."></div>content</div>
content = content.replace(/<div([^>]*)><\/div>([^<]+)<\/div>/g, '<div$1>$2</div>');

// Pattern: <h3 className="..."></h>content</h3>
content = content.replace(/<h3([^>]*)><\/h>([^<]+)<\/h3>/g, '<h3$1>$2</h3>');

// Pattern: <p className="..."></p>content</p>
content = content.replace(/<p([^>]*)><\/p>([^<]+)<\/p>/g, '<p$1>$2</p>');

// Pattern: <span className="..."></span>content</span>
content = content.replace(/<span([^>]*)><\/span>([^<]+)<\/span>/g, '<span$1>$2</span>');

// Pattern: <button className="..."></button>content</button>
content = content.replace(/<button([^>]*)><\/button>([^<]+)<\/button>/g, '<button$1>$2</button>');

// Pattern: <a className="..."></a>content</a>
content = content.replace(/<a([^>]*)><\/a>([^<]+)<\/a>/g, '<a$1>$2</a>');

// Pattern: <li className="..."></li>content</li>
content = content.replace(/<li([^>]*)><\/li>([^<]+)<\/li>/g, '<li$1>$2</li>');

// Pattern: <div className="..."></di>content</div>
content = content.replace(/<div([^>]*)><\/di>([^<]+)<\/div>/g, '<div$1>$2</div>');

// Pattern: <h3 className="..."></h>content</h3>
content = content.replace(/<h3([^>]*)><\/h>([^<]+)<\/h3>/g, '<h3$1>$2</h3>');

// Pattern: <p className="..."></p>content</p>
content = content.replace(/<p([^>]*)><\/p>([^<]+)<\/p>/g, '<p$1>$2</p>');

// Pattern: <span className="..."></span>content</span>
content = content.replace(/<span([^>]*)><\/span>([^<]+)<\/span>/g, '<span$1>$2</span>');

// Pattern: <button className="..."></button>content</button>
content = content.replace(/<button([^>]*)><\/button>([^<]+)<\/button>/g, '<button$1>$2</button>');

// Pattern: <a className="..."></a>content</a>
content = content.replace(/<a([^>]*)><\/a>([^<]+)<\/a>/g, '<a$1>$2</a>');

// Pattern: <li className="..."></li>content</li>
content = content.replace(/<li([^>]*)><\/li>([^<]+)<\/li>/g, '<li$1>$2</li>');

// Write the fixed content back
fs.writeFileSync('/workspace/app/page.tsx', content);

console.log('Fixed malformed JSX tags in page.tsx');