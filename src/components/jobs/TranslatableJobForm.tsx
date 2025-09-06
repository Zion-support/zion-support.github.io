<<<<<<< HEAD
    ar: ""
  });
<<<<<<< HEAD
    ar: ""
  });
  
<<<<<<< HEAD
    
<<<<<<< HEAD
    let sourceLanguage: SupportedLanguage = 'en';
    let content = '';
    
<<<<<<< HEAD
        content = title[lang];
        sourceLanguage = lang;
        break;
      } else if (field === 'description' && description[lang]) {
        content = description[lang];
        sourceLanguage = lang;
        break;
      } else if (field === 'requirements' && requirements[lang]) {
        content = requirements[lang];
        sourceLanguage = lang;
        break;
<<<<<<< HEAD
        title: t('translation.no_content'),
        description: t('translation.add_content_first'),
        variant: "destructive"
      });
      return;
<<<<<<< HEAD
          variant: "destructive"
      });
      return;
<<<<<<< HEAD
        title: t('translation.translation_success'),
        description: t('translation.content_translated')
      });
    } catch (error) {
      logErrorToProduction('Error translating ${field}:', { data: error });
      toast({
        title: t('translation.translation_failed'),
        description: error instanceof Error ? error.message : t('translation.unknown_error'),
        variant: "destructive"
      });
    }
  };
  
  // Ensure all translations are available
  const ensureAllTranslations = async () => {
    const promises = [];
    
