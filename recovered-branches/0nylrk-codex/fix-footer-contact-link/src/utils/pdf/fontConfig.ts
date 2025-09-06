<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/pdf/fontConfig.ts


<<<<<<< HEAD
=======
import {jsPDF} from 'jspdf';
export interface FontConfig {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
<<<<<<< HEAD
import { jsPDF } from 'jspdf';
export interface FontConfig {
=======
import {jsPDF} from 'jspdf';
export interface FontConfig {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

========
<<<<<<< HEAD
console && console.error('Error loading custom fonts:', error);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/pdf/fontConfig.ts
    // Fall back to default font
<<<<<<< HEAD
    doc.setFont('helvetica')

=======
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { jsPDF } from 'jspdf',;
export interface FontConfig {;
  regular: ArrayBuffer,;
  bold?: ArrayBuffer,;
  italic?: ArrayBuffer,;
  boldItalic?: ArrayBuffer;
<<<<<<< HEAD
=======
    doc && doc.setFont('helvetica')
import {jsPDF} from 'jspdf';
export interface FontConfig {
  regular: ArrayBuffer;
  bold?: ArrayBuffer;
  italic?: ArrayBuffer,
  bold_italic?: ArrayBuffer;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/pdf/fontConfig.ts

    doc.setFont('helvetica');

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    doc.set_font ('helvetica');
=======

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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    switch (fontFamily) {;
      case 'montserrat':;
        doc.setFont('helvetica'),;
        break,;
      case 'open-sans':;
        doc.setFont('helvetica'),;
        break,;
      case 'roboto':;
        doc.setFont('helvetica'),;
<<<<<<< HEAD
        break,;
      default:doc.setFont('helvetica');
    }
  } catch (error) {;
    console.error('Error loading custom fonts:', error),;
    // Fall back to default font;
    doc.setFont('helvetica'),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/pdf/fontConfig.ts
  }
} export type FontFamily = 'default' | 'montserrat' | 'open-sans' | 'roboto';
/** * Loads and registers custom fonts for PDF documents */ try {
  // Font loading logic would go here // For demonstration purposes, we'll just set up the font using standard fonts switch (fontFamily) {
  case 'montserrat': doc.setFont ('helvetica');
break;
case 'open-sans': doc.setFont ('helvetica');
break;
case 'roboto': 
}
=======
        break;
      default: doc.setFont('helvetica');
    }
  } catch (error) {;
    console.error('Error loading custom fonts:', error);
    // Fall back to default font;
    doc.setFont('helvetica');
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
