import { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";";
const config: Config = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  darkMode: ["],"
  content: [
  // TODO: Add items
]
  // TODO: Add items
]
    ","
    ","
    ","
    "],"
    ","
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
      padding: ","
      screens: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        ": "1400 px"
        "2 xl"1400 px","hsl(var(--border))","hsl(var(--input))","hsl(var(--ring))","hsl(var(--background))","hsl(var(--foreground))","hsl(var(--primary))","hsl(var(--primary-foreground))"},"hsl(var(--secondary))","hsl(var(--secondary-foreground))"},"hsl(var(--destructive))","hsl(var(--destructive-foreground))"},"hsl(var(--muted))","hsl(var(--muted-foreground))"},"hsl(var(--accent))","hsl(var(--accent-foreground))"},"hsl(var(--popover))","hsl(var(--popover-foreground))"},"hsl(var(--card))","hsl(var(--card-foreground))"},"hsl(var(--primary-foreground))","hsl(var(--secondary))","hsl(var(--secondary-foreground))","hsl(var(--destructive))","hsl(var(--destructive-foreground))","hsl(var(--muted))","hsl(var(--muted-foreground))","hsl(var(--accent))","hsl(var(--accent-foreground))","hsl(var(--popover))","hsl(var(--popover-foreground))","hsl(var(--card))","hsl(var(--card-foreground))","zion-blue": {"#0 a0 f1 f","#1 e263 b","#090 c1 a"},"zion-purple": {"#a855 f7","#d8 b4 fe","#9333 ea"},"zion-cyan": {"#00 e5 ff","#7 df9 ff","#00 c4 cc"},"zion-slate": {"#94 A3 B8","#CBD5 E1","#64748 B"}},"var(--radius)","calc(var(--radius) - 2 px)","calc(var(--radius) - 4 px)"},"var(--font-sans)", ...fontFamily.sans]},"accordion-down": {"0" },"var(--radix-accordion-content-height)" }},"accordion-up": {"var(--radix-accordion-content-height)" },"0" }}},"accordion-down": ","
        ": "accordion-up 0.2 s ease-out"
          dark: "#090 c1 a"
        },
        "zion-purple"
          DEFAULT: "#a855 f7"
          light: "#d8 b4 fe"
          dark: "#9333 ea"
        },
        "zion-cyan"
          DEFAULT: "#00 e5 ff"
          light: "#7 df9 ff"
          dark: "#00 c4 cc"
        },
        "zion-slate"
          DEFAULT: "#94 A3 B8"
          light: "#CBD5 E1"
          dark: "#64748 B"
        },
      },
      borderRadius: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        lg: "var(--radius)"
        md: "calc(var(--radius) - 2 px)"
        sm: "calc(var(--radius) - 4 px)"
      },
      fontFamily: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        sans: ["var(--font-sans)"
      },
      keyframes: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        "accordion-down"
          from: { height: "0"
          to: { height: "var(--radix-accordion-content-height)"
        },
        "accordion-up"
          from: { height: "var(--radix-accordion-content-height)"
          to: { height: "0"
        },
      },
      animation: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        "accordion-down"accordion-down 0.2 s ease-out","accordion-up": ","
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