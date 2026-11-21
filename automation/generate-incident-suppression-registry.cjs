require('./reliability-reports.cjs').main('suppression').catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
