 * Loads and registers custom fonts for PDF documents
 */
export async function loadCustomFonts(doc: jsPDF, fontFamily: FontFamily = 'default'): Promise<void> {
  if (fontFamily === 'default') return

  try {
    // Font loading logic would go here
    // For demonstration purposes, we'll just set up the font using standard fonts
    switch (fontFamily) {



    doc && doc.setFont('helvetica')
import {jsPDF} from 'jspdf';




