import { Config } from "tailwindcss",
import { fontFamily } from "tailwindcss/defaultTheme",
import plugin from "tailwindcss/plugin";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import animatePlugin from "tailwindcss-animate";
const config: Config = $2;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import animatePlugin from "tailwindcss-animate";
"
import plugin from "tailwindcss/plugin","
import animatePlugin from "tailwindcss-animate",

const config: Config = {

  darkMode: ["class"]
  content: [";
    "./pages/**/*.{ts,tsx}";"
    "./components/**/*.{ts,tsx}";"
    "./app/**/*.{ts,tsx}";"
<<<<<<< HEAD
    "./src/**/*.{ts,tsx}"];"
  "safelist": ['border-border'];'
import { font_family } from './tailwindcss / default_theme';'
import plugin from './tailwindcss / plugin';'
import animate_plugin from './tailwindcss - animate';'
  }
  "dark_mode": ["class"],"
  "content": [;
=======
    "./src/**/*.{ts,tsx}"];
  safelist: ['border-border'];

import animate_plugin from './tailwindcss - animate';
const config: Config = {"
  dark_mode: ["class"],
  content: [;"
>>>>>>> origin/chore/fix-lint-and-merge
    "./pages/**/*.{ts, tsx}";"
    "./components/**/*.{ts, tsx}";"
    "./app/**/*.{ts, tsx}";"
    "./src/**/*.{ts, tsx}"];'
  safelist: ['border - border'];

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
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
  theme: {
    container: {

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
>>>>>>> merged-prs-20250907-203621
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"],
  safelist: ['border-border'],
  theme: {
    container: {
      center: true;
      padding: "2rem"
      screens: {
        "2xl": "1400px"}}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      center: true,

      padding: "2rem",
      screens: {"
        "2xl": "1400px"}},

      padding: "2rem",
      screens: {
        "2xl": "1400px"}},
<<<<<<< HEAD
=======
<<<<<<< HEAD
        sans: ["var(--font-sans)", ...fontFamily && fontFamily.sans]};

>>>>>>> merged-prs-20250907-203621
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      keyframes: {
=======
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    extend: {
      colors: {
        border: "hsl (var (--border))";
        input: "hsl (var (--input))";
        ring: "hsl (var (--ring))";
        background: "hsl (var (--background))";
        foreground: "hsl (var (--foreground))";

    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      keyframes: {

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      keyframes: {

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        "accordion-down": {
          from: { height: "0" }
          to: { height: "var(--radix-accordion-content-height)" }}
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" }
          to: { height: "0" }}}
<<<<<<< HEAD

          DEFAULT: "hsl(var(--primary))",
=======
<<<<<<< HEAD
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out"
        "accordion-up": "accordion-up 0.2s ease-out"}}}
  plugins: [
    animatePlugin
    plugin(function({ addUtilities }) {
      const newUtilities = $2;
          textAlign: 'right'},
        '.ltr': {
          direction: 'ltr',
=======

<<<<<<< HEAD
          DEFAULT: "hsl(var(--primary))",
=======
<<<<<<< HEAD
        "accordion-down": "accordion-down 0.2s ease-out"
        "accordion-up": "accordion-up 0.2s ease-out"}}}
=======
        "accordion-down": "accordion-down 0 && 0.2s ease-out",
        "accordion-up": "accordion-up 0 && 0.2s ease-out"}}};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

  plugins: [

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  plugins: [

    animatePlugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          textAlign: 'left'}},
      addUtilities(newUtilities)
    })]},

<<<<<<< HEAD
=======
<<<<<<< HEAD
export default config,
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

  plugins: [;
    animate_plugin,
    plugin (function ({ add_utilities }) {
      const new_utilities = {
        '.rtl': {

          direction: 'rtl',
          text_align: 'right'}
        '.ltr': {
          direction: 'ltr',

        '.rtl': {;
          direction: 'rtl',;
          textAlign: 'right'},;
        '.ltr': {;
          direction: 'ltr',;
          textAlign: 'left'}},;

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

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          textAlign: 'left'}},
      addUtilities(newUtilities)
    })]},

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default config;
;
export default config;
export default config;
        // Custom Zion colors;"
      font_family: {,"

export default config;
;

      add_utilities (new_utilities);
    })]}
;
<<<<<<< HEAD
export default config;
=======
export default config;
=======
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
          text_align: 'right'}
        '.ltr': {
          direction: 'ltr',

          textAlign: 'left'}},
      addUtilities(newUtilities)
    })]},

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
