const fs = require('fs');
const path = require('path');

// Function to fix icon issues in a file
function fixIconIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern to match icon: Component, iconProps: { className: "..." }
    const iconPattern = /icon:\s*(\w+),\s*iconProps:\s*\{\s*className:\s*"([^"]+)"\s*\}/g;
    
    // Replace with a string identifier approach
    content = content.replace(iconPattern, (match, component, className) => {
      modified = true;
      return `iconName: '${component}', iconClassName: '${className}'`;
    });

    // Pattern to match <object.icon {...object.iconProps} />
    const usagePattern = /<(\w+)\.icon\s+\{\.\.\.(\w+)\.iconProps\}/g;
    
    // Replace with a function call approach
    content = content.replace(usagePattern, (match, object, iconObject) => {
      modified = true;
      return `{React.createElement(iconComponents[${iconObject}.iconName], { className: ${iconObject}.iconClassName })}`;
    });

    // Add iconComponents mapping at the top of the component if not present
    if (modified && !content.includes('const iconComponents = {')) {
      const importMatch = content.match(/import.*from 'lucide-react';/);
      if (importMatch) {
        const importEnd = importMatch.index + importMatch[0].length;
        const iconComponentsMap = `\nconst iconComponents = {\n  Brain, FileText, MessageCircle, Target, Globe, Send, BarChart3, Shield, Zap, DollarSign, Clock, Star, Activity, Lock, CreditCard, Database, Building2, Sparkles, PieChart, ArrowRight, CheckCircle, TrendingUp, Users, Settings, Workflow, ShoppingCart, Server, Calculator, Wallet, Receipt, Camera, Mail, Star, PieChart, Sparkles\n};\n`;
        content = content.slice(0, importEnd) + iconComponentsMap + content.slice(importEnd);
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all .tsx files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (!['node_modules', '.next', '.git'].includes(file)) {
        fixedCount += fixAllFiles(filePath);
      }
    } else if (file.endsWith('.tsx')) {
      if (fixIconIssues(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix icon issues with final approach...');
const fixedCount = fixAllFiles(appDir);
console.log(`Fixed ${fixedCount} files`);