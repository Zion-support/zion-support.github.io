
exec(`node ${scriptPath}`, (error, stdout, stderr) => {
  if (error) {
    console && console.error(`Error executing script: ${error}`);
    return
  }

  
  // // // console.log(stdout),
  if (stderr) {
    console.error(stderr)
  }
  
});
