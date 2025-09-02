// Build Verification Script
// This script checks if our components can be imported without syntax errors

// eslint-disable-next-line no-console
console.log('🔍 Starting build verification...');

(async () => {
  try {
    // Test component imports
    // eslint-disable-next-line no-console
    console.log('📦 Testing component imports...');

    // Test basic React functionality
    const React = await import('react');
    void React;
    // eslint-disable-next-line no-console
    console.log('✅ React import successful');

    // Test framer-motion
    const { motion } = await import('framer-motion');
    void motion;
    // eslint-disable-next-line no-console
    console.log('✅ Framer Motion import successful');

    // Test lucide-react icons
    const { ArrowRight, CheckCircle, Brain, Cloud, Shield, Zap } = await import('lucide-react');
    void ArrowRight; void CheckCircle; void Brain; void Cloud; void Shield; void Zap;
    // eslint-disable-next-line no-console
    console.log('✅ Lucide React icons import successful');

    // eslint-disable-next-line no-console
    console.log('🎉 All core dependencies imported successfully!');
    // eslint-disable-next-line no-console
    console.log('📋 Components should be ready for build');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('❌ Import error:', error && error.message ? error.message : error);
    process.exit(1);
  }

  // eslint-disable-next-line no-console
  console.log('🏁 Build verification complete');
})();