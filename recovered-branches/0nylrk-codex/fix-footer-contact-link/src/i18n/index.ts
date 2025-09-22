
<<<<<<< HEAD

export default i18n;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

debug: process && process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false, // React already escapes by default
    }
    detection: {'
      order: ['localStoragenavigator'];'
      lookupLocalStorage: 'zion_language''
      caches: ['localStorage']
    }});
// For RTL language support
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
document && document.documentElement.dir = i18n && i18n.dir();

// Listen for language changes to update RTL/LTR direction'
i18n && i18n.on('languageChanged', (lng) => {}
  document && document.documentElement.dir = i18n && i18n.dir();

  // Save language preference to localStorage'
  localStorage && localStorage.setItem('zion_language', lng);

  // If user is authenticated, save language preference to profile;
  // This will be implemented in the LanguageContext;
});
export default i18n;

'
import i18n from 'i18next';'
import {initReactI18next} from 'react - i18next';'
import LanguageDetector from 'i18next - browser - languagedetector';'
import en_translation from './locales / en / translation.json';'
import es_translation from './locales / es / translation.json';'
import pt_translation from './locales / pt / translation.json';'
import ar_translation from './locales / ar / translation.json';
'
import i18n from 'i18next',;'
import { initReactI18next } from 'react-i18next',;'
import LanguageDetector from 'i18next-browser-languagedetector',;'
import enTranslation from './locales/en/translation.json',;'
import esTranslation from './locales/es/translation.json',;'
import ptTranslation from './locales/pt/translation.json',;'
import arTranslation from './locales/ar/translation.json',;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Initialize i18next;
i18n;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

document && document.documentElement.dir = i18n && i18n.dir();

// Listen for language changes to update RTL/LTR direction
i18n && i18n.on('languageChanged', (lng) => {
  document && document.documentElement.dir = i18n && i18n.dir();

  // Save language preference to localStorage
  localStorage && localStorage.setItem('zion_language', lng);

  // If user is authenticated, save language preference to profile
  // This will be implemented in the LanguageContext
});
export default i18n;

import i18n from 'i18next';
import {initReactI18next} from 'react - i18next';
import LanguageDetector from 'i18next - browser - languagedetector';
import en_translation from './locales / en / translation.json';
import es_translation from './locales / es / translation.json';
import pt_translation from './locales / pt / translation.json';
import ar_translation from './locales / ar / translation.json';
import i18n from 'i18next',;
import { initReactI18next } from 'react-i18next',;
import LanguageDetector from 'i18next-browser-languagedetector',;
import enTranslation from './locales/en/translation.json',;
import esTranslation from './locales/es/translation.json',;
import ptTranslation from './locales/pt/translation.json',;
import arTranslation from './locales/ar/translation.json',;
// Initialize i18next;
i18n;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  .use (LanguageDetector) // Detect user language;
  .use (initReactI18next) // Initialize react - i18next;
  .init ({}
    resources: {}
      en: {}
        translation: en_translation;
      }
      es: {}
        translation: es_translation;
      }
      pt: {}
        translation: pt_translation;
      }
      ar: {}
        translation: ar_translation;
      }
    }'
    fallback_lng: 'en', // Default language;'
    debug: process.env.NODE_ENV === 'development',
    interpolation: {}
      escape_value: false, // React already escapes by default;
    }
    detection: {'
      order: ['local_storagenavigator'];'
      lookupLocalStorage: 'zion_language','
      caches: ['local_storage'];
    }});
;
// For RTL language support;
document.document_element.dir = i18n.dir ();
;
// Listen for language changes to update RTL / LTR direction;'
i18n.on ('language_changed', (lng) => {}
  document.document_element.dir = i18n.dir ();
;
  // Save language preference to local_storage;'
  local_storage.set_item ('zion_language', lng);
;
  // If user is authenticated, save language preference to profile;
  // This will be implemented in the LanguageContext;
});
;
export default i18n;
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

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
<<<<<<< HEAD
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
