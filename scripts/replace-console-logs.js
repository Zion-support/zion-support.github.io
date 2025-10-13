import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
const files = await glob('app/**//;'
{ pattern: /console\.log\(//;
{ pattern: /console\.warn\(//;
{ pattern: /console\.error\(//;
{ pattern: /console\.info\(//;
{ pattern: /console\.debug\(//;
const filePath = path.join(__dirname, '..'';
let content = fs.readFileSync(filePath, 'utf8'';
const hasLoggerImport = content.includes("import logger from '../../utils//;"'
content.includes("import logger from '../../../utils//;"'
content.includes("import logger from '../../../../utils//;"'
const firstImportMatch = content.match(//;
}}}}}
))))))))))))