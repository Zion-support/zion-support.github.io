#!/usr/bin/env node;
;
import fs from 'fs';

console.log('🔧 Fixing app/App.tsx syntax errors...');

const content = `import React from 'react';
import { Helmet } from "react-helmet-async";

const AppPage = () => {
  return (
    
    <>
      <div>
    <Helmet />
          <title>App - Zion Tech Group</title>
          <meta name="description" content="App - Zion Tech Group" />
        </Helmet>
        <div>
    <div className="text-center"></div>
            <h1 className="text-4xl font-bold text-white mb-8">App</h1>
          </div>
        </div>}
      </div>})
    </>)}
  );}
};

export default AppPage;
`;

try {}
  fs.writeFileSync('/workspace/app/App.tsx', content, 'utf8');}
  console.log('✅ Fixed app/App.tsx');}
} catch (error) {}
  console.error('❌ Error fixing app/App.tsx: ', error.message);'}
}