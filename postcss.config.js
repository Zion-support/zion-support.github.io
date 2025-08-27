<<<<<<< HEAD
export default {
=======
module.exports = {
  plugins: {
    tailwindcss: {},
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
  },
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
};
