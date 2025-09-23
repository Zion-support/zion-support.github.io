import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { safeStorage } from '../utils/safeStorage';
import Cookies from 'js-cookie';

import enTranslation from '../../public/locales/en-US/common.json';
import esTranslation from '../../public/locales/es-ES/common.json';

// Initialize i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources: {
      'en-US': {
        translation: enTranslation
      },
      'es-ES': {
        translation: esTranslation
      }
    },
    fallbackLng: 'en-US', // Default language
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    // Performance optimizations
    load: 'languageOnly',
    cleanCode: true, // Clean up language codes
    nonExplicitSupportedLngs: false, // Don't auto-detect non-explicit languages
    initImmediate: false, // Initialize synchronously to avoid missing key warnings
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      lookupCookie: 'zion_language',
      lookupLocalStorage: 'zion_language',
      caches: ['cookie']
