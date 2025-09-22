<<<<<<< HEAD
};
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}}};
=======
module.exports = {
  plugins: {
    tailwindcss: {},
=======
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      // Only process files in src/ and public/ directories
      content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './public/**/*.css',
      ],
      // Exclude static/css directory completely
      exclude: ['./static/**/*', '**/static/**/*'],
    },
>>>>>>> origin/auto/autonomy-17186719616
    autoprefixer: {},
  },
};
