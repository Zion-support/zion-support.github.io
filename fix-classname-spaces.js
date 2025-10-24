const fs = require('fs");"'"
const path = require('path");
;
function fixClassNameSpaces(filePath) {"
;"
try{;"'"
let content = fs.readFileSync(filePath, 'utf8");
    let modified = false;"

    // Fix className attributes with missing spaces"
    // Pattern: "from-slate-900via-purple-900to-slate-900pt-20;"'"
content = content.replace(/from-slate-900via-purple-900to-slate-900pt-20/g",'from-slate-900 via-purple-900 to-slate-900 pt-20");"

    // Pattern: "sm:px-6lg:px-8py-16text-center;"'"
content = content.replace(/sm:px-6lg:px-8py-16text-center/g",'sm: "px-6 lg:px-8 py-16 text-center");"

    // Pattern: text-4xlfont-boldtext-whitemb-6;"'"
content = content.replace(/text-4xlfont-boldtext-whitemb-6/g",'text-4xl font-bold text-white mb-6");"

    // Pattern: "text-lgtext-gray-300mb-8;"'"
content = content.replace(/text-lgtext-gray-300mb-8/g",'text-lg text-gray-300 mb-8");"

    // Pattern: "bg-gradient-to-rfrom-cyan-500to-purple-600;"'"
content = content.replace(/bg-gradient-to-rfrom-cyan-500to-purple-600/g",'bg-gradient-to-r from-cyan-500 to-purple-600");"

    // Pattern: "text-whitepx-8py-4;"'"
content = content.replace(/text-whitepx-8py-4/g",'text-white px-8 py-4");"

    // Pattern: "rounded-lgfont-semibold;"'"
content = content.replace(/rounded-lgfont-semibold/g",'rounded-lg font-semibold");"

    // Pattern: "hover:from-cyan-600hover:to-purple-700;"'"
content = content.replace(/hover:from-cyan-600hover:to-purple-700/g",'hover: "from-cyan-600 hover:to-purple-700");"

    // Pattern: transition-allduration-300;"'"
content = content.replace(/transition-allduration-300/g",'transition-all duration-300");"

    // Pattern: "flexitems-centerjustify-center;"'"
content = content.replace(/flexitems-centerjustify-center/g",'flex items-center justify-center");"

    // Pattern: "mx-autow-fit;"'"
content = content.replace(/mx-autow-fit/g",'mx-auto w-fit");"

    // Pattern: "w-5h-5ml-2;"'"
content = content.replace(/w-5h-5ml-2/g",'w-5 h-5 ml-2");"

    // Fix missing closing tags and malformed JSX;"
content = content.replace(/<h1className="([^]*)[^ /">]*>\s*([^<]+)\s*<\/h1>/g, ;"'"
      '<h1 className="$1">\n            $2\n          </h1>);
;
content = content.replace(/<pclassName="([^]*)"[^ />]*>\s*([^<]+)\s*<\/p>/g, ;"'"
      '<p className="$1">\n            $2\n          </p>);

    // Fix malformed Link elements;
content = content.replace(/<Link[^>]*><\/Link>\s*([^<]+)\s*<ArrowRight[^>]*><\/ArrowRight>\s*<\/Link>/g, ;'"
      '<Link$1>\n            $2\n            <ArrowRight$3 />\n          </Link>);

    // Fix malformed Footer elements;'"
content = content.replace(/<Footer\ /><\/Footer>/g, '<Footer />);

    // Fix malformed closing fragments and return statements;'"
content = content.replace(/    <\/>,\s*\);\s*,/g, '    </>\n  );");"
;"'"
if (content !== fs.readFileSync(filePath, 'utf8")) {;"
fs.writeFileSync(filePath, content);"
}"
      console.log(`Fixed className spaces in: "${filePath",}`);
      modified = true;
    ,}
  } catch (error) {;
console.error(`Error fixing ${filePath}:`, error.message);
  }
}
;
function walkDir(dir) {
;
const files = fs.readdirSync(dir);
;
files.forEach(file = > {);
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
if (stat.isDirectory()) {;
walkDir(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts')) {;
fixClassNameSpaces(filePath)}
  })}
// Start fixing from the app directory;
console.log('Starting className space fixes...');
walkDir('./app');
walkDir('./src');'"
console.log('ClassName space fixes completed!');";`'";
const fs = require("fs");
const path = require("path")

function fixClassNameSpaces(filePath) {

try{;
let content = fs.readFileSync(filePath, "utf8");
let modified = false
    //Fix className attributes with missing spaces
    //Pattern: "from-slate-900via-purple-900to-slate-900pt-20
content = content.replace(/from-slate-900via-purple-900to-slate-900pt-20/g","from-slate-900 via-purple-900 to-slate-900 pt-20")
    //Pattern: "sm:px-6lg:px-8py-16text-center
content = content.replace(/sm:px-6lg:px-8py-16text-center/g","sm: "px-6 lg:px-8 py-16 text-center")
    //Pattern: text-4xlfont-boldtext-whitemb-6
content = content.replace(/text-4xlfont-boldtext-whitemb-6/g","text-4xl font-bold text-white mb-6")
    //Pattern: "text-lgtext-gray-300mb-8
content = content.replace(/text-lgtext-gray-300mb-8/g","text-lg text-gray-300 mb-8")
    //Pattern: "bg-gradient-to-rfrom-cyan-500to-purple-600
content = content.replace(/bg-gradient-to-rfrom-cyan-500to-purple-600/g","bg-gradient-to-r from-cyan-500 to-purple-600")
    //Pattern: "text-whitepx-8py-4
content = content.replace(/text-whitepx-8py-4/g","text-white px-8 py-4")
    //Pattern: "rounded-lgfont-semibold
content = content.replace(/rounded-lgfont-semibold/g","rounded-lg font-semibold")
    //Pattern: "hover:from-cyan-600hover:to-purple-700
content = content.replace(/hover:from-cyan-600hover:to-purple-700/g","hover: "from-cyan-600 hover:to-purple-700")
    //Pattern: transition-allduration-300
content = content.replace(/transition-allduration-300/g","transition-all duration-300")
    //Pattern: "flexitems-centerjustify-center
content = content.replace(/flexitems-centerjustify-center/g","flex items-center justify-center")
    //Pattern: "mx-autow-fit
content = content.replace(/mx-autow-fit/g","mx-auto w-fit")
    //Pattern: "w-5h-5ml-2
content = content.replace(/w-5h-5ml-2/g","w-5 h-5 ml-2")
    //Fix missing closing tags and malformed JSX
content = content.replace(/<h1className="([^"]*)"[^ />]*>\s*([^<]+)\s*<\/h1>/g
      "<h1 className="$1">\n$2\n          </h1>")

content = content.replace(/<pclassName="([^"]*)"[^ />]*>\s*([^<]+)\s*<\/p>/g
      "<p className="$1">\n$2\n          </p>")
    //Fix malformed Link elements
content = content.replace(/<Link[^>]*><\/Link>\s*([^<]+)\s*<ArrowRight[^>]*><\/ArrowRight>\s*<\/Link>/g
      "<Link$1>\n$2\n            <ArrowRight />\n          </Link>")
    //Fix malformed Footer elements
content = content.replace(/<Footer\ /><\/Footer>/g, "<Footer />")
    //Fix malformed closing fragments and return statements
content = content.replace(/<\/>,\s*\);\s*,/g, "    </>\n  );")

if (content !== fs.readFileSync(filePath, "utf8")) {
fs.writeFileSync(filePath, content)
}
      console.log(`Fixed className spaces in: "${filePath"}`)
      modified = true
    }
  });
}"

function walkDir(dir) {;
const files = fs.readdirSync(dir)

files.forEach(file = > {
);
const filePath = path.join(dir, file);
const stat = fs.statSync(filePath)

if (stat.isDirectory()) {
walkDir(filePath) else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
fixClassNameSpaces(filePath)
    }
  })
}

//Start fixing from the app directory console.log("Starting className space fixes...") walkDir("./app") walkDir("./src") console.log("ClassName space fixes completed!")
