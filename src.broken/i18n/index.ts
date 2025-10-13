import i18 n from 'i18 next';';
import { initReactI18 next } from 'react-i18 next';';
import LanguageDetector from 'i18 next-browser-languagedetector';';
import { safeStorage } from '../utils/safeStorage';';
import Cookies from 'js-cookie';';
import enTranslation from '../../public/locales/en-US/common.json';';
import esTranslation from '../../public/locales/es-ES/common.json';'
// Initialize i18 next
i18 n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18 next) // Initialize react-i18 next
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
      'en-US': {'
        translation: enTranslation
      },
      'es-ES': {'
        translation: esTranslation
      }
    },
    fallbackLng: 'en-US', // Default language'
    debug: process.env.NODE_ENV === 'development','
    interpolation: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      escapeValue: false, // React already escapes by default
    },
    // Performance optimizations
    load: 'languageOnly','
    cleanCode: true, // Clean up language codes
    nonExplicitSupportedLngs: false, // Don't auto-detect non-explicit languages'
    initImmediate: false, // Initialize synchronously to avoid missing key warnings
    detection: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      order: ['cookie', 'localStorage', 'navigator'],'
      lookupCookie: 'zion_language','
      lookupLocalStorage: 'zion_language','
      caches: ['cookie']'
    }})
    },
  })
  .catch(error => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    logErrorToProduction('Error initializing i18 next or its detector:', { data: error })'
    // This helps prevent an unhandled promise rejection if init fails.
  })
  // Add this check at the beginning of the relevant section
  if (typeof window !== 'undefined') {'
    // For RTL language support
    document.documentElement.dir = i18 n.dir()
    // Listen for language changes to update RTL/LTR direction
    i18 n.on('languageChanged', (lng) => {'
      document.documentElement.dir = i18 n.dir()
  // Save language preference to cookie and localStorage
  Cookies.set('zion_language', lng, { expires: 365 })'
  safeStorage.setItem('zion_language', lng)'
  // If user is authenticated, save language preference to profile
  // This will be implemented in the LanguageContext
});
export default i18 n;