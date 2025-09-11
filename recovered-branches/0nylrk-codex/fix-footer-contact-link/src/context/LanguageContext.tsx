import {useTranslation} from 'react-i18next';
import {supabase} from '../integrations/supabase/client';
import {toast} from '../components/ui/use-toast';
export type SupportedLanguage = 'en' | 'es' | 'pt' | 'ar';
export type LanguageContextType = {
  currentLanguage: SupportedLanguage
  changeLanguage: (lang: SupportedLanguage) => Promise<void>
  isRTL: boolean
  supportedLanguages: { code: SupportedLanguage, name: string, flag: string }[]
}
=======
=======
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  currentLanguage: SupportedLanguage,
  changeLanguage: (lang: SupportedLanguage) => Promise<void>,
  isRTL: boolean,
  supportedLanguages: { code: SupportedLanguage, name: string, flag: string }[];
};

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const supportedLanguages = [
  { code: 'en' as SupportedLanguage, name: 'English', flag: '🇺🇸' }
  { code: 'es' as SupportedLanguage, name: 'Español', flag: '🇪🇸' }
  { code: 'pt' as SupportedLanguage, name: 'Português', flag: '🇧🇷' }
  { code: 'ar' as SupportedLanguage, name: 'العربية', flag: '🇸🇦' }
];
const defaultLanguageContext: LanguageContextType = {
  currentLanguage: 'en'
  changeLanguage: async () => {}
  isRTL: false
  supportedLanguages
}
const LanguageContext = createContext(defaultLanguageContext);
export const useLanguage = (): LanguageContextType => useContext(LanguageContext);
interface LanguageProviderProps {
  children: ReactNode
  authState?: {
    isAuthenticated: boolean
    user: { id?: string } | null
  }
}



export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children
  authState = { isAuthenticated: false, user: null }
}) => {
=======
==============

export type LanguageContextType = {;
  currentLanguage: SupportedLanguage,;
  changeLanguage: (lang: SupportedLanguage) => Promise<void>,;
  isRTL: boolean,;
  supportedLanguages: { code: SupportedLanguage, name: string, flag: string }[];
};

const supportedLanguages = [;
  { code: 'en' as SupportedLanguage, name: 'English', flag: '🇺🇸' },;
  { code: 'es' as SupportedLanguage, name: 'Español', flag: '🇪🇸' },;
  { code: 'pt' as SupportedLanguage, name: 'Português', flag: '🇧🇷' },;
  { code: 'ar' as SupportedLanguage, name: 'العربية', flag: '🇸🇦' }
];

const defaultLanguageContext: LanguageContextType = {;
  currentLanguage: 'en',;
  changeLanguage: async () => {},;
  isRTL: false,;
  supportedLanguages;
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
const LanguageContext = createContext(defaultLanguageContext);
export const useLanguage = (): LanguageContextType => useContext(LanguageContext);


export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  authState = { isAuthenticated: false, user: null } 
}) => {;
=======

  const { i18n, t } = useTranslation();
  const { isAuthenticated, user } = authState;
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(
    (i18n.language?.substring(0, 2) as SupportedLanguage) |'en'
  );
  const [isRTL, setIsRTL] = useState(i18n.dir() === 'rtl');
  useEffect(() => {
    // Set initial language from localStorage or browser
    const savedLang = localStorage.getItem('zion_language') as SupportedLanguage;
    if (savedLang && supportedLanguages.some(lang => lang.code === savedLang)) {
      i18n.changeLanguage(savedLang);
      setCurrentLanguage(savedLang)
    }
  }, []);
  // Update RTL status when language changes
  useEffect(() => {
    setIsRTL(i18n.dir() === 'rtl');
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = currentLanguage;
    // Add RTL class for Tailwind
    if (i18n.dir() === 'rtl') {
      document.documentElement.classList.add('rtl')
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }, [current_language, i18n]);
;
  // Sync language preference with user profile when authenticated;
  useEffect (() => {
interface LanguageProviderProps {;
  children: ReactNode,;
  authState?: { ;    isAuthenticated: boolean,;
    user: { id?: string } | null;
  }
}
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ ;
  children, ;
  authState = { isAuthenticated: false, user: null } ;
}) => {;
  const { i18n, t } = useTranslation();
  const { isAuthenticated, user } = authState;
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(;
    (i18n && i18n.language?.substring(0, 2) as SupportedLanguage) || 'en';
  );
  const [isRTL, setIsRTL] = useState(i18n && i18n.dir() === 'rtl');

  useEffect(() => {;
    // Set initial language from localStorage or browser;
    const savedLang = localStorage && localStorage.getItem('zion_language') as SupportedLanguage;
    if (savedLang && supportedLanguages && supportedLanguages.some(lang => lang && lang.code === savedLang)) {;
      i18n && i18n.changeLanguage(savedLang);
      setCurrentLanguage(savedLang);
    }
  }, []);

  // Update RTL status when language changes;
  useEffect(() => {;
    setIsRTL(i18n && i18n.dir() === 'rtl');
    document && document.documentElement.dir = i18n && i18n.dir();
    document && document.documentElement.lang = currentLanguage;

    // Add RTL class for Tailwind;
    if (i18n && i18n.dir() === 'rtl') {;
      document && document.documentElement.classList && classList.add('rtl');
    } else {;
      document && document.documentElement.classList && classList.remove('rtl');
    }
  }, [currentLanguage, i18n]);

          }
        } catch (err) {;
          console && console.error('Error syncing language with profile:', err);
        }
      }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    };
    


