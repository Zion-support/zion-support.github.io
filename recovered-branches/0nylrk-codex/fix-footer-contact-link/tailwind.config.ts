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
  plugins: [
    animatePlugin,
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
          direction: 'rtl',
          textAlign: 'right'},
        '.ltr': {
          direction: 'ltr',
          textAlign: 'left'}},
      addUtilities(newUtilities)
    })]},

export default config,
=======
import { Config } from "tailwindcss",;
import { fontFamily } from "tailwindcss/defaultTheme",;
import plugin from "tailwindcss/plugin",;
import animatePlugin from "tailwindcss-animate",;
const config: Config = {;
  darkMode: ["class"],;
  content: [;
    "./pages/**/*.{ts,tsx}",;
    "./components/**/*.{ts,tsx}",;
    "./app/**/*.{ts,tsx}",;
    "./src/**/*.{ts,tsx}"],;
  safelist: ['border-border'],;
  theme: {;
    container: {;
      center: true,;
      padding: "2rem",;
      screens: {;
        "2xl": "1400px"}},;
    extend: {;
      colors: {;
        border: "hsl(var(--border))",;
        input: "hsl(var(--input))",;
        ring: "hsl(var(--ring))",;
        background: "hsl(var(--background))",;
        foreground: "hsl(var(--foreground))",;
        primary: {;
          DEFAULT: "hsl(var(--primary))",;
          foreground: "hsl(var(--primary-foreground))"},;
        secondary: {;
          DEFAULT: "hsl(var(--secondary))",;
          foreground: "hsl(var(--secondary-foreground))"},;
        destructive: {;
          DEFAULT: "hsl(var(--destructive))",;
          foreground: "hsl(var(--destructive-foreground))"},;
        muted: {;
          DEFAULT: "hsl(var(--muted))",;
          foreground: "hsl(var(--muted-foreground))"},;
        accent: {;
          DEFAULT: "hsl(var(--accent))",;
          foreground: "hsl(var(--accent-foreground))"},;
        popover: {;
          DEFAULT: "hsl(var(--popover))",;
          foreground: "hsl(var(--popover-foreground))"},;
        card: {;
          DEFAULT: "hsl(var(--card))",;
          foreground: "hsl(var(--card-foreground))"},;
        // Custom Zion colors;
        "zion-blue": {;
          DEFAULT: "#0a0f1f",;
          light: "#1e263b",;
          dark: "#090c1a"},;
        "zion-purple": {;
          DEFAULT: "#a855f7",;
          light: "#d8b4fe",;
          dark: "#9333ea"},;
        "zion-cyan": {;
          DEFAULT: "#00e5ff",;
          light: "#7df9ff",;
          dark: "#00c4cc"},;
        "zion-slate": {;
          DEFAULT: "#94A3B8",;
          light: "#CBD5E1",;
          dark: "#64748B"}},;
      borderRadius: {;
        lg: "var(--radius)",;
        md: "calc(var(--radius) - 2px)",;
        sm: "calc(var(--radius) - 4px)"},;
      fontFamily: {;
        sans: ["var(--font-sans)", ...fontFamily.sans]},;
      keyframes: {;
        "accordion-down": {;
          from: { height: "0" },;
          to: { height: "var(--radix-accordion-content-height)" }},;
        "accordion-up": {;
          from: { height: "var(--radix-accordion-content-height)" },;
          to: { height: "0" }}},;
      animation: {;
        "accordion-down": "accordion-down 0.2s ease-out",;
        "accordion-up": "accordion-up 0.2s ease-out"}}},;
  plugins: [;
    animatePlugin,;
    plugin(function({ addUtilities }) {;
      const newUtilities = {;
        '.rtl': {;
          direction: 'rtl',;
          textAlign: 'right'},;
        '.ltr': {;
          direction: 'ltr',;
          textAlign: 'left'}},;
      addUtilities(newUtilities);
    })]},;
export default config;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
