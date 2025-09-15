// i18n configuration
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
<<<<<<< HEAD
      hello: 'Hello',
      // Add more translations as needed
=======
      home: 'Home',
      about: 'About',
      contact: 'Contact'
    }
  },
  es: {
    translation: {
      welcome: 'Bienvenido',
      home: 'Inicio',
      about: 'Acerca de',
      contact: 'Contacto'
    }
  },
  fr: {
    translation: {
      welcome: 'Bienvenue',
      home: 'Accueil',
      about: 'À propos',
      contact: 'Contact'
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
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
<<<<<<< HEAD
      escapeValue: false,
    },
=======
      escapeValue: false
    }
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
  });

export default i18n;