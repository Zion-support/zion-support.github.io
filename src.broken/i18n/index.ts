import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { safeStorage } from '../utils/safeStorage';
import Cookies from 'js-cookie';
import enTranslation from '../../public/locales/en-US/common.json';
import esTranslation from '../../public/locales/es-ES/common.json';
// Initialize i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources: {
      'en-US': {
        translation: enTranslation},
      'es-ES': {
        translation: esTranslation}
    },
    fallbackLng: 'en-US', // Default language
    debug: process.env.NODE_ENV = $2;
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    // Performance optimizations
    load: 'languageOnly',
    cleanCode: true, // Clean up language codes
    nonExplicitSupportedLngs: false, // Don't auto-detect non-explicit languages
    initImmediate: false, // Initialize synchronously to avoid missing key warnings
    detection: {
      order: ['cookielocalStoragenavigator'],
      lookupCookie: 'zion_language',
      lookupLocalStorage: 'zion_language',
      caches: ['cookie']
    }})
  .catch($2);
    // This helps prevent an unhandled promise rejection if init fails.
  }),

  // Add this check at the beginning of the relevant section
  if (typeof window !== 'undefined') {
    // For RTL language support
    document.documentElement.dir = i18n.dir($2);
    // Listen for language changes to update RTL/LTR direction
    i18n.on('languageChanged', (lng) => {
      document.documentElement.dir = i18n.dir($2);
  // Save language preference to cookie and localStorage
  Cookies.set($2);
  safeStorage.setItem($2);
  // If user is authenticated, save language preference to profile
  // This will be implemented in the LanguageContext
}),

export default i18n,
