#!/usr/bin/env node

import fs from 'fs';

// Function to fix Navigation.tsx syntax errors
function fixNavigationSyntax(content) {
  // Fix missing spaces in JSX attributes
  content = content.replace(/hover:\s*text-cyan-400/g, 'hover:text-cyan-400');
  content = content.replace(/hover:\s*text-white/g, 'hover:text-white');
  content = content.replace(/hover:\s*scale-110/g, 'hover:scale-110');
  content = content.replace(/group-hover:\s*glow/g, 'group-hover:glow');
  
  // Fix missing spaces in className attributes
  content = content.replace(/className="([^"]*?)\s*,\s*([^"]*?)"/g, 'className="$1 $2"');
  
  // Fix semicolons in JSX elements
  content = content.replace(/<button;/g, '<button');
  content = content.replace(/<div;/g, '<div');
  content = content.replace(/<span;/g, '<span');
  content = content.replace(/<Link;/g, '<Link');
  
  // Fix missing spaces in JSX elements
  content = content.replace(/onClick={([^}]+)}className=/g, 'onClick={$1} className=');
  content = content.replace(/onClick={([^}]+)}onMouseEnter=/g, 'onClick={$1} onMouseEnter=');
  content = content.replace(/onClick={([^}]+)}onMouseLeave=/g, 'onClick={$1} onMouseLeave=');
  
  // Fix missing spaces in JSX text content
  content = content.replace(/Home;/g, 'Home');
  content = content.replace(/About;/g, 'About');
  content = content.replace(/Services;/g, 'Services');
  content = content.replace(/Contact;/g, 'Contact');
  
  // Fix missing spaces in className concatenation
  content = content.replace(/className={`([^`]*?)\s*,\s*([^`]*?)`}/g, 'className={`$1 $2`}');
  
  // Fix missing spaces in flex classes
  content = content.replace(/lg:\s*flex/g, 'lg:flex');
  content = content.replace(/sm:\s*px-6/g, 'sm:px-6');
  content = content.replace(/md:\s*px-8/g, 'md:px-8');
  
  // Fix missing spaces in transition classes
  content = content.replace(/transition-colors\s*duration-300/g, 'transition-colors duration-300');
  content = content.replace(/transition-transform\s*duration-300/g, 'transition-transform duration-300');
  
  // Fix missing spaces in shadow classes
  content = content.replace(/shadow-2xl\s*border/g, 'shadow-2xl border');
  content = content.replace(/shadow-lg\s*shadow-cyan-500/g, 'shadow-lg shadow-cyan-500');
  
  // Fix missing spaces in backdrop classes
  content = content.replace(/backdrop-blur-md\s*shadow-2xl/g, 'backdrop-blur-md shadow-2xl');
  content = content.replace(/backdrop-blur-xl\s*rounded-2xl/g, 'backdrop-blur-xl rounded-2xl');
  
  // Fix missing spaces in border classes
  content = content.replace(/border-cyan-500\/20/g, 'border-cyan-500/20');
  content = content.replace(/border-cyan-500\/30/g, 'border-cyan-500/30');
  
  // Fix missing spaces in text classes
  content = content.replace(/text-cyan-400\s*font-medium/g, 'text-cyan-400 font-medium');
  content = content.replace(/text-white\s*font-bold/g, 'text-white font-bold');
  
  // Fix missing spaces in spacing classes
  content = content.replace(/space-x-8/g, 'space-x-8');
  content = content.replace(/space-x-3/g, 'space-x-3');
  content = content.replace(/space-x-1/g, 'space-x-1');
  
  // Fix missing spaces in size classes
  content = content.replace(/w-4\s*h-4/g, 'w-4 h-4');
  content = content.replace(/w-6\s*h-6/g, 'w-6 h-6');
  content = content.replace(/w-10\s*h-10/g, 'w-10 h-10');
  
  // Fix missing spaces in position classes
  content = content.replace(/top-0\s*left-0/g, 'top-0 left-0');
  content = content.replace(/top-full\s*left-0/g, 'top-full left-0');
  
  // Fix missing spaces in margin classes
  content = content.replace(/mt-3\s*w-\[500px\]/g, 'mt-3 w-[500px]');
  content = content.replace(/mb-4\s*text-cyan-400/g, 'mb-4 text-cyan-400');
  
  // Fix missing spaces in padding classes
  content = content.replace(/p-6\s*cyber-card-enhanced/g, 'p-6 cyber-card-enhanced');
  content = content.replace(/px-4\s*sm:px-6/g, 'px-4 sm:px-6');
  
  // Fix missing spaces in rounded classes
  content = content.replace(/rounded-2xl\s*shadow-2xl/g, 'rounded-2xl shadow-2xl');
  content = content.replace(/rounded-xl\s*flex/g, 'rounded-xl flex');
  
  // Fix missing spaces in gradient classes
  content = content.replace(/from-cyan-500\s*via-purple-600/g, 'from-cyan-500 via-purple-600');
  content = content.replace(/via-purple-600\s*to-pink-600/g, 'via-purple-600 to-pink-600');
  
  // Fix missing spaces in flex classes
  content = content.replace(/flex\s*items-center/g, 'flex items-center');
  content = content.replace(/flex\s*flex-col/g, 'flex flex-col');
  content = content.replace(/flex\s*space-x-3/g, 'flex space-x-3');
  
  // Fix missing spaces in justify classes
  content = content.replace(/justify-center\s*group-hover:scale-110/g, 'justify-center group-hover:scale-110');
  content = content.replace(/justify-between\s*h-20/g, 'justify-between h-20');
  
  // Fix missing spaces in transition classes
  content = content.replace(/transition-all\s*duration-500/g, 'transition-all duration-500');
  content = content.replace(/transition-all\s*duration-300/g, 'transition-all duration-300');
  
  // Fix missing spaces in z-index classes
  content = content.replace(/z-50\s*transition-all/g, 'z-50 transition-all');
  
  // Fix missing spaces in max-width classes
  content = content.replace(/max-w-7xl\s*mx-auto/g, 'max-w-7xl mx-auto');
  
  // Fix missing spaces in height classes
  content = content.replace(/h-20\s*{/g, 'h-20');
  
  // Fix missing spaces in width classes
  content = content.replace(/w-\[500px\]\s*bg-slate-900/g, 'w-[500px] bg-slate-900');
  
  // Fix missing spaces in background classes
  content = content.replace(/bg-slate-900\/98\s*backdrop-blur-xl/g, 'bg-slate-900/98 backdrop-blur-xl');
  
  // Fix missing spaces in border classes
  content = content.replace(/border\s*border-cyan-500/g, 'border border-cyan-500');
  
  // Fix missing spaces in shadow classes
  content = content.replace(/shadow-2xl\s*border/g, 'shadow-2xl border');
  
  // Fix missing spaces in padding classes
  content = content.replace(/p-6\s*cyber-card-enhanced/g, 'p-6 cyber-card-enhanced');
  
  // Fix missing spaces in margin classes
  content = content.replace(/mb-4\s*text-cyan-400/g, 'mb-4 text-cyan-400');
  
  // Fix missing spaces in text classes
  content = content.replace(/text-cyan-400\s*font-medium/g, 'text-cyan-400 font-medium');
  
  // Fix missing spaces in tracking classes
  content = content.replace(/tracking-wider\s*">/g, 'tracking-wider">');
  
  // Fix missing spaces in font classes
  content = content.replace(/font-medium\s*tracking-wider/g, 'font-medium tracking-wider');
  
  // Fix missing spaces in text size classes
  content = content.replace(/text-2xl\s*font-bold/g, 'text-2xl font-bold');
  content = content.replace(/text-xs\s*text-cyan-400/g, 'text-xs text-cyan-400');
  
  // Fix missing spaces in neon classes
  content = content.replace(/neon-text-enhanced\s*group-hover:glow/g, 'neon-text-enhanced group-hover:glow');
  
  // Fix missing spaces in group classes
  content = content.replace(/group-hover:scale-110\s*transition-all/g, 'group-hover:scale-110 transition-all');
  
  // Fix missing spaces in duration classes
  content = content.replace(/duration-300\s*shadow-lg/g, 'duration-300 shadow-lg');
  
  // Fix missing spaces in shadow classes
  content = content.replace(/shadow-lg\s*shadow-cyan-500/g, 'shadow-lg shadow-cyan-500');
  
  // Fix missing spaces in opacity classes
  content = content.replace(/shadow-cyan-500\/25\s*">/g, 'shadow-cyan-500/25">');
  
  // Fix missing spaces in flex classes
  content = content.replace(/flex\s*items-center/g, 'flex items-center');
  content = content.replace(/flex\s*flex-col/g, 'flex flex-col');
  content = content.replace(/flex\s*space-x-3/g, 'flex space-x-3');
  
  // Fix missing spaces in justify classes
  content = content.replace(/justify-center\s*group-hover:scale-110/g, 'justify-center group-hover:scale-110');
  content = content.replace(/justify-between\s*h-20/g, 'justify-between h-20');
  
  // Fix missing spaces in transition classes
  content = content.replace(/transition-all\s*duration-500/g, 'transition-all duration-500');
  content = content.replace(/transition-all\s*duration-300/g, 'transition-all duration-300');
  
  // Fix missing spaces in z-index classes
  content = content.replace(/z-50\s*transition-all/g, 'z-50 transition-all');
  
  // Fix missing spaces in max-width classes
  content = content.replace(/max-w-7xl\s*mx-auto/g, 'max-w-7xl mx-auto');
  
  // Fix missing spaces in height classes
  content = content.replace(/h-20\s*{/g, 'h-20');
  
  // Fix missing spaces in width classes
  content = content.replace(/w-\[500px\]\s*bg-slate-900/g, 'w-[500px] bg-slate-900');
  
  // Fix missing spaces in background classes
  content = content.replace(/bg-slate-900\/98\s*backdrop-blur-xl/g, 'bg-slate-900/98 backdrop-blur-xl');
  
  // Fix missing spaces in border classes
  content = content.replace(/border\s*border-cyan-500/g, 'border border-cyan-500');
  
  // Fix missing spaces in shadow classes
  content = content.replace(/shadow-2xl\s*border/g, 'shadow-2xl border');
  
  // Fix missing spaces in padding classes
  content = content.replace(/p-6\s*cyber-card-enhanced/g, 'p-6 cyber-card-enhanced');
  
  // Fix missing spaces in margin classes
  content = content.replace(/mb-4\s*text-cyan-400/g, 'mb-4 text-cyan-400');
  
  // Fix missing spaces in text classes
  content = content.replace(/text-cyan-400\s*font-medium/g, 'text-cyan-400 font-medium');
  
  // Fix missing spaces in tracking classes
  content = content.replace(/tracking-wider\s*">/g, 'tracking-wider">');
  
  // Fix missing spaces in font classes
  content = content.replace(/font-medium\s*tracking-wider/g, 'font-medium tracking-wider');
  
  // Fix missing spaces in text size classes
  content = content.replace(/text-2xl\s*font-bold/g, 'text-2xl font-bold');
  content = content.replace(/text-xs\s*text-cyan-400/g, 'text-xs text-cyan-400');
  
  // Fix missing spaces in neon classes
  content = content.replace(/neon-text-enhanced\s*group-hover:glow/g, 'neon-text-enhanced group-hover:glow');
  
  // Fix missing spaces in group classes
  content = content.replace(/group-hover:scale-110\s*transition-all/g, 'group-hover:scale-110 transition-all');
  
  // Fix missing spaces in duration classes
  content = content.replace(/duration-300\s*shadow-lg/g, 'duration-300 shadow-lg');
  
  // Fix missing spaces in shadow classes
  content = content.replace(/shadow-lg\s*shadow-cyan-500/g, 'shadow-lg shadow-cyan-500');
  
  // Fix missing spaces in opacity classes
  content = content.replace(/shadow-cyan-500\/25\s*">/g, 'shadow-cyan-500/25">');
  
  return content;
}

// Read and fix the Navigation.tsx file
const filePath = '/workspace/app/components/Navigation.tsx';
let content = fs.readFileSync(filePath, 'utf8');

console.log('Fixing Navigation.tsx syntax errors...');
content = fixNavigationSyntax(content);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Navigation.tsx syntax errors fixed!');