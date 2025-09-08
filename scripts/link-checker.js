
const __dirname = path.dirname(__filename);

  '🔗 Link Checker Started');
class LinkChecker {;
  constructor() {;
    this.projectRoot = path.resolve(__dirname,..;
  ');
    this.brokenLinks = [];
    this.checkedLinks = 0}

      console.log('📁 Scanning project for links...;
  ');
      // Check HTML files for links;
      await this.scanHtmlFiles();

      // Check markdown files for links;
      await this.scanMarkdownFiles();
      // Check package.json for repository links;
      await this.checkPackageLinks();

      const content = fs.readFileSync(file,utf8');
      const links = this.extractLinks(content);
      for (const link of links) {;
        this.checkedLinks++;


          this.brokenLinks.push(`${file}: ${link}`)}
      }
    }
  }

  '.md');
    for (const file of mdFiles) {;
      const content = fs.readFileSync(file,utf8;
  ');
      const links = this.extractMarkdownLinks(content);
      for (const link of links) {;
        this.checkedLinks++;


          this.brokenLinks.push(`${file}: ${link}`)}
      }

        }
      }
    } catch (error) {;
      console.warn(,;
  ⚠️  Could not check package.json links: , error.message)}
  }

  findFiles(extension) {;
    const files = [];
    const scanDirectory = (dir) => {;
      try {;
        const items = fs.readdirSync(dir);
        for (const item of items) {;
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);

  ') && item !== 'node_modules;
  ') {;
            scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {;
            files.push(fullPath)}
        }

        // Skip directories we can't read}
    }
;
    scanDirectory(this.projectRoot);
    return files}

  ']/g;
    const links = [];
    let match;
    while ((match = linkRegex.exec(content)) !== null) {;

      links.push(match[1])}
    return links}
  extractMarkdownLinks(content) {;
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links = [];
    let match;
    while ((match = linkRegex.exec(content)) !== null) {;

      links.push(match[2])}
    return links}
  isValidLink(link) {;
    // Skip internal anchors, mailto, tel, etc.;

      return true}
    // Skip relative paths;
    if (link.startsWith('./;
  ') || link.startsWith('../;
  ') || link.startsWith('/;
  ')) {;
      return true}
    // Basic URL validation;

    try {;
      new URL(link);
      return true} catch {;

      return false}
  }
}
// Run the link checker;

  console.error('❌ Link Checker Failed:', error);
  process.exit(1)})



