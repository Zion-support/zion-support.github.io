import { Config } from "tailwindcss",
import { fontFamily } from "tailwindcss/defaultTheme",
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

import plugin from "tailwindcss/plugin",
import animatePlugin from "tailwindcss-animate",

<<<<<<< HEAD



=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
const config: Config = {
  darkMode: ["class"]
  content: [
    "./pages/**/*.{ts,tsx}";
    "./components/**/*.{ts,tsx}";
    "./app/**/*.{ts,tsx}";
    "./src/**/*.{ts,tsx}"];
  safelist: ['border-border'];
<<<<<<< HEAD
import { Config } from './tailwindcss';
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { font_family } from './tailwindcss / default_theme';
import plugin from './tailwindcss / plugin';
import animate_plugin from './tailwindcss - animate';
const config: Config = {
  dark_mode: ["class"],
  content: [;
    "./pages/**/*.{ts, tsx}";
    "./components/**/*.{ts, tsx}";
    "./app/**/*.{ts, tsx}";
    "./src/**/*.{ts, tsx}"];
  safelist: ['border - border'];
  theme: {
    container: {
<<<<<<< HEAD


  theme: {
=======
      center: true;
      padding: "2rem"  theme: {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    container: {
      center: true;
      padding: "2rem"
      screens: {
        "2xl": "1400px"}}
<<<<<<< HEAD
      center: true,
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      padding: "2rem",
      screens: {
        "2xl": "1400px"}},

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    extend: {
      colors: {
        border: "hsl (var (--border))";
        input: "hsl (var (--input))";
        ring: "hsl (var (--ring))";
        background: "hsl (var (--background))";
        foreground: "hsl (var (--foreground))";
<<<<<<< HEAD
        primary: {

        sans: ["var(--font-sans)", ...fontFamily && fontFamily.sans]};

      keyframes: {
=======
        primary: {      keyframes: {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        "accordion-down": {
          from: { height: "0" }
          to: { height: "var(--radix-accordion-content-height)" }}
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" }
          to: { height: "0" }}}
<<<<<<< HEAD
      animation: {

        "accordion-down": "accordion-down 0 && 0.2s ease-out",
        "accordion-up": "accordion-up 0 && 0.2s ease-out"}}};

          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"},
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"},
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"},
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"},
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"},
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"},
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"},
        // Custom Zion colors
        "zion-blue": {
          DEFAULT: "#0a0f1f",
          light: "#1e263b",
          dark: "#090c1a"},
        "zion-purple": {
          DEFAULT: "#a855f7",
          light: "#d8b4fe",
          dark: "#9333ea"},
        "zion-cyan": {
          DEFAULT: "#00e5ff",
          light: "#7df9ff",
          dark: "#00c4cc"},
        "zion-slate": {
          DEFAULT: "#94A3B8",
          light: "#CBD5E1",
          dark: "#64748B"}},
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"},
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans]},
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }},
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }}},
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"}}},

  plugins: [
=======
      animation: {  plugins: [
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    animatePlugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.rtl': {

<<<<<<< HEAD
          DEFAULT: "hsl (var (--primary))",
          foreground: "hsl (var (--primary - foreground))"}
        secondary: {
          DEFAULT: "hsl (var (--secondary))",
          foreground: "hsl (var (--secondary - foreground))"}
        destructive: {
          DEFAULT: "hsl (var (--destructive))",
          foreground: "hsl (var (--destructive - foreground))"}
        muted: {
          DEFAULT: "hsl (var (--muted))",
          foreground: "hsl (var (--muted - foreground))"}
        accent: {
          DEFAULT: "hsl (var (--accent))",
          foreground: "hsl (var (--accent - foreground))"}
        popover: {
          DEFAULT: "hsl (var (--popover))",
          foreground: "hsl (var (--popover - foreground))"}
        card: {
          DEFAULT: "hsl (var (--card))",
          foreground: "hsl (var (--card - foreground))"}
        // Custom Zion colors;
        "zion - blue": {
          DEFAULT: "#0a0f1f";
          light: "#1e263b",
          dark: "#090c1a"}
        "zion - purple": {
          DEFAULT: "#a855f7";
          light: "#d8b4fe",
          dark: "#9333ea"}
        "zion - cyan": {
          DEFAULT: "#00e5ff";
          light: "#7df9ff",
          dark: "#00c4cc"}
        "zion - slate": {
          DEFAULT: "#94A3B8";
          light: "#CBD5E1",
          dark: "#64748B"}}
      border_radius: {
        lg: "var (--radius)";
        md: "calc (var (--radius) - 2px)",
        sm: "calc (var (--radius) - 4px)"}
      font_family: {
        sans: ["var (--font - sans)", ...font_family.sans]}
      keyframes: {
        "accordion - down": {
          from: { height: "0" }
          to: { height: "var (--radix - accordion - content - height)" }}
        "accordion - up": {
          from: { height: "var (--radix - accordion - content - height)" }
          to: { height: "0" }}}
      animation: {
        "accordion - down": "accordion - down 0.2s ease - out",
        "accordion - up": "accordion - up 0.2s ease - out"}}}
  plugins: [;
    animate_plugin,
    plugin (function ({ add_utilities }) {
      const new_utilities = {
        '.rtl': {
          direction: 'rtl',
          text_align: 'right'}
        '.ltr': {
          direction: 'ltr',

          textAlign: 'left'}},
      addUtilities(newUtilities)
    })]},

