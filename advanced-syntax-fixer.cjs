#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

class AdvancedSyntaxFixer {
	constructor() {
		this.projectRoot = process.cwd();
		this.fixedFiles = [];
		this.errors = [];
		this.reportFile = path.join(this.projectRoot, "advanced-syntax-fix-report.json");
	}

	log(message) {
		const timestamp = new Date().toISOString();
		console.log(`[${timestamp}] ${message}`);
	}

	fixFile(filePath) {
		try {
			const content = fs.readFileSync(filePath, "utf8");
			let fixedContent = content;
			let hasChanges = false;

			// Safe, non-destructive normalizations
			const rules = [
				{ pattern: /[ \t]+$/gm, replacement: "" }, // strip trailing whitespace
				{ pattern: /\r\n/g, replacement: "\n" } // normalize newlines
			];

			for (const { pattern, replacement } of rules) {
				const updated = fixedContent.replace(pattern, replacement);
				if (updated !== fixedContent) {
					fixedContent = updated;
					hasChanges = true;
				}
			}

			if (hasChanges) {
				fs.writeFileSync(filePath, fixedContent, "utf8");
				this.fixedFiles.push(filePath);
				this.log(`✅ Fixed: ${filePath}`);
				return true;
			}
			return false;
		} catch (error) {
			this.errors.push({ file: filePath, error: error.message });
			this.log(`❌ Error fixing ${filePath}: ${error.message}`);
			return false;
		}
	}

	getAllFiles(dir, extensions = [".js", ".jsx", ".ts", ".tsx"]) {
		const files = [];
		if (!fs.existsSync(dir)) return files;
		const items = fs.readdirSync(dir);
		for (const item of items) {
			const fullPath = path.join(dir, item);
			const stat = fs.statSync(fullPath);
			if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {
				files.push(...this.getAllFiles(fullPath, extensions));
			} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
				files.push(fullPath);
			}
		}
		return files;
	}

	async fixAllFiles() {
		this.log("🔧 Starting advanced syntax fixing...");
		const srcDir = path.join(this.projectRoot, "src");
		const pagesDir = path.join(this.projectRoot, "pages");
		const allFiles = [
			...this.getAllFiles(srcDir),
			...this.getAllFiles(pagesDir)
		];

		this.log(`📁 Found ${allFiles.length} files to check`);
		for (const file of allFiles) {
			this.fixFile(file);
		}

		this.log(`✅ Fixed ${this.fixedFiles.length} files`);
		this.log(`❌ ${this.errors.length} files had errors`);
		return {
			totalFiles: allFiles.length,
			fixedFiles: this.fixedFiles.length,
			errors: this.errors.length,
			fixedFileList: this.fixedFiles,
			errorList: this.errors
		};
	}

	generateReport(results) {
		const report = {
			timestamp: new Date().toISOString(),
			summary: results,
			fixedFiles: this.fixedFiles,
			errors: this.errors
		};
		fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
		this.log(`📊 Report generated: ${this.reportFile}`);
		return report;
	}

	async run() {
		const results = await this.fixAllFiles();
		const report = this.generateReport(results);
		this.log("🎉 Advanced syntax fixing completed");
		return report;
	}
}

// Run the advanced syntax fixer
const fixer = new AdvancedSyntaxFixer();
fixer
	.run()
	.then(() => {
		console.log("✅ Advanced syntax fixing completed successfully");
		process.exit(0);
	})
	.catch(error => {
		console.error("❌ Advanced syntax fixing failed:", error.message);
		process.exit(1);
	});