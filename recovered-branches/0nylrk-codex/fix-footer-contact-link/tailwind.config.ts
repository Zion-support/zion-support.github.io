import { Config } from "tailwindcss";";
import { fontFamily } from "tailwindcss/defaultTheme";";
import plugin from "tailwindcss/plugin";";
import animatePlugin from "tailwindcss-animate";";";
const config: Config = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  darkMode: ["class"],"
  content: [
  // TODO: Add items
]
  // TODO: Add items
]
    "./pages/**/*.{ts,tsx}","
    "./components/**/*.{ts,tsx}","
    "./app/**/*.{ts,tsx}","
    "./src/**/*.{ts,tsx}"],"
    "./src/**/*.{ts,tsx}","
  ],
  safelist: ['border-border'],'
  theme: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    container: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      center: true,
      padding: "2rem","
      screens: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        "2xl": "1400px"}},"
        "2xl": "1400px","
      },
    },
    extend: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      colors: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        border: "hsl(var(--border))","
        input: "hsl(var(--input))","
        ring: "hsl(var(--ring))","
        background: "hsl(var(--background))","
        foreground: "hsl(var(--foreground))","
        primary: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          DEFAULT: "hsl(var(--primary))","
          foreground: "hsl(var(--primary-foreground))"},"
        secondary: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          DEFAULT: "hsl(var(--secondary))","
          foreground: "hsl(var(--secondary-foreground))"},"
        destructive: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          DEFAULT: "hsl(var(--destructive))","
          foreground: "hsl(var(--destructive-foreground))"},"
        muted: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          DEFAULT: "hsl(var(--muted))","
          foreground: "hsl(var(--muted-foreground))"},"
        accent: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          DEFAULT: "hsl(var(--accent))","
          foreground: "hsl(var(--accent-foreground))"},"
        popover: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          DEFAULT: "hsl(var(--popover))","
          foreground: "hsl(var(--popover-foreground))"},"
        card: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          DEFAULT: "hsl(var(--card))","
          foreground: "hsl(var(--card-foreground))"},"
          foreground: "hsl(var(--primary-foreground))","
        },
        secondary: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          DEFAULT: "hsl(var(--secondary))","
          foreground: "hsl(var(--secondary-foreground))","
        },
        destructive: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          DEFAULT: "hsl(var(--destructive))","
          foreground: "hsl(var(--destructive-foreground))","
        },
        muted: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          DEFAULT: "hsl(var(--muted))","
          foreground: "hsl(var(--muted-foreground))","
        },
        accent: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          DEFAULT: "hsl(var(--accent))","
          foreground: "hsl(var(--accent-foreground))","
        },
        popover: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          DEFAULT: "hsl(var(--popover))","
          foreground: "hsl(var(--popover-foreground))","
        },
        card: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          DEFAULT: "hsl(var(--card))","
          foreground: "hsl(var(--card-foreground))","
        },
        // Custom Zion colors
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
          dark: "#64748B"}},"
      borderRadius: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        lg: "var(--radius)","
        md: "calc(var(--radius) - 2px)","
        sm: "calc(var(--radius) - 4px)"},"
      fontFamily: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        sans: ["var(--font-sans)", ...fontFamily.sans]},"
      keyframes: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        "accordion-down": {"
          from: { height: "0" },"
          to: { height: "var(--radix-accordion-content-height)" }},"
        "accordion-up": {"
          from: { height: "var(--radix-accordion-content-height)" },"
          to: { height: "0" }}},"
      animation: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        "accordion-down": "accordion-down 0.2s ease-out","
        "accordion-up": "accordion-up 0.2s ease-out"}}},"
          dark: "#090c1a","
        },
        "zion-purple": {"
          DEFAULT: "#a855f7","
          light: "#d8b4fe","
          dark: "#9333ea","
        },
        "zion-cyan": {"
          DEFAULT: "#00e5ff","
          light: "#7df9ff","
          dark: "#00c4cc","
        },
        "zion-slate": {"
          DEFAULT: "#94A3B8","
          light: "#CBD5E1","
          dark: "#64748B","
        },
      },
      borderRadius: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        lg: "var(--radius)","
        md: "calc(var(--radius) - 2px)","
        sm: "calc(var(--radius) - 4px)","
      },
      fontFamily: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        sans: ["var(--font-sans)", ...fontFamily.sans],"
      },
      keyframes: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        "accordion-down": {"
          from: { height: "0" },"
          to: { height: "var(--radix-accordion-content-height)" },"
        },
        "accordion-up": {"
          from: { height: "var(--radix-accordion-content-height)" },"
          to: { height: "0" },"
        },
      },
      animation: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        "accordion-down": "accordion-down 0.2s ease-out","
        "accordion-up": "accordion-up 0.2s ease-out","
      },
    },
  },
  plugins: [
  // TODO: Add items
]
  // TODO: Add items
]
    animatePlugin,
    plugin(function({ addUtilities }) {;
const newUtilities = {
  // TODO: Add properties
}
  // TODO: Add properties
}
        '.rtl': {'
          direction: 'rtl','
          textAlign: 'right'},'
        '.ltr': {'
          direction: 'ltr','
          textAlign: 'left'}}'
      addUtilities(newUtilities)
    })]}
          textAlign: 'right','
        },
        '.ltr': {'
          direction: 'ltr','
          textAlign: 'left','
        },
      }
      addUtilities(newUtilities)
    }),
  ],
}
export default config;