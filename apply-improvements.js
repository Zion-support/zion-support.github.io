
const fs = $2;
const appDir = path.join(__dirname, 'app')
if (fs.existsSync(appDir)) {
  processDirectory(appDir)
  // eslint-disable-next-line no-console
    console.log('Improvements applied successfully!')
} else {
  // eslint-disable-next-line no-console
    console.log('App directory not found')
}