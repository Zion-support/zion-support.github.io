#!/usr/bin/env node

import fs from 'fs';

const filePath = '/workspace/app/blog/page.tsx';

try {
  console.log('Fixing blog page...');
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Fix duplicate categories declarations
  let fixed = content.replace(
    /const categories = \['all', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Development'\];\s*const categories = \['all', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Development', 'Data Analytics', 'Emerging Technology'\];\s*const categories = \['all', \.\.\.Array\.from\(new Set\(blogPosts\.map\(post => post\.category\)\)\)\];/g,
    "const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))];"
  );
  
  // Fix misplaced imports
  fixed = fixed.replace(
    /  }, \[searchTerm, selectedCategory\]\);\s*import React, \{ useState \} from 'react';\s*import \{ Helmet \} from 'react-helmet-async';\s*import \{ Search, User, Calendar, Clock, ArrowRight \} from 'lucide-react';\s*const BlogPage: React\.FC = \(\) => \{/g,
    '  }, [searchTerm, selectedCategory]);\n\n  return ('
  );
  
  fs.writeFileSync(filePath, fixed);
  console.log('✓ Fixed blog page');
} catch (error) {
  console.error('Error fixing blog page:', error.message);
}