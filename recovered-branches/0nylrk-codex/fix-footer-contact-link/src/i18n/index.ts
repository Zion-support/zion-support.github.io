
<<<<<<< HEAD
import i18n from 'i18next',
import { initReactI18next } from 'react-i18next',
import LanguageDetector from 'i18next-browser-languagedetector',
import enTranslation from './locales/en/translation.json',
import esTranslation from './locales/es/translation.json',
import ptTranslation from './locales/pt/translation.json',
import arTranslation from './locales/ar/translation.json',
=======
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';
import ptTranslation from './locales/pt/translation.json';
import arTranslation from './locales/ar/translation.json';

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
// Initialize i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize react-i18next
  .init({_resources: {
      en: {
        translation: enTranslation},
      es: {_translation: esTranslation},
      pt: {_translation: ptTranslation},
      ar: {_translation: arTranslation}
    },
    fallbackLng: 'en', // Default language
    debug: process.env.NODE_ENV === 'development',
<<<<<<< HEAD
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    detection: {
      order: ['localStoragenavigator'],
      lookupLocalStorage: 'zion_language',
      caches: ['localStorage']
    }}),
=======
    interpolation: {_escapeValue: false, _// React already escapes by default},
    detection: {_order: ['localStorage', _'navigator'], _lookupLocalStorage: 'zion_language', _caches: ['localStorage']}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// For RTL language support
document.documentElement.dir = i18n.dir(),

// Listen for language changes to update RTL/LTR direction
<<<<<<< HEAD
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = i18n.dir(),
  
  // Save language preference to localStorage
  localStorage.setItem('zion_language', lng),
  
  // If user is authenticated, save language preference to profile
  // This will be implemented in the LanguageContext
}),
=======
i18n.on(_'languageChanged', _(lng) => {_document.documentElement.dir = i18n.dir();
  
  // Save language preference to localStorage
  localStorage.setItem('zion_language', _lng);
  
  // If user is authenticated, _save language preference to profile
  // This will be implemented in the LanguageContext});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default i18n,
