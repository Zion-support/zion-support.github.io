 // Initialize i18next i18n .use (LanguageDetector) // Detect user language .use (initReactI18next) // Initialize react-i18next .init ({
  resources: {
  en: {
  translation: enTranslation 
};
es: {
  translation: esTranslation 
};
pt: {
  translation: ptTranslation 
};
ar: {
  translation: arTranslation 
}
};
fallbackLng: 'en', // Default language debug: process.env.NODE ENV === 'development';
// For RTL language support document.documentElement.dir = i18n.dir ();
// Listen for language changes to update RTL/LTR direction export default i18n;
