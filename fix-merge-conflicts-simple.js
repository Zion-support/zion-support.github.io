

    // Write the cleaned content back
    fs.writeFileSync(filePath, content)
    console.log(`Fixed merge conflicts in: ${filePath}`)
    return true
    console.error(`Error fixing ${filePath}:`, error.message)

