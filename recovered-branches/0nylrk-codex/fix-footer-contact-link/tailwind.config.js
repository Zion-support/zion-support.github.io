<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [&quot;class&quot;],
  content: [
    './pages/**/*.{ts,tsx}./components/**/*.{ts,tsx}./app/**/*.{ts,tsx}./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: &quot;hsl(var(--border))&quot;,
        input: &quot;hsl(var(--input))&quot;,
        ring: &quot;hsl(var(--ring))&quot;,
        background: &quot;hsl(var(--background))&quot;,
        foreground: &quot;hsl(var(--foreground))&quot;,
        primary: {
          DEFAULT: &quot;hsl(var(--primary))&quot;,
          foreground: &quot;hsl(var(--primary-foreground))&quot;},
        secondary: {
          DEFAULT: &quot;hsl(var(--secondary))&quot;,
          foreground: &quot;hsl(var(--secondary-foreground))&quot;},
        destructive: {
          DEFAULT: &quot;hsl(var(--destructive))&quot;,
          foreground: &quot;hsl(var(--destructive-foreground))&quot;},
        muted: {
          DEFAULT: &quot;hsl(var(--muted))&quot;,
          foreground: &quot;hsl(var(--muted-foreground))&quot;},
        accent: {
          DEFAULT: &quot;hsl(var(--accent))&quot;,
          foreground: &quot;hsl(var(--accent-foreground))&quot;},
        popover: {
          DEFAULT: &quot;hsl(var(--popover))&quot;,
          foreground: &quot;hsl(var(--popover-foreground))&quot;},
        card: {
          DEFAULT: &quot;hsl(var(--card))&quot;,
          foreground: &quot;hsl(var(--card-foreground))&quot;}},
      borderRadius: {
        lg: &quot;var(--radius)&quot;,
        md: &quot;calc(var(--radius) - 2px)&quot;,
        sm: &quot;calc(var(--radius) - 4px)&quot;}}},
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  plugins: []}