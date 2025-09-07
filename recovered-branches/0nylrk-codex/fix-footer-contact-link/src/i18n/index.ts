<<<<<<< HEAD
export default i18n;

    }
    detection: {'
      order: ['localStoragenavigator'];'
      lookupLocalStorage: 'zion_language''
      caches: ['localStorage']
    }});

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

// Initialize i18next;
i18n;

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

=======
<<<<<<< HEAD
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';
import ptTranslation from './locales/pt/translation.json';
import arTranslation from './locales/ar/translation.json';
=======
export default i18n;

<<<<<<< HEAD
    }
    detection: {'
      order: ['localStoragenavigator'];'
      lookupLocalStorage: 'zion_language''
      caches: ['localStorage']
    }});
=======
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation ;
import esTranslation from './locales/es/translation ;
import ptTranslation from './locales/pt/translation ;
import arTranslation from './locales/ar/translation ;
<<<<<<< HEAD
import i18n from 'i18next';
import { initReactI18next  } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector',
import enTranslation from './locales/en/translation.json',
import esTranslation from './locales/es/translation.json',
import ptTranslation from './locales/pt/translation.json',
import arTranslation from './locales/ar/translation.json',
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
// Initialize i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize react-i18next
<<<<<<< HEAD
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
=======
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
    debug: process && process.env.NODE_ENV === 'development',

    debug: process.env.NODE_ENV === 'development'
=======

    debug: process && process.env.NODE_ENV === 'development',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

document && document.documentElement.dir = i18n && i18n.dir();

// Listen for language changes to update RTL/LTR direction'
i18n && i18n.on('languageChanged', (lng) => {}
  document && document.documentElement.dir = i18n && i18n.dir();
  
  // Save language preference to localStorage'
  localStorage && localStorage.setItem('zion_language', lng);

<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // If user is authenticated, save language preference to profile
  // This will be implemented in the LanguageContext
});
export default i18n;

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


import i18n from 'i18next',;
import { initReactI18next } from 'react-i18next',;
import LanguageDetector from 'i18next-browser-languagedetector',;
import enTranslation from './locales/en/translation.json',;
import esTranslation from './locales/es/translation.json',;
import ptTranslation from './locales/pt/translation.json',;
import arTranslation from './locales/ar/translation.json',;
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
export default i18n;
=======
export default i18n;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Initialize i18next;
i18n;

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
<<<<<<< HEAD
export default i18n;
>>>>>>> merged-prs-20250907-203621

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
