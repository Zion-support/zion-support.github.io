export default {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {
      flexbox: 'no-2009',
      grid: 'autoplace',
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'Firefox ESR',
        'not dead',
        'not ie 11'
      ]
    },
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'media-query-ranges': true,
        'custom-properties': true,
        'custom-selectors': true,
        'logical-properties-and-values': true,
        'overflow-property': true,
        'focus-visible-pseudo-class': true,
        'focus-within-pseudo-class': true,
        'color-functional-notation': true,
        'cascade-layers': true,
        'is-pseudo-class': true,
        'clamp': true,
        'gap-properties': true,
        'double-position-gradients': true
      }
    }
  }
}
