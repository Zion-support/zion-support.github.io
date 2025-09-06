
import { jsPDF } from 'jspdf';
export interface FontConfig {
  regular: ArrayBuffer,
  bold?: ArrayBuffer,
  italic?: ArrayBuffer,
  boldItalic?: ArrayBuffer
}

export type FontFamily = $2;
/**
 * Loads and registers custom fonts for PDF documents
 */
export async function loadCustomFonts(doc: jsPDF, fontFamily: FontFamily = $2;
  try {
    // Font loading logic would go here
    // For demonstration purposes, we'll just set up the font using standard fonts
    
    switch (fontFamily) {
      case 'montserrat':
        doc.setFont($2);
        break,
      case 'open-sans':
        doc.setFont($2);
        break,
      case 'roboto':
        doc.setFont($2);
        break,
      default: doc.setFont('helvetica')
    }
  } catch (error) {
    console.error($2);
    // Fall back to default font
    doc.setFont('helvetica')
  }
}
