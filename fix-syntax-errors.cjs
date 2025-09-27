const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax error patterns to fix
const fixes = [
  // Fix broken method calls
  [/\.forEac\.h\(/g, '.forEach('],
  [/\.setAttribut\.e\(/g, '.setAttribute('],
  [/\.getAttribut\.e\(/g, '.getAttribute('],
  [/\.substrin\.g\(/g, '.substring('],
  [/\.include\.s\(/g, '.includes('],
  [/\.toStrin\.g\(/g, '.toString('],
  [/\.toUpperCas\.e\(/g, '.toUpperCase('],
  [/\.toLowerCas\.e\(/g, '.toLowerCase('],
  [/\.toFixe\.d\(/g, '.toFixed('],
  [/\.matchMedi\.a\(/g, '.matchMedia('],
  [/\.addEventListene\.r\(/g, '.addEventListener('],
  [/\.removeEventListene\.r\(/g, '.removeEventListener('],
  [/\.querySelectorAl\.l\(/g, '.querySelectorAll('],
  [/\.querySelecto\.r\(/g, '.querySelector('],
  [/\.getElementByI\.d\(/g, '.getElementById('],
  [/\.getComputedStyl\.e\(/g, '.getComputedStyle('],
  [/\.documentElemen\.t\./g, '.documentElement.'],
  [/\.classLis\.t\./g, '.classList.'],
  [/\.insertBefor\.e\(/g, '.insertBefore('],
  [/\.firstChi\.l\.d/g, '.firstChild'],
  [/\.groupEn\.d\(/g, '.groupEnd('],
  [/\.grou\.p\(/g, '.group('],
  [/\.filte\.r\(/g, '.filter('],
  [/\.ma\.p\(/g, '.map('],
  [/\.reduc\.e\(/g, '.reduce('],
  [/\.fin\.d\(/g, '.find('],
  [/\.pus\.h\(/g, '.push('],
  [/\.lengt\.h/g, '.length'],
  [/\.typ\.e/g, '.type'],
  [/\.na\.m\.e/g, '.name'],
  [/\.valu\.e/g, '.value'],
  [/\.cou\.n\.t/g, '.count'],
  [/\.percenta\.g\.e/g, '.percentage'],
  [/\.ima\.g\.e/g, '.image'],
  [/\.tit\.l\.e/g, '.title'],
  [/\.catego\.r\.y/g, '.category'],
  [/\.pa\.t\.h/g, '.path'],
  [/\.vie\.w\.s/g, '.views'],
  [/\.uniqueVie\.w\.s/g, '.uniqueViews'],
  [/\.avgTimeOnPa\.g\.e/g, '.avgTimeOnPage'],
  [/\.descripti\.o\.n/g, '.description'],
  [/\.impa\.c\.t/g, '.impact'],
  [/\.recommendati\.o\.n/g, '.recommendation'],
  [/\.messa\.g\.e/g, '.message'],
  [/\.elemen\.t/g, '.element'],
  [/\.severit\.y/g, '.severity'],
  [/\.them\.e/g, '.theme'],
  [/\.reducedMotio\.n/g, '.reducedMotion'],
  [/\.locatio\.n\.hre\.f/g, '.location.href'],
  [/\.gt\.a\.g/g, '.gtag'],
  [/\.en\.v\.NODE_EN\.V/g, '.env.NODE_ENV'],
  [/\.tagNam\.e/g, '.tagName'],
  [/\.charA\.t\(/g, '.charAt('],
  [/\.colo\.r/g, '.color'],
  [/\.backgroundColo\.r/g, '.backgroundColor'],
  [/\.bod\.y/g, '.body'],
  [/\.overvie\.w/g, '.overview'],
  [/\.traffi\.c/g, '.traffic'],
  [/\.performanc\.e/g, '.performance'],
  [/\.vulnerabilitie\.s/g, '.vulnerabilities'],
  [/\.source\.s/g, '.sources'],
  [/\.device\.s/g, '.devices'],
  [/\.topPage\.s/g, '.topPages'],
  [/\.totalSessio\.n\.s/g, '.totalSessions'],
  [/\.uniqueUse\.r\.s/g, '.uniqueUsers'],
  [/\.pageVie\.w\.s/g, '.pageViews'],
  [/\.bounceRat\.e/g, '.bounceRate'],
  [/\.avgSessionDuratio\.n/g, '.avgSessionDuration'],
  [/\.conversionRat\.e/g, '.conversionRate'],
  [/\.ty\.p\.e/g, '.type'],
  
  // Fix broken boolean/null values
  [/fals, , e/g, 'false'],
  [/tru, , e/g, 'true'],
  [/nul, l/g, 'null'],
  [/fals, e/g, 'false'],
  [/tru, e/g, 'true'],
  [/nul l/g, 'null'],
  
  // Fix broken variable declarations
  [/const \[(\w+)set(\w+), (\w+)\] = useState/g, 'const [$1, set$2] = useState'],
  [/const \[(\w+)setIs(\w+), (\w+)\] = useState/g, 'const [$1, setIs$2] = useState'],
  [/const \[(\w+)setSelected(\w+), (\w+)\] = useState/g, 'const [$1, setSelected$2] = useState'],
  [/const \[(\w+)setActive(\w+), (\w+)\] = useState/g, 'const [$1, setActive$2] = useState'],
  
  // Fix broken object properties
  [/, , , , , , /g, ', '],
  [/, , /g, ', '],
  [/\(\w+, , , , , , \w+\)/g, (match) => match.replace(/, , , , , , /g, ', ')],
  [/\(\w+, , \w+\)/g, (match) => match.replace(/, , /g, ', ')],
  
  // Fix broken function parameters
  [/\((\w+), , , , , , (\w+)\) =>/g, '($1, $2) =>'],
  [/\((\w+), , (\w+)\) =>/g, '($1, $2) =>'],
  [/\((\w+)(\w+), , , , , , (\w+)\) =>/g, '($1, $2, $3) =>'],
  
  // Fix broken array/object syntax
  [/\](\w+): \[/g, '],\n  $1: ['],
  [/\](\w+):/g, '],\n  $1:'],
  [/\}(\w+): \{/g, '},\n  $1: {'],
  [/\}(\w+):/g, '},\n  $1:'],
  [/\}\{/g, '},\n  {'],
  [/\]\{/g, '],\n  {'],
  
  // Fix missing commas in objects
  [/(\w+): (\w+)(\w+): /g, '$1: $2,\n    $3: '],
  [/(\w+): '([^']+)'(\w+): /g, '$1: \'$2\',\n    $3: '],
  [/(\w+): "([^"]+)"(\w+): /g, '$1: "$2",\n    $3: '],
  [/(\w+): (\d+)(\w+): /g, '$1: $2,\n    $3: '],
  [/(\w+): (true|false)(\w+): /g, '$1: $2,\n    $3: '],
  
  // Fix React.FC syntax
  [/React\.F\.C</g, 'React.FC<'],
  
  // Fix useCallback/useEffect dependency arrays
  [/\}(\[[\w\s,\.]+\]);/g, '}, [$1]);'],
  [/\}(\[\]);/g, '}, []);'],
  
  // Fix console methods
  [/console\.erro\.r\(/g, 'console.error('],
  [/console\.lo\.g\(/g, 'console.log('],
  [/console\.war\.n\(/g, 'console.warn('],
  [/console\.inf\.o\(/g, 'console.info('],
  
  // Fix Math methods
  [/Math\.floo\.r\(/g, 'Math.floor('],
  [/Math\.roun\.d\(/g, 'Math.round('],
  [/Math\.rando\.m\(/g, 'Math.random('],
  
  // Fix parseInt
  [/parseInt\((\w+)\.tagNam\.e\.charA\.t\(, , , , , , (\d+)\)\)/g, 'parseInt($1.tagName.charAt($2))'],
  
  // Fix Date/Intl methods
  [/new Intl\.DateTimeForma\.t\(/g, 'new Intl.DateTimeFormat('],
  [/\.forma\.t\((\w+), , , , , , (\w+)\)/g, '.format($1)'],
  [/\.forma\.t\((\w+)\)/g, '.format($1)'],
  
  // Fix specific broken patterns
  [/element: (\w+) as HTMLElementrule:/g, 'element: $1 as HTMLElement,\n          rule:'],
  [/message: '([^']+)'element:/g, 'message: \'$1\',\n          element:'],
  [/type: '(\w+)', message: '([^']+)', element: (\w+) as HTMLElementrule: '([^']+)'/g, 'type: \'$1\',\n          message: \'$2\',\n          element: $3 as HTMLElement,\n          rule: \'$4\''],
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    for (const [pattern, replacement] of fixes) {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find all TypeScript/JavaScript files in src directory
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to check...`);

files.forEach(file => {
  fixFile(path.join(__dirname, file));
});

console.log('Syntax error fixing complete!');