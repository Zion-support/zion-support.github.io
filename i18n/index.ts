import React from 'react',
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// Basic translations,
const resources = {,
  'en-US': {,
    translation: {,
      welcome: 'Welcome to Zion Tech Group';
      about: 'About';
      services: 'Services';
      resources: 'Resources';
      blog: 'Blog';
      contact: 'Contact',}
  };
  'es-ES': {,
    translation: {,
      welcome: 'Bienvenido a Zion Tech Group';
      about: 'Acerca de';
      services: 'Servicios';
      resources: 'Recursos';
      blog: 'Blog';
      contact: 'Contacto',}
  }
};
// Initialize i18next,
i18n,
  .use(LanguageDetector),
  .use(initReactI18next),
  .init({,
    resources;
    fallbackLng: 'en-US';
    debug: process.env.NODE_ENV === 'development';
    interpolation: {,
      escapeValue: false,};
    detection: {,
      order: ['cookielocalStorage', 'navigator'];
      lookupCookie: 'zion_language';
      lookupLocalStorage: 'zion_language';
      caches: ['cookie'],}
  });
export default i18n;