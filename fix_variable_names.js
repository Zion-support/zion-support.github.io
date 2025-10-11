// <const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath)'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx'}'')}: NextPage`,'g')`const ${validName}: NextPage` ).replace( };
 };

 export default content; '
`