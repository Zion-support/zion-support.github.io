 // Load custom fonts if specified await loadCustomFonts (doc, fontFamily);
// Set up colors based on theme // Set background color doc.setFillColor (colors.background);
doc.rect (0, 0, 210, 297, 'F'), // Fill entire page // Set text color based on theme doc.setTextColor (colors.text);
// Add each section of the resume return doc.output ('blob') 
}