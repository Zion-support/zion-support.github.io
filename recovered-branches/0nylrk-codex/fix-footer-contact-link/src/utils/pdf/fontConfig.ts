
<<<<<<< HEAD
import { jsPDF } from 'jspdf',
export interface FontConfig {
  regular: ArrayBuffer,
  bold?: ArrayBuffer,
  italic?: ArrayBuffer,
  boldItalic?: ArrayBuffer
}
=======

export interface FontConfig {_regular: ArrayBuffer;
  bold?: ArrayBuffer;
  italic?: ArrayBuffer;
  boldItalic?: ArrayBuffer;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type FontFamily = 'default' | 'montserrat' | 'open-sans' | 'roboto',

/**
 * Loads and registers custom fonts for PDF documents
 */
<<<<<<< HEAD
export async function loadCustomFonts(doc: jsPDF, fontFamily: FontFamily = 'default'): Promise<void> {
  if (fontFamily === 'default') return,
=======
export async function loadCustomFonts(_doc: jsPDF, _fontFamily: FontFamily = 'default'): Promise<void> {_if (fontFamily === 'default') return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  try {
    // Font loading logic would go here
    // For demonstration purposes, _we'll just set up the font using standard fonts
    
    switch (fontFamily) {
      case 'montserrat':
        doc.setFont('helvetica'),
        break,
      case 'open-sans':
        doc.setFont('helvetica'),
        break,
      case 'roboto':
<<<<<<< HEAD
        doc.setFont('helvetica'),
        break,
      default: doc.setFont('helvetica')
    }
  } catch (error) {
    console.error('Error loading custom fonts:', error),
    // Fall back to default font
    doc.setFont('helvetica')
  }
=======
        doc.setFont('helvetica');
        break;
      default:
        doc.setFont('helvetica');}
  } catch (error) {_// Fall back to default font
    doc.setFont('helvetica');}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
