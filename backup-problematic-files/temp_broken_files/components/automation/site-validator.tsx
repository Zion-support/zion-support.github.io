import fs from 'fs'
import path from 'path'
import type { GetStaticProps } from 'next'
    const file = path.join(process.cwd(), 'publicautomationsite-validator.json'
    const raw = fs.readFileSync(file, 'utf8'
              <li key={i} className=&quot;flex justify-between gap-4&quot;><span className=&quot;truncate&quot;>{o.page}