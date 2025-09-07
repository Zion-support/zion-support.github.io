<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======
import {jsPDF} from 'jspdf';
export interface FontConfig {;



<<<<<<< HEAD
import { jsPDF } from 'jspdf';
export interface FontConfig {
import {jsPDF} from 'jspdf';
export interface FontConfig {;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {jsPDF} from 'jspdf';
export interface FontConfig {;

import { jsPDF } from 'jspdf';
export interface FontConfig {
import {jsPDF} from 'jspdf';
export interface FontConfig {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  regular: ArrayBuffer;
  bold?: ArrayBuffer;

  italic?: ArrayBuffer;
  boldItalic?: ArrayBuffer;
}'
export type FontFamily = 'default' | 'montserrat' | 'open-sans' | 'roboto';
/**
<<<<<<< HEAD

=======
 * Loads and registers custom fonts for PDF documents
 */
export async function loadCustomFonts(doc: jsPDF, fontFamily: FontFamily = 'default'): Promise<void> {
  if (fontFamily === 'default') return
>>>>>>> merged-prs-20250907-203621
  try {
    // Font loading logic would go here
    // For demonstration purposes, we'll just set up the font using standard fonts
    switch (fontFamily) {
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

        doc.setFont('helvetica');
        break;'
      case 'roboto':'
        doc.setFont('helvetica');
        break;'
      default: doc.setFont('helvetica')
    }
  } catch (error) {}
    // Fall back to default font;
}'

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    doc && doc.setFont('helvetica')
import {jsPDF} from 'jspdf';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
}