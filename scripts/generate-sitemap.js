import fs from 'fs';
import path from 'path';
import { file UR LTo Path } from 'url';

const __filename = file UR LTo Path(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all page routes
function get All Routes() {
  const routes = []
  const app Dir = path.join(__dirname, '../app')
  
  function scan Directory(dir, base Path = '') {
    const items = fs.readdir Sync(dir)
    
    for (const item of items) {
      const full Path = path.join(dir, item)
      const stat = fs.stat Sync(full Path)
      
      if (stat.is Directory()) {
        // Skip node_modules and other non-page directories
        if (!['node_modules', '.git', 'components', 'utils', 'types'].includes(item)) {
          scan Directory(full Path, base Path + '/' + item)
        }
      } else if (item === 'page.tsx') {
        // Found a page
        const route = base Path || '/'
        routes.push(route)
      }
    }
  }
  
  scan Directory(app Dir)
  return routes
}

// Generate sitemap
function generate Sitemap() {
  const routes = get All Routes()
  const base Url = 'https://ziontechgroup.com'
  
  const sitemap = `<?x ml version="1.0" encoding="U TF-8"?>
<u rlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <u rl>
    <l oc>${base Url}${route}</l oc>
    <l astmod>${new Date().to IS OString()}</l astmod>
    <c hangefreq>weekly</c hangefreq>
    <p riority>0.8</p riority>
  </u rl>`).join('')}
</u rlset>`
  
  // Write to public directory
  const public Dir = path.join(__dirname, '../public')
  if (!fs.exists Sync(public Dir)) {
    fs.mkdir Sync(public Dir, { recursive: true })
  }
  
  fs.write File Sync(path.join(public Dir, 'sitemap.xml'), sitemap)
  console.log('Sitemap generated successfully!')
  console.log(`Found ${routes.length} routes`)
}

generate Sitemap();
