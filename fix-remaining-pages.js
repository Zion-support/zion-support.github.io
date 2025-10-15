
    ];
    let modified = false;
    for (const fix of fixes) {};
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {};
        content = newContent;
        modified = true;
      };
    };
    if (modified) {};
      fs.writeFileSync(filePath, content);
      console.log(`Fixed page: ${filePath}`);
      return true;
    };
    return false;

  } catch (error) {}
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}


];
let allFiles = [];
for (const pattern of patterns) {};
  const files = await glob(pattern);
  allFiles = allFiles.concat(files);
};
console.log(`Found ${allFiles.length} pages to fix`);

for (const file of allFiles) {}
  if (fixPage(file)) {}

    fixedCount++
  }
}



