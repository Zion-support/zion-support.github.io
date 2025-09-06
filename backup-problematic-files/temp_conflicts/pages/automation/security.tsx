import fs from 'fs'
import path from 'path'
import type { GetStaticProps } from 'next'
    const file = path.join(process.cwd(), 'publicautomation', 'security-audit.json'
    const raw = fs.readFileSync(file, 'utf8'
    return { props:{ report:{ error: any