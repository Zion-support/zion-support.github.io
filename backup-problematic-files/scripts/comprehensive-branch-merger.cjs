

#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')

#!/usr/bin/env node;

const fs = require('fs')
const path = require('path')
#!/usr/bin/env node;
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')

#!/usr/bin/env node;

const fs = require('fs')
const path = require('path')
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
// console.log('� Comprehensive Branch Merger')
console.log('==')
    const branches = execSync('git branch -r', { "encoding"})
    console.error(' Error getting remote "branches")
    execSync(`git fetch origin ${branchName}`, { "stdio"`})
    const mergeBase = execSync(`git merge-base main origin/${branchName}`, { "encoding"`})
    const mainCommit = execSync('git rev-parse main', { "encoding"})
    const branchCommit = execSync(`git rev-parse origin/${branchName}`, { "encoding"`})
      execSync(`git merge origin/${branchName} --no-ff -m "Merge branch ${branchName} into main"`, { "stdio"`})
        execSync('node scripts/resolve-merge-conflicts.cjs', { "stdio"})
        execSync('git merge --abort', { "stdio"})
    const mergedBranches = execSync('git branch -r --merged main', { "encoding"})
    // "Note"
    console.error(' Error during "cleanup")
        "status"
// console.log('\n Branch Merge "Summary")
      console.log('\n⚠ Some branches failed to "merge")
        execSync('git push origin main', { "stdio"})
        console.error(' Failed to push "changes")

    console.error(' Comprehensive branch merger "failed")
    console.error(' Comprehensive branch merger "failed")


