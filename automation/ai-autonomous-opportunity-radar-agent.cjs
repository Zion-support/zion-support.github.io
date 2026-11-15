require('./reliability-reports.cjs').main('radar').catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
