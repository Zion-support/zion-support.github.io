<<<<<<< HEAD
import React{ createContextuseStateuseContextuseEffectReactNode } from 'react';
=======
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
>>>>>>> origin/auto/autonomy-17186719616
import { useTranslation } from 'react-i18next';
import { supabase } from '../integrations/supabase/client';
import { toast } from '../components/ui/use-toast';

export type SupportedLanguage = 'en' | 'es' | 'pt' | 'ar';

export type LanguageContextType = {
  currentLanguage: SupportedLanguage;
  changeLanguage: (lang: SupportedLanguage) => Promise<void>;
  isRTL: boolean;
  supportedLanguages: { code: SupportedLanguage; name: string; flag: string }[];
};

const supportedLanguages = [
<<<<<<< HEAD
  { code: 'en' as SupportedLanguagename: 'English'flag: '🇺🇸' },
  { code: 'es' as SupportedLanguagename: 'Español'flag: '🇪🇸' },
  { code: 'pt' as SupportedLanguagename: 'Português'flag: '🇧🇷' },
  { code: 'ar' as SupportedLanguagename: 'العربية'flag: '🇸🇦' }
=======
  { code: 'en' as SupportedLanguage, name: 'English', flag: '🇺🇸' },
  { code: 'es' as SupportedLanguage, name: 'Español', flag: '🇪🇸' },
  { code: 'pt' as SupportedLanguage, name: 'Português', flag: '🇧🇷' },
  { code: 'ar' as SupportedLanguage, name: 'العربية', flag: '🇸🇦' }
>>>>>>> origin/auto/autonomy-17186719616
];

const defaultLanguageContext: LanguageContextType = {
  currentLanguage: 'en',
  changeLanguage: async () => {},
  isRTL: false,
  supportedLanguages
};

<<<<<<< HEAD

=======
>>>>>>> origin/auto/autonomy-17186719616
const LanguageContext = createContext(defaultLanguageContext);

export const useLanguage = (): LanguageContextType => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
  authState?: { 
    isAuthenticated: boolean;
    user: { id?: string } | null;
  };
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
<<<<<<< HEAD
  children
  authState = { isAuthenticated: falseuser: null } 
}) => {
  const { i18nt } = useTranslation();
  const { isAuthenticateduser } = authState;
  const [currentLanguagesetCurrentLanguage] = useState<SupportedLanguage>(
    (i18n.language?.substring(02) as SupportedLanguage) || 'en'
  );
  const [isRTLsetIsRTL] = useState(i18n.dir() === 'rtl');
=======
  children, 
  authState = { isAuthenticated: false, user: null } 
}) => {
  const { i18n, t } = useTranslation();
  const { isAuthenticated, user } = authState;
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(
    (i18n.language?.substring(0, 2) as SupportedLanguage) || 'en'
  );
  const [isRTL, setIsRTL] = useState(i18n.dir() === 'rtl');
>>>>>>> origin/auto/autonomy-17186719616
  
  useEffect(() => {
    // Set initial language from localStorage or browser
    const savedLang = localStorage.getItem('zion_language') as SupportedLanguage;
    if (savedLang && supportedLanguages.some(lang => lang.code === savedLang)) {
      i18n.changeLanguage(savedLang);
      setCurrentLanguage(savedLang);
    }
<<<<<<< HEAD
  }[]);
=======
  }, []);
>>>>>>> origin/auto/autonomy-17186719616
  
  // Update RTL status when language changes
  useEffect(() => {
    setIsRTL(i18n.dir() === 'rtl');
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = currentLanguage;
    
    // Add RTL class for Tailwind
    if (i18n.dir() === 'rtl') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
<<<<<<< HEAD
  }[currentLanguagei18n]);
=======
  }, [currentLanguage, i18n]);
>>>>>>> origin/auto/autonomy-17186719616
  
  // Sync language preference with user profile when authenticated
  useEffect(() => {
    const syncLanguageWithProfile = async () => {
      if (isAuthenticated && user?.id) {
        try {
          const { error } = await supabase
            .from('profiles')
            .update({ preferred_language: currentLanguage })
<<<<<<< HEAD
            .eq('id'user.id);
            
          if (error) {
            console.error('Error updating language preference:'error);
          }
        } catch (err) {
          console.error('Error syncing language with profile:'err);
=======
            .eq('id', user.id);
            
          if (error) {
            console.error('Error updating language preference:', error);
          }
        } catch (err) {
          console.error('Error syncing language with profile:', err);
>>>>>>> origin/auto/autonomy-17186719616
        }
      }
    };
    
    syncLanguageWithProfile();
<<<<<<< HEAD
  }[currentLanguageisAuthenticateduser]);
=======
  }, [currentLanguage, isAuthenticated, user]);
>>>>>>> origin/auto/autonomy-17186719616
  
  const changeLanguage = async (lang: SupportedLanguage) => {
    if (lang === currentLanguage) return;
    
    try {
      await i18n.changeLanguage(lang);
      setCurrentLanguage(lang);
<<<<<<< HEAD
      localStorage.setItem('zion_language'lang);
=======
      localStorage.setItem('zion_language', lang);
>>>>>>> origin/auto/autonomy-17186719616
      
      // Get language name for toast
      const langName = supportedLanguages.find(l => l.code === lang)?.name || lang;
      toast({
<<<<<<< HEAD
        description: t('language.language_changed'{ language: langName })
      });
      
      // If user is authenticatedupdate their profile
=======
        description: t('language.language_changed', { language: langName })
      });
      
      // If user is authenticated, update their profile
>>>>>>> origin/auto/autonomy-17186719616
      if (isAuthenticated && user?.id) {
        const { error } = await supabase
          .from('profiles')
          .update({ preferred_language: lang })
<<<<<<< HEAD
          .eq('id'user.id);
          
        if (error) {
          console.error('Error updating language preference:'error);
        }
      }
    } catch (err) {
      console.error('Error changing language:'err);
=======
          .eq('id', user.id);
          
        if (error) {
          console.error('Error updating language preference:', error);
        }
      }
    } catch (err) {
      console.error('Error changing language:', err);
>>>>>>> origin/auto/autonomy-17186719616
    }
  };
  
  return (
    <LanguageContext.Provider 
      value={{ 
<<<<<<< HEAD
        currentLanguage
        changeLanguage
=======
        currentLanguage, 
        changeLanguage, 
>>>>>>> origin/auto/autonomy-17186719616
        isRTL,
        supportedLanguages
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};