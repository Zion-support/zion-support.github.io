const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all AI page files
const files = glob.sync('app/**/ai-*/page.tsx');

console.log(`Found ${files.length} AI page files to fix`);

let fixedCount = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Check if this file has JSX elements in data structures
    const hasJSXInData = /icon:\s*<[^>]+className="[^"]*"\s*\/>/.test(content);
    
    if (hasJSXInData) {
      console.log(`Fixing JSX in data structures: ${file}`);
      
      // Replace JSX elements in data structures with iconType strings
      content = content.replace(
        /icon:\s*<(\w+)\s+className="[^"]*"\s*\/>/g,
        'iconType: \'$1\''
      );
      
      // Update the rendering logic to use iconType instead of icon
      content = content.replace(
        /<(\w+)\.icon\s+className="[^"]*"\s*\/>/g,
        (match, variableName) => {
          return `{${variableName}.iconType === 'Zap' && <Zap className="w-8 h-8 text-cyan-400" />}
                  {${variableName}.iconType === 'Globe' && <Globe className="w-8 h-8 text-green-400" />}
                  {${variableName}.iconType === 'BarChart' && <BarChart className="w-8 h-8 text-purple-400" />}
                  {${variableName}.iconType === 'Brain' && <Brain className="w-8 h-8 text-orange-400" />}
                  {${variableName}.iconType === 'Workflow' && <Workflow className="w-8 h-8 text-blue-400" />}
                  {${variableName}.iconType === 'Settings' && <Settings className="w-8 h-8 text-indigo-400" />}
                  {${variableName}.iconType === 'Users' && <Users className="w-6 h-6 text-blue-400" />}
                  {${variableName}.iconType === 'Target' && <Target className="w-6 h-6 text-green-400" />}
                  {${variableName}.iconType === 'ShoppingCart' && <ShoppingCart className="w-6 h-6 text-purple-400" />}
                  {${variableName}.iconType === 'MessageCircle' && <MessageCircle className="w-6 h-6 text-purple-400" />}
                  {${variableName}.iconType === 'Server' && <Server className="w-6 h-6" />}
                  {${variableName}.iconType === 'Clock' && <Clock className="w-6 h-6" />}
                  {${variableName}.iconType === 'Shield' && <Shield className="w-8 h-8 text-green-400" />}
                  {${variableName}.iconType === 'BarChart3' && <BarChart3 className="w-8 h-8 text-purple-400" />}
                  {${variableName}.iconType === 'Calculator' && <Calculator className="w-8 h-8 text-purple-400" />}
                  {${variableName}.iconType === 'Building2' && <Building2 className="w-6 h-6 text-green-400" />}
                  {${variableName}.iconType === 'Send' && <Send className="w-8 h-8 text-emerald-400" />}
                  {${variableName}.iconType === 'TrendingUp' && <TrendingUp className="w-8 h-8 text-purple-400" />}
                  {${variableName}.iconType === 'DollarSign' && <DollarSign className="w-6 h-6 text-cyan-400" />}
                  {${variableName}.iconType === 'Activity' && <Activity className="w-6 h-6 text-purple-400" />}
                  {${variableName}.iconType === 'Lock' && <Lock className="w-6 h-6 text-red-400" />}
                  {${variableName}.iconType === 'Database' && <Database className="w-6 h-6" />}
                  {${variableName}.iconType === 'FileText' && <FileText className="w-6 h-6" />}
                  {${variableName}.iconType === 'CreditCard' && <CreditCard className="w-6 h-6" />}
                  {${variableName}.iconType === 'Wallet' && <Wallet className="w-6 h-6" />}
                  {${variableName}.iconType === 'Camera' && <Camera className="w-8 h-8 text-cyan-400" />}
                  {${variableName}.iconType === 'Receipt' && <Receipt className="w-6 h-6" />}
                  {${variableName}.iconType === 'Mail' && <Mail className="w-6 h-6 text-blue-400" />}
                  {${variableName}.iconType === 'Star' && <Star className="w-6 h-6 text-yellow-400" />}`;
        }
      );
      
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);