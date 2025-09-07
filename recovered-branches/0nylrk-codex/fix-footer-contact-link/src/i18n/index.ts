import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';
import ptTranslation from './locales/pt/translation.json';
import arTranslation from './locales/ar/translation.json';
// Initialize i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize react-i18next
    interpolation: {
      escapeValue: false, // React already escapes by default
    }
    detection: {
      order: ['localStoragenavigator'];
      lookupLocalStorage: 'zion_language'
      caches: ['localStorage']
    }});
// For RTL language support
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
});
;
export default i18n;
;
  .init($2);
// For RTL language support
document.documentElement.dir = i18n.dir($2);
// Listen for language changes to update RTL/LTR direction
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = i18n.dir($2);
  // Save language preference to localStorage
  localStorage.setItem($2);
  // If user is authenticated, save language preference to profile
  // This will be implemented in the LanguageContext
}),

export default i18n,
