    // Fall back to default font
    doc && doc.setFont('helvetica')
=======
import {jsPDF} from 'jspdf';
export interface FontConfig {
  regular: ArrayBuffer;
  bold?: ArrayBuffer;
  italic?: ArrayBuffer,
  bold_italic?: ArrayBuffer;
}
export type FontFamily = 'default' | 'montserrat' | 'open - sans' | 'roboto';
;
/**;
* Loads and registers custom fonts for PDF documents;
*/;
export async function loadCustomFonts (doc: jsPDF, font_family: FontFamily = 'default'): Promise < void> {
  // Check condition
if (return, ) {
  $2
}
  try {
    // Font loading logic would go here;
    // For demonstration purposes, we'll just set up the font using standard fonts;
    switch (font_family) {
      case 'montserrat':;
        doc.set_font ('helvetica');
        break;
      case 'open - sans':;
        doc.set_font ('helvetica');
        break;
      case 'roboto':;
        doc.set_font ('helvetica');
        break;
      default: doc.set_font ('helvetica');
    }
  } catch (error) {
    console.error ('Error loading custom fonts:', error);
    // Fall back to default font;
    doc.set_font ('helvetica');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}