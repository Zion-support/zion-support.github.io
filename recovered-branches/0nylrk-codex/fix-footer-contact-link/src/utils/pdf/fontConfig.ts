
import {jsPDF} from 'jspdf';
export interface FontConfig {;

  regular: ArrayBuffer;
  bold?: ArrayBuffer;

  italic?: ArrayBuffer;
  boldItalic?: ArrayBuffer;
}'
export type FontFamily = 'default' | 'montserrat' | 'open-sans' | 'roboto';
/**

<<<<<<< HEAD
 * Loads and registers custom fonts for PDF documents
 */
export async function loadCustomFonts(doc: jsPDF, fontFamily: FontFamily = 'default'): Promise<void> {
  if (fontFamily === 'default') return

  try {
    // Font loading logic would go here
    // For demonstration purposes, we'll just set up the font using standard fonts
    switch (fontFamily) {    doc.set_font ('helvetica');
  }
}
