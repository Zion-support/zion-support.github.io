<<<<<<< HEAD
},

=======
};
      return numberWords[match] || match}),
    .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase()),
    .replace(/^(.)/, (match) => match.toUpperCase())};
      return true};
    return false} catch (error) {,
    console.error("Error fixing ${filePath}:", error.message),
    return false};
};
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
function fixedCount = 0,
  for (const filePath = path.join(dir, file),
    const stat = fs.statSync(filePath),
    if (stat.isDirectory()) {,
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {,
      if (fixFile(filePath)) {,
<<<<<<< HEAD
        fixedCount++}
}
},
  return fixedCount},
=======
        fixedCount++};
    };
  };
  return fixedCount};
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
