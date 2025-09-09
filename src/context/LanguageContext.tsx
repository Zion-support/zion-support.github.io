import React, { createContext, useContext, useState, ReactNode } from 'react';

export type SupportedLanguage = 'en' | 'es' | 'fr';

interface LanguageContextType {
  currentLanguage: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  supportedLanguages: SupportedLanguage[];
  translateText: (text: string, targetLanguage: string) => Promise<string>;
  t: (key: string) => string;
  translateContent: (content: string) => Promise<string>;
  isTranslating: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setLanguage] = useState<SupportedLanguage>('en');
  const [isTranslating, setIsTranslating] = useState(false);

  const supportedLanguages: SupportedLanguage[] = ['en', 'es', 'fr'];

  const translateText = async (text: string, targetLanguage: string): Promise<string> => {
    setIsTranslating(true);
    try {
      // Stub implementation - in real app, this would call a translation API
      await new Promise(resolve => setTimeout(resolve, 100));
      return text; // Return original text for now
    } finally {
      setIsTranslating(false);
    }
  };

  const t = (key: string): string => {
    // Stub implementation - in real app, this would use i18n
    return key;
  };

  const translateContent = async (content: string): Promise<string> => {
    return translateText(content, currentLanguage);
  };

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    supportedLanguages,
    translateText,
    t,
    translateContent,
    isTranslating,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};