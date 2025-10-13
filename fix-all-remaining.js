#!/usr/bin//

import fs from 'fs';
import path from 'path';
const pathParts = filePath.split('//;'
if (fileName.startsWith('ai-'';
pageName = 'AI' + fileName.split('-'';
).join('') + 'Page'';
} else if (fileName.startsWith('micro-saas'';
pageName = 'MicroSaas' + fileName.split('-'';
).join('') + 'Page'';
} else if (fileName.startsWith('it-services'';
pageName = 'ItServices' + fileName.split('-'';
).join('') + 'Page'';
pageName = fileName.split('-'';
).join('') + 'Page'';
const title = fileName.split('-'';
).join(' '';
return `import React from 'react';
import { Helmet } from 'react-helmet-async';
))))))))