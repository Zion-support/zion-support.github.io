<<<<<<< HEAD
<<<<<<< HEAD
import {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";
import { Config } from "tailwindcss",
import { fontFamily } from "tailwindcss/defaultTheme",
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";
"
import plugin from "tailwindcss/plugin","
import animatePlugin from "tailwindcss-animate",

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const config: Config = {
=======

const config: Config = {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  darkMode: ["class"]
  content: [";
    "./pages/**/*.{ts,tsx}";"
    "./components/**/*.{ts,tsx}";"
    "./app/**/*.{ts,tsx}";"
    "./src/**/*.{ts,tsx}"];
  safelist: ['border-border'];
import { font_family } from './tailwindcss / default_theme';
import plugin from './tailwindcss / plugin';
import animate_plugin from './tailwindcss - animate';
const config: Config = {"
  dark_mode: ["class"],
  content: [;"
    "./pages/**/*.{ts, tsx}";"
    "./components/**/*.{ts, tsx}";"
    "./app/**/*.{ts, tsx}";"
    "./src/**/*.{ts, tsx}"];'
  safelist: ['border - border'];
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  theme: {
    container: {

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { Config } from "tailwindcss",;
import { fontFamily } from "tailwindcss/defaultTheme",;
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

import plugin from "tailwindcss/plugin",
import animatePlugin from "tailwindcss-animate",
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
const config: Config = {
  darkMode: ["class"]
  content: [
    "./pages/**/*.{ts,tsx}";
    "./components/**/*.{ts,tsx}";
    "./app/**/*.{ts,tsx}";
    "./src/**/*.{ts,tsx}"];
  safelist: ['border-border'];
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  theme: {
    container: {

  theme: {
    container: {
      center: true;
      padding: "2rem"
      screens: {
        "2xl": "1400px"}}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      center: true,
      padding: "2rem",
      screens: {"
        "2xl": "1400px"}},
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      padding: "2rem",
      screens: {
        "2xl": "1400px"}},
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======
  theme: {
    container: {

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
  theme: {
    container: {
      center: true;
      padding: "2rem"  theme: {
    container: {
      center: true;
      padding: "2rem"
      screens: {
        "2xl": "1400px"}}
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"}},

>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
    extend: {
      colors: {
        border: "hsl (var (--border))";
        input: "hsl (var (--input))";
        ring: "hsl (var (--ring))";
        background: "hsl (var (--background))";
        foreground: "hsl (var (--foreground))";
<<<<<<< HEAD
<<<<<<< HEAD
        primary: {
<<<<<<< HEAD

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
      keyframes: {
=======
        primary: {      keyframes: {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        primary: {

        sans: ["var(--font-sans)", ...fontFamily && fontFamily.sans]};

      keyframes: {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      keyframes: {
        primary: {      keyframes: {
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
        "accordion-down": {
          from: { height: "0" }
          to: { height: "var(--radix-accordion-content-height)" }}
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" }
          to: { height: "0" }}}
<<<<<<< HEAD
<<<<<<< HEAD
      animation: {
<<<<<<< HEAD

<<<<<<< HEAD
        "accordion-down": "accordion-down 0 && 0.2s ease-out",
        "accordion-up": "accordion-up 0 && 0.2s ease-out"}}};
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"},
        secondary: {"
          DEFAULT: "hsl(var(--secondary))","
          foreground: "hsl(var(--secondary-foreground))"},
        destructive: {"
          DEFAULT: "hsl(var(--destructive))","
          foreground: "hsl(var(--destructive-foreground))"},
        muted: {"
          DEFAULT: "hsl(var(--muted))","
          foreground: "hsl(var(--muted-foreground))"},
        accent: {"
          DEFAULT: "hsl(var(--accent))","
          foreground: "hsl(var(--accent-foreground))"},
        popover: {"
          DEFAULT: "hsl(var(--popover))","
          foreground: "hsl(var(--popover-foreground))"},
        card: {"
          DEFAULT: "hsl(var(--card))","
          foreground: "hsl(var(--card-foreground))"},
        // Custom Zion colors"
        "zion-blue": {"
          DEFAULT: "#0a0f1f","
          light: "#1e263b","
          dark: "#090c1a"},"
        "zion-purple": {"
          DEFAULT: "#a855f7","
          light: "#d8b4fe","
          dark: "#9333ea"},"
        "zion-cyan": {"
          DEFAULT: "#00e5ff","
          light: "#7df9ff","
          dark: "#00c4cc"},"
        "zion-slate": {"
          DEFAULT: "#94A3B8","
          light: "#CBD5E1","
          dark: "#64748B"}},
      borderRadius: {"
        lg: "var(--radius)","
        md: "calc(var(--radius) - 2px)","
        sm: "calc(var(--radius) - 4px)"},
      fontFamily: {"
        sans: ["var(--font-sans)", ...fontFamily.sans]},
      keyframes: {"
        "accordion-down": {"
          from: { height: "0" },"
          to: { height: "var(--radix-accordion-content-height)" }},"
        "accordion-up": {"
          from: { height: "var(--radix-accordion-content-height)" },"
          to: { height: "0" }}},
      animation: {"
        "accordion-down": "accordion-down 0.2s ease-out","
        "accordion-up": "accordion-up 0.2s ease-out"}}},
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  plugins: [
=======
      animation: {  plugins: [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      animation: {  plugins: [
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      animation: {

        "accordion-down": "accordion-down 0 && 0.2s ease-out",
        "accordion-up": "accordion-up 0 && 0.2s ease-out"}}};

=======
      animation: {

        "accordion-down": "accordion-down 0 && 0.2s ease-out",
        "accordion-up": "accordion-up 0 && 0.2s ease-out"}}};

"accordion-down": "accordion-down 0.2s ease-out"
        "accordion-up": "accordion-up 0.2s ease-out"}}}
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    animatePlugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
<<<<<<< HEAD
<<<<<<< HEAD

  plugins: []
    animatePlugin;
    plugin(function({ addUtilities }) {}
      const newUtilities = {'
        '.rtl': {}
'
          direction: 'rtl','
          text_align: 'right'}'
        '.ltr': {'
          direction: 'ltr',
'
          textAlign: 'left'}},
      addUtilities(newUtilities)
    })]},

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default config,
import { Config } from "tailwindcss",;
import { fontFamily } from "tailwindcss/defaultTheme",;
import plugin from "tailwindcss/plugin",;
import animatePlugin from "tailwindcss-animate",;
const config: Config = {;"
  darkMode: ["class"],;
  content: [;"
    "./pages/**/*.{ts,tsx}",;"
    "./components/**/*.{ts,tsx}",;"
    "./app/**/*.{ts,tsx}",;"
    "./src/**/*.{ts,tsx}"],;'
  safelist: ['border-border'],;
  theme: {;
    container: {;
      center: true,;"
      padding: "2rem",;
      screens: {;"
        "2xl": "1400px"}},;
    extend: {;
      colors: {;"
        border: "hsl(var(--border))",;"
        input: "hsl(var(--input))",;"
        ring: "hsl(var(--ring))",;"
        background: "hsl(var(--background))",;"
        foreground: "hsl(var(--foreground))",;
        primary: {;"
          DEFAULT: "hsl(var(--primary))",;"
          foreground: "hsl(var(--primary-foreground))"},;
        secondary: {;"
          DEFAULT: "hsl(var(--secondary))",;"
          foreground: "hsl(var(--secondary-foreground))"},;
        destructive: {;"
          DEFAULT: "hsl(var(--destructive))",;"
          foreground: "hsl(var(--destructive-foreground))"},;
        muted: {;"
          DEFAULT: "hsl(var(--muted))",;"
          foreground: "hsl(var(--muted-foreground))"},;
        accent: {;"
          DEFAULT: "hsl(var(--accent))",;"
          foreground: "hsl(var(--accent-foreground))"},;
        popover: {;"
          DEFAULT: "hsl(var(--popover))",;"
          foreground: "hsl(var(--popover-foreground))"},;
        card: {;"
          DEFAULT: "hsl(var(--card))",;"
          foreground: "hsl(var(--card-foreground))"},;
        // Custom Zion colors;"
        "zion-blue": {;"
          DEFAULT: "#0a0f1f",;"
          light: "#1e263b",;"
          dark: "#090c1a"},;"
        "zion-purple": {;"
          DEFAULT: "#a855f7",;"
          light: "#d8b4fe",;"
          dark: "#9333ea"},;"
        "zion-cyan": {;"
          DEFAULT: "#00e5ff",;"
          light: "#7df9ff",;"
          dark: "#00c4cc"},;"
        "zion-slate": {;"
          DEFAULT: "#94A3B8",;"
          light: "#CBD5E1",;"
          dark: "#64748B"}},;
      borderRadius: {;"
        lg: "var(--radius)",;"
        md: "calc(var(--radius) - 2px)",;"
        sm: "calc(var(--radius) - 4px)"},;
      fontFamily: {;"
        sans: ["var(--font-sans)", ...fontFamily.sans]},;
      keyframes: {;"
        "accordion-down": {;"
          from: { height: "0" },;"
          to: { height: "var(--radix-accordion-content-height)" }},;"
        "accordion-up": {;"
          from: { height: "var(--radix-accordion-content-height)" },;"
          to: { height: "0" }}},;
      animation: {;"
        "accordion-down": "accordion-down 0.2s ease-out",;"
        "accordion-up": "accordion-up 0.2s ease-out"}}},;
  plugins: [;
    animatePlugin,;
    plugin(function({ addUtilities }) {;
      const newUtilities = {;'
        '.rtl': {;'
          direction: 'rtl',;'
          textAlign: 'right'},;'
        '.ltr': {;'
          direction: 'ltr',;'
          textAlign: 'left'}},;
      addUtilities(newUtilities);
    })]},;

direction: 'rtl',
          text_align: 'right'}
        '.ltr': {
          direction: 'ltr',

          textAlign: 'left'}},
      addUtilities(newUtilities)
    })]},

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default config;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
=======
=======
=======
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee

export default config;
;
      add_utilities (new_utilities);
    })]}
