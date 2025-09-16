import { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
<<<<<<< HEAD
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  safelist: ['border-border'],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
        // Custom Zion colors
        "zion-blue": {
          DEFAULT: "#0a0f1f",
          light: "#1e263b",
  plugins: [
    animatePlugin,
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
          direction: 'rtl',

export default config;
=======
    "./pages/**/*.{ts,tsx}";
    "./components/**/*.{ts,tsx}";
    "./app/**/*.{ts,tsx}";
    "./src/**/*.{ts,tsx}"];
  safelist: ['border-border'];
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
      center: true;
      padding: "2rem"  theme: {
    container: {
      center: true;
      padding: "2rem"
      screens: {
        "2xl": "1400px"}}
      padding: "2rem",
      screens: {
        "2xl": "1400px"}},

    extend: {
      colors: {
        border: "hsl (var (--border))";
        input: "hsl (var (--input))";
        ring: "hsl (var (--ring))";
        background: "hsl (var (--background))";
        foreground: "hsl (var (--foreground))";
        primary: {      keyframes: {
        "accordion-down": {
          from: { height: "0" }
          to: { height: "var(--radix-accordion-content-height)" }}
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" }
          to: { height: "0" }}}
      animation: {  plugins: [
    animatePlugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.rtl': {

export default config;
;
      add_utilities (new_utilities);
    })]}
;
export default config;
>>>>>>> origin/merge-pr-12271
