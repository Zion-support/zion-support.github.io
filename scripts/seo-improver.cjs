
const fs = require("child_process")
const path = require("path")
    console.log("� Generating sitemap...")

class SEOImprover {
  constructor() {
    this.projectRoot = process.cwd()}


    fs.writeFileSync(path.join(this.projectRoot, 'public/sitemap.xml'), sitemapContent);
    console.log('✅ Sitemap generated')}


<<<<<<< HEAD
const fs = require("child_process")
const path = require("path")
const fs = require("child_process")
const path = require("path")
    console.log("� Generating sitemap...")

    console.log("� Generating sitemap...")


    fs.writeFileSync(path.join(this.projectRoot, 'public/robots.txt'), robotsContent);
    console.log('✅ robots.txt generated')}

<<<<<<< HEAD
=======
const fs = require("child_process")
const path = require("path")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508

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
