// If content changed, write it back
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`✅ Resolved conflicts in: ${file}`);
      resolvedCount++;
    } else {
      console.log(`⚠️ No changes needed for: ${file}`);
    }
  } catch (error) {
    console.error(`❌ Error resolving ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`✅ Successfully resolved: ${resolvedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);
console.log(`📁 Total files processed: ${conflictFiles.length}`);

if (resolvedCount > 0) {
  console.log('\n🔄 Adding resolved files to git...');
  try {
    execSync('git add .', { stdio: 'inherit' });
    console.log('✅ Files added to git successfully');
  } catch (error) {
    console.error('❌ Error adding files to git:', error.message);
  }
}

console.log('\n🎉 Merge conflict resolution completed!');