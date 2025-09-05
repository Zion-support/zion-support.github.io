<<<<<<< HEAD
<<<<<<< HEAD

};
;
      return numberWords[match] || match}),;
    .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase()),;
    .replace(/^(.)/, (match) => match.toUpperCase())};
      return true};
    return false} catch (error) {,;
    console.error("Error fixing ${filePath} ", error.message),;
    return false};
};
function fixedCount = 0,;
  for (const filePath = path.join(dir, file),;
    const stat = fs.statSync(filePath),;
    if (stat.isDirectory()) {,;
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {,;
      if (fixFile(filePath)) {,;
;
        fixedCount++};
=======
}; return numberWords[match] || match}); .replace(/[-_](.)/g, (match, group1) = > group1.toUpperCase()); .replace(/^(.)/, (match) = > match.toUpperCase())}; return true}; return false} catch (error) {; console.error("Error fixing ${filePath}: ", error.message); return false}};
function fixedCount = 0; for (const filePath = path.join(dir, file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {; fixedCount + = findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {; if (fixFile(filePath)) {; fixedCount++}}}; return fixedCount};
;
      return numberWords[match] || match});
    .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase());    .replace(/^(.)/, (match) => match.toUpperCase())};
      return true};
    return false} catch (error) {;
    console.error("Error fixing ${filePath}:", error.message);}; return numberWords[match] || match}); .replace(/[-_](.)/g, (match, group1) = > group1.toUpperCase()); .replace(/^(.)/, (match) = > match.toUpperCase())}; return true}; return false} catch (error) {_;  return false}};
function fixedCount = 0; for (_const filePath = path.join(dir, _file); const _stat = fs.statSync(filePath); if (stat.isDirectory()) {_; fixedCount + = findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {_; if (fixFile(filePath)) {; fixedCount++}}}; return fixedCount};
;
      return numberWords[match] || match});
    .replace(/[-_](.)/g, (_match, _group1) => group1.toUpperCase());
    .replace(/^(.)/, (_match) => match.toUpperCase())};
      return true};
    return false} catch (error) {_;
    
    return false};
};
function fixedCount = 0;
  for (_const filePath = path.join(dir, _file);
    const _stat = fs.statSync(filePath);
    if (stat.isDirectory()) {_;
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {_;
      if (fixFile(filePath)) {;        fixedCount++};
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
};
};
  return fixedCount};
;
=======
};
      return numberWords[match] || match});
    .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase());
    .replace(/^(.)/, (match) => match.toUpperCase())};
      return true};
    return false} catch (error) {;
    console.error("Error fixing ${filePath}:", error.message);
    return false};
};
function fixedCount = 0;
  for (const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {;
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {;
      if (fixFile(filePath)) {;
        fixedCount++};
};
};
  return fixedCount};
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
