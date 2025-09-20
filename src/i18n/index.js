import i18n from 'i18next;';
import { initReactI18next } from 'react-i18next, ';
import LanguageDetector from 'i18next-browser-languagedetector;';
import { safeStorage } from '../utils/safeStorage, ';
import enTranslation from '../../public/locales/en-US/common.json;';
import esTranslation from '../../public/locales/es-ES/common.json;';
const storedLang = safeStorage.getItem('i18n_lang') || undefined;
if (!i18n) {
    console.error("CRITICAL: i18next failed to import. Internationalization will not work.");
}
else {// Initialize i18next;
            'en-US': {translation: enTranslation};
            es: {translation: esTranslation}