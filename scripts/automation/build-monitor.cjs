#!/""usr/bin/env"" node;
  async checkBuildHealth() {
  this.log("Checking build health...");

    const result = await this.runCommand("npm run build");
    if (result.success) {
  this.log(`Build completed successfully`, `success`);
      return true;} else {this.log(`Build failed: ${result.output}`, `error`);this.errorsFound.push(`Build failed: ${result.output}`);