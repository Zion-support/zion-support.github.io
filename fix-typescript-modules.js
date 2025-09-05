<<<<<<< HEAD
<<<<<<< HEAD
fs.writeFileSync(fullPath, '// Auto-generated module\nexport {};')}} catch (error) {; console.log(`Error processing ${fullPath}: ${error.message}`)}}})};
// Fix all TypeScript files in api-disabled directory;
const apiDisabledDir = path.join(__dirname, 'api-disabled');
if (fs.existsSync(apiDisabledDir)) {; fixTypeScriptFiles(apiDisabledDir); console.log('✅ Fixed all empty TypeScript files in api-disabled directory')} else {; console.log('❌ api-disabled directory not found')};
;
      } catch (error) {;
        console.log(`Error processing ${fullPath}: ${error.message}`)};
=======
          fs.writeFileSync(fullPath, '// Auto-generated module\nexport {};')};

      } catch (error) {,
        // console.log(`Error processing ${fullPath}: ${error.message}`)};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
};
  })};
// Fix all TypeScript files in api-disabled directory;
const apiDisabledDir = path.join(__dirname, 'api-disabled');
if (fs.existsSync(apiDisabledDir)) {;
  fixTypeScriptFiles(apiDisabledDir);
  console.log('✅ Fixed all empty TypeScript files in api-disabled directory')} else {;
=======

          fs.writeFileSync(fullPath, '// Auto-generated module\nexport {};')};

      } catch (error) {,

        console.log(`Error processing ${fullPath}: ${error.message}`)};
};
  })};

// Fix all TypeScript files in api-disabled directory,
const apiDisabledDir = path.join(__dirname, 'api-disabled'),
if (fs.existsSync(apiDisabledDir)) {,
  fixTypeScriptFiles(apiDisabledDir),
<<<<<<< HEAD
  console.log('✅ Fixed all empty TypeScript files in api-disabled directory')} else {,

>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
  console.log('❌ api-disabled directory not found')};

=======
  // console.log('✅ Fixed all empty TypeScript files in api-disabled directory')} else {,
  // console.log('❌ api-disabled directory not found')};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
