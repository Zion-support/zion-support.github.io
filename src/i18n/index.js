import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { safeStorage } from '../utils/safeStorage';
import enTranslation from '../../public/locales/en-US/common.json';
import esTranslation from '../../public/locales/es-ES/common.json';
const storedLang = safeStorage.getItem('i18n_lang') || undefined;
if (!i18n) {
    logError("CRITICAL: i18next failed to import. Internationalization will not work.");
}
else {
    // Initialize i18next
    i18n
        .use(LanguageDetector) // Detect user language
        .use(initReactI18next) // Initialize react-i18next
        .init({
        resources: {
            en: {
                translation: enTranslation
            },
            'en-US': {
                translation: enTranslation
            },
            es: {
                translation: esTranslation
            }
        },
        lng: storedLang,
        fallbackLng: 'en', // Default language
        preload: ['en-US', 'es-ES'],
        supportedLngs: ['en', 'en-US', 'es', 'es-ES', 'fr', 'pt', 'ar'],
        debug: process.env.NODE_ENV === 'development',
        interpolation: {
            escapeValue: false, // React already escapes by default
        },
        detection: {
            // Avoid using localStorage directly to prevent cross-context errors
            order: ['navigator'],
            caches: []
        },
    })
        .catch(error => {
        logError('Error initializing i18next or its detector:', { data: error });
        // This helps prevent an unhandled promise rejection if init fails.
    });
    // Add this check at the beginning of the relevant section
    if (typeof window !== 'undefined') {
        // For RTL language support
        document.documentElement.dir = i18n.dir();
        // Listen for language changes to update RTL/LTR direction
        i18n.on('languageChanged', (lng) => {
            document.documentElement.dir = i18n.dir();
            // Save language preference to cookie and localStorage
            setCookie('i18n_lang', lng, 365);
            safeStorage.setItem('i18n_lang', lng);
            // If user is authenticated, save language preference to profile
            // This will be implemented in the LanguageContext
        });
    }
}
export default i18n;
