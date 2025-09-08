import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { safeStorage } from '../utils/safeStorage';

const resources = {
  en: { translation: { hello: 'Hello' } },
  es: { translation: { hello: 'Hola' } },
  pt: { translation: { hello: 'Olá' } },
  ar: { translation: { hello: 'مرحبا' } },
};

// Initialize i18next
void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'zion_language',
      caches: [],
    },
  })
  .catch(error => {
    console.error('Error initializing i18next or its detector:', error);
  });

// For RTL language support
if (typeof document !== 'undefined') {
  document.documentElement.dir = i18n.dir();
  i18n.on('languageChanged', (lng) => {
    document.documentElement.dir = i18n.dir();
    safeStorage.setItem('zion_language', lng);
  });
}

export default i18n;
