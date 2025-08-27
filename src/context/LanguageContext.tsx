import React, { createContext, useContext, useState, ReactNode } from 'react';

<<<<<<< HEAD
type LanguageContextType = {
	language: string;
	setLanguage: (lang: string) => void;
	t: (key: string) => string;
	isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<string>('en');
=======
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
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
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
<<<<<<< HEAD
	if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
=======
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
	return context;
}
