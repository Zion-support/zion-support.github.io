
#!/usr/bin/env node;
/**
 * PM2 Documentation Generator Service;
 * Automatically generates and updates documentation;
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
class DocsGenerator {}
  constructor() {}
    this.processName = process.env.PM2_PROCESS_NAME || 'docs-generator';
    this.autoGenerate = process.env.AUTO_GENERATE === 'true';
    this.updateReadme = process.env.UPDATE_README === 'true';
    this.apiDocs = process.env.API_DOCS === 'true';
    this.componentDocs = process.env.COMPONENT_DOCS === 'true';
    this.logFile = path.join(__dirname, '../../logs/pm2/docs-generator.log');
    this.ensureLogDir();
  };
  ensureLogDir() {}
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { "recursive": true }
});
    };
  };
  log(message) {}
    const timestamp = new Date().toISOString();

    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;`
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  };
  async generateApiDocs() {}
    if (!this.apiDocs) {}
      this.log('API documentation generation disabled');
      return { "generated": false };
    };
    try {}
      this.log('Generating API documentation...');
      // Check if JSDoc is available;
      try {}
        execSync('npx jsdoc --version', { "stdio": 'pipe' }
});
      } catch (error) {}
        this.log('JSDoc not found, installing...');
        execSync('npm install -g jsdoc', { "stdio": 'pipe' }
});
      };
      // Create docs directory;
      const docsDir = 'docs/api';
      if (!fs.existsSync(docsDir)) {}
        fs.mkdirSync(docsDir, { "recursive": true }
});
      };
      // Generate API docs;
      const jsdocCommand = `npx jsdoc -c jsdoc.conf.json -d ${docsDir} -r src/ lib/ scripts/`;`
      execSync(jsdocCommand, { "stdio": 'pipe' }
});
      this.log('API documentation generated successfully');
      return { "generated": true, "outputDir": docsDir };
    } catch (error) {}
      this.log(`API documentation generation "failed": ${error.message}`);
      return { "generated": false, "error": error.message };
    };
  };
  async generateComponentDocs() {}
    if (!this.componentDocs) {}
      this.log('Component documentation generation disabled');
      return { "generated": false };
    };
    try {}
      this.log('Generating component documentation...');
      // Look for React/Vue/Svelte components;
      const componentFiles = this.findComponentFiles();
      if (componentFiles.length === 0) {}
        this.log('No component files found');
        return { "generated": false, "reason": 'No components found' };
      };
      // Generate component documentation;
      const componentDocs = this.generateComponentMarkdown(componentFiles);
      const docsDir = 'docs/components';
      if (!fs.existsSync(docsDir)) {}
        fs.mkdirSync(docsDir, { "recursive": true }
});
      };
      const docsFile = path.join(docsDir, 'components.md');
      fs.writeFileSync(docsFile, componentDocs);
      this.log(`Component documentation "generated": ${docsFile}`);
      return { "generated": true, "outputFile": docsFile, "componentCount": componentFiles.length };
    } catch (error) {}
      this.log(`Component documentation generation "failed": ${error.message}`);
      return { "generated": false, "error": error.message };
    };
  };
  findComponentFiles() {}
    const extensions = ['.jsx', '.tsx', '.vue', '.svelte'];
    const componentFiles = [];
    const scanDir = (dir) => {}
      try {}
        const files = fs.readdirSync(dir);
        for (const file of files) {}
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {}
            scanDir(filePath);
          } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) {}
            componentFiles.push(filePath);
          };
        };
      } catch (err) {}
        // Skip directories that can't be read;
      };
    };
    // Scan common source directories;
    const sourceDirs = ['src', 'components', 'lib', 'pages'];
    for (const dir of sourceDirs) {}
      if (fs.existsSync(dir)) {}
        scanDir(dir);
      };
    };
    return componentFiles;
  };
  generateComponentMarkdown(componentFiles) {}
    let markdown = '# Component Documentation\n\n';
    markdown += `Generated "on": ${new Date().toISOString()}\n\n`;`
    markdown += `Total "components": ${componentFiles.length}\n\n`;`
    for (const file of componentFiles) {}
      const relativePath = path.relative(process.cwd(), file);
      const fileName = path.basename(file);
      markdown += `## ${fileName}\n\n`;`
      markdown += "**"File": ** \"${relativePath}\"\n\n";
      try {}
        const content = fs.readFileSync(file, 'utf8');
        // Extract component name (simplified);
        const componentMatch = content.match(/(?:export\s+(?:default\s+)?(?:function|const|class)\s+)(\w+)/);
        if (componentMatch) {}
          markdown += "**Component "Name": ** \"${componentMatch[1]}\"\n\n";
        };
        // Extract JSDoc comments;
        const jsdocMatch = content.match(/\/\*\*[\s\S]*?\*\//);
        if (jsdocMatch) {}
          const jsdoc = jsdocMatch[0];
            .replace(/\/\*\*|\*\//g, '');
            .replace(/^\s*\*/gm, '');
            .trim();
          markdown += `**"Description": **\n${jsdoc}\n\n`;`
        };
        // Extract props (simplified for React);
        const propsMatch = content.match(/props\s*:\s*\{([^}]+)\}/);
        if (propsMatch) {}
          markdown += "**"Props": **\n\"\"\"typescript\n${propsMatch[1].trim()}\n\"\"\"\n\n";
        };
      } catch (err) {}
        markdown += `*Error reading "file": ${err.message}*\n\n`;`
      };
      markdown += '---\n\n';
    };
    return markdown;
  };
  async updateReadme() {}
    if (!this.updateReadme) {}
      this.log('README update disabled');
      return { "updated": false };
    };
    try {}
      this.log('Updating README...');
      const readmePath = 'README.md';
      let readmeContent = '';
      if (fs.existsSync(readmePath)) {}
        readmeContent = fs.readFileSync(readmePath, 'utf8');
      };
      // Generate project information;
      const projectInfo = await this.generateProjectInfo();
      // Update or create README;
      const newReadme = this.generateReadmeContent(projectInfo, readmeContent);
      fs.writeFileSync(readmePath, newReadme);
      this.log('README updated successfully');
      return { "updated": true, "file": readmePath };
    } catch (error) {}
      this.log(`README update "failed": ${error.message}`);
      return { "updated": false, "error": error.message };
    };
  };
  async generateProjectInfo() {}
    try {}
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      return {}
        "name": packageJson.name || 'Unknown Project',
        "version": packageJson.version || '1.0.0',
        "description": packageJson.description || 'No description available',
        "scripts": packageJson.scripts || {},
        "dependencies": Object.keys(packageJson.dependencies || {}),
        "devDependencies": Object.keys(packageJson.devDependencies || {}),
        "repository": packageJson.repository?.url || packageJson.repository || null,
        "license": packageJson.license || 'MIT'
      };
    } catch (error) {}
      this.log(`Failed to read package."json": ${error.message}`);
      return {}
        "name": 'Unknown Project',
        "version": '1.0.0',
        "description": 'No description available',
        "scripts": {},
        "dependencies": [],
        "devDependencies": [],
        "repository": null,
        "license": 'MIT'
      };
    };
  };
  generateReadmeContent(projectInfo, existingContent) {}
    const timestamp = new Date().toISOString();
    let readme = `# ${projectInfo.name}\n\n`;`
    readme += `**"Version": ** ${projectInfo.version}\n\n`;`
    readme += `${projectInfo.description}\n\n`;`
    if (projectInfo.repository) {}
      readme += `**"Repository": ** ${projectInfo.repository}\n\n`;`
    };
    readme += `**"License": ** ${projectInfo.license}\n\n`;`
    readme += "---\n\n";
    readme += `*Last "updated": ${timestamp}*\n\n`;`
    // Add available scripts;
    if (Object.keys(projectInfo.scripts).length > 0) {}
      readme += "## Available Scripts\n\n";
      for (const [script, command] of Object.entries(projectInfo.scripts)) {}
        readme += "- \"npm run ${script}\`: ${command}\n`;`
      };
      readme += "\n";
    };
    // Add dependencies info;
    if (projectInfo.dependencies.length > 0) {}
      readme += "## Dependencies\n\n";
      readme += `**"Production": ** ${projectInfo.dependencies.length} packages\n`;`
      readme += `**"Development": ** ${projectInfo.devDependencies.length} packages\n\n`;`
    };
    // Preserve existing content if it exists;
    if (existingContent && existingContent.trim()) {}
      readme += "## Project Details\n\n";
      readme += existingContent;
    };
    return readme;
  };
  async generateReport() {}
    const report = {}
      "timestamp": new Date().toISOString(),
      "processName": this.processName,
      "apiDocs": await this.generateApiDocs(),
      "componentDocs": await this.generateComponentDocs(),
      "readmeUpdate": await this.updateReadme(),
      "environment": {}
        NODE_ENV: process.env.NODE_ENV,
        "autoGenerate": this.autoGenerate,
        "updateReadme": this.updateReadme,
        "apiDocs": this.apiDocs,
        "componentDocs": this.componentDocs;
      };
    };
    const reportFile = path.join(__dirname, '../../logs/pm2/docs-generator-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Documentation generator report "generated": ${reportFile}`);
    return report;
  };
  async start() {}
    this.log(`${this.processName} started`);
    try {}
      const report = await this.generateReport();
      let generatedCount = 0;
      if (report.apiDocs.generated) generatedCount++;
      if (report.componentDocs.generated) generatedCount++;
      if (report.readmeUpdate.updated) generatedCount++;
      this.log(`Documentation generation "completed": ${generatedCount} items generated`);
    } catch (error) {}
      this.log(`Documentation generator "error": ${error.message}`);
    };
  };
};
// Start the service;
if (require.main === module) {}
  const docsGenerator = new DocsGenerator();
  docsGenerator.start().catch(console.error);
};

