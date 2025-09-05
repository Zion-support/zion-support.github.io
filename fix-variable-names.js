<<<<<<< HEAD
}; return numberWords[match] || match}); .replace(/[-_](.)/g, (match, group1) = > group1.toUpperCase()); .replace(/^(.)/, (match) = > match.toUpperCase())}; return true}; return false} catch (error) {; console.error("Error fixing ${filePath}: ", error.message); return false}};
function fixedCount = 0; for (const filePath = path.join(dir, file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {; fixedCount + = findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {; if (fixFile(filePath)) {; fixedCount++}}}; return fixedCount};
;
      return numberWords[match] || match});
    .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase());
=======

};

      return numberWords[match] || match}),
    .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase()),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
    .replace(/^(.)/, (match) => match.toUpperCase())};
      return true};
    return false} catch (error) {;
    console.error("Error fixing ${filePath}:", error.message);
    return false};
};
<<<<<<< HEAD
function fixedCount = 0;
  for (const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {;
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {;
      if (fixFile(filePath)) {;
=======
function fixedCount = 0,
  for (const filePath = path.join(dir, file),
    const stat = fs.statSync(filePath),
    if (stat.isDirectory()) {,
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {,
      if (fixFile(filePath)) {,

>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
        fixedCount++};
};
};
  return fixedCount};

