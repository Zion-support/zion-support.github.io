export default {
  plugins: {
    tailwindcss: {},
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
};
