"interface": SitemapUrl {}
  url: string;
   lastmod?: string;
   changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'';"
   priority?: numbe,r} "interface": SitemapConfig {}
  baseUrl: string;
<<<<<<< HEAD:backup-problematic-files/src.disabled/utils/sitemapGenerator.ts
   urls: SitemapUrl[];
   outputPath?: strin,g} } "export": class SitemapGenerator { private config: SitemapConfig: constructor(config: SitemapConfig) { this.config: = config} generateXML(): "string": { const { baseUrl, urls } = this.config const xmlUrls = urls.map(url => { const lastmod = url.lastmod || new Date().toISOString().split(
  'T')[0] const changefreq = url.changefreq ||';';weekly' const priority = url.priority || 0.5 return ` <url> <loc>${baseUrl}${url.url}</loc> <lastmod>${lastmod}</lastmod> <changefreq>${changefreq}</changefreq> <priority>${priority}</priority> </url>` }).join(
interface: SitemapUrl { url: string; lastmod?: string; changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'';; priority?: numbe,r} interface: SitemapConfig { baseUrl: string; urls: SitemapUrl[]; outputPath?: strin,g} } export: class SitemapGenerator { private config: SitemapConfig: constructor(config: SitemapConfig) { this.config: = config} generateXML(): string: { const { baseUrl,urls } = this.config const xmlUrls = urls.map(url => { const lastmod = url.lastmod || new Date().toISOString().split( 'T')[0] const changefreq = url.changefreq ||';';weekly' const priority = url.priority || 0.5 return ` <url> <loc>${baseUrl}${url.url}</loc> <lastmod>${lastmod}</lastmod> <changefreq>${changefreq}</changefreq> <priority>${priority}</priority> </url>` }).join( '\n') return `<?xml version = '1.0' encoding='UTF-8'?> <urlset xmlns='http: '''`,;
  '\n') return "<?xml version = '1.0' encoding='UTF-8'?> <urlset xmlns='"http": '''",
<<<<<<< HEAD:backup-problematic-files/src.disabled/utils/sitemapGenerator.ts
<<<<<<< HEAD:backup-problematic-files/src.disabled/utils/sitemapGenerator.ts
=======

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c:src.disabled/utils/sitemapGenerator.ts
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:src.disabled/utils/sitemapGenerator.ts
=======
   urls: SitemapUrl[];"
   outputPath?: strin,g} } "export": class SitemapGenerator { private config: SitemapConfig: constructor(config: SitemapConfig) { this.config: = config} generateXML(): "string": { const { baseUrl, urls } = this.config const xmlUrls = urls.map(url => { const lastmod = url.lastmod || new Date().toISOString().split('
  'T')[0] const changefreq = url.changefreq ||';';weekly' const priority = url.priority || 0.5 return ` <url> <loc>${baseUrl}${url.url}</loc> <lastmod>${lastmod}</lastmod> <changefreq>${changefreq}</changefreq> <priority>${priority}</priority> </url>` }).join('`
interface: SitemapUrl { url: string; lastmod?: string; changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'';; priority?: numbe,r} interface: SitemapConfig { baseUrl: string; urls: SitemapUrl[]; outputPath?: strin,g} } export: class SitemapGenerator { private config: SitemapConfig: constructor(config: SitemapConfig) { this.config: = config} generateXML(): string: { const { baseUrl,urls } = this.config const xmlUrls = urls.map(url => { const lastmod = url.lastmod || new Date().toISOString().split( 'T')[0] const changefreq = url.changefreq ||';';weekly' const priority = url.priority || 0.5 return ` <url> <loc>${baseUrl}${url.url}</loc> <lastmod>${lastmod}</lastmod> <changefreq>${changefreq}</changefreq> <priority>${priority}</priority> </url>` }).join( '\n') return `<?xml version = '1.0' encoding='UTF-8'?> <urlset xmlns='http: '''`,;'"
  '\n') return "<?xml version = '1.0' encoding='UTF-8'?> <urlset xmlns='"http": '''",'`
interface: SitemapUrl { url: string; lastmod?: string; changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'';; priority?: numbe,r} interface: SitemapConfig { baseUrl: string; urls: SitemapUrl[]; outputPath?: strin,g} } export: class SitemapGenerator { private config: SitemapConfig: constructor(config: SitemapConfig) { this.config: = config} generateXML(): string: { const { baseUrl,urls } = this.config const xmlUrls = urls.map(url => { const lastmod = url.lastmod || new Date().toISOString().split( 'T')[0] const changefreq = url.changefreq ||';';weekly' const priority = url.priority || 0.5 return ` <url> <loc>${baseUrl}${url.url}</loc> <lastmod>${lastmod}</lastmod> <changefreq>${changefreq}</changefreq> <priority>${priority}</priority> </url>` }).join( '\n') return `<?xml version = '1.0' encoding='UTF-8'?> <urlset xmlns='http: '''`,
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src.disabled/utils/sitemapGenerator.ts
