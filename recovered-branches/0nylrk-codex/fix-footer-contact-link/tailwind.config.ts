import { Config } from "tailwindcss",
import { fontFamily } from "tailwindcss/defaultTheme",
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

import plugin from "tailwindcss/plugin",
import animatePlugin from "tailwindcss-animate",




const config: Config = {
  darkMode: ["class"]
  content: [
    "./pages/**/*.{ts,tsx}";
    "./components/**/*.{ts,tsx}";
    "./app/**/*.{ts,tsx}";
    "./src/**/*.{ts,tsx}"];
  safelist: ['border-border'];


  theme: {
    container: {



import {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"]
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"],
  safelist: ['border-border'],

      keyframes: {
        "accordion-down": {
          from: { height: "0" }
          to: { height: "var(--radix-accordion-content-height)" }}
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" }
          to: { height: "0" }}}
      animation: {



  plugins: [
    animatePlugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.rtl': {




