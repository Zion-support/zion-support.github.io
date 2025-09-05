
/**
 * Theme configuration for PDF export
 */
<<<<<<< HEAD
export interface PdfThemeColors {
  background: string,
  text: string,
  heading: string,
  subheading: string,
  accent: string
}
=======
export interface PdfThemeColors {_background: string;
  text: string;
  heading: string;
  subheading: string;
  accent: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function getPdfThemeColors(_theme: 'light' | 'dark'): PdfThemeColors {_return theme === 'light' 
    ? { 
<<<<<<< HEAD
        background: '#ffffff',
        text: '#000000',
        heading: '#222222',
        subheading: '#444444',
        accent: '#9b87f5'
      }
    : { 
        background: '#1A1F2C',
        text: '#ffffff',
        heading: '#ffffff',
        subheading: '#cccccc',
        accent: '#9b87f5'
      }
=======
        background: '#ffffff', _text: '#000000', _heading: '#222222', _subheading: '#444444', _accent: '#9b87f5'}
    : {_background: '#1A1F2C', _text: '#ffffff', _heading: '#ffffff', _subheading: '#cccccc', _accent: '#9b87f5'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
