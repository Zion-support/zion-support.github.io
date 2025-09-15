// i18n configuration
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: 'Welcome to Zion Tech Group',
      description: 'Leading the future of technology with AI, blockchain, and innovative solutions',
      explore: 'Explore',
      learnMore: 'Learn More',
      contact: 'Contact Us',
      services: 'Services',
      about: 'About',
      blog: 'Blog'
    }
  },
  es: {
    translation: {
      welcome: 'Bienvenido a Zion Tech Group',
      description: 'Liderando el futuro de la tecnología con IA, blockchain y soluciones innovadoras',
      explore: 'Explorar',
      learnMore: 'Saber Más',
      contact: 'Contáctanos',
      services: 'Servicios',
      about: 'Acerca de',
      blog: 'Blog'
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
      escapeValue: false
    }
  });

export default i18n;