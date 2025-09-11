<<<<<<< HEAD
import {jsPDF} from 'jspdf';
export interface FontConfig {;



<<<<<<< HEAD
import { jsPDF } from 'jspdf';
export interface FontConfig {
import {jsPDF} from 'jspdf';
export interface FontConfig {;
=======

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {jsPDF} from 'jspdf';
export interface FontConfig {;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
      case 'montserrat':;
        doc.setFont('helvetica');
        break;
      case 'open-sans':
        doc.setFont('helvetica');
        break;
      case 'roboto':
        doc.setFont('helvetica');
        break;
      default: doc.setFont('helvetica')
    }
  } catch (error) {
    console.error('Error loading custom fonts:', error);

    // Fall back to default font
    doc.setFont('helvetica')
import { jsPDF } from 'jspdf',;
export interface FontConfig {;
  regular: ArrayBuffer,;
  bold?: ArrayBuffer,;
  italic?: ArrayBuffer,;
  boldItalic?: ArrayBuffer;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    doc && doc.setFont('helvetica')
import {jsPDF} from 'jspdf';
export interface FontConfig {
  regular: ArrayBuffer;
  bold?: ArrayBuffer;
  italic?: ArrayBuffer,
  bold_italic?: ArrayBuffer;
=======
    doc.setFont('helvetica')
import { jsPDF } from 'jspdf',;
export interface FontConfig {;
  regular: ArrayBuffer,;
  bold?: ArrayBuffer,;
  italic?: ArrayBuffer,;
  boldItalic?: ArrayBuffer;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD

    doc.set_font ('helvetica');

import { jsPDF } from 'jspdf',;
;
export interface FontConfig {;
  regular:ArrayBuffer,;
  bold?:ArrayBuffer,;
  italic?:ArrayBuffer,;
  boldItalic?:ArrayBuffer;
}
;
export type FontFamily = 'default' | 'montserrat' | 'open-sans' | 'roboto',;
;
/**;
 * Loads and registers custom fonts for PDF documents;
 */;
export async function loadCustomFonts(doc:jsPDF, fontFamily:FontFamily = 'default'):Promise<void> {;
  if (fontFamily === 'default') return,;
  ;
  try {;
    // Font loading logic would go here;
    // For demonstration purposes, we'll just set up the font using standard fonts;
    ;
}
;
export type FontFamily = 'default' | 'montserrat' | 'open-sans' | 'roboto',;
/**;
 * Loads and registers custom fonts for PDF documents;
 */;
export async function loadCustomFonts(doc: jsPDF, fontFamily: FontFamily = 'default'): Promise<void> {;
  if (fontFamily === 'default') return,;
  try {;
    // Font loading logic would go here;
    // For demonstration purposes, we'll just set up the font using standard fonts;
    switch (fontFamily) {;
      case 'montserrat':;
        doc.setFont('helvetica'),;
        break,;
      case 'open-sans':;
        doc.setFont('helvetica'),;
        break,;
      case 'roboto':;
        doc.setFont('helvetica'),;
        break;
      default: doc.setFont('helvetica');
    }
  } catch (error) {;
    console.error('Error loading custom fonts:', error);
    // Fall back to default font;
    doc.setFont('helvetica');
<<<<<<< HEAD
=======
=======
    doc.setFont('helvetica');
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
}
=======
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
