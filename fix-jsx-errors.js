import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common JSX errors
function fixJsxErrors(content) {
  let fixed = content;
  
  // Fix missing closing tags for <a> elements
  fixed = fixed.replace(/<a\s+[^>]*href="[^"]*"[^>]*>([^<]*)</g, (match, text) => {
    if (!match.includes('</a>')) {
      return match + '</a>';
    }
    return match;
  });
  
  // Fix missing closing tags for <div> elements
  fixed = fixed.replace(/<div\s+[^>]*className="[^"]*"[^>]*>([^<]*)</g, (match, text) => {
    if (!match.includes('</div>')) {
      return match + '</div>';
    }
    return match;
  });
  
  // Fix malformed features array
  fixed = fixed.replace(/\s+description:\s*'[^']*'\s*}\s*}\s*];/g, '}];');
  
  // Fix missing closing tags for sections
  fixed = fixed.replace(/<section\s+[^>]*className="[^"]*"[^>]*>([^<]*)</g, (match, text) => {
    if (!match.includes('</section>')) {
      return match + '</section>';
    }
    return match;
  });
  
  // Fix React.Fragment closing tags
  fixed = fixed.replace(/<React\.Fragment>([^<]*)</g, (match, content) => {
    if (!match.includes('</React.Fragment>')) {
      return match + '</React.Fragment>';
    }
    return match;
  });
  
  // Fix missing closing tags in general
  const openTags = ['div', 'section', 'a', 'React.Fragment'];
  openTags.forEach(tag => {
    const tagRegex = new RegExp(`<${tag}(?:\\s+[^>]*)?>(?![^<]*</${tag}>)`, 'g');
    fixed = fixed.replace(tagRegex, (match) => {
      // Find the corresponding closing tag
      const tagName = tag === 'React.Fragment' ? 'React.Fragment' : tag;
      const closingTag = `</${tagName}>`;
      
      // If there's no closing tag, add one at the end of the content
      if (!fixed.includes(closingTag)) {
        return match + closingTag;
      }
      return match;
    });
  });
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix about page specific issues
  if (filePath.includes('about/page.tsx')) {
    // Fix the malformed features array
    content = content.replace(/\s+description:\s*'[^']*'\s*}\s*];/g, '}];');
    
    // Fix missing closing tags
    content = content.replace(/<a\s+[^>]*href="[^"]*"[^>]*>([^<]*)</g, (match, text) => {
      if (!match.includes('</a>')) {
        return match + '</a>';
      }
      return match;
    });
  }
  
  // Fix accessibility page specific issues
  if (filePath.includes('accessibility/page.tsx')) {
    // Fix missing import
    content = content.replace(/import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock } from 'lucide-react';const AccessibilityPage: React.FC = () => {/g, 
      `import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock, MousePointer, Volume2 } from 'lucide-react';

const AccessibilityPage: React.FC = () => {`);
  }
  
  // Fix chatbot builder specific issues
  if (filePath.includes('ai-chatbot-builder/page.tsx')) {
    // Fix malformed features array
    content = content.replace(/\s+description:\s*'[^']*'\s*}\s*}\s*];/g, '}];');
  }
  
  // Apply general fixes
  content = fixJsxErrors(content);
  
  return content;
}

// Main function to process all files
async function main() {
  const appDir = path.join(__dirname, 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  const files = await glob(pattern);
  files.forEach(filePath => {
    try {
      console.log(`Processing: ${filePath}`);
      const fixedContent = fixSpecificFile(filePath);
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });
  
  console.log('JSX error fixing completed!');
}

main().catch(console.error);