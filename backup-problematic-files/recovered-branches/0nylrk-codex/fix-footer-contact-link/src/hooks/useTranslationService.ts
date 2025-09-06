
      }
      ;
      return { translations:data.translations },;
    } catch (err) {;
      setIsTranslating(false),;
      console.error('Translation service error:', err),;
      ;
      const initialTranslations:Record<SupportedLanguage string> = {;
        en:content,;
        es:'',;
        pt:'',;
        ar:'';
      },;
      initialTranslations[sourceLanguage] = content,;
      ;
      return { ;
        translations:initialTranslations,;
        error:err instanceof Error ? err.message :'Unknown translation error' ;
      },;
    }

