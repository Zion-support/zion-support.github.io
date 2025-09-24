#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function log(message) {
  const timestamp = new Date().toISOString();
  // eslint-disable-next-line no-console
  console.log(`[${timestamp}] ${message}`);
}

function ensureDirectoryExists(targetDirPath) {
  if (!fs.existsSync(targetDirPath)) {
    fs.mkdirSync(targetDirPath, { recursive: true });
  }
}

function writeJsonFile(targetFilePath, data) {
  const directoryPath = path.dirname(targetFilePath);
  ensureDirectoryExists(directoryPath);
  fs.writeFileSync(targetFilePath, JSON.stringify(data, null, 2), "utf8");
}

function scanForImages(projectRootPath) {
  const publicDirPath = path.join(projectRootPath, "public");
  const supportedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]; 
  const foundImages = [];

  if (!fs.existsSync(publicDirPath)) {
    return foundImages;
  }

  const pendingPaths = [publicDirPath];
  while (pendingPaths.length > 0) {
    const currentDirPath = pendingPaths.pop();
    const entries = fs.readdirSync(currentDirPath, { withFileTypes: true });
    for (const entry of entries) {
      const entryPath = path.join(currentDirPath, entry.name);
      if (entry.isDirectory()) {
        pendingPaths.push(entryPath);
      } else if (supportedExtensions.some(ext => entry.name.toLowerCase().endsWith(ext))) {
        foundImages.push(path.relative(projectRootPath, entryPath));
      }
    }
  }

  return foundImages;
}

function main() {
  const projectRootPath = process.cwd();
  log("Starting performance optimizer (safe mode)...
");

  const reportsDirPath = path.join(projectRootPath, "performance-reports");
  ensureDirectoryExists(reportsDirPath);

  const images = scanForImages(projectRootPath);
  const report = {
    timestamp: new Date().toISOString(),
    projectRoot: projectRootPath,
    metrics: {
      imageCount: images.length,
      sampleImages: images.slice(0, 10),
    },
    recommendations: [
      "Consider using Next.js Image component where applicable",
      "Enable bundle analysis locally with ANALYZE=true npm run build",
    ],
  };

  const reportFilePath = path.join(reportsDirPath, "performance-optimizer-report.json");
  writeJsonFile(reportFilePath, report);
  log(`Wrote report to ${path.relative(projectRootPath, reportFilePath)}`);
  log("Done.");
}

main();