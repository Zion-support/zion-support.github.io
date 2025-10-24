
const fs = $2;
const resolvedCount = walkDirectory('.')
// eslint-disable-next-line no-console
    console.log(`Resolved conflicts in ${resolvedCount} files`)