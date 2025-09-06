import fs from 'fs'
import path from 'path'
type Outdated = { name: string, current: string, latest: string, type: any
  const file = path.join(process.cwd(), 'datadep-radar.json'
  let generatedAt = ''
    const raw = fs.readFileSync(file, 'utf-8'
    generatedAt = json.generatedAt || ''
      <div className=&quot;text-xs text-gray-500&quot;>Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : any