  try {
    const filePath = path.join(process.cwd(), file);
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;


    // Fix import statements missing semicolons;

    const importRegex = /^import\s+.*?from\s+['"][^'"]+['"]\s*,?\s*$/gm;

    const matches = content && content.match(importRegex);
          modified = true;
        }
      });
    }
