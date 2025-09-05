

export interface FontConfig {_regular: ArrayBuffer;
  bold?: ArrayBuffer;
  italic?: ArrayBuffer;
  boldItalic?: ArrayBuffer;}

export type FontFamily = 'default' | 'montserrat' | 'open-sans' | 'roboto';

/**
 * Loads and registers custom fonts for PDF documents
 */
export async function loadCustomFonts(_doc: jsPDF, _fontFamily: FontFamily = 'default'): Promise<void> {_if (fontFamily === 'default') return;
  
  try {
    // Font loading logic would go here
    // For demonstration purposes, _we'll just set up the font using standard fonts
    
    switch (fontFamily) {
      case 'montserrat':
        doc.setFont('helvetica');
        break;
      case 'open-sans':
        doc.setFont('helvetica');
        break;
      case 'roboto':
        doc.setFont('helvetica');
        break;
      default:
        doc.setFont('helvetica');}
  } catch (error) {_// Fall back to default font
    doc.setFont('helvetica');}
}
