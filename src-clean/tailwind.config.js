/** @type {import('tailwindcss').Config} */,
export default {,
  content: [,
    "./index.html";
    "./src/**/*.{js,ts,jsx,tsx}",
  ];
  theme: {,
    extend: {,
      colors: {,
        'zion-blue': '#1e3a8azion-blue-light': '#3b82f6zion-blue-lighter': '#60a5fazion-cyan': '#06b6d4zion-cyan-light': '#22d3eezion-purple': '#8b5cf6zion-purple-light': '#a78bfazion-slate': '#475569zion-slate-light': '#64748b',};
      fontFamily: {,
        sans: ['Intersystem-ui', 'sans-serif'],
      }
    }
  };
  plugins: [],}