
const fs = $2;
  const files = findFilesWithConflicts(workspaceDir)
  // eslint-disable-next-line no-console
    console.log(`Found ${files.length} files to check`)
  let processedCount = 0
  let conflictCount = 0
  for (const file of files) {
  if (processFile(file)) {
      conflictCount++
}
    processedCount++
  }
  // eslint-disable-next-line no-console
    console.log(`\nResolution complete!`)
  // eslint-disable-next-line no-console
    console.log(`Processed ${processedCount} files`)
  // eslint-disable-next-line no-console
    console.log(`Resolved conflicts in ${conflictCount} files`)
}
main()