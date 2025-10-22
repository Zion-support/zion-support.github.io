import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix specific corrupted patterns
function fixCorruptedContent(content) {
  let fixed = content;
  
  // Fix corrupted React.Fragment tags
  fixed = fixed.replace(/<</React\.Fragment>Helmet>/g, '<Helmet>');
  fixed = fixed.replace(/<</div>section/g, '<section');
  fixed = fixed.replace(/<</div>h1/g, '<h1');
  fixed = fixed.replace(/<</div>div/g, '<div');
  
  // Fix malformed features array
  fixed = fixed.replace(/\s+title:\s*'[^']*',\s*}\s*];/g, '}];');
  fixed = fixed.replace(/\s+description:\s*'[^']*'\s*}\s*}\s*];/g, '}];');
  
  // Fix missing closing tags for anchor elements
  fixed = fixed.replace(/<a\s+[^>]*href="[^"]*"[^>]*>([^<]*)</g, (match, text) => {
    if (!match.includes('</a>')) {
      return match + '</a>';
    }
    return match;
  });
  
  // Fix missing closing tags for div elements
  fixed = fixed.replace(/<div\s+[^>]*className="[^"]*"[^>]*>([^<]*)</g, (match, text) => {
    if (!match.includes('</div>')) {
      return match + '</div>';
    }
    return match;
  });
  
  // Fix missing closing tags for section elements
  fixed = fixed.replace(/<section\s+[^>]*className="[^"]*"[^>]*>([^<]*)</g, (match, text) => {
    if (!match.includes('</section>')) {
      return match + '</section>';
    }
    return match;
  });
  
  // Fix missing closing tags for h1 elements
  fixed = fixed.replace(/<h1\s+[^>]*className="[^"]*"[^>]*>([^<]*)</g, (match, text) => {
    if (!match.includes('</h1>')) {
      return match + '</h1>';
    }
    return match;
  });
  
  // Fix missing closing tags for p elements
  fixed = fixed.replace(/<p\s+[^>]*className="[^"]*"[^>]*>([^<]*)</g, (match, text) => {
    if (!match.includes('</p>')) {
      return match + '</p>';
    }
    return match;
  });
  
  // Fix missing closing tags for h2 elements
  fixed = fixed.replace(/<h2\s+[^>]*className="[^"]*"[^>]*>([^<]*)</g, (match, text) => {
    if (!match.includes('</h2>')) {
      return match + '</h2>';
    }
    return match;
  });
  
  // Fix missing closing tags for h3 elements
  fixed = fixed.replace(/<h3\s+[^>]*className="[^"]*"[^>]*>([^<]*)</g, (match, text) => {
    if (!match.includes('</h3>')) {
      return match + '</h3>';
    }
    return match;
  });
  
  // Fix missing closing tags for span elements
  fixed = fixed.replace(/<span\s+[^>]*className="[^"]*"[^>]*>([^<]*)</g, (match, text) => {
    if (!match.includes('</span>')) {
      return match + '</span>';
    }
    return match;
  });
  
  // Fix missing closing tags for ul elements
  fixed = fixed.replace(/<ul\s+[^>]*className="[^"]*"[^>]*>([^<]*)</g, (match, text) => {
    if (!match.includes('</ul>')) {
      return match + '</ul>';
    }
    return match;
  });
  
  // Fix missing closing tags for li elements
  fixed = fixed.replace(/<li\s+[^>]*className="[^"]*"[^>]*>([^<]*)</g, (match, text) => {
    if (!match.includes('</li>')) {
      return match + '</li>';
    }
    return match;
  });
  
  // Fix missing closing tags for button elements
  fixed = fixed.replace(/<button\s+[^>]*className="[^"]*"[^>]*>([^<]*)</g, (match, text) => {
    if (!match.includes('</button>')) {
      return match + '</button>';
    }
    return match;
  });
  
  // Fix missing closing tags for React.Fragment
  fixed = fixed.replace(/<React\.Fragment>([^<]*)</g, (match, content) => {
    if (!match.includes('</React.Fragment>')) {
      return match + '</React.Fragment>';
    }
    return match;
  });
  
  // Fix missing closing tags for Helmet
  fixed = fixed.replace(/<Helmet>([^<]*)</g, (match, content) => {
    if (!match.includes('</Helmet>')) {
      return match + '</Helmet>';
    }
    return match;
  });
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Apply general fixes
  content = fixCorruptedContent(content);
  
  // Fix about page specific issues
  if (filePath.includes('about/page.tsx')) {
    // Fix the malformed features array
    content = content.replace(/\s+title:\s*'[^']*',\s*}\s*];/g, '}];');
    content = content.replace(/\s+description:\s*'[^']*'\s*}\s*}\s*];/g, '}];');
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