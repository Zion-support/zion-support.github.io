<<<<<<< HEAD
import { Config } from "tailwindcss",
import { fontFamily } from "tailwindcss/defaultTheme",
import plugin from "tailwindcss/plugin";

=======
import { Config } from "tailwindcss","
import { fontFamily } from "tailwindcss/defaultTheme","
import plugin from "tailwindcss/plugin";"
import animatePlugin from "tailwindcss-animate";"
>>>>>>> origin/cursor/delete-old-data-records-6bba

import animatePlugin from "tailwindcss-animate";
"
import plugin from "tailwindcss/plugin","
import animatePlugin from "tailwindcss-animate","
const "config": Config = {
  }
  "darkMode": ["class"]"
  "content": [
    "./pages/**/*.{ts,tsx}";"
    "./components/**/*.{ts,tsx}";"
    "./app/**/*.{ts,tsx}";"
<<<<<<< HEAD

        "accordion-down": {
          from: { height: "0" }
          to: { height: "var(--radix-accordion-content-height)" }}
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" }
          to: { height: "0" }}}



=======
    "./src/**/*.{ts,tsx}"];"
  "safelist": ['border-border'];'
import { font_family } from './tailwindcss / default_theme';'
import plugin from './tailwindcss / plugin';'
import animate_plugin from './tailwindcss - animate';'
const "config": Config = {
  }
  "dark_mode": ["class"],"
  "content": [;
    "./pages/**/*.{ts, tsx}";"
    "./components/**/*.{ts, tsx}";"
    "./app/**/*.{ts, tsx}";"
    "./src/**/*.{ts, tsx}"];"
  "safelist": ['border - border'];'
  "theme": {
    }
    "container": {
      }
      "center": true;
      "padding": "2rem"  "theme": {"
    }
    "container": {
      }
      "center": true;
      "padding": "padding","
    "screens": {
        "2xl": "1400px"}"
      "padding": "2rem","
      "screens": {
        "2xl": "1400px"},"
    "extend": {
      }
      "colors": {
        }
        "border": "hsl (var (--border))";"
        "input": "hsl (var (--input))";"
        "ring": "hsl (var (--ring))";"
        "background": "hsl (var (--background))";"
        "foreground": "hsl (var (--foreground))";"
        "primary": {      "keyframes": {

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
      padding: "2rem"
      screens: {
        "2xl": "1400px"}}


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
          }
          "from": { "height": "0" }"
          "to": { "height": "var(--radix-accordion-content-height)" }"
        "accordion-up": {"
          }
          "from": { "height": "var(--radix-accordion-content-height)" }"
          "to": { "height": "0" }}"
      "animation": {  "plugins": [
    }
    animatePlugin,
plugin(function({ addUtilities }) {
      }
      const newUtilities = {
        '.rtl': {'
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  plugins: [

    animatePlugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
          textAlign: 'left'}},
      addUtilities(newUtilities)
    })]},

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

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


=======
export default config,
>>>>>>> origin/cursor/delete-old-data-records-6bba
          textAlign: 'left'}},
      addUtilities(newUtilities)
    })]},


<<<<<<< HEAD



=======
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

export default config;
>>>>>>> origin/cursor/delete-old-data-records-6bba
