
/**
 * Theme configuration for PDF export
 */
export interface PdfThemeColors {_background: string;
  text: string;
  heading: string;
  subheading: string;
  accent: string;}

export function getPdfThemeColors(_theme: 'light' | 'dark'): PdfThemeColors {_return theme === 'light' 
    ? { 
        background: '#ffffff', _text: '#000000', _heading: '#222222', _subheading: '#444444', _accent: '#9b87f5'}
    : {_background: '#1A1F2C', _text: '#ffffff', _heading: '#ffffff', _subheading: '#cccccc', _accent: '#9b87f5'};
}
