<<<<<<< HEAD
#!/usr/bin/env node;
=======
#!/usr/bin/env node

>>>>>>> pr-11913
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing remaining syntax errors...');

// Fix accessibility.tsx
const accessibilityPath = '/workspace/pages/accessibility.tsx';
let accessibilityContent = fs.readFileSync(accessibilityPath, 'utf8');

// Fix the broken structure around line 254
accessibilityContent = accessibilityContent.replace(
  /}\s*\)\s*;\s*}\s*\)\s*}\s*We adhere to internationally recognized accessibility standards and guidelines\.\s*<\/p>\s*<\/motion\.div>/g,
  `}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> pr-11914
// Function to fix remaining syntax errors in a file;
function fixRemainingSyntax(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix unterminated string constants;
    content = content.replace(/useState\("\)/g, 'useState("")');
    content = content.replace(/useState\('\)/g, "useState('')");
    content = content.replace(/parsed\.didHandle \|\| "\)/g, 'parsed.didHandle || "")');
    content = content.replace(/parsed\.didHandle \|\| '\)/g, "parsed.didHandle || '')");
    
    // Fix extra semicolons in object properties;
    content = content.replace(/,\s*';';/g, ',');
    content = content.replace(/,\s*';/g, ',');
    
    // Fix function parameters with TypeScript types;
    content = content.replace(/\("props": any\) => \{/g, '(props) => {');}
    content = content.replace(/\([^)]*: any\)/g, '($1)');
    
    // Fix supabase method calls;
    content = content.replace(/await supabase';/g, 'await supabase');
    content = content.replace(/\.from\('[^']*'\)';';/g, (match) => match.replace(/';';$/, ''));
    content = content.replace(/\.from\('[^']*'\)';/g, (match) => match.replace(/';$/, ''));
    content = content.replace(/\.delete\(\)';';/g, '.delete()');
    content = content.replace(/\.delete\(\)';/g, '.delete()');
    content = content.replace(/\.eq\('[^']*',[^)]*\)';';/g, (match) => match.replace(/';';$/, ''));
    content = content.replace(/\.eq\('[^']*',[^)]*\)';/g, (match) => match.replace(/';$/, ''));
    content = content.replace(/\.insert\([^)]*\)';';/g, (match) => match.replace(/';';$/, ''));
    content = content.replace(/\.insert\([^)]*\)';/g, (match) => match.replace(/';$/, ''));
    content = content.replace(/\.select\('[^']*'\)';';/g, (match) => match.replace(/';';$/, ''));
    content = content.replace(/\.select\('[^']*'\)';/g, (match) => match.replace(/';$/, ''));
    content = content.replace(/\.single\(\)';';/g, '.single()');
    content = content.replace(/\.single\(\)';/g, '.single()');
    
    // Fix comments with extra semicolons;
    content = content.replace(/\/\/ [^;]*';';/g, (match) => match.replace(/';';$/, ''));
    content = content.replace(/\/\/ [^;]*';/g, (match) => match.replace(/';$/, ''));
    
    // Fix standalone semicolons and quotes;
    content = content.replace(/^';';?\s*$/gm, '');
    content = content.replace(/^';\s*$/gm, '');
    
    // Fix multiple consecutive semicolons;
    content = content.replace(/;+;+/g, ';');
    
    // Fix multiple consecutive quotes;
    content = content.replace(/['"]+['"]+/g, '"');
    
    // Fix missing semicolons after statements;
    content = content.replace(/}\s*catch\s*\(/g, '} catch (');
    content = content.replace(/}\s*finally\s*\{/g, '} finally {');}
    
    // Fix missing semicolons after variable declarations;
    content = content.replace(/const\s+[^=]+=[^;]+(?!;)\s*}/g, (match) => {}
      if (!match.endsWith(';')) {}
        return match + ';';
      };
      return match;
    }
});
    
    // Fix missing semicolons after function calls;
    content = content.replace(/setDisplayWeb3\([^)]+\)(?!;)\s*}/g, (match) => {}
      if (!match.endsWith(';')) {}
        return match + ';';
      };
      return match;
    }
});
    
    // Write the fixed content back;
    if (content !== originalContent) {}
      fs.writeFileSync(filePath, content, 'utf8');
      
      return true;
    };
    return false;
  } catch (error) {}
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  };
};
// Function to recursively find and fix files;
function fixFilesInDirectory(dirPath) {}
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {}
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    // Fix malformed interface declarations
    content = content.replace(/interface\s+(\w+)\s*\{;/g, 'interface $1 {');
    
    // Fix malformed function declarations
    content = content.replace(/export\s+function\s+(\w+)\(props:\s*any\)\s*\{;/g, 'export function $1(props) {');
    content = content.replace(/export\s+default\s+function\s+(\w+)\(props:\s*any\)\s*\{\}/g, 'export default function $1(props) {');
    
    // Fix malformed return statements
    content = content.replace(/return\s*\(;/g, 'return (');
    content = content.replace(/return\s*\(\s*<div[^>]*>\s*;\s*$/gm, 'return (\n    <div>');
    
    // Fix malformed JSX
    content = content.replace(/<\/HTMLDivElement>/g, '');
    content = content.replace(/<\/HTMLInputElement>/g, '');
    content = content.replace(/<\/HTMLParagraphElement>/g, '');
    content = content.replace(/<\/h3>/g, '');
    
    // Fix malformed object destructuring
    content = content.replace(/const\s+\{\s*([^}]+)\s*\}\s*=\s*useAuth\(\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(\[\]\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(true\);\s*const\s+navigate\s*=\s*useNavigate\(\);\s*useEffect\(\(\)\s*=>\s*\{[^}]*\},\s*\[user\]\);\s*const\s+handleRequestHire\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};\s*return\s*\(<div[^>]*>([^<]*)<\/div>\);\s*}/g, (match, user, savedTalents, isLoading, content) => {
        return `const { ${user} } = useAuth();
    const [${savedTalents}] = useState([]);
    const [${isLoading}] = useState(true);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchSavedTalents = async () => {
            if (!user) return;
            try {
                setIsLoading(true);
                // Fetch saved talents logic here
            } catch (error) {
                console.error('Error fetching saved talents:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchSavedTalents();
    }, [user]);
    
    const handleRequestHire = (talentId) => {
        // Handle hire request logic here
=======
    if (stat.isDirectory()) {}
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {}
      if (fixRemainingSyntax(filePath)) {}
        fixedCount++;
      };
    };
  };
  return fixedCount;
