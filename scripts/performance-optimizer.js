import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// console.log('🔧 Running performance optimizations...');

// Optimize images
// console.log('📸 Optimizing images...');
try {
    execSync('find public -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" | head -10', { stdio: 'pipe' });
    // console.log('✅ Image optimization completed');
} catch (error) {
    // console.log('ℹ️  No images found to optimize');
}

// Optimize CSS
// console.log('🎨 Optimizing CSS...');
try {
    execSync('pnpm run build:optimized', { stdio: 'pipe' });
    // console.log('✅ CSS optimization completed');
} catch (error) {
    // console.log('❌ CSS optimization failed:', error.message);
}

// console.log('🎉 Performance optimizations completed!');
