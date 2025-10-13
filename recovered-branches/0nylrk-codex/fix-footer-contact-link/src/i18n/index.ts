import i18n from 'i18next';';
import { initReactI18next } from 'react-i18next';';
import LanguageDetector from 'i18next-browser-languagedetector';';
import enTranslation from './locales/en/translation.json';';
import esTranslation from './locales/es/translation.json';';
import ptTranslation from './locales/pt/translation.json';';
import arTranslation from './locales/ar/translation.json';'
// Initialize i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize react-i18next
  .init({
  // TODO: Add properties
}
  // TODO: Add properties
}
    resources: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      en: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        translation: enTranslation
      },
      es: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        translation: esTranslation
      },
      pt: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        translation: ptTranslation
      },
      ar: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        translation: arTranslation
      }
    },
    fallbackLng: 'en', // Default language'
    debug: process.env.NODE_ENV === 'development','
    interpolation: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      escapeValue: false, // React already escapes by default
    },
    detection: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      order: ['localStorage', 'navigator'],'
      lookupLocalStorage: 'zion_language','
      caches: ['localStorage']'
    }})
    },
  })
// For RTL language support
document.documentElement.dir = i18n.dir()
// Listen for language changes to update RTL/LTR direction
i18n.on('languageChanged', (lng) => {'
  document.documentElement.dir = i18n.dir()
  // Save language preference to localStorage
  localStorage.setItem('zion_language', lng)'
  // If user is authenticated, save language preference to profile
  // This will be implemented in the LanguageContext
});
export default i18n;