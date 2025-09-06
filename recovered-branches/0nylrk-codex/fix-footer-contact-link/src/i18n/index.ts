
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import { initReactI18next  } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslation from './locales/en/
import esTranslation from './locales/es/
import ptTranslation from './locales/pt/
import arTranslation from './locales/ar/
import en_translation from './locales / en /
import es_translation from './locales / es /
import pt_translation from './locales / pt /
import ar_translation from './locales / ar /