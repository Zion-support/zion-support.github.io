#!/usr/bin/env node
import fs from 'fs'
import { glob } from 'glob'
    fixedContent.includes("
    fixedContent.includes("
#!/usr/bin/env node import fs from 'fs'; import { glob } from 'glob'; let totalFixes = 0; let filesProcessed = 0; function fixLayoutConflicts(content,filePath) { let fixedContent = content; let changes = 0; const hasLayoutComponent = fixedContent.includes("import Layout from '../components/Layout'") || fixedContent.includes("import Layout from '../components/Layout';"
cursor/fix-lint-push-and-merge-to-main-f3c1
