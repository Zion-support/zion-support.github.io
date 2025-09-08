
const __dirname = path.dirname(__filename);
class ConsoleCleaner {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.cleanedFiles = [];
    this.totalConsoleStatements = 0}

    ];

    for (const dir of directories) {


      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {;

        await this.processDirectory(dirPath)}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

      `📊 Total console statements removed: ${this.totalConsoleStatements}`)}
  async processDirectory(dirPath) {;

    const items = fs.readdirSync(dirPath);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    for (const item of items) {;
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);
      if (stat.isDirectory()) {;
        await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {;

        await this.cleanFile(itemPath)}
    }
  }
  isJavaScriptFile(filePath) {;
    const ext = path.extname(filePath);

  '.tsx'].includes(ext)}
  async cleanFile(filePath) {;
    try {;
      const content = fs.readFileSync(filePath,;

      const removedCount = consoleMatches ? consoleMatches.length : 0;


      console.error(`❌ Error cleaning file ${filePath}:`, error.message)}
  }

}


