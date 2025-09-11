      // Fix specific patterns that are still causing issues;
      const patterns = [;
        // Fix corrupted meta descriptions;
        {
          pattern: /content="The page you"re looking for doesn"t exist."/g,;
          replacement: 'content="The page you\'re looking for doesn\'t exist."'},;
        // Fix extra closing braces;
        {
          pattern: /\n}\s*$/gm,;
          replacement: '\n}'},;
        // Fix corrupted JSX attributes;
        {
          pattern: /<(\w+)\s+([^>]*)\s*\/>/g,;
          replacement: '<$1 $2 />'},;
        // Fix corrupted string literals;
        {
          pattern: /content="([^"]*)"\s*\/>/g,;
          replacement: 'content="$1" />'},;
        // Fix corrupted quotes;
        {
          pattern: /"([^"]*)"\s*\/>/g,;
          replacement: '"$1" />'},;
        // Fix corrupted closing tags;
        {
          pattern: /<\/(\w+)>\s*$/gm,;
          replacement: '</$1>'},;
        // Fix corrupted self-closing tags;
        {
          pattern: /<(\w+)\s+([^>]*)\s*\/>/g,;
          replacement: '<$1 $2 />'},;
        // Fix corrupted comments;
        {
          pattern: /\/\*([^*]|\*[^/])*\*\//g,;
          replacement: '/* comment */'},;
        // Fix corrupted semicolons;
        {
          pattern: /;\s*$/gm,;
          replacement: ';'},;
        // Fix corrupted commas;
        {
          pattern: /,\s*$/gm,;
          replacement: ','},;
        // Fix corrupted parentheses;
        {
          pattern: /\(\s*\)/g,;
          replacement: '()'},;
        // Fix corrupted brackets;
        {
          pattern: /\[\s*\]/g,;
          replacement: '[]'},;
        // Fix corrupted braces;
        {
          pattern: /\{\s*\}/g,;
          replacement: '{}'},;
        // Fix corrupted quotes;
        {
          pattern: /'([^']*)'/g,;
          replacement: '"$1"'},;
        // Fix corrupted double quotes;
        {
          pattern: /"([^"]*)"/g,;
          replacement: '"$1"'},;
        // Fix corrupted backticks;
        {
          pattern: /`([^`]*)`/g,;
          replacement: '"$1"'},;
        // Fix corrupted escape sequences;
        {
          pattern: /\\n/g,;
          replacement: '\n'},;
        {
          pattern: /\\t/g,;
          replacement: '\t'},;
        {
          pattern: /\\r/g,;
          replacement: '\r'},;
        {
          pattern: /\\"/g,;
          replacement: '"'},;
        {
          pattern: /\\'/g,;
          replacement: "'"},;
        {
          pattern: /\\\\/g,;
          replacement: '\\'}
      ];

      for (const { pattern, replacement } of patterns) {
        const before = fixedContent;
        fixedContent = fixedContent.replace(pattern, replacement);
        if (before !== fixedContent) {
          hasChanges = true}

      // Additional specific fixes;
      fixedContent = this.applySpecificFixes(fixedContent, filePath);

      if (hasChanges) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.fixedFiles.push(filePath);
        console.log(`✅ Fixed: ${filePath}`);
        return true}
      return false} catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      console.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false}

  applySpecificFixes(content, filePath) {
    let fixedContent = content;
