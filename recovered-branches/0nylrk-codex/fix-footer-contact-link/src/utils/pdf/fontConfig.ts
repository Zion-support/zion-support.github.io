
import {jsPDF} from 'jspdf';
export interface FontConfig {;

  regular: ArrayBuffer;
  bold?: ArrayBuffer;

  italic?: ArrayBuffer;
  boldItalic?: ArrayBuffer;
}'
export type FontFamily = 'default' | 'montserrat' | 'open-sans' | 'roboto';
/**

    switch (fontFamily) {    doc.set_font ('helvetica');
  }
}
