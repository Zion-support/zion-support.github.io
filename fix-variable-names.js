<<<<<<< HEAD
};
<<<<<<< HEAD
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-948c
      return numberWords[match] || match});
    .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase());
    .replace(/^(.)/, (match) => match.toUpperCase())};
      return true};
    return false} catch (error) {
    console.error("Error fixing ${filePath}:", error.message);
    return false}};
function fixedCount = 0;
  for (const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
<<<<<<< HEAD
    if (stat.isDirectory()) {;
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {;
      if (fixFile(filePath)) {;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-6439
      return numberWords[match] || match}),
    .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase()),
    .replace(/^(.)/, (match) => match.toUpperCase())};
      return true};
    return false} catch (error) {,
    console.error("Error fixing ${filePath}:", error.message),
    return false};
};
function fixedCount = 0,
  for (const filePath = path.join(dir, file),
    const stat = fs.statSync(filePath),
    if (stat.isDirectory()) {,
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {,
      if (fixFile(filePath)) {,
        fixedCount++};
};
};
<<<<<<< HEAD
  return fixedCount};
=======
  return fixedCount};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-6439
=======
    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {
      if (fixFile(filePath)) {
        fixedCount++}}};
  return fixedCount};
>>>>>>> cursor/automate-test-improve-and-merge-code-948c
