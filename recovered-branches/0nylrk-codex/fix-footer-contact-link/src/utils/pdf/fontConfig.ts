<<<<<<< HEAD
import {jsPDF} from 'jspdf';
export interface FontConfig {;

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
import { jsPDF } from 'jspdf';
export interface FontConfig {
import {jsPDF} from 'jspdf';
export interface FontConfig {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

import {jsPDF} from 'jspdf';
export interface FontConfig {;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  regular: ArrayBuffer;
  bold?: ArrayBuffer;

  italic?: ArrayBuffer;
  boldItalic?: ArrayBuffer;
}'
export type FontFamily = 'default' | 'montserrat' | 'open-sans' | 'roboto';
/**
* Loads and registers custom fonts for PDF documents
 */
export async function loadCustomFonts(doc: jsPDF, fontFamily: FontFamily = 'default'): Promise<void> {
  if (fontFamily === 'default') return
  try {
    // Font loading logic would go here
    // For demonstration purposes, we'll just set up the font using standard fonts
<<<<<<< HEAD
<<<<<<< HEAD
    switch (fontFamily) {
<<<<<<< HEAD
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

    // Fall back to default font
<<<<<<< HEAD
<<<<<<< HEAD
    doc.setFont('helvetica')

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export type FontFamily = 'default' | 'montserrat' | 'open - sans' | 'roboto';
;
/**;
* Loads and registers custom fonts for PDF documents;
*/;'
export async function loadCustomFonts (doc: jsPDF, font_family: FontFamily = 'default'): Promise < void> {};
  // Check condition;
if (return, ) {}
  $2;
}
  try {}
    // Font loading logic would go here;'
    // For demonstration purposes, we'll just set up the font using standard fonts;
    switch (font_family) {'
      case 'montserrat':;'
        doc.set_font ('helvetica');
        break;'
      case 'open - sans':;'
        doc.set_font ('helvetica');
        break;'
      case 'roboto':;'
        doc.set_font ('helvetica');
        break;'
      default: doc.set_font ('helvetica');
    }
  } catch (error) {'
    console.error ('Error loading custom fonts:', error);
    // Fall back to default font;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    doc.setFont('helvetica');

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
}

    doc.set_font ('helvetica');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
}
=======
'
    doc.set_font ('helvetica');
  }
}

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  }
}
doc.set_font ('helvetica');
  }
}
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
