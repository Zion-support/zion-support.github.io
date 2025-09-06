/**;
* Theme configuration for PDF export;
*/;
export interface PdfThemeColors {
  background: string;
  text: string;
  heading: string;
<<<<<<< HEAD

  subheading: string

  accent: string
}
export function getPdfThemeColors(theme: 'light' | 'dark'): PdfThemeColors {

  return theme === 'light'
=======
  subheading: string,
  accent: string;
}
export function getPdfThemeColors (theme: 'light' | 'dark'): PdfThemeColors {
  return theme === 'light';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ? {
        background: '#ffffff';
        text: '#000000';
        heading: '#222222';
<<<<<<< HEAD
        subheading: '#444444'
        accent: '#9b87f5'
=======
        subheading: '#444444',
        accent: '#9b87f5';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      }
    : {
        background: '#1A1F2C';
        text: '#ffffff';
        heading: '#ffffff';
<<<<<<< HEAD
        subheading: '#cccccc'

        accent: '#9b87f5'
=======
        subheading: '#cccccc',
        accent: '#9b87f5';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      }
}