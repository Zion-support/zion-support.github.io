
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
    for (const file of mdFiles) {;
      const content = fs.readFileSync(file,utf8;
  ');
      const links = this.extractMarkdownLinks(content);
      for (const link of links) {;
        this.checkedLinks++;


          this.brokenLinks.push(`${file}: ${link}`)}
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
// Run the link checker;

  console.error('❌ Link Checker Failed:', error);
  process.exit(1)})



