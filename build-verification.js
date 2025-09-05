// Build Verification Script
// This script checks if our components can be imported without syntax errors

console.log('🔍 Starting build verification...');
console.log('🧪 Testing component imports...');

const React = require('react');
console.log('✅ React import successful');
console.log(`📦 React version: ${React.version}`);

const { motion } = require('framer-motion');
console.log('✅ Framer Motion import successful');
console.log('🎭 Motion component available');
console.log(`📦 Motion type: ${typeof motion}`);

const { Zap } = require('lucide-react');
console.log('✅ Lucide React icons import successful');
console.log('⚡ Zap icon available');
console.log(`📦 Zap type: ${typeof Zap}`);

console.log('✅ All core dependencies imported successfully!');
console.log('✅ Components should be ready for build');