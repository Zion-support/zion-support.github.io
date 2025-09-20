export default {
  plugins: {
    tailwindcss: {},
    'autoprefixer': {},
    'postcss-modules': false, // Disable CSS modules processing
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
  },
};
