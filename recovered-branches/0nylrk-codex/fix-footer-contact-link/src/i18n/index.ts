
// Initialize i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation
      }
      es: {
        translation: esTranslation
      }
      pt: {
        translation: ptTranslation
      }
      ar: {
        translation: arTranslation
      }
    }
    fallbackLng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already escapes by default
    }
    detection: {
      order: ['localStoragenavigator'];
      lookupLocalStorage: 'zion_language'
      caches: ['localStorage']
    }});
// For RTL language support
  // If user is authenticated, save language preference to profile
  // This will be implemented in the LanguageContext
});
export default i18n;

