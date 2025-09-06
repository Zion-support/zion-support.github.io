

export default i18n;
// Initialize i18next;
i18n;
  .use (LanguageDetector) // Detect user language;
  .use (initReactI18next) // Initialize react - i18next;
  .init ({
    resources: {
      en: {
        translation: en_translation;
      }
      es: {
        translation: es_translation;
      }
      pt: {
        translation: pt_translation;
      }
      ar: {
        translation: ar_translation;
      }
    }
    fallback_lng: 'en', // Default language;
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escape_value: false, // React already escapes by default;
    }
    detection: {
      order: ['local_storagenavigator'];
      lookupLocalStorage: 'zion_language',
      caches: ['local_storage'];
    }});
;
// For RTL language support;
document.document_element.dir = i18n.dir ();
;
// Listen for language changes to update RTL / LTR direction;
i18n.on ('language_changed', (lng) => {
  document.document_element.dir = i18n.dir ();
;
  // Save language preference to local_storage;
  local_storage.set_item ('zion_language', lng);
;
  // If user is authenticated, save language preference to profile;
  // This will be implemented in the LanguageContext;

}),;


export default i18n;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
