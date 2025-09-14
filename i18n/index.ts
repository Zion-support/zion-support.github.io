import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Initialize i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources: {
      'en-US': {
        translation: {
          welcome: 'Welcome',
          hello: 'Hello'
        }
      }
    },
    fallbackLng: 'en-US', // Default language
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    // Performance optimizations
    load: 'languageOnly',
    cleanCode: true, // Clean up language codes
    nonExplicitSupportedLngs: false, // Don't auto-detect non-explicit languages
    initImmediate: false, // Initialize synchronously to avoid missing key warnings
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      lookupCookie: 'zion_language',
      lookupLocalStorage: 'zion_language',
      caches: ['cookie']
    }
  });

export default i18n;