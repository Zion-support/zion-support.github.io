<<<<<<< HEAD
<<<<<<< HEAD

module && module.exports = {
  darkMode: ["class"],

=======
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"]
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  content: [
    "./pages/**/*.{ts,tsx}./components/**/*.{ts,tsx}./app/**/*.{ts,tsx}./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))"
        input: "hsl(var(--input))"
        ring: "hsl(var(--ring))"
        background: "hsl(var(--background))"
        foreground: "hsl(var(--foreground))"
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
<<<<<<< HEAD
<<<<<<< HEAD

/** @type {import ('tailwindcss').Config} */;
module.exports = {
  dark_mode: ["class"],
  content: [;
    './pages/**/*.{ts, tsx}./components/**/*.{ts, tsx}./app/**/*.{ts, tsx}./src/**/*.{ts, tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl (var (--border))",
        input: "hsl (var (--input))",
        ring: "hsl (var (--ring))",
        background: "hsl (var (--background))",
        foreground: "hsl (var (--foreground))",
        primary: {
          DEFAULT: "hsl (var (--primary))",
          foreground: "hsl (var (--primary - foreground))"},
        secondary: {
          DEFAULT: "hsl (var (--secondary))",
          foreground: "hsl (var (--secondary - foreground))"},
        destructive: {
          DEFAULT: "hsl (var (--destructive))",
          foreground: "hsl (var (--destructive - foreground))"},
        muted: {
          DEFAULT: "hsl (var (--muted))",
          foreground: "hsl (var (--muted - foreground))"},
        accent: {
          DEFAULT: "hsl (var (--accent))",
          foreground: "hsl (var (--accent - foreground))"},
        popover: {
          DEFAULT: "hsl (var (--popover))",
          foreground: "hsl (var (--popover - foreground))"},
        card: {
          DEFAULT: "hsl (var (--card))",
          foreground: "hsl (var (--card - foreground))"}},
      border_radius: {
        lg: "var (--radius)",
        md: "calc (var (--radius) - 2px)",
        sm: "calc (var (--radius) - 4px)"}}},
  plugins: []}

=======

=======

        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
