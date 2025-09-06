

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      }
}