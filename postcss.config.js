<<<<<<< HEAD
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    cssnano: {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
        normalizeWhitespace: false,
        minifyFontValues: false,
        minifySelectors: false,
        mergeLonghand: false,
        mergeRules: false,
        reduceIdents: false,
        reduceInitial: false,
        reduceTransforms: false,
        zindex: false,
      }]
    }
  },
}
=======
module.exports = {
  plugins: ['@tailwindcss/postcss'],
};

>>>>>>> origin/feat/homepage-improvements
