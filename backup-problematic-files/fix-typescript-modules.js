fs.writeFileSync(fullPath, '// Auto-generated module\nexport {};')};
      } catch (error) {,;
;

};
  })};
// Fix all TypeScript files in api-disabled directory,;
const apiDisabledDir = path.join(__dirname, 'api-disabled'),;
if (fs.existsSync(apiDisabledDir)) {,;
  fixTypeScriptFiles(apiDisabledDir),;