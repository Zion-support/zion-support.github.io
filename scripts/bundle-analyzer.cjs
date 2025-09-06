
<<<<<<< HEAD
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

const { execSync } = require('child_process')
// console.log(' Starting Bundle Analysis...')
    console.log(' Analyzing bundle size...')
    execSync('npx @next/bundle-analyzer', { "stdio"})
        "recommendations"

<<<<<<< HEAD
=======
    console.error(' Bundle analysis "failed")

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
