
const fs = $2;
const allFiles = getAllTsxFiles(path.join(__dirname, 'app'))
allFiles.forEach(fixFile)
// eslint-disable-next-line no-console
    console.log('JSX structure fixes completed!')