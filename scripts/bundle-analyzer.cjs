<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
const { execSync } = require('child_process')
// console.log(' Starting Bundle Analysis...')
    console.log(' Analyzing bundle size...')
    execSync('npx @next/bundle-analyzer', { "stdio"})
        "recommendations"
<<<<<<< HEAD
    console.error(' Bundle analysis "failed")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
