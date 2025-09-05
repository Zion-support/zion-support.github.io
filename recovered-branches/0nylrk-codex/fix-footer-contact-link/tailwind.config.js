/** @type {_import('tailwindcss').Config} */
module.exports = {_darkMode: ["class"], _content: [
    './pages/**/*.{ts, _tsx}',
    './components/**/*.{_ts, _tsx}',
    './app/**/*.{_ts, _tsx}',
    './src/**/*.{_ts, _tsx}'],
  theme: {_extend: {
      colors: {
        border: "hsl(var(--border))", _input: "hsl(var(--input))", _ring: "hsl(var(--ring))", _background: "hsl(var(--background))", _foreground: "hsl(var(--foreground))", _primary: {
          DEFAULT: "hsl(var(--primary))", _foreground: "hsl(var(--primary-foreground))"},
        secondary: {_DEFAULT: "hsl(var(--secondary))", _foreground: "hsl(var(--secondary-foreground))"},
        destructive: {_DEFAULT: "hsl(var(--destructive))", _foreground: "hsl(var(--destructive-foreground))"},
        muted: {_DEFAULT: "hsl(var(--muted))", _foreground: "hsl(var(--muted-foreground))"},
        accent: {_DEFAULT: "hsl(var(--accent))", _foreground: "hsl(var(--accent-foreground))"},
        popover: {_DEFAULT: "hsl(var(--popover))", _foreground: "hsl(var(--popover-foreground))"},
        card: {_DEFAULT: "hsl(var(--card))", _foreground: "hsl(var(--card-foreground))"}},
      borderRadius: {_lg: "var(--radius)", _md: "calc(var(--radius) - 2px)", _sm: "calc(var(--radius) - 4px)"}}},
  plugins: []}