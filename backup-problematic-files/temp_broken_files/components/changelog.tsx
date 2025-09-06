import fs from 'fs'
import path from 'path'
    const file = path.join(process.cwd(), 'CHANGELOG.md'
    const content = fs.readFileSync(file, 'utf8'