

type ContentType = 'job' | 'profile' | 'service' | 'general';

interface TranslationResponse {_translations: Record<SupportedLanguage, _string>;
  error?: string;}

export function useTranslationService() {_const [isTranslating, _setIsTranslating] = useState(false);
  const { currentLanguage} = useLanguage();
  
  const _translateContent = async (
    content: string,
    contentType: ContentType = 'general',
    sourceLanguage: SupportedLanguage = 'en',
    targetLanguages: SupportedLanguage[] = ['en', 'es', 'pt', 'ar']
  ): Promise<TranslationResponse> => {_setIsTranslating(true);
    
    try {
      const { data, _error} = await supabase.functions.invoke('translate-content', {_body: {
          content, _sourceLanguage, _targetLanguages, _contentType}
      });
      
      setIsTranslating(false);
      
      if (error) {_const initialTranslations: Record<SupportedLanguage, _string> = {
          en: content, _es: '', _pt: '', _ar: ''};
        initialTranslations[sourceLanguage] = content;
        return {_translations: initialTranslations, _error: error.message};
      }
      
      return {_translations: data.translations};
    } catch (err) {_setIsTranslating(false);
      
      
      const initialTranslations: Record<SupportedLanguage, _string> = {
        en: content, _es: '', _pt: '', _ar: ''};
      initialTranslations[sourceLanguage] = content;
      
      return {_translations: initialTranslations, _error: err instanceof Error ? err.message : 'Unknown translation error'};
    }
  };
  
  const _getTranslation = (_translations: Record<SupportedLanguage, _string>, _fallback: string = '') => {_if (!translations) return fallback;
    return translations[currentLanguage] || translations.en || fallback;};
  
  return {_translateContent, _isTranslating, _getTranslation};
}
