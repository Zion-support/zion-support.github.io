
  subheading: string,
  accent: string;
}
<<<<<<< HEAD
export function getPdfThemeColors (theme: 'light' | 'dark'): PdfThemeColors {
  return theme === 'light';

=======
export function getPdfThemeColors(theme: 'light' | 'dark'): PdfThemeColors {
<<<<<<< HEAD

  return theme === 'light'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    ? {
=======


  return theme === 'light' 
    ? { ;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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

        subheading: '#cccccc',
        accent: '#9b87f5';
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      }
}