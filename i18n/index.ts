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
