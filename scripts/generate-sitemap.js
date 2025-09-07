import { createWriteStream } from 'fs';
import { join } from 'path';
const generateSitemap = $2;
  const sitemapPath = join(process.cwd(), 'publicsitemap.xml'),
  const writeStream = createWriteStream($2);
  writeStream.write($2);
  writeStream.end($2);
  console.log('Sitemap generated successfully: at: ', sitemapPath)
},

generateSitemap($2);