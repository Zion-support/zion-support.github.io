<<<<<<< HEAD
<<<<<<< HEAD
// Simple i18n implementation without external dependencies
export const translations = {
  'en-US': {
    welcome: 'Welcome to Zion Tech Group',
    about: 'About',
    services: 'Services',
    resources: 'Resources',
    blog: 'Blog',
    contact: 'Contact'
  },
  'es-ES': {
    welcome: 'Bienvenido a Zion Tech Group',
    about: 'Acerca de',
    services: 'Servicios',
    resources: 'Recursos',
    blog: 'Blog',
    contact: 'Contacto'
  }
};

export function getTranslation(key: string, language: string = 'en-US'): string {
  return translations[language as keyof typeof translations]?.[key as keyof typeof translations['en-US']] || key;
}

export default {
  getTranslation,
  translations
};
=======
// i18n configuration - disabled for build
// TODO: Install i18next packages when needed
export default {};
>>>>>>> 82689a4cb07645633bb2f61079b0d20275046e16
=======
import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Basic translations
const resources = {
  'en-US': {
    translation: {
      welcome: 'Welcome to Zion Tech Group',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      home: 'Home',
      loading: 'Loading...',
    },
  },
  'es-ES': {
    translation: {
      welcome: 'Bienvenido a Zion Tech Group',
      about: 'Acerca de',
      services: 'Servicios',
      contact: 'Contacto',
      home: 'Inicio',
      loading: 'Cargando...',
    },
  },
  'fr-FR': {
    translation: {
      welcome: 'Bienvenue chez Zion Tech Group',
      about: 'À propos',
      services: 'Services',
      contact: 'Contact',
      home: 'Accueil',
      loading: 'Chargement...',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en-US',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
>>>>>>> pr-22753
