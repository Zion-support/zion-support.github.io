
  log(message, level = 'info')
    fixed = fixed.replace(/;\s*,/g, ',')
    fixed = fixed.replace(/{\s*;/g, '{'})
    fixed = fixed.replace(/,\s*}/g, '}')
    fixed = fixed.replace(/;\s*\)/g, ')'
    fixed = fixed.replace(/;\s*\]/g, ']')
    fixed = fixed.replace(/;\s*$/gm, '')
    fixed = fixed.replace(/{\s*;\s*/g, '{'})
    fixed = fixed.replace(/,\s*}/g, '}')
    fixed = fixed.replace(/\[\s*;\s*/g, '[')]
    fixed = fixed.replace(/,\s*\]/g, ']')
    fixed = fixed.replace(/\(\s*;\s*/g, '(')

