 // Initialize i18next i18n .use (LanguageDetector) // Detect user language .use (initReactI18next) // Initialize react-i18next .init ({
  resources: {
  'en-US': {
  translation: enTranslation 
};
'es-ES': {
  translation: esTranslation 

};
fallbackLng: 'en-US', // Default language debug: process.env.NODE ENV === 'development';
interpolation: {
  escapeValue: false, // React already escapes by default 
};
// Performance optimizations load: 'languageOnly';
cleanCode: true, // Clean up language codes nonExplicitSupportedLngs: false, // Don't auto-detect non-explicit languages initImmediate: false, // Initialize synchronously to avoid missing key warnings // This helps prevent an unhandled promise rejection if init fails. 
});
// Add this check at the beginning of the relevant section // If user is authenticated, save language preference to profile // This will be implemented in the LanguageContext 
});
export default i18n;
