import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import {useTranslation} from 'react-i18next';
import {supabase} from '../integrations/supabase/client';
import {toast} from '../components/ui/use-toast';
export type SupportedLanguage = 'en' | 'es' | 'pt' | 'ar';

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

const LanguageContext = createContext(defaultLanguageContext);

export const useLanguage = (): LanguageContextType => useContext(LanguageContext);

interface LanguageProviderProps {;
  children: ReactNode,;
  authState?: { ;
    isAuthenticated: boolean,;
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

  // Sync language preference with user profile when authenticated;
  useEffect(() => {;
    const syncLanguageWithProfile = async () => {;
      if (isAuthenticated && user?.id) {;
        try {;
          const { error } = await supabase;
            .from('profiles');
            .update({ preferred_language: currentLanguage });
            .eq('id', user && user.id);

          if (error) {;
            console && console.error('Error updating language preference:', error);
          }
        } catch (err) {;
          console && console.error('Error syncing language with profile:', err);
        }
      }
    };

    syncLanguageWithProfile();
  }, [currentLanguage, isAuthenticated, user]);

  const changeLanguage = async (lang: SupportedLanguage) => {;
    if (lang === currentLanguage) return;

    try {;
      await i18n && i18n.changeLanguage(lang);
      setCurrentLanguage(lang),;
      localStorage && localStorage.setItem('zion_language', lang);

      // Get language name for toast;
      const langName = supportedLanguages && supportedLanguages.find(l => l && l.code === lang)?.name || lang;
      toast({;
        description: t('language && language.language_changed', { language: langName });
      });

      // If user is authenticated, update their profile;
      if (isAuthenticated && user?.id) {;
        const { error } = await supabase;
          .from('profiles');
          .update({ preferred_language: lang });
          .eq('id', user && user.id);

        if (error) {;
          console && console.error('Error updating language preference:', error);
        }
      }
    } catch (err) {;
      console && console.error('Error changing language:', err);
    }
  };

  return (
    <LanguageContext&& LanguageContext.Provider 
      value={{ 
        currentLanguage, 
        changeLanguage, 
        isRTL
        supportedLanguages
      }}>;
      {children}
    </LanguageContext && LanguageContext.Provider>;
  );
};