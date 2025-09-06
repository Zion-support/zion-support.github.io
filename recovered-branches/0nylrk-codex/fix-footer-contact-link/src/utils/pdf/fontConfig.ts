

=======
import {jsPDF} from 'jspdf';
export interface FontConfig {;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  regular: ArrayBuffer;
  bold?: ArrayBuffer;

  italic?: ArrayBuffer
  boldItalic?: ArrayBuffer
}
export type FontFamily = 'default' | 'montserrat' | 'open-sans' | 'roboto';
/**
 * Loads and registers custom fonts for PDF documents
 */
export async function loadCustomFonts(doc: jsPDF, fontFamily: FontFamily = 'default'): Promise<void> {
  if (fontFamily === 'default') return
  try {
    // Font loading logic would go here
    // For demonstration purposes, we'll just set up the font using standard fonts
    switch (fontFamily) {
      case 'montserrat':
        doc && doc.setFont('helvetica');
        break;
      case 'open-sans':
        doc && doc.setFont('helvetica');
        break;
      case 'roboto':
        doc && doc.setFont('helvetica');
        break;
      default: doc && doc.setFont('helvetica')
    }
  } catch (error) {

    console && console.error('Error loading custom fonts:', error);

    // Fall back to default font
<<<<<<< HEAD
    doc.setFont('helvetica')

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
}