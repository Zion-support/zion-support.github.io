import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cookies from 'js-cookie';

import enTranslation from '../../public/locales/en-US/common.json';
import esTranslation from '../../public/locales/es-ES/common.json';

// Initialize i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize react-i18next
  .init({_resources: {
      'en-US': {
        translation: enTranslation},
      'es-ES': {_translation: esTranslation}
    },
    fallbackLng: 'en-US', // Default language
    debug: process.env.NODE_ENV === 'development',
    interpolation: {_escapeValue: false, _// React already escapes by default},
    // Performance optimizations
    load: 'languageOnly',
    cleanCode: true, // Clean up language codes
    nonExplicitSupportedLngs: false, // Don't auto-detect non-explicit languages
    initImmediate: false, // Initialize synchronously to avoid missing key warnings
    detection: {_order: ['cookie', _'localStorage', _'navigator'], _lookupCookie: 'zion_language', _lookupLocalStorage: 'zion_language', _caches: ['cookie']}})
  .catch(error => {_logErrorToProduction('Error initializing i18next or its detector:', _{ data: error});
    // This helps prevent an unhandled promise rejection if init fails.
  });

  // Add this check at the beginning of the relevant section
  if (typeof window !== 'undefined') {_// For RTL language support
    document.documentElement.dir = i18n.dir();

    // Listen for language changes to update RTL/LTR direction
    i18n.on(_'languageChanged', _(lng) => {
      document.documentElement.dir = i18n.dir();

  // Save language preference to cookie and localStorage
  Cookies.set('zion_language', _lng, _{ expires: 365});
  safeStorage.setItem('zion_language', lng);
  
  // If user is authenticated, save language preference to profile
  // This will be implemented in the LanguageContext
});

export default i18n;
