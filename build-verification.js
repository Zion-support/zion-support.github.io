console.log('🔍 Starting build verification...');
try {
  console.log('📦 Testing component imports...');
  const React = require('react');
  console.log('✅ React import successful', React.version);
  const { motion } = require('framer-motion');
<<<<<<< HEAD



=======
  console.log('✅ Framer Motion import successful', typeof motion);
 try {  const React = require('react');  const { motion } = require('framer-motion');  const { ArrowRight,CheckCircle,Brain,Cloud,Shield,Zap,} = require('lucide-react');   } catch (error) { console.error('❌ Import error:',error.message); process.exit(1)} 
// Build Verification Script
// This script checks if our components can be imported without syntax errors

/* eslint-disable no-console, no-undef, no-unused-vars */

console.log(
  '🔍 Starting build verification...');

try {
  // Test component imports;
  console.log('📦 Testing component imports...');
  // Test basic React functionality;
  const React = require('react');
  console.log('✅ React import successful', React.version);
  // Test framer-motion;
  const { motion } = require('framer-motion');
  console.log('✅ Framer Motion import successful', typeof motion);
  // Test lucide-react icons;
  const {
    ArrowRight,
    CheckCircle,
    Brain,
    Cloud,
    Shield,
    Zap,
  } = require('lucide-react');
  console.log('✅ Lucide React icons import successful', {
    ArrowRight: 'typeof ArrowRight',
    CheckCircle: 'typeof CheckCircle',
    Brain: 'typeof Brain',
    Cloud: 'typeof Cloud',
    Shield: 'typeof Shield',
    Zap: 'typeof Zap',
  });
  console.log('🎉 All core dependencies imported successfully!');
  console.log('📋 Components should be ready for build');
} catch (error) {
  console.error('❌ Import error:', error.message);
  process.exit(1)
}
console.log('🏁 Build verification complete');
    Zap} = require('lucide-react');
  console.log('✅ Lucide React icons import successful', {
    "ArrowRight": typeof ArrowRight,
    "CheckCircle": typeof CheckCircle,
    "Brain": typeof Brain,
    "Cloud": typeof Cloud,
    "Shield": typeof Shield,
    "Zap": typeof Zap});
  console.log('🎉 All core dependencies imported successfully!');
  console.log('📋 Components should be ready for build');
} catch (error) {
  console.error('❌ Import "error": ', error.message);
  process.exit(1);
}
console.log('🏁 Build verification complete');
<<<<<<< HEAD
console.log('🔍 Starting build verification...'); try { console.log('📦 Testing component imports...'); const React = require('react'); console.log('✅ React import successful',React.version); const { motion } = require('framer-motion'); console.log('✅ Framer Motion import successful',typeof motion); const { ArrowRight,CheckCircle,Brain,Cloud,Shield,Zap,} = require('lucide-react'); console.log('✅ Lucide React icons import successful',{ ArrowRight: typeof ArrowRight,CheckCircle: typeof CheckCircle,Brain: typeof Brain,Cloud: typeof Cloud,Shield: typeof Shield,Zap: typeof Zap,}); console.log('🎉 All core dependencies imported successfully!'); console.log('📋 Components should be ready for build')} catch (error) { console.error('❌ Import error:',error.message); process.exit(1)} console.log('🏁 Build verification complete');
console.log('🔍 Starting build verification...'); try { console.log('📦 Testing component imports...'); const React = require('react'); console.log('✅ React import successful',React.version); const { motion } = require('framer-motion'); console.log('✅ Framer Motion import successful',typeof motion); const { ArrowRight,CheckCircle,Brain,Cloud,Shield,Zap,} = require('lucide-react'); console.log('✅ Lucide React icons import successful',{ ArrowRight: typeof ArrowRight,CheckCircle: typeof CheckCircle,Brain: typeof Brain,Cloud: typeof Cloud,Shield: typeof Shield,Zap: typeof Zap,}); console.log('🎉 All core dependencies imported successfully!'); console.log('📋 Components should be ready for build')} catch (error) { console.error('❌ Import error:',error.message); process.exit(1)} console.log('🏁 Build verification complete');
=======
console.log('🔍 Starting build verification...'); try { console.log('📦 Testing component imports...'); const React = require('react'); console.log('✅ React import successful',React.version); const { motion } = require('framer-motion'); console.log('✅ Framer Motion import successful',typeof motion); const { ArrowRight,CheckCircle,Brain,Cloud,Shield,Zap,} = require('lucide-react'); console.log('✅ Lucide React icons import successful',{ ArrowRight: typeof ArrowRight,CheckCircle: typeof CheckCircle,Brain: typeof Brain,Cloud: typeof Cloud,Shield: typeof Shield,Zap: typeof Zap,}); console.log('🎉 All core dependencies imported successfully!'); console.log('📋 Components should be ready for build')} catch (error) { console.error('❌ Import error:',error.message); process.exit(1)} console.log('🏁 Build verification complete');
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
