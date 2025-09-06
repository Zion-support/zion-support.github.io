 if (!i18n.isInitialized) {
  i18n .use (Backend) .use (LanguageDetector) .use (initReactI18next) .init ({
  fallbackLng: 'en', supportedLngs: supportedLocales as unknown as string[], interpolation: {
  escapeValue: false 
};
resources;
ns: ['common'];
defaultNS: 'common' 
}as any) 
}export default i18n;
