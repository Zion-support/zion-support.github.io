
const fs = $2;
const appDir = path.join(__dirname, 'app')
if (fs.existsSync(appDir)) {
  processDirectory(appDir)
  // eslint-disable-next-line no-console
    console.log('JSX syntax fixes completed!')
} else {
  // eslint-disable-next-line no-console
    console.log('App directory not found')
}