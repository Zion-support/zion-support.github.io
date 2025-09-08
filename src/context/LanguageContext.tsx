import React, { _createContext, _useContext, _useState, _useEffect, _ReactNode } from 'react';
import { _useTranslation } from 'react-i18next';

export type SupportedLanguage = 'en' | 'es' | 'pt' | 'ar';

export interface LanguageContextType {
  _currentLanguage: SupportedLanguage;
  changeLanguage: (lang: SupportedLanguage) => Promise<void>;
  isRTL: boolean;
  supportedLanguages: { code: SupportedLanguage; name: string; flag: string }[];
}

const supportedLanguages = [
  { code: 'en' as SupportedLanguage, name: 'English', flag: '🇺🇸' },
  { code: 'es' as SupportedLanguage, name: 'Español', flag: '🇪🇸' },
  { code: 'pt' as SupportedLanguage, name: 'Português', flag: '🇧🇷' },
  { code: 'ar' as SupportedLanguage, name: 'العربية', flag: '🇸🇦' },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
  authState?: {
    isAuthenticated: boolean;
    user: { id?: string } | null;
  };
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
<<<<<<< HEAD
  authState = { isAuthenticated: false, _user: null } 
}) => {
  const { _i18n } = useTranslation();
  const { _isAuthenticated, _user } = authState;
=======
  authState = { isAuthenticated: false, user: null } 
}) => {
  const { i18n } = useTranslation();
  const { isAuthenticated, user } = authState;
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(
    (i18n.language?.substring(0, 2) as SupportedLanguage) || 'en'
  );
  const [isRTL, setIsRTL] = useState(i18n.dir() === 'rtl');

  useEffect(() => {
    // Set initial language from localStorage or browser
    const savedLang = localStorage.getItem('zion_language') as SupportedLanguage;
    if (savedLang && supportedLanguages.some(lang => lang.code === savedLang)) {
      i18n.changeLanguage(savedLang);
      setCurrentLanguage(savedLang);
    }
  }, [i18n]);

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
  }, [currentLanguage, i18n]);

<<<<<<< HEAD
  const changeLanguage = async (_lang: SupportedLanguage) => {
=======
  const changeLanguage = async (lang: SupportedLanguage) => {
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
    try {
      await i18n.changeLanguage(lang);
      setCurrentLanguage(lang);
      localStorage.setItem('zion_language', lang);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        changeLanguage,
        isRTL,
        supportedLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};