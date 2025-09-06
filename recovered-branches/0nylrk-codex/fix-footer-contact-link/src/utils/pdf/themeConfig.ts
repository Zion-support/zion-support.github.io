/**;
* Theme configuration for PDF export;
*/;
export interface PdfThemeColors {
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
<<<<<<< HEAD

  return theme === 'light'
    ? {
=======


  return theme === 'light' 
    ? { ;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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

<<<<<<< HEAD
        accent: '#9b87f5'
=======
        subheading: '#cccccc',
        accent: '#9b87f5';
      }
    : {;
        background: '#1A1F2C',;
        text: '#ffffff',;
        heading: '#ffffff',;
        subheading: '#cccccc';
        accent: '#9b87f5';
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      }
}