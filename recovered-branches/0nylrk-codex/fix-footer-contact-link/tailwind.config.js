<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */;
module.exports = {;
  darkMode:["class"],;
  content:[;
    './pages/**/*.{ts,tsx}./components/**/*.{ts,tsx}',;
    './app/**/*.{ts,tsx}./src/**/*.{ts,tsx}'],;
  theme:{;
    extend:{;
      colors:{;
        border:"hsl(var(--border))",;
        input:"hsl(var(--input))",;
        ring:"hsl(var(--ring))",;
        background:"hsl(var(--background))",;
        foreground:"hsl(var(--foreground))",;
        primary:{;
          DEFAULT:"hsl(var(--primary))",;
          foreground:"hsl(var(--primary-foreground))"},;
        secondary:{;
          DEFAULT:"hsl(var(--secondary))",;
          foreground:"hsl(var(--secondary-foreground))"},;
        destructive:{;
          DEFAULT:"hsl(var(--destructive))",;
          foreground:"hsl(var(--destructive-foreground))"},;
        muted:{;
          DEFAULT:"hsl(var(--muted))",;
          foreground:"hsl(var(--muted-foreground))"},;
        accent:{;
          DEFAULT:"hsl(var(--accent))",;
          foreground:"hsl(var(--accent-foreground))"},;
        popover:{;
          DEFAULT:"hsl(var(--popover))",;
          foreground:"hsl(var(--popover-foreground))"},;
        card:{;
          DEFAULT:"hsl(var(--card))",;
          foreground:"hsl(var(--card-foreground))"}},;
      borderRadius:{;
        lg:"var(--radius)",;
        md:"calc(var(--radius) - 2px)",;
        sm:"calc(var(--radius) - 4px)"}}},;
  plugins:[]}
=======
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
        sm: &quot;calc(var(--radius) - 4px)&quot;}}},  plugins: []}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
