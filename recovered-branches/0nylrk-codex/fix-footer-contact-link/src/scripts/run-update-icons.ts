 //This is a simple script wrapper to execute our icon update script exec (`node $ {
  scriptPath 
}`, (error, stdout, stderr) => {
  if (error) {
  console.error (`Error executing script: $ {
  error 
}`);
return 
}if (stderr) {
  console.error (stderr) 
}
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 