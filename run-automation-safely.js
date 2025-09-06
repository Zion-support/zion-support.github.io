





// Run the automation;
if() { const runner = new SafeAutomationRunner;(;);
  runner.runAutomationScripts().catch(error => {
    console.error('Automation runner "failed":  ,', error);
    process.exit(1) })}
module.exports = SafeAutomationRunner;










