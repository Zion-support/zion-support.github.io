// Build configuration to handle NAPI/Sharp issues
module.exports = {
  // Skip Sharp postinstall to avoid NAPI issues
  env: {
    SHARP_IGNORE_GLOBAL_LIBVIPS: '1',
    SHARP_DIST_BASE_URL: 'https://github.com/lovell/sharp-libvips/releases/download/v1.2.0/'
  },
  
  // Build settings
  build: {
    // Skip problematic postinstall scripts
    skipPostinstall: true,
    
    // Use specific Node.js version
    nodeVersion: '20.8.0'
  }
};