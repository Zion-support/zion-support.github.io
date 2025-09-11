

=======

import {jsPDF} from 'jspdf';
export interface FontConfig {;


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
  }
}
=======
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
