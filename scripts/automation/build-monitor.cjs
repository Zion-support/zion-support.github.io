#!/""usr/bin/env"" node;
#!/"usr/bin/env" node;
const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

}
  }
  async checkBuildHealth() {
  this.log("Checking build health...")

    const result = await this.runCommand("npm run build")
    if (result.success) {
  this.log(`Build completed successfully`, `success`)
      return true;
} else {this.log(`Build failed: ${result.output}`, `error`)this.errorsFound.push(`Build failed: ${result.output}`)
      return false;
}
  }
  async fixBuildIssues(buildError) {
  this.log(`Attempting to fix build issues...`)
    // Try to install dependencies first;
    const installResult = await this.runCommand(`npm install`)
    if (installResult.success) {
  this.fixesApplied.push("Installed missing dependencies"),
}

}
  shutdown() {
    this.log('info', 'Shutting down Build Monitor...')
    this.isRunning = false;
    process.exit(0),
}
}
