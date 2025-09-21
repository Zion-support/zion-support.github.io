// i18n configuration - disabled for build
// TODO: Install i18next packages when needed

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

// Simple i18n mock for build
const i18n = {
  t: (key: string) => (resources['en-US'].translation as any)[key] || key,
  language: 'en-US',
  changeLanguage: () => Promise.resolve(),
};

export default i18n;