

import {jsPDF} from 'jspdf';
export interface FontConfig {;


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
    doc.setFont('helvetica')
import { jsPDF } from 'jspdf',;
export interface FontConfig {;
  regular: ArrayBuffer,;
  bold?: ArrayBuffer,;
  italic?: ArrayBuffer,;
  boldItalic?: ArrayBuffer;
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

    doc.setFont('helvetica');



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}