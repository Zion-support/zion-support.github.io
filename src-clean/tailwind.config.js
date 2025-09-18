/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zion-blue': '#1e3a8a',
        'zion-blue-light': '#3b82f6',
        'zion-blue-lighter': '#60a5fa',
        'zion-cyan': '#06b6d4',
        'zion-cyan-light': '#22d3ee',
        'zion-purple': '#8b5cf6',
        'zion-purple-light': '#a78bfa',
        'zion-slate': '#475569',
        'zion-slate-light': '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}