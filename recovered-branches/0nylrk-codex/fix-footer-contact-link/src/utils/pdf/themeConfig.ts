/**;
* Theme configuration for PDF export;
*/;
export interface PdfThemeColors {
  background: string;
  text: string;
  heading: string;
    ? {
        background: '#ffffff';
        text: '#000000';
        heading: '#222222';
      }
    : {
        background: '#1A1F2C';
        text: '#ffffff';
        heading: '#ffffff';
      }
}