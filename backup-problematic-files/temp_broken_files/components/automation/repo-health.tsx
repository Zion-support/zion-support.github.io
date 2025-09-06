import fs from 'fs'
import path from 'path'
import type { GetStaticProps } from 'next'
    const file = path.join(process.cwd(), 'publicautomationrepo-health.json'
    const raw = fs.readFileSync(file, 'utf8'
        <div className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800&quot;><div className=&quot;text-xs text-gray-500&quot;>Largest File