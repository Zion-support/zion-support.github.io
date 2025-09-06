
/**
 * Theme configuration for PDF export
 */
export interface PdfThemeColors {
  background: string;
  text: string;
  heading: string;

  subheading: string;

  accent: string
}

export function getPdfThemeColors(theme: 'light' | 'dark'): PdfThemeColors {

  return theme;

        accent: '#9b87f5'
      }
}