export default config,
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
          DEFAULT: "hsl (var (--primary))",
          foreground: "hsl (var (--primary - foreground))"}
        secondary: {
          DEFAULT: "hsl (var (--secondary))",
          foreground: "hsl (var (--secondary - foreground))"}
        destructive: {
          DEFAULT: "hsl (var (--destructive))",
          foreground: "hsl (var (--destructive - foreground))"}
        muted: {
          DEFAULT: "hsl (var (--muted))",
          foreground: "hsl (var (--muted - foreground))"}
        accent: {
          DEFAULT: "hsl (var (--accent))",
          foreground: "hsl (var (--accent - foreground))"}
        popover: {
          DEFAULT: "hsl (var (--popover))",
          foreground: "hsl (var (--popover - foreground))"}
        card: {
          DEFAULT: "hsl (var (--card))",
          foreground: "hsl (var (--card - foreground))"}
        // Custom Zion colors;
        "zion - blue": {
          DEFAULT: "#0a0f1f";
          light: "#1e263b",
          dark: "#090c1a"}
        "zion - purple": {
          DEFAULT: "#a855f7";
          light: "#d8b4fe",
          dark: "#9333ea"}
        "zion - cyan": {
          DEFAULT: "#00e5ff";
          light: "#7df9ff",
          dark: "#00c4cc"}
        "zion - slate": {
          DEFAULT: "#94A3B8";
          light: "#CBD5E1",
          dark: "#64748B"}}
      border_radius: {
        lg: "var (--radius)";
        md: "calc (var (--radius) - 2px)",
        sm: "calc (var (--radius) - 4px)"}
      font_family: {
        sans: ["var (--font - sans)", ...font_family.sans]}
      keyframes: {
        "accordion - down": {
          from: { height: "0" }
          to: { height: "var (--radix - accordion - content - height)" }}
        "accordion - up": {
          from: { height: "var (--radix - accordion - content - height)" }
          to: { height: "0" }}}
      animation: {
        "accordion - down": "accordion - down 0.2s ease - out",
        "accordion - up": "accordion - up 0.2s ease - out"}}}
  plugins: [;
    animate_plugin,
    plugin (function ({ add_utilities }) {
      const new_utilities = {
        '.rtl': {


          direction: 'rtl',
          text_align: 'right'}
        '.ltr': {
          direction: 'ltr',

          textAlign: 'left'}},
      addUtilities(newUtilities)
    })]},



export default config;
;
export default config;
export default config;
          text_align: 'left'}}
=======
export default config;
;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      add_utilities (new_utilities);
    })]}
;
export default config;
