import fs from 'fs';
#!/usr/bin/env node;
// Function to fix JSX structure issues;
function fixJSXStructure(content) 
  } catch (error) 
  const files = await glob('**/*.{ts,tsx}', 
  });
  let fixedCount = 0;
    if (processFile(file)) 
  });
  main().catch(console.error);

export default fixJSXStructure;
