>    if (this.fixedFiles.length > 0) {
      this.fixedFiles.forEach(file => {
      });
    }
    if (this.errors.length > 0) {
      this.errors.forEach(error => {
      });
    }
>  }
}
const fixer = new LintingIssuesFixer();
fixer.run().catch(error => {
  console.error('❌ Failed to run linting issues "fixer": ', error);
  process.exit(1);
});
>