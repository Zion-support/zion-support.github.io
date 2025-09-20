import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react',
import { safeStorage } from '@/utils/safeStorage',
import Cookies from 'js-cookie',
import { useTranslation } from 'react-i18next',
import { supabase } from '../integrations/supabase/client',
import { toast } from '../components/ui/use-toast',

export type SupportedLanguage = 'en' | 'es',

export type LanguageContextType = {
  currentLanguage: SupportedLanguage,
  changeLanguage: (lang: SupportedLanguage) => Promise<void>,
  isRTL: boolean,
  supportedLanguages: { code: SupportedLanguage, name: string, flag: string }[],
},

const supportedLanguages = [
  { code: 'en' as SupportedLanguage, name: 'English', flag: '🇺🇸' },
  { code: 'es' as SupportedLanguage, name: 'Español', flag: '🇪🇸' }
],

const defaultLanguageContext: LanguageContextType = {
  currentLanguage: 'en-US',
  changeLanguage: async () => {},
  isRTL: false,
  supportedLanguages
},

export const useLanguage = () =>
  useContext<LanguageContextType>(LanguageContext),

interface LanguageProviderProps {
  children: ReactNode,
  authState?: { 
    isAuthenticated: boolean,
    user: { id?: string } | null,
  },
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  authState = { isAuthenticated: false, user: null } 
}) => {
  const { i18n, t } = useTranslation(),
  const { isAuthenticated, user } = authState,
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(
    (i18n.language as SupportedLanguage) || 'en-US'
  ),
  const [isRTL, setIsRTL] = useState(i18n.dir() === 'rtl'),
  
  useEffect(() => {
    // Set initial language from cookie or localStorage
    const savedLang = (Cookies.get('zion_language') as SupportedLanguage) ||
      (safeStorage.getItem('zion_language') as SupportedLanguage),
    if (savedLang && supportedLanguages.some(lang => lang.code === savedLang)) {
      i18n.changeLanguage(savedLang),
      setCurrentLanguage(savedLang),
    } else {
      fetch('/api/detect-language')
        .then(res => res.json())
        .then(data => {
          if (data.lang && supportedLanguages.some(l => l === data.lang.substring(0,2))) {
            i18n.changeLanguage(data.lang.substring(0,2)),
            setCurrentLanguage(data.lang.substring(0,2) as SupportedLanguage),
          }
        })
        .catch(() => {}),
    }
  }, [i18n]), // i18n is a dependency here
  
  useEffect(() => {
    setIsRTL(i18n.dir() === 'rtl'),
    document.documentElement.dir = i18n.dir(),
    document.documentElement.lang = currentLanguage,
    
    if(i18n.dir() === 'rtl') {
      document.documentElement.classList.add('rtl'),
    } else {
      document.documentElement.classList.remove('rtl'),
    }
  }, [currentLanguage, i18n]), // Correct: i18n and currentLanguage
  
  useEffect(() => {
    const syncLanguageWithProfile = async () => {
      if(isAuthenticated && user?.id && currentLanguage) { // ensure currentLanguage is also checked
        try {
          const { error } = await supabase
            .from('profiles')
            .update({ preferred_language: currentLanguage })
            .eq('id', user.id),
            
          if(error) {
            console.error('Error updating language preference:', error),
          }
        } catch(err) {
          console.error('Error syncing language with profile:', err),
        }
      }
    },
    
    syncLanguageWithProfile(),
  }, [currentLanguage, isAuthenticated, user]), // Correct dependencies
  
  const changeLanguage = async(lang: SupportedLanguage) => {
    if(lang === currentLanguage) return,
    
    try {
      await i18n.changeLanguage(lang),
      setCurrentLanguage(lang),
      Cookies.set('zion_language', lang, { expires: 365 }),
      safeStorage.setItem('zion_language', lang),
      
      const langName = supportedLanguages.find(l => l.code === lang)?.name || lang,
      toast({
        description: t('language.language_changed', { language: langName })
      }),
      
      // The language preference sync will be handled by the useEffect above
      // that depends on currentLanguage, isAuthenticated, and user.} catch(err) {
      console.error('Error changing language:', err),
    }
  },
  
  return (<LanguageContext.Provider 
      value={{ 
        currentLanguage, 
        changeLanguage, 
        isRTL,
        supportedLanguages
      }}
    >
      {children}
    </LanguageContext.Provider>
  ),
},
