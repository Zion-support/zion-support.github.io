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
<<<<<<< HEAD
export function getPdfThemeColors(theme: 'light' | 'dark'): PdfThemeColors {

=======
export function getPdfThemeColors(theme: 'light' | 'dark'): PdfThemeColors {
<<<<<<< HEAD

  return theme === 'light'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    ? {
  return theme === 'light' 
    ? { ;
=======
export function getPdfThemeColors (theme: 'light' | 'dark'): PdfThemeColors {
  return theme === 'light';

    ? {
=======


  return theme === 'light' 
    ? { ;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
/**;
* Theme configuration for PDF export;
*/;
export interface PdfThemeColors {
  background: string;
  text: string;
  heading: string;
    ? {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        background: '#ffffff';
        text: '#000000';
        heading: '#222222';
      }
    : {
        background: '#1A1F2C';
        text: '#ffffff';
        heading: '#ffffff';
<<<<<<< HEAD

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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      }
}