;
export default config;

import { Config } from "tailwindcss",""
import { fontFamily } from "tailwindcss/defaultTheme",""
import plugin from "tailwindcss/plugin";""
import animatePlugin from "tailwindcss-animate";""
import plugin from "tailwindcss/plugin",""
import animatePlugin from "tailwindcss-animate","
const config: Config = {,"
  darkMode: ["class"]"
  content: ["
    "./pages/**/*.{ts,tsx}";""
    "./components/**/*.{ts,tsx}";""
    "./app/**/*.{ts,tsx}";"]"
    "./src/**/*.{ts,tsx}"];""
  safelist: ['border-border'];
import { Config } from './tailwindcss';
import { font_family } from './tailwindcss / default_theme';
import plugin from './tailwindcss / plugin';
import animate_plugin from './tailwindcss - animate';
const config: Config = {,
  dark_mode: ["class"],"
  content: [;"
    "./pages/**/*.{ts, tsx}";""
    "./components/**/*.{ts, tsx}";""
    "./app/**/*.{ts, tsx}";"]"
    "./src/**/*.{ts, tsx}"];""
  safelist: ['border - border'];',
  theme: {
    container: {,
  center: true;
      padding: "2rem"",
  screens: {"
        "2xl": "1400px"}}"
      center: true,"
      padding: "2rem","
        "2xl": "1400px"}},"
    extend: {,
  colors: {"
        border: "hsl (var (--border))";","
  input: "hsl (var (--input))";""
        ring: "hsl (var (--ring))";","
  background: "hsl (var (--background))";""
        foreground: "hsl (var (--foreground))";",
  primary: {
"
        sans: ["var(--font-sans)", ...fontFamily && fontFamily.sans]};"
      keyframes: {"
        "accordion-down": {""
          from: { height: "0" }""
          to: { height: "var(--radix-accordion-content-height)" }}""
        "accordion-up": {""
          from: { height: "var(--radix-accordion-content-height)" }""
          to: { height: "0" }}}"
      animation: {
        "accordion-down": "accordion-down 0 && 0.2s ease-out",""
        "accordion-up": "accordion-up 0 && 0.2s ease-out"}}};""
          DEFAULT: "hsl(var(--primary))",""
          foreground: "hsl(var(--primary-foreground))"},"
        secondary: {,"
  DEFAULT: "hsl(var(--secondary))",""
          foreground: "hsl(var(--secondary-foreground))"},"
        destructive: {,"
  DEFAULT: "hsl(var(--destructive))",""
          foreground: "hsl(var(--destructive-foreground))"},"
        muted: {,"
  DEFAULT: "hsl(var(--muted))",""
          foreground: "hsl(var(--muted-foreground))"},"
        accent: {,"
  DEFAULT: "hsl(var(--accent))",""
          foreground: "hsl(var(--accent-foreground))"},"
        popover: {,"
  DEFAULT: "hsl(var(--popover))",""
          foreground: "hsl(var(--popover-foreground))"},"
        card: {,"
  DEFAULT: "hsl(var(--card))",""
          foreground: "hsl(var(--card-foreground))"},"
        // Custom Zion colors;"
        "zion-blue": {""
          DEFAULT: "#0a0f1f",""
          light: "#1e263b",""
          dark: "#090c1a"},""
        "zion-purple": {""
          DEFAULT: "#a855f7",""
          light: "#d8b4fe",""
          dark: "#9333ea"},""
        "zion-cyan": {""
          DEFAULT: "#00e5ff",""
          light: "#7df9ff",""
          dark: "#00c4cc"},""
        "zion-slate": {""
          DEFAULT: "#94A3B8",""
          light: "#CBD5E1",""
          dark: "#64748B"}},"
      borderRadius: {,"
  lg: "var(--radius)",""
        md: "calc(var(--radius) - 2px)",""
        sm: "calc(var(--radius) - 4px)"},"
      fontFamily: {,"
  sans: ["var(--font-sans)", ...fontFamily.sans]},"
          from: { height: "0" },""
          to: { height: "var(--radix-accordion-content-height)" }},""
          from: { height: "var(--radix-accordion-content-height)" },""
          to: { height: "0" }}},"
      animation: {"
        "accordion-down": "accordion-down 0.2s ease-out",""
        "accordion-up": "accordion-up 0.2s ease-out"}}},"
  plugins: [
    animatePlugin;
    plugin(function({ addUtilities }) {
      const newUtilities = {"
        '.rtl': {
          DEFAULT: "hsl (var (--primary))",""
          foreground: "hsl (var (--primary - foreground))"}"
  DEFAULT: "hsl (var (--secondary))",""
          foreground: "hsl (var (--secondary - foreground))"}"
  DEFAULT: "hsl (var (--destructive))",""
          foreground: "hsl (var (--destructive - foreground))"}"
  DEFAULT: "hsl (var (--muted))",""
          foreground: "hsl (var (--muted - foreground))"}"
  DEFAULT: "hsl (var (--accent))",""
          foreground: "hsl (var (--accent - foreground))"}"
  DEFAULT: "hsl (var (--popover))",""
          foreground: "hsl (var (--popover - foreground))"}"
  DEFAULT: "hsl (var (--card))",""
          foreground: "hsl (var (--card - foreground))"}"
        // Custom Zion colors;"
        "zion - blue": {""
          DEFAULT: "#0a0f1f";","
          dark: "#090c1a"}""
        "zion - purple": {""
          DEFAULT: "#a855f7";","
          dark: "#9333ea"}""
        "zion - cyan": {""
          DEFAULT: "#00e5ff";","
          dark: "#00c4cc"}""
        "zion - slate": {""
          DEFAULT: "#94A3B8";","
          dark: "#64748B"}}"
      border_radius: {,"
  lg: "var (--radius)";""
        md: "calc (var (--radius) - 2px)",""
        sm: "calc (var (--radius) - 4px)"}"
      font_family: {,]"
  sans: ["var (--font - sans)", ...font_family.sans]}"
        "accordion - down": {""
          to: { height: "var (--radix - accordion - content - height)" }}""
        "accordion - up": {""
          from: { height: "var (--radix - accordion - content - height)" }""
        "accordion - down": "accordion - down 0.2s ease - out",""
        "accordion - up": "accordion - up 0.2s ease - out"}}}"
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
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

=======
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
export default config;
;
export default config;
export default config;
        // Custom Zion colors;"
      font_family: {,"

>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910

export default config;
;

      add_utilities (new_utilities);
    })]}
;
export default config;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
          text_align: 'left'}}
export default config;
export default config;'
          text_align: 'left'}}'
      add_utilities (new_utilities);

    })]}
pr-12325
;
export default config;
'
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
