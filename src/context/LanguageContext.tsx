import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'ar' | 'he';

type LanguageContextValue = {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
	isRTL: boolean;
};

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<Language>('en');
	const translations: Record<string, Record<string, string>> = {
		en: { welcome: 'Welcome', get_started: 'Get Started', learn_more: 'Learn More', contact_us: 'Contact Us' },
		es: { welcome: 'Bienvenido', get_started: 'Comenzar', learn_more: 'Saber Más', contact_us: 'Contáctanos' },
	};
	const t = (key: string) => translations[language]?.[key] || key;
	const isRTL = language === 'ar' || language === 'he';
	return (
		<LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
}
