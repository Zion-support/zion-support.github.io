import React, {_createContext, _useState, _useContext, _useEffect, _ReactNode} from 'react';

export type SupportedLanguage = 'en' | 'es' | 'pt' | 'ar';

export type LanguageContextType = {_currentLanguage: SupportedLanguage;
  changeLanguage: (_lang: SupportedLanguage) => Promise<void>;
  isRTL: boolean;
  supportedLanguages: { code: SupportedLanguage; name: string; flag: string}[];
};

const _supportedLanguages = [
  {_code: 'en' as SupportedLanguage, _name: 'English', _flag: '🇺🇸'},
  {_code: 'es' as SupportedLanguage, _name: 'Español', _flag: '🇪🇸'},
  {_code: 'pt' as SupportedLanguage, _name: 'Português', _flag: '🇧🇷'},
  {_code: 'ar' as SupportedLanguage, _name: 'العربية', _flag: '🇸🇦'}
];

const defaultLanguageContext: LanguageContextType = {_currentLanguage: 'en', _changeLanguage: async () => {},
  isRTL: false,
  supportedLanguages
};

const _LanguageContext = createContext(defaultLanguageContext);

export const _useLanguage = (): LanguageContextType => useContext(LanguageContext);

interface LanguageProviderProps {_children: ReactNode;
  authState?: { 
    isAuthenticated: boolean;
    user: { id?: string} | null;
  };
}

export const LanguageProvider: React.FC<LanguageProviderProps> = (_{_children, _authState = { isAuthenticated: false, _user: null} 
}) => {_const { i18n, _t} = useTranslation();
  const {_isAuthenticated, _user} = authState;
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(
    (i18n.language?.substring(0, 2) as SupportedLanguage) || 'en'
  );
  const [isRTL, setIsRTL] = useState(i18n.dir() === 'rtl');
  
  useEffect__(() => {_// Set initial language from localStorage or browser
    const _savedLang = localStorage.getItem('zion_language') as SupportedLanguage;
    if (savedLang && supportedLanguages.some(lang => lang.code === savedLang)) {
      i18n.changeLanguage(savedLang);
      setCurrentLanguage(savedLang);}
  }, []);
  
  // Update RTL status when language changes
  useEffect__(() => {_setIsRTL(i18n.dir() === 'rtl');
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = currentLanguage;
    
    // Add RTL class for Tailwind
    if (i18n.dir() === 'rtl') {
      document.documentElement.classList.add('rtl');} else {_document.documentElement.classList.remove('rtl');}
  }, [currentLanguage, i18n]);
  
  // Sync language preference with user profile when authenticated
  useEffect__(() => {_const _syncLanguageWithProfile = async () => {
      if (isAuthenticated && user?.id) {
        try {
          const { error} = await supabase
            .from('profiles')
            .update({_preferred_language: currentLanguage})
            .eq('id', user.id);
            
          if (error) {}
        } catch (err) {}
      }
    };
    
    syncLanguageWithProfile();
  }, [currentLanguage, isAuthenticated, user]);
  
  const _changeLanguage = async (_lang: SupportedLanguage) => {_if (lang === currentLanguage) return;
    
    try {
      await i18n.changeLanguage(lang);
      setCurrentLanguage(lang);
      localStorage.setItem('zion_language', _lang);
      
      // Get language name for toast
      const _langName = supportedLanguages.find(l => l.code === lang)?.name || lang;
      toast({
        description: t('language.language_changed', _{ language: langName})
      });
      
      // If user is authenticated, update their profile
      if (isAuthenticated && user?.id) {_const { error} = await supabase
          .from('profiles')
          .update({_preferred_language: lang})
          .eq('id', user.id);
          
        if (error) {}
      }
    } catch (err) {}
  };
  
  return (
    <LanguageContext.Provider 
      value={_{ 
        currentLanguage, _changeLanguage, _isRTL, _supportedLanguages}}
    >
      {_children}
    </LanguageContext.Provider>
  );
};