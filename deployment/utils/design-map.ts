export type UIKitKind = "ios" | "android" | "web";

export interface TokenSet {
  colors: Record<string, string>;
  typography: Record<string, any>;
  spacing: Record<string, number>;
}

export interface DesignSystem {
  name: string;
  version: string;
  tokens: TokenSet;
  components: Record<string, any>;
}

export function getZionDesignMap(): Record<string, any> {
  return {
    "Color System": {
      "Primary Colors": "Blue, Purple, and Indigo gradients",
      "Secondary Colors": "Gray, White, and Black",
      "Accent Colors": "Green, Red, Yellow for status indicators"
    },
    "Typography": {
      "Headings": "Inter, system fonts for headings",
      "Body Text": "System fonts for body text",
      "Code": "Monospace fonts for code blocks"
    },
    "Spacing": {
      "Small": "4px, 8px, 12px",
      "Medium": "16px, 24px, 32px",
      "Large": "48px, 64px, 96px"
    },
    "Components": {
      "Buttons": "Primary, Secondary, Ghost, and Icon buttons",
      "Cards": "Default, Elevated, and Interactive cards",
      "Forms": "Input fields, Selects, Checkboxes, and Radio buttons",
      "Navigation": "Header, Footer, Sidebar, and Breadcrumbs",
      "Layout": "Grid, Flexbox, and Container components"
    },
    "Icons": {
      "Lucide React": "Primary icon library",
      "Custom Icons": "Brand-specific icons and illustrations"
    },
    "Animations": {
      "Transitions": "Smooth transitions for interactive elements",
      "Loading States": "Skeleton loaders and spinners",
      "Micro-interactions": "Hover effects and button animations"
    }
  };
}