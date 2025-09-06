
/**
 * Theme configuration for PDF export */
export interface PdfThemeColors {;
  background: string;
  text: string;
  heading: string;

  subheading: string

  accent: string
}
<<<<<<< HEAD
export function getPdfThemeColors(theme: 'light' | 'dark'): PdfThemeColors {
<<<<<<< HEAD
=======

=======
export function getPdfThemeColors(theme: 'light' | 'dark'): PdfThemeColors {
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD

  return theme === 'light'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    ? {
  return theme === 'light' 
    ? { ;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
export function getPdfThemeColors (theme: 'light' | 'dark'): PdfThemeColors {
  return theme === 'light';

    ? {
=======


  return theme === 'light' 
    ? { ;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
        background: '#ffffff';
        text: '#000000';
        heading: '#222222';

        subheading: '#444444',
        accent: '#9b87f5';

      }
    : {
        background: '#1A1F2C';
        text: '#ffffff';
        heading: '#ffffff';

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
<<<<<<< HEAD
      }
    : {;
        background: '#1A1F2C',;
        text: '#ffffff',;
        heading: '#ffffff',;
        subheading: '#cccccc';
        accent: '#9b87f5';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
      }
}