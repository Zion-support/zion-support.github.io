



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const config: Config = {
  darkMode: ["class"]
  content: [
    "./pages/**/*.{ts,tsx}";
    "./components/**/*.{ts,tsx}";
    "./app/**/*.{ts,tsx}";
    "./src/**/*.{ts,tsx}"];
  safelist: ['border-border'];
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Config } from './tailwindcss';
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
<<<<<<< HEAD
  theme: {
    container: {


<<<<<<< HEAD
import {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";
import { Config } from "tailwindcss",
import { fontFamily } from "tailwindcss/defaultTheme",
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

import plugin from "tailwindcss/plugin",
import animatePlugin from "tailwindcss-animate",
const config: Config = {
  darkMode: ["class"]
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"],
  safelist: ['border-border'],
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  theme: {
    container: {
      center: true;
      padding: "2rem"
      screens: {
        "2xl": "1400px"}}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"}},
<<<<<<< HEAD
<<<<<<< HEAD
        sans: ["var(--font-sans)", ...fontFamily && fontFamily.sans]};

    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
=======
    extend: {
      colors: {
        border: "hsl (var (--border))";
        input: "hsl (var (--input))";
        ring: "hsl (var (--ring))";
        background: "hsl (var (--background))";
        foreground: "hsl (var (--foreground))";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        primary: {
          DEFAULT: "hsl(var(--primary))"
          foreground: "hsl(var(--primary-foreground))"}
        secondary: {
          DEFAULT: "hsl(var(--secondary))"
          foreground: "hsl(var(--secondary-foreground))"}
        destructive: {
          DEFAULT: "hsl(var(--destructive))"
          foreground: "hsl(var(--destructive-foreground))"}
        muted: {
          DEFAULT: "hsl(var(--muted))"
          foreground: "hsl(var(--muted-foreground))"}
        accent: {
          DEFAULT: "hsl(var(--accent))"
          foreground: "hsl(var(--accent-foreground))"}
        popover: {
          DEFAULT: "hsl(var(--popover))"
          foreground: "hsl(var(--popover-foreground))"}
        card: {
          DEFAULT: "hsl(var(--card))"
          foreground: "hsl(var(--card-foreground))"}
        // Custom Zion colors
        "zion-blue": {
          DEFAULT: "#0a0f1f";
          light: "#1e263b"
          dark: "#090c1a"}
        "zion-purple": {
          DEFAULT: "#a855f7";
          light: "#d8b4fe"
          dark: "#9333ea"}
        "zion-cyan": {
          DEFAULT: "#00e5ff";
          light: "#7df9ff"
          dark: "#00c4cc"}
        "zion-slate": {
          DEFAULT: "#94A3B8";
          light: "#CBD5E1"
          dark: "#64748B"}}
      borderRadius: {
        lg: "var(--radius)";
        md: "calc(var(--radius) - 2px)"
        sm: "calc(var(--radius) - 4px)"}
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans]}
<<<<<<< HEAD
=======


    extend: {
      colors: {
        border: "hsl (var (--border))";
        input: "hsl (var (--input))";
        ring: "hsl (var (--ring))";
        background: "hsl (var (--background))";
        foreground: "hsl (var (--foreground))";
        primary: {

        sans: ["var(--font-sans)", ...fontFamily && fontFamily.sans]};

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      keyframes: {
        "accordion-down": {
          from: { height: "0" }
          to: { height: "var(--radix-accordion-content-height)" }}
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" }
          to: { height: "0" }}}
      animation: {
<<<<<<< HEAD

<<<<<<< HEAD
        "accordion-down": "accordion-down 0.2s ease-out"
        "accordion-up": "accordion-up 0.2s ease-out"}}}
=======
        "accordion-down": "accordion-down 0 && 0.2s ease-out",
        "accordion-up": "accordion-up 0 && 0.2s ease-out"}}};

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        "accordion-down": "accordion-down 0.2s ease-out"
        "accordion-up": "accordion-up 0.2s ease-out"}}}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  plugins: [
    animatePlugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          direction: 'rtl'
          textAlign: 'right'}
        '.ltr': {
          direction: 'ltr'
          textAlign: 'left'}}
      addUtilities(newUtilities)
    })]}
export default config;

          direction: 'rtl',
<<<<<<< HEAD
          textAlign: 'right'},
        '.ltr': {
          direction: 'ltr',
=======

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
=======


          direction: 'rtl',
          text_align: 'right'}
        '.ltr': {
          direction: 'ltr',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          textAlign: 'left'}},
      addUtilities(newUtilities)
    })]},

<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          text_align: 'right'}
        '.ltr': {
          direction: 'ltr',

          textAlign: 'left'}},
      addUtilities(newUtilities)
    })]},

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


export default config;
;
<<<<<<< HEAD
export default config;
export default config;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


export default config;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
