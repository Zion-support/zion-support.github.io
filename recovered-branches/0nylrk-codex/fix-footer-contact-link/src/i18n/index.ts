
export default i18n;


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



