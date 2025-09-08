
const fs = require("child_process")
const path = require("path")
    console.log("� Generating sitemap...")

class SEOImprover {
  constructor() {
    this.projectRoot = process.cwd()}


    fs.writeFileSync(path.join(this.projectRoot, 'public/sitemap.xml'), sitemapContent);
    console.log('✅ Sitemap generated')}


const fs = require("child_process")
const path = require("path")
=======


    fs.writeFileSync(path.join(this.projectRoot, 'config/meta-tags.js'), metaConfig);
    console.log('✅ Meta tags configuration created')}

  async run() {
    await this.generateSitemap();
    await this.generateRobotsTxt();
    await this.addMetaTags();
    console.log('✅ SEO improvement completed!')}
}

const improver = new SEOImprover();
improver.run().catch(console.error);
