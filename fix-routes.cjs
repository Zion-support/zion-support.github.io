#!/usr/bin/env node

const fs = require('fs');

function fixRoutes() {
  try {
    let content = fs.readFileSync('App.tsx', 'utf8');
    
    // Fix all Route elements with missing quotes
    content = content.replace(/<Route path="([^"]+) element={/g, '<Route path="$1" element={');
    
    fs.writeFileSync('App.tsx', content, 'utf8');
    console.log('Fixed Route elements');
    return true;
  } catch (error) {
    console.error('Error fixing routes:', error.message);
    return false;
  }
}

fixRoutes();