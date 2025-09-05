<<<<<<< HEAD
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
<<<<<<< HEAD
    return false} catch (error) {;
    console.error("Error fixing ${filePath}:", error.message);
=======
    return false} catch (error) {,
    console.error(&quot;Error fixing ${filePath}:&quot;, error.message),
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
}; return numberWords[match] || match}); .replace(/[-_](.)/g, (match, group1) = > group1.toUpperCase()); .replace(/^(.)/, (match) = > match.toUpperCase())}; return true}; return false} catch (error) {_;  return false}};
function fixedCount = 0; for (_const filePath = path.join(dir, _file); const _stat = fs.statSync(filePath); if (stat.isDirectory()) {_; fixedCount + = findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {_; if (fixFile(filePath)) {; fixedCount++}}}; return fixedCount};
;
      return numberWords[match] || match});
    .replace(/[-_](.)/g, (_match, _group1) => group1.toUpperCase());
    .replace(/^(.)/, (_match) => match.toUpperCase())};
      return true};
    return false} catch (error) {_;
    
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    return false};
};
<<<<<<< HEAD
function fixedCount = 0;
  for (_const filePath = path.join(dir, _file);
    const _stat = fs.statSync(filePath);
    if (stat.isDirectory()) {_;
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {_;
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

