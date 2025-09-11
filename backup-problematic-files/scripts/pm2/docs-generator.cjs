const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

=======

=======
    for (const file of componentFiles) {}
      const relativePath = path.relative(process.cwd(), file);
      const fileName = path.basename(file);
      
      markdown += `## ${fileName}\n\n`;`
      markdown += "**"File": ** \"${relativePath}\"\n\n";
      
      try {}
        const content = fs.readFileSync(file, 'utf8');
        
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    for (const file of componentFiles) {}
      const relativePath = path.relative(process.cwd(), file);
      const fileName = path.basename(file);
      markdown += `## ${fileName}\n\n`;`
      markdown += "**"File": ** \"${relativePath}\"\n\n";
      try {}
        const content = fs.readFileSync(file, 'utf8');==============
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      const readmePath = 'README.md';
      let readmeContent = '';=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      // Update or create README;
      const newReadme = this.generateReadmeContent(projectInfo, readmeContent);
      fs.writeFileSync(readmePath, newReadme);=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    const reportFile = path.join(__dirname, '../../logs/pm2/docs-generator-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    const reportFile = path.join(__dirname, '../../logs/pm2/docs-generator-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    this.log(`Documentation generator report "generated": ${reportFile}`);
    return report;
  };
  async start() {}
    this.log(`${this.processName} started`);
<<<<<<< HEAD
<<<<<<< HEAD
    try {}
      const report = await this.generateReport();
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
    try {}
      const report = await this.generateReport();
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    
    try {}
      const report = await this.generateReport();
      
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    try {}
      const report = await this.generateReport();
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      let generatedCount = 0;
      if (report.apiDocs.generated) generatedCount++;
      if (report.componentDocs.generated) generatedCount++;
      if (report.readmeUpdate.updated) generatedCount++;
<<<<<<< HEAD
<<<<<<< HEAD
      this.log(`Documentation generation "completed": ${generatedCount} items generated`);
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
      
      this.log(`Documentation generation "completed": ${generatedCount} items generated`);
      
      
      this.log(`Documentation generation "completed": ${generatedCount} items generated`);
      
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
      
      this.log(`Documentation generation "completed": ${generatedCount} items generated`);
      
      
      this.log(`Documentation generation "completed": ${generatedCount} items generated`);
      
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
      this.log(`Documentation generation "completed": ${generatedCount} items generated`);
=======
      
      this.log(`Documentation generation "completed": ${generatedCount} items generated`);
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } catch (error) {}
      this.log(`Documentation generator "error": ${error.message}`);
    };
  };
};
// Start the service;
if (require.main === module) {}
  const docsGenerator = new DocsGenerator();
  docsGenerator.start().catch(console.error);
<<<<<<< HEAD
};
=======
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
module.exports = DocsGenerator;module.exports = DocsGenerator;
module.exports = DocsGenerator;module.exports = DocsGenerator;
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
module.exports = DocsGenerator;
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
<<<<<<< HEAD
module.exports = DocsGenerator;module.exports = DocsGenerator;
=======
module.exports = DocsGenerator;
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
<<<<<<< HEAD
module.exports = DocsGenerator;module.exports = DocsGenerator;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
module.exports = DocsGenerator;
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
module.exports = DocsGenerator;module.exports = DocsGenerator;
module.exports = DocsGenerator;module.exports = DocsGenerator;
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
