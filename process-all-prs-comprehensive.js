import { execSync } from '
    console.error('❌ Error in comprehensive PR processing:'
    execSync(`git fetch origin ${pr.head.ref}`, { stdio: 'pipe'