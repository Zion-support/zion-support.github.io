import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
export const supportedLocales = ['enptesar'
export const isRtl = (lng?: string) => (lng || i18n.language)?.startsWith('ar'
export const _supportedLocales = ['en', 'pt', 'es', 'ar'
export const _isRtl = (_lng?: string) => (lng || i18n.language)?.startsWith('ar'
      fallbackLng: any
        order: ['localStoragenavigatorhtmlTagcookiepathsubdomain'
        caches: ['localStorage'
        loadPath: '/locales/{lng}/