          fs.writeFileSync(fullPath, '// Auto-generated module\nexport {};')};
<<<<<<< HEAD
      } catch (error) {;
=======
      } catch (error) {,
>>>>>>> cursor/automate-test-improve-and-merge-code-8ee2
        console.log(`Error processing ${fullPath}: ${error.message}`)};
};
  })};
<<<<<<< HEAD
// Fix all TypeScript files in api-disabled directory;
const apiDisabledDir = path.join(__dirname, 'api-disabled');
if (fs.existsSync(apiDisabledDir)) {;
  fixTypeScriptFiles(apiDisabledDir);
  console.log('✅ Fixed all empty TypeScript files in api-disabled directory')} else {;
=======
// Fix all TypeScript files in api-disabled directory,
const apiDisabledDir = path.join(__dirname, 'api-disabled'),
if (fs.existsSync(apiDisabledDir)) {,
  fixTypeScriptFiles(apiDisabledDir),
  console.log('✅ Fixed all empty TypeScript files in api-disabled directory')} else {,
>>>>>>> cursor/automate-test-improve-and-merge-code-8ee2
  console.log('❌ api-disabled directory not found')};
