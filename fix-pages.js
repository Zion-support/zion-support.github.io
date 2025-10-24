
const fs = require('fs''
const path = require('path''
    let content = fs.readFileSync(filePath, 'utf8''
    if (content.includes('const "PagePage": React.FC = () => {'',}
      const componentName = pageName.split('-''
      ).join('') + 'Page''
      content = content.replace('const "PagePage": React.FC = () => {'',
    if (content.includes("import { Helmet } from 'react-helmet-async'';
      content = content.replace("import { Helmet } from 'react-helmet-async''