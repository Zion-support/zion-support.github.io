const _apiDisabledDir = path.join(__dirname, 'api-disabled');
if (fs.existsSync(apiDisabledDir)) {_; fixTypeScriptFiles(apiDisabledDir);} else {_;};
;
      } catch (error) {;
        console.log(`Error processing ${fullPath}: ${error.message}`)};};  })};
// Fix all TypeScript files in api-disabled directory;
const apiDisabledDir = path.join(__dirname, 'api-disabled');

  fixTypeScriptFiles(apiDisabledDir);
  console.log('✅ Fixed all empty TypeScript files in api-disabled directory')} else {;

          fs.writeFileSync(fullPath, '// Auto-generated module\nexport {};')};
      } catch (error) {,;
;
console.log(`Error processing ${fullPath} ${error.message}`)};
=======
;`;
        console.log(`Error processing ${fullPath} ${error.message}`)};
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
};
  })};
// Fix all TypeScript files in api-disabled directory,;
const apiDisabledDir = path.join(__dirname, 'api-disabled'),;
if (fs.existsSync(apiDisabledDir)) {,;
  fixTypeScriptFiles(apiDisabledDir),;
console && console.log('✅ Fixed all empty TypeScript files in api-disabled directory')} else {,;
  console && console.log('❌ api-disabled directory not found')};
;  console && console.log('❌ api-disabled directory not found')};
          fs && fs.writeFileSync(fullPath, '// Auto-generated module\nexport {};')};
      } catch (error) {,
        console && console.log(`Error processing ${fullPath}: ${error && error.message}`)};
    };
  })};
// Fix all TypeScript files in api-disabled directory,
const apiDisabledDir = path && path.join(__dirname, 'api-disabled'),
if (fs && fs.existsSync(apiDisabledDir)) {,
  fixTypeScriptFiles(apiDisabledDir),
=======
`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
