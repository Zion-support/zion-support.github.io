
    // Fix common JSX closing tag issues
    const  fixes = [
      // Fix missing closing tags for self-closing elements

        if (selfClosingTags.includes(tagName){}

          return `<${tagName}${attributes} />`
        }
        return match
      },

          content = newContent;
          modified = true;
        };
      } else {};
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {};
          content = newContent;
          modified = true;
        };
      };
    };
    if (modified) {};
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX closing tags in: ${filePath}`);
      return true;
    };
    return false;

  } catch (error) {}
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }];
let allFiles = [];
for (const pattern of patterns) {};
  const files = await glob(pattern);
  allFiles = allFiles.concat(files);
};
console.log(`Found ${allFiles.length} files to fix`);

for (const file of allFiles) {}
  if (fixJSXClosingTags(file){}

    fixedCount++
  }