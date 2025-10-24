const fs = require('fs''
const path = require('path''
fixed = fixed.replace(/"openGraph": \{\}\n\s*"title": /g, '"openGraph": {\n    title: "''",fixed = fixed.replace(/const features = \[\n\s*\{\}\n\s*"icon": /g, 'const features = [\n{\n      "icon": ''}";'"
fixed = fixed.replace(/export default function \w+\(\{\}\n\s*children\}: \{\}\n\s*"children": React\.ReactNode;/g, 'export default function $1({\n  children\n}: {\n  "children": React.ReactNode'',;";'"
fixed = fixed.replace(/= \{\}\n\s*"title": /g, '= {\n  "title": '',;";'"
fixed = fixed.replace(/= \{\}\n\s*"icon": /g, '= {\n  "icon": '',;";'"
fixed = fixed.replace(/= \[\]\n\s*\{\}\n\s*"icon": /g, '= [\n{\n      "icon": ''}";'"
return match.replace('import {}', 'import { '', fixed = fixed.replace(/"url": '[^']+''} from;'"
return match.replace('}}}', '\n  }\n}'';";'"
fixed = fixed.replace(/"url": '[^']+'',;'"
return match.replace('}}', '\n  }'';";'"
return match.replace('},\n    {}\n      "icon": ', '},\n    {\n      "icon": ''});
    const content = fs.readFileSync(filePath, 'utf8'');
if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules''} else if (item.endsWith('.tsx') || item.endsWith('.jsx''
console.log('Fixing final syntax errors...''
processDirectory('/workspace/app''
processDirectory('/workspace/src'');'"
console.log('Final syntax error fixing complete!'')";'"
const fs = require("fs""
const path = require("path""
fixed = fixed.replace(/"openGraph": \{\}\n\s*"title": /g, ""openGraph": {\n    title: """",fixed = fixed.replace(/const features = \[\n\s*\{\}\n\s*"icon": /g, "const features = [\n{\n      "icon": ""}
fixed = fixed.replace(/export default function \w+\(\{\}\n\s*children\}: \{\}\n\s*"children": React\.ReactNode;/g, "export default function$1({\n  children\n}: {\n  "children": React.ReactNode;""
fixed = fixed.replace(/= \{\}\n\s*"title": /g, "= {\n  "title": ""
fixed = fixed.replace(/= \{\}\n\s*"icon": /g, "= {\n  "icon": ""
fixed = fixed.replace(/= \[\]\n\s*\{\}\n\s*"icon": /g, "= [\n{\n      "icon": ""}
return match.replace("import {}", "import { ""
fixed = fixed.replace(/"url": "[^"]+"" } from;
return match.replace("}}}", "\n  }\n};""
fixed = fixed.replace(/"url": "[^"]+""
return match.replace("}}", "\n  }""
return match.replace("},\n    {}\n      "icon": ", "},\n    {\n      "icon": ""}
    const content = fs.readFileSync(filePath, "utf8"")
if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules""
    } else if (item.endsWith(".tsx") || item.endsWith(".jsx"" console.log("Fixing final syntax errors..."" processDirectory("/workspace/app"" processDirectory("/workspace/src"" console.log("Final syntax error fixing complete!"')
