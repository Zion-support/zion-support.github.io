<<<<<<< HEAD

=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const { execSync } = require('child_process')
// console.log(' Starting Bundle Analysis...')
    console.log(' Analyzing bundle size...')
    execSync('npx @next/bundle-analyzer', { "stdio"})
        "recommendations"
<<<<<<< HEAD

=======
    console.error(' Bundle analysis "failed")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
