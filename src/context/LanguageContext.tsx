import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es' | 'ar' | 'he'

type Translations = Record<string, string>

type LanguageContextValue = {
	language: Language
	setLanguage: (lang: Language) => void
	t: (key: string) => string
	isRTL: boolean
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<Language>('en')
	const translations: Record<Language, Translations> = {
		en: { welcome: 'Welcome', get_started: 'Get Started', learn_more: 'Learn More', contact_us: 'Contact Us' },
		es: { welcome: 'Bienvenido', get_started: 'Comenzar', learn_more: 'Saber Más', contact_us: 'Contáctanos' },
		ar: { welcome: 'مرحبا', get_started: 'ابدأ', learn_more: 'اعرف المزيد', contact_us: 'اتصل بنا' },
		he: { welcome: 'ברוך הבא', get_started: 'התחל', learn_more: 'למידע נוסף', contact_us: 'צור קשר' },
	}
	const t = (key: string) => translations[language]?.[key] || key
	const isRTL = language === 'ar' || language === 'he'
	return (
		<LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
			{children}
		</LanguageContext.Provider>
	)
}

export function useLanguage() {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider')
	}
	return context
}
