<<<<<<< HEAD
<<<<<<< HEAD
import { Config } from "tailwindcss",
import { fontFamily } from "tailwindcss/defaultTheme",
import plugin from "tailwindcss/plugin",
import animatePlugin from "tailwindcss-animate",
=======
import { Config } from &quot;tailwindcss&quot;;
import { fontFamily } from &quot;tailwindcss/defaultTheme&quot;;
import plugin from &quot;tailwindcss/plugin&quot;;
import animatePlugin from &quot;tailwindcss-animate&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const config: Config = {
  darkMode: [&quot;class&quot;],
  content: [
    &quot;./pages/**/*.{ts,tsx}&quot;,
    &quot;./components/**/*.{ts,tsx}&quot;,
    &quot;./app/**/*.{ts,tsx}&quot;,
    &quot;./src/**/*.{ts,tsx}&quot;],
  safelist: ['border-border'],
  theme: {
    container: {
      center: true,
      padding: &quot;2rem&quot;,
      screens: {
        &quot;2xl&quot;: &quot;1400px&quot;}},
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
          foreground: &quot;hsl(var(--card-foreground))&quot;},
        // Custom Zion colors
        &quot;zion-blue&quot;: {
          DEFAULT: &quot;#0a0f1f&quot;,
          light: &quot;#1e263b&quot;,
          dark: &quot;#090c1a&quot;},
        &quot;zion-purple&quot;: {
          DEFAULT: &quot;#a855f7&quot;,
          light: &quot;#d8b4fe&quot;,
          dark: &quot;#9333ea&quot;},
        &quot;zion-cyan&quot;: {
          DEFAULT: &quot;#00e5ff&quot;,
          light: &quot;#7df9ff&quot;,
          dark: &quot;#00c4cc&quot;},
        &quot;zion-slate&quot;: {
          DEFAULT: &quot;#94A3B8&quot;,
          light: &quot;#CBD5E1&quot;,
          dark: &quot;#64748B&quot;}},
      borderRadius: {
        lg: &quot;var(--radius)&quot;,
        md: &quot;calc(var(--radius) - 2px)&quot;,
        sm: &quot;calc(var(--radius) - 4px)&quot;},
      fontFamily: {
        sans: [&quot;var(--font-sans)&quot;, ...fontFamily.sans]},
      keyframes: {
        &quot;accordion-down&quot;: {
          from: { height: &quot;0&quot; },
          to: { height: &quot;var(--radix-accordion-content-height)&quot; }},
        &quot;accordion-up&quot;: {
          from: { height: &quot;var(--radix-accordion-content-height)&quot; },
          to: { height: &quot;0&quot; }}},
      animation: {
        &quot;accordion-down&quot;: &quot;accordion-down 0.2s ease-out&quot;,
        &quot;accordion-up&quot;: &quot;accordion-up 0.2s ease-out&quot;}}},
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  plugins: [
    animatePlugin,
    plugin(function({_addUtilities}) {_const _newUtilities = {
        '.rtl': {
<<<<<<< HEAD
          direction: 'rtl',
          textAlign: 'right'},
        '.ltr': {
          direction: 'ltr',
          textAlign: 'left'}},
      addUtilities(newUtilities)
    })]},
=======
          direction: 'rtl', _textAlign: 'right'},
        '.ltr': {_direction: 'ltr', _textAlign: 'left'}};
      addUtilities(newUtilities);
    })]};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default config,