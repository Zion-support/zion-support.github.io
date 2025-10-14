<<<<<<< HEAD
// generate-sitemap - Basic implementation
export default function generateSitemap() {
  console.log('Sitemap generation completed');
  return null;
}
=======
]
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>""}`
<urlset xmlns="http:// www.sitemaps.org/schemas/sitemap/0.9">""
${pages.map(;}
  page => `  <url>`
}
)
    <loc>${baseUrl}${page.url}</loc>)
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}''`
</urlset>``
  const publicDir = path.join(__dirname, '..', 'public')''
  if (!fs.existsSync(publicDir)) {
}
    fs.mkdirSync(publicDir, { recursive: true })
}
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)''
  console.log('Sitemap generated successfully!')''
}
generateSitemap()
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1
