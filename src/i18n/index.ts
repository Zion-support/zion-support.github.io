import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { safeStorage } from '../utils/safeStorage';
import Cookies from 'js-cookie';

import enTranslation from '../../public/locales/en-US/common.json';
import esTranslation from '../../public/locales/es-ES/common.json';

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
      pt: { translation: ptTranslation },
      ar: { translation: arTranslation }
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development', // Assuming process.env.NODE_ENV is available
    interpolation: {
      escapeValue: false // React already escapes by default
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'zion_language',
      caches: [] // Ensure this is the last property in 'detection' and has no trailing comma
    } // Ensure this 'detection' object is the last in 'init' options and has no trailing comma
  }) // Closing parenthesis for init()
  .catch(error => {
    console.error("Error initializing i18next or its detector:", error);
  }); // Semicolon to end the statement

// For RTL language support
document.documentElement.dir = i18n.dir();

// Listen for language changes to update RTL/LTR direction
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = i18n.dir();

  // Save language preference to cookie and localStorage
  Cookies.set('zion_language', lng, { expires: 365 });
  safeStorage.setItem('zion_language', lng);
  
  // If user is authenticated, save language preference to profile
  // This will be implemented in the LanguageContext
});

export default i18n;
