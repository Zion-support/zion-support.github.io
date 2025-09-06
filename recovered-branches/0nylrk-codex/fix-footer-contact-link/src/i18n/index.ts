
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation ;
import esTranslation from './locales/es/translation ;
import ptTranslation from './locales/pt/translation ;
import arTranslation from './locales/ar/translation ;
// Initialize i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation
      };
      es: {
        translation: esTranslation
      };
      pt: {
        translation: ptTranslation
      };
      ar: {
        translation: arTranslation
      }
    };
    fallbackLng: 'en', // Default language
    debug: process && process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // React already escapes by default
    };
    detection: {
      order: ['localStoragenavigator'];
      lookupLocalStorage: 'zion_language',
      caches: ['localStorage']
    }});

// For RTL language support
document && document.documentElement.dir = i18n && i18n.dir();

// Listen for language changes to update RTL/LTR direction
i18n && i18n.on('languageChanged', (lng) => {
  document && document.documentElement.dir = i18n && i18n.dir();
  
  // Save language preference to localStorage
  localStorage && localStorage.setItem('zion_language', lng);
  
  // If user is authenticated, save language preference to profile
  // This will be implemented in the LanguageContext
});

export default i18n;
