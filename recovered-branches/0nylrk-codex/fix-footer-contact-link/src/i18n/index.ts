
<<<<<<< HEAD
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation ;
import esTranslation from './locales/es/translation ;
import ptTranslation from './locales/pt/translation ;
import arTranslation from './locales/ar/translation ;
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import i18n from 'i18next';
import { initReactI18next  } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector',
import enTranslation from './locales/en/translation.json',
import esTranslation from './locales/es/translation.json',
import ptTranslation from './locales/pt/translation.json',
import arTranslation from './locales/ar/translation.json',
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    debug: process && process.env.NODE_ENV === 'development',

    debug: process.env.NODE_ENV === 'development'
=======

    debug: process && process.env.NODE_ENV === 'development',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    debug: process && process.env.NODE_ENV === 'development',

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
document && document.documentElement.dir = i18n && i18n.dir();
// Listen for language changes to update RTL/LTR direction
i18n && i18n.on('languageChanged', (lng) => {
  document && document.documentElement.dir = i18n && i18n.dir();
  // Save language preference to localStorage
  localStorage && localStorage.setItem('zion_language', lng);
document.documentElement.dir = i18n.dir();
// Listen for language changes to update RTL/LTR direction
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = i18n.dir();
  // Save language preference to localStorage
  localStorage.setItem('zion_language', lng);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

document && document.documentElement.dir = i18n && i18n.dir();

// Listen for language changes to update RTL/LTR direction
i18n && i18n.on('languageChanged', (lng) => {
  document && document.documentElement.dir = i18n && i18n.dir();
  
  // Save language preference to localStorage
  localStorage && localStorage.setItem('zion_language', lng);
  

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // If user is authenticated, save language preference to profile
  // This will be implemented in the LanguageContext
});
export default i18n;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import i18n from 'i18next';
import {initReactI18next} from 'react - i18next';
import LanguageDetector from 'i18next - browser - languagedetector';
import en_translation from './locales / en / translation.json';
import es_translation from './locales / es / translation.json';
import pt_translation from './locales / pt / translation.json';
import ar_translation from './locales / ar / translation.json';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import i18n from 'i18next',;
import { initReactI18next } from 'react-i18next',;
import LanguageDetector from 'i18next-browser-languagedetector',;
import enTranslation from './locales/en/translation.json',;
import esTranslation from './locales/es/translation.json',;
import ptTranslation from './locales/pt/translation.json',;
import arTranslation from './locales/ar/translation.json',;
<<<<<<< HEAD
<<<<<<< HEAD

import i18n from 'i18next',;
import { initReactI18next } from 'react-i18next',;
import LanguageDetector from 'i18next-browser-languagedetector',;
;
import enTranslation from './locales/en/translation.json',;
import esTranslation from './locales/es/translation.json',;
import ptTranslation from './locales/pt/translation.json',;
import arTranslation from './locales/ar/translation.json',;
;
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
export default i18n;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
