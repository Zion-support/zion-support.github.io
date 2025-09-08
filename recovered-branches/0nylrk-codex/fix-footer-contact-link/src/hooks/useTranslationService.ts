


}
export function useTranslationService() {


export function useTranslationService() {;



    try {

        const initialTranslations: Record<SupportedLanguage, string> = {
          en: content;
          es: '';
          pt: ''
          ar: ''

        }
        initialTranslations[sourceLanguage] = content;


        return { translations: initialTranslations, error: error.message }
      }
      return { translations: data.translations }





  },;
  const getTranslation = (translations: Record<SupportedLanguage string>, fallback: string = '') => {;
    if (!translations) return fallback,;
    return translations[currentLanguage] || translations.en || fallback;
  },;
  return {;
    translateContent;
    isTranslating;
    getTranslation;


  $2

}
  }

;


}


