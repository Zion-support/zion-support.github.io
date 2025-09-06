
  subheading: string,
  accent: string;
}
export function getPdfThemeColors (theme: 'light' | 'dark'): PdfThemeColors {
  return theme === 'light';

    ? {
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  return theme === 'light' 
    ? { ;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        background: '#ffffff';
        text: '#000000';
        heading: '#222222';

        subheading: '#444444',
        accent: '#9b87f5';

<<<<<<< HEAD
/**
 * Theme configuration for PDF export */
export interface PdfThemeColors {;
  background: string;
  text: string;
  heading: string;

  subheading: string

  accent: string
}
export function getPdfThemeColors(theme: 'light' | 'dark'): PdfThemeColors {

  return theme === 'light'
    ? {
  return theme === 'light' 
    ? { ;
        background: '#ffffff';
        text: '#000000';
        heading: '#222222';
        subheading: '#444444'
        accent: '#9b87f5'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
    : {
        background: '#1A1F2C';
        text: '#ffffff';
        heading: '#ffffff';
<<<<<<< HEAD
        subheading: '#cccccc'

        accent: '#9b87f5'
/**;
 * Theme configuration for PDF export */;
export interface PdfThemeColors {;
  background: string,;
  text: string,;
  heading: string,;
  subheading: string,;
  accent: string;
}
;
export function getPdfThemeColors(theme: 'light' | 'dark'): PdfThemeColors {;
  return theme === 'light';
    ? {;
        background: '#ffffff',;
        text: '#000000',;
        heading: '#222222',;
        subheading: '#444444',;
        accent: '#9b87f5';
      }
    : {;
        background: '#1A1F2C',;
        text: '#ffffff',;
        heading: '#ffffff',;
        subheading: '#cccccc';
        accent: '#9b87f5';
        subheading: '#cccccc',
        accent: '#9b87f5';

=======

        subheading: '#cccccc',
        accent: '#9b87f5';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
}