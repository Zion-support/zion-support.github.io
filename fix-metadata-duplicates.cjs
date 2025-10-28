function fixMetadataDuplicates(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
