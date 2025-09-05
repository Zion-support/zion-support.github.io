};

      return numberWords[match] || match}),
    .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase()),
    .replace(/^(.)/, (match) => match.toUpperCase())};
      return true};
    return false} catch (error) {,
    console.error(&quot;Error fixing ${filePath}:&quot;, error.message),
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
  return fixedCount};
