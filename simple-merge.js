
const { execSync } = require('child_process'),
// console.log('🚀 Starting simple merge process...'),
try {// Check git status,
  // console.log('📊 Checking git status...'),
  const status = execSync('git status --porcelain', { encoding: 'utf8' }),
  // console.log('Git status:', status |'Clean working directory'),
  // Fetch latest changes,
  console.log ('📥 Fetching latest changes...');
  exec_sync ('git fetch --all --prune');
  // Switch to main branch,
  console.log ('🔄 Switching to main branch...');
  exec_sync ('git checkout main');
  // Pull latest changes,
  console.log ('📥 Pulling latest changes from main...');
  try {
    exec_sync ('git pull origin main');
    console.log ('✅ Successfully pulled latest changes')} catch (error) {
    console.log ('⚠️  Merge conflicts detected. Resolving...');
    // Find files with merge conflicts,
    const conflict_files = exec_sync ('git diff --name - only --diff - filter = U', { encoding: 'utf8' });
    if () {) {
  $2}
      console.log ('Found merge conflicts in:', conflict_files.trim ());
      // Resolve conflicts by accepting our version,
      const files = conflict_files.trim ().split ('\n');
      for (const file of files) {
        if () {) {
  $2}
          console.log (`Resolving conflicts in: ${file}`);
          try {
            exec_sync (`git checkout --ours "${file}"`)} catch (e) {
            exec_sync (`git checkout --theirs "${file}"`),
}}}}}}