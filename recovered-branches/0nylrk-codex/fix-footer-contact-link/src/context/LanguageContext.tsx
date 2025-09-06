import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../integrations/supabase/client';
import { toast } from '../components/ui/use-toast';
export type SupportedLanguage = $2;
export type LanguageContextType = $2;
  changeLanguage: (lang: SupportedLanguage) => Promise<void>,
  isRTL: boolean,
  supportedLanguages: { code: SupportedLanguage, name: string, flag: string}[]
},

const supportedLanguages = [
  { code: 'en' as SupportedLanguage, name: 'English', flag: '🇺🇸' },
  { code: 'es' as SupportedLanguage, name: 'Español', flag: '🇪🇸' },
  { code: 'pt' as SupportedLanguage, name: 'Português', flag: '🇧🇷' },
  { code: 'ar' as SupportedLanguage, name: 'العربية', flag: '🇸🇦' }
],

const defaultLanguageContext: LanguageContextType = $2;
  changeLanguage: async() => {},
  isRTL: false,
  supportedLanguages
},

const LanguageContext = createContext($2);
export const useLanguage = (): LanguageContextType => useContext($2);
interface LanguageProviderProps {
  children: ReactNode,
  authState?: { 
    isAuthenticated: boolean,
    user: { id?: string } | null
  }
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  authState = { isAuthenticated: false, user: null} 
}) => {
  const { i18n, t } = useTranslation($2);
  const { isAuthenticated, user } = authState,
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(
    (i18n.language?.substring(0, 2) as SupportedLanguage) || 'en'
  ),
  const [isRTL, setIsRTL] = useState(i18n.dir() === 'rtl'),
  
  useEffect(() => {
    // Set initial language from localStorage or browser
    const savedLang = $2;
    if (savedLang && supportedLanguages.some(lang => lang.code === savedLang)) {
      i18n.changeLanguage($2);
      setCurrentLanguage(savedLang)
    }
  }, []),
  
  // Update RTL status when language changes
  useEffect(() => {
    setIsRTL(i18n.dir() === 'rtl'),
    document.documentElement.dir = i18n.dir($2);
    document.documentElement.lang = $2;
    // Add RTL class for Tailwind
    if (i18n.dir() === 'rtl') {
      document.documentElement.classList.add('rtl')
    } else {
      document.documentElement.classList.remove('rtl')
    }
  }, [currentLanguage, i18n]),
  
  // Sync language preference with user profile when authenticated
  useEffect(() => {
    const syncLanguageWithProfile = async () => {
      if (isAuthenticated && user?.id) {
        try {
          const { error } = await supabase
            .from('profiles')
            .update({ preferred_language: currentLanguage})
            .eq($2);
          if (error) {
            console.error('Error updating language preference:', error)
          }
        } catch (err) {
          console.error('Error syncing language with profile:', err)
        }
      }
    },
    
    syncLanguageWithProfile()
  }, [currentLanguage, isAuthenticated, user]),
  
  const changeLanguage = $2;
    try {
      await i18n.changeLanguage($2);
      setCurrentLanguage($2);
      localStorage.setItem($2);
      // Get language name for toast
      const langName = $2;
      toast({
        description: t('language.language_changed', { language: langName})
      }),
      
      // If user is authenticated, update their profile
      if (isAuthenticated && user?.id) {
        const { error } = await supabase
          .from('profiles')
          .update({ preferred_language: lang})
          .eq($2);
        if (error) {
          console.error('Error updating language preference:', error)
        }
      }
    } catch (err) {
      console.error('Error changing language:', err)
    }
  },
  
  return (
    <LanguageContext.Provider 
      value = $2;
        changeLanguage, 
        isRTL,
        supportedLanguages
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
},