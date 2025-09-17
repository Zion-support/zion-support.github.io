// Development helpers
const devHelpers = {
  // Hot reload for CSS
  watchCSS: () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('🎨 CSS hot reload enabled');
    }
  },
  
  // Error reporting in development
  logError: (error) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('🚨 Development Error:', error);
    }
  }
};

module.exports = devHelpers;
