console.log(`Fixed: ${filePath}`);
    }

  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {