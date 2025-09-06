
<<<<<<< HEAD
<<<<<<< HEAD
import i18n from 'i18next';
import { initReactI18next  } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector',
import enTranslation from './locales/en/translation.json',
import esTranslation from './locales/es/translation.json',
import ptTranslation from './locales/pt/translation.json',
import arTranslation from './locales/ar/translation.json',
=======
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation ;
import esTranslation from './locales/es/translation ;
import ptTranslation from './locales/pt/translation ;
import arTranslation from './locales/ar/translation ;

>>>>>>> main
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

<<<<<<< HEAD
    debug: process.env.NODE_ENV === 'development'
=======
    debug: process && process.env.NODE_ENV === 'development',

>>>>>>> main
    interpolation: {
      escapeValue: false, // React already escapes by default
    }
    detection: {
      order: ['localStoragenavigator'];
      lookupLocalStorage: 'zion_language'
      caches: ['localStorage']
    }});
// For RTL language support
<<<<<<< HEAD
document.documentElement.dir = i18n.dir();
// Listen for language changes to update RTL/LTR direction
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = i18n.dir();
  // Save language preference to localStorage
  localStorage.setItem('zion_language', lng);
=======

document && document.documentElement.dir = i18n && i18n.dir();

// Listen for language changes to update RTL/LTR direction
i18n && i18n.on('languageChanged', (lng) => {
  document && document.documentElement.dir = i18n && i18n.dir();
  
  // Save language preference to localStorage
  localStorage && localStorage.setItem('zion_language', lng);
  

>>>>>>> main
  // If user is authenticated, save language preference to profile
  // This will be implemented in the LanguageContext
});
export default i18n;

=======
<<<<<<< HEAD
=======
import i18n from 'i18next';
import {initReactI18next} from 'react - i18next';
import LanguageDetector from 'i18next - browser - languagedetector';
import en_translation from './locales / en / translation.json';
import es_translation from './locales / es / translation.json';
import pt_translation from './locales / pt / translation.json';
import ar_translation from './locales / ar / translation.json';
=======


>>>>>>> main
import i18n from 'i18next',;
import { initReactI18next } from 'react-i18next',;
import LanguageDetector from 'i18next-browser-languagedetector',;
import enTranslation from './locales/en/translation.json',;
import esTranslation from './locales/es/translation.json',;
import ptTranslation from './locales/pt/translation.json',;
import arTranslation from './locales/ar/translation.json',;
<<<<<<< HEAD
// Initialize i18next;
i18n;
  .use(LanguageDetector) // Detect user language;
  .use(initReactI18next) // Initialize react-i18next;
  .init({;
    resources: {;
      en: {;
        translation: enTranslation;
      },;
      es: {;
        translation: esTranslation;
      },;
      pt: {;
        translation: ptTranslation;
      },;
      ar: {;
        translation: arTranslation;
      }
    },;
    fallbackLng: 'en', // Default language;
    debug: process.env.NODE_ENV === 'development',;
    interpolation: {;
      escapeValue: false, // React already escapes by default;
    },;
    detection: {;
      order: ['localStoragenavigator'],;
      lookupLocalStorage: 'zion_language',;
      caches: ['localStorage'];
    }}),;
// For RTL language support;
document.documentElement.dir = i18n.dir(),;
// Listen for language changes to update RTL/LTR direction;
i18n.on('languageChanged', (lng) => {;
  document.documentElement.dir = i18n.dir(),;
  // Save language preference to localStorage;
  localStorage.setItem('zion_language', lng),;
  // If user is authenticated, save language preference to profile;
  // This will be implemented in the LanguageContext;
}),;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default i18n;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> main
