#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing remaining syntax errors...');

// Fix specific files with known issues
const filesToFix = [
    'src/components/SEO.tsx',
    'src/components/ui/button.tsx',
    'src/components/ui/card.tsx',
    'src/components/ui/input.tsx',
    'src/components/talent/TalentCard.jsx'
];

function fixFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let fixes = 0;

    // Fix extra semicolons
    content = content.replace(/;\s*;/g, ';');
    content = content.replace(/;\s*$/gm, '');
    content = content.replace(/^\s*;\s*$/gm, '');
    
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
    };
    
    return (
        <div className="min-h-screen bg-gray-50">
            ${content}
        </div>
    );`;
    });

    // Fix malformed CSS classes
    content = content.replace(/focus-visible:\s*outlin\s*e-none/g, 'focus-visible:outline-none');
    content = content.replace(/focus-visible:\s*rin\s*g-2/g, 'focus-visible:ring-2');
    content = content.replace(/focus-visible:\s*rin\s*g-ring/g, 'focus-visible:ring-ring');
    content = content.replace(/focus-visible:\s*rin\s*g-offset-2/g, 'focus-visible:ring-offset-2');
    content = content.replace(/disabled:\s*opacit\s*y-50/g, 'disabled:opacity-50');
    content = content.replace(/disabled:\s*pointe\s*r-events-none/g, 'disabled:pointer-events-none');
    content = content.replace(/hover:\s*b\s*g-primary\/90/g, 'hover:bg-primary/90');

    // Fix malformed function calls
    content = content.replace(/const\s+handleBook\s*=\s*e\s*=>\s*\{\}/g, 'const handleBook = (e) => {');
    content = content.replace(/e\.preventDefault\(\);\s*$/gm, 'e.preventDefault();\n  }');

    // Fix malformed JSX attributes
    content = content.replace(/className=\{\`([^`]+)\`\}/g, (match, className) => {
        return `className={\`${className.replace(/\s+/g, ' ').trim()}\`}`;
    });

    // Fix malformed object properties
    content = content.replace(/const\s+variantClasses\s*=\s*\{;/g, 'const variantClasses = {');
    content = content.replace(/default:\s*'([^']+)',;/g, "default: '$1',");

    // Fix malformed return statements in functions
    content = content.replace(/return\s*\(\s*<div[^>]*>\s*;\s*<div[^>]*>\s*<div[^>]*><\/div>\s*<div[^>]*>\s*<div[^>]*>\s*<h1[^>]*>([^<]*)<\/h1>\s*<\/div>\s*<p[^>]*>([^<]*)<\/p>\s*<p[^>]*>([^<]*)<\/p>\s*<div[^>]*>\s*<Link[^>]*>([^<]*)<\/Link>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*\)/g, (match, title, desc1, desc2, linkText) => {
        return `return (
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                        ${title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">
                        ${desc1}
                    </p>
                    <p className="text-lg text-zion-cyan-light mb-12 max-w-3xl mx-auto">
                        ${desc2}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                            ${linkText}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );`;
    });

    // Count fixes
    const originalContent = fs.readFileSync(filePath, 'utf8');
    if (content !== originalContent) {
        fixes = (originalContent.match(/;\s*;/g) || []).length + 
                (originalContent.match(/interface\s+\w+\s*\{;/g) || []).length +
                (originalContent.match(/export\s+function\s+\w+\(props:\s*any\)\s*\{;/g) || []).length +
                (originalContent.match(/<\/HTMLDivElement>/g) || []).length +
                (originalContent.match(/<\/HTMLInputElement>/g) || []).length +
                (originalContent.match(/<\/HTMLParagraphElement>/g) || []).length +
                (originalContent.match(/<\/h3>/g) || []).length;
    }

    if (fixes > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed ${fixes} issues in ${filePath}`);
    } else {
        console.log(`✨ No issues found in ${filePath}`);
    }

    return fixes;
}

// Process all files
let totalFixes = 0;
filesToFix.forEach(file => {
    totalFixes += fixFile(file);
});

console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${filesToFix.length}`);
console.log(`   Total fixes applied: ${totalFixes}`);

if (totalFixes > 0) {
    console.log(`\n✨ Syntax error fixing completed!`);
} else {
    console.log(`\n✨ No syntax errors found to fix.`);
}