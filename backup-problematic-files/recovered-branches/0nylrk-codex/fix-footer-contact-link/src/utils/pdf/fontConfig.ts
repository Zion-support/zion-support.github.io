
import { jsPDF } from 'jspdf'
export type FontFamily = 'default' | 'montserrat' | 'open-sans' | 'roboto'
export async function loadCustomFonts(doc:jsPDF, fontFamily:FontFamily = 'default'
  if (fontFamily = = 'default'
    //
  // Font loading logic would go here //