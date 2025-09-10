  async detectFileStructureIssues() {
  this.log(`Detecting file structure issues...`, "INFO");
    // Check for missing files;
    const criticalFiles = [;
  "package.json",;
      "tsconfig.json",;
      ".eslintrc.js",;
      `next.config.js`;
    ];

    criticalFiles.forEach(file => {
  if (!fs.existsSync(path.join(this.projectRoot, file))) {
  this.errors.push({
  "type": "file_structure",
          "message": `Missing critical file: ${file}`,
          "severity": "error",
          "file": file} catch (error) {
  const output = error.stdout || error.stderr || ";
      const lines = output.split("\n").filter(line => line.trim());
      lines.forEach(line => {
  if (line.includes("vulnerability") || line.includes("deprecated")) {
  this.errors.push({
  "type": "dependency",
            "message": line,
            "severity": "warning",
            "file": "package.json",
            "line": null})}
      });
      this.log(`Detected ${this.errors.filter(e => e.type === "dependency").length} dependency issues`, "WARN")}