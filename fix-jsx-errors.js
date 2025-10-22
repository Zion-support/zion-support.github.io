#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common JSX errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix missing closing tags for <a> elements
  fixed = fixed.replace(/<a\s+([^>]*?)>(?!.*<\/a>)/g, (match, attrs) => {
    // Check if it's already closed
    if (match.includes('</a>')) return match;
    return match + '</a>';
  });
  
  // Fix missing closing tags for <div> elements
  fixed = fixed.replace(/<div\s+([^>]*?)>(?!.*<\/div>)/g, (match, attrs) => {
    if (match.includes('</div>')) return match;
    return match + '</div>';
  });
  
  // Fix missing closing tags for <section> elements
  fixed = fixed.replace(/<section\s+([^>]*?)>(?!.*<\/section>)/g, (match, attrs) => {
    if (match.includes('</section>')) return match;
    return match + '</section>';
  });
  
  // Fix duplicate array entries
  fixed = fixed.replace(/\s+description:\s*'[^']*'\s*}\s*}\s*];/g, '  }];');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/\s*}\s*}\s*];\s*const\s+benefits/g, '  }];\n\n  const benefits');
  
  // Fix missing closing tags in JSX maps
  fixed = fixed.replace(/(<div[^>]*>.*?<\/div>)\s*\)\s*}\s*\)\s*<\/div>\s*<\/section>/g, '$1\n                </div>\n              ))}\n            </div>\n          </div>\n        </section>');
  
  // Fix missing closing tags for React.Fragment
  fixed = fixed.replace(/<React\.Fragment>(?!.*<\/React\.Fragment>)/g, '<React.Fragment>');
  if (!fixed.includes('</React.Fragment>') && fixed.includes('<React.Fragment>')) {
    fixed = fixed.replace(/(\s*<\/div>\s*<\/div>\s*)$/, '$1\n    </React.Fragment>');
  }
  
  // Fix missing closing tags for div elements in specific patterns
  fixed = fixed.replace(/(<div[^>]*>.*?<span[^>]*>.*?<\/span>)\s*\)\s*}\s*\)\s*<\/div>\s*<\/section>/g, '$1\n                </div>\n              ))}\n            </div>\n          </div>\n        </section>');
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(filePath, content) {
  let fixed = content;
  
  // Fix about page specific issues
  if (filePath.includes('about/page.tsx')) {
    // Fix missing closing tag for the second <a> element
    fixed = fixed.replace(
      /<a\s+href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">\s*View All Services\s*<\/div>/g,
      '<a\n                href="/services"\n                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">\n                View All Services\n              </a>\n            </div>'
    );
    
    // Fix missing closing tag for the second <a> element in CTA section
    fixed = fixed.replace(
      /<a\s+href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">\s*Learn More\s*<\/div>/g,
      '<a\n                href="/services"\n                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">\n                Learn More\n              </a>\n            </div>'
    );
  }
  
  // Fix accessibility page specific issues
  if (filePath.includes('accessibility/page.tsx')) {
    // Fix missing imports
    fixed = fixed.replace(
      /import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock } from 'lucide-react';const AccessibilityPage/g,
      "import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock, MousePointer, Volume2 } from 'lucide-react';\n\nconst AccessibilityPage"
    );
    
    // Fix missing closing tags
    fixed = fixed.replace(
      /<a\s+href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">\s*View All Services\s*<\/div>/g,
      '<a\n                href="/services"\n                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">\n                View All Services\n              </a>\n            </div>'
    );
    
    fixed = fixed.replace(
      /<a\s+href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">\s*Learn More\s*<\/div>/g,
      '<a\n                href="/services"\n                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">\n                Learn More\n              </a>\n            </div>'
    );
  }
  
  // Fix chatbot builder specific issues
  if (filePath.includes('ai-chatbot-builder/page.tsx')) {
    // Fix duplicate array entry
    fixed = fixed.replace(
      /}\s*description:\s*'Scale effortlessly across multiple regions with automatic load balancing\.'\s*}\s*];/g,
      '  }];'
    );
  }
  
  return fixed;
}

// Main function to process all files
async function main() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} files to process...`);
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      let fixed = fixJSXErrors(content);
      fixed = fixSpecificFile(file, fixed);
      
      if (content !== fixed) {
        fs.writeFileSync(file, fixed, 'utf8');
        console.log(`Fixed: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log('JSX error fixing completed!');
}

main().catch(console.error);