
<<<<<<< HEAD
=======
import {jsPDF} from 'jspdf';
export interface FontConfig {;

import { jsPDF } from 'jspdf';
export interface FontConfig {
import {jsPDF} from 'jspdf';
export interface FontConfig {;
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
    switch (fontFamily) {


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

    doc && doc.setFont('helvetica')
import {jsPDF} from 'jspdf';

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export interface FontConfig {
import {jsPDF} from 'jspdf';
export interface FontConfig {;

  }
}

import {jsPDF} from 'jspdf';
export interface FontConfig {;

  regular: ArrayBuffer;
  bold?: ArrayBuffer;
  italic?: ArrayBuffer,
  bold_italic?: ArrayBuffer;

  italic?: ArrayBuffer;
  boldItalic?: ArrayBuffer;
}

export async function loadCustomFonts (doc: jsPDF, font_family: FontFamily = 'default'): Promise < void> {
  // Check condition;
if (return, ) {
  $2;
  try {
  // TODO: Implement
    // Font loading logic would go here;
    // For demonstration purposes, we'll just set up the font using standard fonts;
    switch (font_family) {
      case 'montserrat':;
        doc.set_font ('helvetica');
        break;
      case 'open - sans':;
      case 'roboto':;
      default: doc.set_font ('helvetica');
  } catch (error) {
    console.error ('Error loading custom fonts:', error);
    // Fall back to default font;

    doc.setFont('helvetica');

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}