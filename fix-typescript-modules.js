          fs.writeFileSync(fullPath, '// Auto-generated module\nexport {};')};

      } catch (error) {,
        console.log(`Error processing ${fullPath}: ${error.message}`)};
};
  })};
// Fix all TypeScript files in api-disabled directory,
const apiDisabledDir = path.join(__dirname, 'api-disabled'),
if (fs.existsSync(apiDisabledDir)) {,
  fixTypeScriptFiles(apiDisabledDir),
  console.log('✅ Fixed all empty TypeScript files in api-disabled directory')} else {,
  console.log('❌ api-disabled directory not found')};
