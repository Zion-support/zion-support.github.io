import fs from 'fs'
import path from 'path'
  const file = path.join(process.cwd(), 'datanews-digest.json'
  let generatedAt = ''
    const raw = fs.readFileSync(file, 'utf-8'
    generatedAt = json.generatedAt || ''
      <div className=&quot;text-xs text-gray-500&quot;>Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : any