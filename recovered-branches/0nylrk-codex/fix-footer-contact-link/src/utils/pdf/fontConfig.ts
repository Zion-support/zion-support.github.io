 export type FontFamily = 'default' | 'montserrat' | 'open-sans' | 'roboto';
/** * Loads and registers custom fonts for PDF documents */ try {
  // Font loading logic would go here // For demonstration purposes, we'll just set up the font using standard fonts switch (fontFamily) {
  case 'montserrat': doc.setFont ('helvetica');
break;
case 'open-sans': doc.setFont ('helvetica');
break;
case 'roboto': 
}