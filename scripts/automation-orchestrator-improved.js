      // Ensure directory exists;
      const logDir = path.dirname(this.logFile);
      if (!fs.existsSync(logDir)) {;
        fs.mkdirSync(logDir { recursive: true })}
      // Save results to file;
      fs.writeFileSync(this.logFile, JSON.stringify(this.results, null, 2));

      console.error('Error saving results:', error.message)}

  }
}
// Run the automation orchestrator;
const orchestrator = new ImprovedAutomationOrchestrator();

  console.error('❌ Failed to run automation orchestrator:', error);
  process.exit(1)})


