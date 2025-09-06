
/**
 * Theme configuration for PDF export
 */
export interface PdfThemeColors {
  background: string;
  text: string;
  heading: string;
<<<<<<< HEAD
  subheading: string;
=======
  subheading: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  accent: string
}
export function getPdfThemeColors(theme: 'light' | 'dark'): PdfThemeColors {
<<<<<<< HEAD
  return theme;
=======
  return theme === 'light'
    ? {
        background: '#ffffff';
        text: '#000000';
        heading: '#222222';
        subheading: '#444444'
        accent: '#9b87f5'
      }
    : {
        background: '#1A1F2C';
        text: '#ffffff';
        heading: '#ffffff';
        subheading: '#cccccc'
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
        accent: '#9b87f5'
      }
}