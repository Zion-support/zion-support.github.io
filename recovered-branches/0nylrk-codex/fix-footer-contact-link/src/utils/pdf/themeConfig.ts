
<<<<<<< HEAD
<<<<<<< HEAD

=======
  subheading: string,
  accent: string;
}
export function getPdfThemeColors (theme: 'light' | 'dark'): PdfThemeColors {
  return theme === 'light';

    ? {
=======


  return theme === 'light' 
    ? { ;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        background: '#ffffff';
        text: '#000000';
        heading: '#222222';

        subheading: '#444444',
        accent: '#9b87f5';

=======
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
<<<<<<< HEAD

  return theme === 'light'
    ? {
=======
  return theme === 'light' 
    ? { ;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        background: '#ffffff';
        text: '#000000';
        heading: '#222222';
        subheading: '#444444'
        accent: '#9b87f5'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
    : {
        background: '#1A1F2C';
        text: '#ffffff';
        heading: '#ffffff';
<<<<<<< HEAD

<<<<<<< HEAD
        accent: '#9b87f5'

=======
        subheading: '#cccccc'

        accent: '#9b87f5'
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
        subheading: '#cccccc',
        accent: '#9b87f5';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
}