import React, { createContext, useContext, useState } from 'react';

export type SupportedLanguage = 'en' | 'es' | 'fr';

type LanguageContextType = {
  currentLanguage: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  supportedLanguages: SupportedLanguage[];
  t: (key: string) => string;
  translateContent: (content: string) => Promise<string>;
  isTranslating: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setLanguage] = useState<SupportedLanguage>('en');
  const [isTranslating, setIsTranslating] = useState(false);

  const supportedLanguages: SupportedLanguage[] = ['en', 'es', 'fr'];

  const t = (key: string): string => key;

  const translateContent = async (content: string): Promise<string> => {
    setIsTranslating(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 50));
      return content;
    } finally {
      setIsTranslating(false);
    }
  };

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    supportedLanguages,
    t,
    translateContent,
    isTranslating
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};

