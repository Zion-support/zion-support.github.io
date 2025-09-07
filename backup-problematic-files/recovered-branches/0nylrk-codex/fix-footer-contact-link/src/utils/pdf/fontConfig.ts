
import { jsPDF } from 'jspdf';
;
export interface FontConfig {;
  regular:ArrayBuffer;
  bold?:ArrayBuffer;
  italic?:ArrayBuffer;
  boldItalic?:ArrayBuffer;
}
;
export type FontFamily = 'default' | 'montserrat' | 'open-sans' | 'roboto';
;
/**;
 * Loads and registers custom fonts for PDF documents;
 */;
export async function loadCustomFonts(doc:jsPDF, fontFamily:FontFamily = 'default'):Promise<void> {;
  if (fontFamily === 'default') return;
  ;
  try {;
    // Font loading logic would go here;
    // For demonstration purposes, we'll just set up the font using standard fonts;
    ;
    switch (fontFamily) {;
      case 'montserrat':;
        doc.setFont('helvetica');
        break;
      case 'open-sans':;
        doc.setFont('helvetica');
        break;
      case 'roboto':;
        doc.setFont('helvetica');
        break;
      default:doc.setFont('helvetica');
    }
  } catch (error) {;
    console.error('Error loading custom fonts:', error);
    // Fall back to default font;
    doc.setFont('helvetica');
  }
} export type FontFamily = 'default' | 'montserrat' | 'open-sans' | 'roboto';
/** * Loads and registers custom fonts for PDF documents */ try {
  // Font loading logic would go here // For demonstration purposes, we'll just set up the font using standard fonts switch (fontFamily) {
  case 'montserrat': doc.setFont ('helvetica');
break;
case 'open-sans': doc.setFont ('helvetica');
break;
<<<<<<< HEAD
case 'roboto':
=======
case 'roboto': 
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