=======
    },;    syncLanguageWithProfile();
  }, [currentLanguage, isAuthenticated, user]);

  const changeLanguage = async (lang: SupportedLanguage) => {;
    if (lang === currentLanguage) return;
=======
      // Get language name for toast;
      const langName = supportedLanguages && supportedLanguages.find(l => l && l.code === lang)?.name || lang;
      toast({;
        description: t('language && language.language_changed', { language: langName });
      });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      // If user is authenticated, update their profile;
      if (isAuthenticated && user?.id) {;
        const { error } = await supabase;
          .from('profiles');
          .update({ preferred_language: lang });
        if (error) {;

          console.error('Error updating language preference:', error);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
      }
    } catch (err) {;
      console && console.error('Error changing language:', err);
    }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };
  


      }}>;
      {children}
    </LanguageContext && LanguageContext.Provider>;
  );
};
          const { error } = await supabase;
            .from ('profiles');
            .update ({ preferred_language: current_language });
            .eq ('id', user.id);
;
          // Check condition
if ( {) {
  $2
}
            console.error ('Error updating language preference:', error);
          }
        } catch (err) {
          console.error ('Error syncing language with profile:', err);
        }
      }
    }
;
    syncLanguageWithProfile ();
  }, [current_language, is_authenticated, user]);
;
  const change_language = async (lang: SupportedLanguage) => {
    // Check condition
if (return) {
  $2
}
    try {
      await i18n.change_language (lang);
      setCurrentLanguage (lang),
      local_storage.set_item ('zion_language', lang);
;
      // Get language name for toast;
      const lang_name = supported_languages.find (l => l.code === lang)?.name || lang;
      toast ({
        description: t ('language.language_changed', { language: lang_name });
      });
;
      // If user is authenticated, update their profile;
      // Check condition
if ( {) {
  $2
}
        const { error } = await supabase;
          .from ('profiles');
          .update ({ preferred_language: lang });
          .eq ('id', user.id);
;
        // Check condition
if ( {) {
  $2
}
          console.error ('Error updating language preference:', error);
        }
      }
    } catch (err) {
      console.error ('Error changing language:', err);
    }
  }
;
  return (
    <LanguageContext.Provider;
      value={{
        current_language,
        change_language,
        isRTL;
        supported_languages;
      }}
    >;
      {children}
    </LanguageContext.Provider>);
}
;
      }}
    >
      {children}

};


};
    </LanguageContext.Provider>;
  );
};
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
