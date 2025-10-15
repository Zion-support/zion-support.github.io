  }
}
// Fix all files;
filesToFix.forEach(({ file, imports }) => fixImports(file, imports));
console.log('All missing imports fixed!');