// Main execution

const fixedCount = fixFilesInDirectory('./src');
=======
};
// Main execution;
console.log('Starting remaining syntax error fixing...');
const fixedCount = fixFilesInDirectory('./src');
console.log(`Fixed ${fixedCount} files with remaining syntax errors.`);
=======
        {/* Compliance Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Compliance & Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We adhere to internationally recognized accessibility standards and guidelines.
              </p>
            </motion.div>
`
);

fs.writeFileSync(accessibilityPath, accessibilityContent);
console.log('✅ Fixed accessibility.tsx');

// Fix cookies.tsx
const cookiesPath = '/workspace/pages/cookies.tsx';
let cookiesContent = fs.readFileSync(cookiesPath, 'utf8');

// Fix the broken structure
cookiesContent = cookiesContent.replace(
  /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g,
  `</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
`
);

fs.writeFileSync(cookiesPath, cookiesContent);
console.log('✅ Fixed cookies.tsx');

// Fix digital-transformation.tsx
const digitalPath = '/workspace/pages/digital-transformation.tsx';
let digitalContent = fs.readFileSync(digitalPath, 'utf8');

// Fix the broken structure
digitalContent = digitalContent.replace(
  /<\/motion\.div>\s*<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">/g,
  `</motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
`
);

fs.writeFileSync(digitalPath, digitalContent);
console.log('✅ Fixed digital-transformation.tsx');

// Fix guides.tsx
const guidesPath = '/workspace/pages/guides.tsx';
let guidesContent = fs.readFileSync(guidesPath, 'utf8');

// Fix the import issue
guidesContent = guidesContent.replace(
  /import Link from 'next\/link';';/g,
  `import Link from 'next/link';`
);

// Fix the broken structure
guidesContent = guidesContent.replace(
  /}\s*<div className="container mx-auto px-4 relative z-10">/g,
  `}

export default function Guides() {
  return (
    <Layout>
      <Head>
        <title>Guides & Resources - Zion Tech Group</title>
        <meta name="description" content="Comprehensive guides and resources for technology implementation and best practices." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 relative z-10">
`
);

fs.writeFileSync(guidesPath, guidesContent);
console.log('✅ Fixed guides.tsx');

// Fix faq.tsx
const faqPath = '/workspace/pages/faq.tsx';
let faqContent = fs.readFileSync(faqPath, 'utf8');

// Add missing closing tags
faqContent = faqContent.replace(
  /<\/>\s*$/g,
  `      </main>
    </Layout>
  );
}`
);

fs.writeFileSync(faqPath, faqContent);
console.log('✅ Fixed faq.tsx');

console.log('🎉 All syntax errors fixed!');
>>>>>>> pr-11913
