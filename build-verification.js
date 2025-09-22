/*
  Build Verification Script
  Ensures core runtime dependencies can be imported without syntax/runtime errors.
*/

console.log('🔍 Starting build verification...');
try {
  console.log('📦 Testing component imports...');

  const React = require('react');
  console.log('✅ React import successful', React && React.version ? React.version : 'unknown');

  const { motion } = require('framer-motion');
  console.log('✅ Framer Motion import successful', typeof motion);

  const {
    ArrowRight,
    CheckCircle,
    Brain,
    Cloud,
    Shield,
    Zap,
  } = require('lucide-react');

  console.log('✅ Lucide React icons import successful', {
    ArrowRight: typeof ArrowRight,
    CheckCircle: typeof CheckCircle,
    Brain: typeof Brain,
    Cloud: typeof Cloud,
    Shield: typeof Shield,
    Zap: typeof Zap,
  });

  console.log('🎉 All core dependencies imported successfully!');
  console.log('📋 Components should be ready for build');
} catch (error) {
  console.error('❌ Import error:', error && error.message ? error.message : error);
  process.exit(1);
}
console.log('🏁 Build verification complete');
