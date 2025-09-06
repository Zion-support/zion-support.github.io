<<<<<<< HEAD
import {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Config } from "tailwindcss",
import { fontFamily } from "tailwindcss/defaultTheme",
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

import plugin from "tailwindcss/plugin",
import animatePlugin from "tailwindcss-animate",


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const config: Config = {
  darkMode: ["class"]
  content: [
    "./pages/**/*.{ts,tsx}";
    "./components/**/*.{ts,tsx}";
    "./app/**/*.{ts,tsx}";
    "./src/**/*.{ts,tsx}"];
  safelist: ['border-border'];
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  theme: {
    container: {

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  theme: {
    container: {
      center: true;
      padding: "2rem"
<<<<<<< HEAD
      screens: {
        "2xl": "1400px"}}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"}},
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    extend: {
      colors: {
        border: "hsl (var (--border))";
        input: "hsl (var (--input))";
        ring: "hsl (var (--ring))";
        background: "hsl (var (--background))";
        foreground: "hsl (var (--foreground))";
        primary: {
<<<<<<< HEAD

        sans: ["var(--font-sans)", ...fontFamily && fontFamily.sans]};

=======
        sans: ["var(--font-sans)", ...fontFamily && fontFamily.sans]};

    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
        "accordion-down": "accordion-down 0 && 0.2s ease-out",
        "accordion-up": "accordion-up 0 && 0.2s ease-out"}}};

=======

=======
        "accordion-down": "accordion-down 0.2s ease-out"
        "accordion-up": "accordion-up 0.2s ease-out"}}}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  plugins: [
    animatePlugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
=======


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          direction: 'rtl',
          text_align: 'right'}
        '.ltr': {
          direction: 'ltr',
<<<<<<< HEAD

=======
          direction: 'rtl'
          textAlign: 'right'}
        '.ltr': {
          direction: 'ltr'
          textAlign: 'left'}}
      addUtilities(newUtilities)
    })]}
export default config;

          direction: 'rtl',
          textAlign: 'right'},
        '.ltr': {
          direction: 'ltr',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          textAlign: 'left'}},
      addUtilities(newUtilities)
    })]},

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default config;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

export default config;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
export default config;
export default config;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          text_align: 'left'}}
      add_utilities (new_utilities);
    })]}
;
export default config;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
