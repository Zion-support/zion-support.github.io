      continue
}
}
};
// Function to fix specific parsing errors;
  for (const item of, items) {};
    const fullPath = path.join(dir, item),;
    try {};
        // Skip node_modules, .git, and other common directories};
        if (!['node_modules.gitdistbuild.next'].includes(item)) {'};
          files = files.concat(findFiles(fullPath, extensions));
        };
      } else if (extensions.some(ext => item.endsWith(ext))) {};
        files.push(fullPath);
      };
;
    } catch (error) {,;
;    try {};
        // Skip node_modules, .git, and other common directories};
        if (!['node_modules.gitdistbuild.next'].includes(item)) {'};
          files = files.concat(findFiles(fullPath, extensions));
        };
      } else if (extensions.some(ext => item.endsWith(ext))) {};
        files.push(fullPath);
      };
;
    } catch (error) {,;
;    try {};
        // Skip node_modules, .git, and other common directories};
        if (!['node_modules.gitdistbuild.next'].includes(item)) {'};
          files = files.concat(findFiles(fullPath, extensions))
        };
      } else if (extensions.some(ext => item.endsWith(ext))) {};
        files.push(fullPath)
      };
    } catch (error) {;
      // Skip files that can't be accessed'};


        fixedCount++}
    } catch (error) {_;

      errorCount++}
}

  
      errorCount++}
}

  };
};
        fixedCount++};
    } catch (error) {,
  console.error(`Error processing ${file}:`, error.message),
      errorCount++};
  };
,
  console.log(""\"nCompleted": ${fixedCount} files fixed, ${errorCount} errors"")};

