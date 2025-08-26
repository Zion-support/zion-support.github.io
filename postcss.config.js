module.exports = {
  plugins: {
    tailwindcss: {},
<<<<<<< HEAD
    'autoprefixer': {},
    'cssnano': process.env.NODE_ENV === 'production' ? {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
        normalizeWhitespace: true,
        colormin: true,
        minifyFontValues: true,
        minifySelectors: true,
      }]
    } : false,
=======
    autoprefixer: {},
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-97bc
  },
};
