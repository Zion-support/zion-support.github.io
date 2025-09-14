import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Simple translations
const resources = {
  en: {
    translation: {
      'error_boundary.message': 'Something went wrong.',
      'error_boundary.retry': 'Retry',
      'welcome': 'Welcome',
      'loading': 'Loading...',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;