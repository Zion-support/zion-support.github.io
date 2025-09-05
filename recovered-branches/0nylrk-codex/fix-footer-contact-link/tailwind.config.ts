import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

const config: Config = {_darkMode: ["class"], _content: [
    "./pages/**/*.{ts, _tsx}",
    "./components/**/*.{_ts, _tsx}",
    "./app/**/*.{_ts, _tsx}",
    "./src/**/*.{_ts, _tsx}"],
  safelist: ['border-border'],
  theme: {_container: {
      center: true, _padding: "2rem", _screens: {
        "2xl": "1400px"}},
    extend: {_colors: {
        border: "hsl(var(--border))", _input: "hsl(var(--input))", _ring: "hsl(var(--ring))", _background: "hsl(var(--background))", _foreground: "hsl(var(--foreground))", _primary: {
          DEFAULT: "hsl(var(--primary))", _foreground: "hsl(var(--primary-foreground))"},
        secondary: {_DEFAULT: "hsl(var(--secondary))", _foreground: "hsl(var(--secondary-foreground))"},
        destructive: {_DEFAULT: "hsl(var(--destructive))", _foreground: "hsl(var(--destructive-foreground))"},
        muted: {_DEFAULT: "hsl(var(--muted))", _foreground: "hsl(var(--muted-foreground))"},
        accent: {_DEFAULT: "hsl(var(--accent))", _foreground: "hsl(var(--accent-foreground))"},
        popover: {_DEFAULT: "hsl(var(--popover))", _foreground: "hsl(var(--popover-foreground))"},
        card: {_DEFAULT: "hsl(var(--card))", _foreground: "hsl(var(--card-foreground))"},
        // Custom Zion colors
        "zion-blue": {_DEFAULT: "#0a0f1f", _light: "#1e263b", _dark: "#090c1a"},
        "zion-purple": {_DEFAULT: "#a855f7", _light: "#d8b4fe", _dark: "#9333ea"},
        "zion-cyan": {_DEFAULT: "#00e5ff", _light: "#7df9ff", _dark: "#00c4cc"},
        "zion-slate": {_DEFAULT: "#94A3B8", _light: "#CBD5E1", _dark: "#64748B"}},
      borderRadius: {_lg: "var(--radius)", _md: "calc(var(--radius) - 2px)", _sm: "calc(var(--radius) - 4px)"},
      fontFamily: {_sans: ["var(--font-sans)", _...fontFamily.sans]},
      keyframes: {_"accordion-down": {
          from: { height: "0"},
          to: {_height: "var(--radix-accordion-content-height)"}},
        "accordion-up": {_from: { height: "var(--radix-accordion-content-height)"},
          to: {_height: "0"}}},
      animation: {_"accordion-down": "accordion-down 0.2s ease-out", _"accordion-up": "accordion-up 0.2s ease-out"}}},
  plugins: [
    animatePlugin,
    plugin(function({_addUtilities}) {_const _newUtilities = {
        '.rtl': {
          direction: 'rtl', _textAlign: 'right'},
        '.ltr': {_direction: 'ltr', _textAlign: 'left'}};
      addUtilities(newUtilities);
    })]};

export default config;