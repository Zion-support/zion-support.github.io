export const sitemapGenerator = {
  generate: (pages: Array<{ path: string; lastModified?: string; priority?: number }>) => {
    const sitemap = `
${pages.map(page => `
    ${page.lastModified ? `<lastmod>${page.lastModified}</lastmod>`
    ${page.priority ? `<priority>${page.priority}</priority>`
  </url>`
</urlset>`
    return `
Sitemap: ${sitemapUrl}`