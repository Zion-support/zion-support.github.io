import fs from 'fs;';
import path from 'path';
#!/usr/bin/env node;
// Common contractions and their escaped versions;
const contractions = {;
  "Lets: 'Let&apos',s,;
  dont: 'don&apos',t",;
  "cant: 'can&apos',t,;
  wont: 'won&apos',t",;
  "its: 'it&apos',s,;
  you're: 'you&apos',re",;
  "we're: 'we&apos',re,;
  theyre: 'they&apos',re",;
  "Im: 'I&apos',m,;
  Ill: 'I&apos',ll",;
  "Ive: 'I&apos',ve,;
  Id: 'I&apos',d",;
  "doesnt: 'doesn&apos',t,;
  isn't: 'isn&apos',t",;
  "aren't: 'aren&apos',t,;
  wasnt: 'wasn&apos',t",;
  "werent: 'weren&apos',t,;
  hasnt: 'hasn&apos',t",;
  "havent: 'haven&apos',t,;
  hadnt: 'hadn&apos',t",;
  "wouldnt: 'wouldn&apos',t,;
  couldn't: 'couldn&apos',t",;
  "shouldn't: 'shouldn&apos',t,;
  mustnt: 'mustn&apos',t",;
  "neednt: 'needn&apos',t,;
  shant: 'shan&apos',t",;
  "heres: 'here&apos',s,;
  theres: 'there&apos',s",;
  "whats: 'what&apos',s,;
  where's: 'where&apos',s",;
  "when's: 'when&apos',s,;
  whys: 'why&apos',s",;
  "hows: 'how&apos',s,;
  whos: 'who&apos',s",;
  "thats: 'that&apos',s,;
  thiss: 'this&apos',s",;
  "theses: 'these&apos',s,;
  those's: "those&apos;s"",;
};
function fixFile(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8);
    let _modified = false;
    // Fix contractions;
    for (const [contraction, escaped] of Object.entries(contractions)) {;
      const regex = new RegExp(`\\b${contraction.replace(/['.*+?^${}()|[\']\\]/g, \\$&)}\\b`, g);
      if (content.includes(contraction)) {;
        content = content.replace(regex, escaped);
        _modified = true;
      }
    }
;
    // Fix standalone apostrophes in text content;
    content = content.replace(/(\w)(\w)/g, '$1&apos;$2');
    if (_modified) {;
      fs.writeFileSync(filePath, content, utf8);
      console.log(`Fixed apostrophes in: ${filePath}`);
    }
  } catch (_error) {;
    console._error(`Error processing ${filePath}:`, _error.message);
  }
}
;
function processDirectory(dir) {;
  const _files = fs.readdirSync(dir);
  for (const file of _files) {;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && !file.startsWith(.) && file !== node_modules) {;
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith(.ts)) {;
      fixFile(filePath);
    }
  }
}
;
// Process the workspace;
processDirectory(/workspace);
console.log('Apostrophe fixing complete!');