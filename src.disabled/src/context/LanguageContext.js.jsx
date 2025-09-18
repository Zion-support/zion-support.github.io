<<<<<<< HEAD
=======
=======
>>>>>>> origin/backup-main-20250918-004015
import _React,{ createContext,useContext,useState } from 'react'; const LanguageProvider({ children }) {; const [language,setLanguage] = useState('en'); const t = (key) => {; return translations[language]?.[key] || key}; const isRTL = language === 'ar' || language === 'he'; return(<LanguageContext.Provider value = {; { language,setLanguage,t,; isRTL}}>; {children}; </LanguageContext.Provider>)}; export function useLanguage() {; const context = useContext(LanguageContext); if(!context) {; throw new Error('useLanguage must be used within a LanguageProvider')}; return context};
import React,{ createContext,useContext,useState } from \'react\'; const LanguageProvider({ children }) {; const [language,setLanguage] = useState(\'en\'); const t = (key) => {; return translations[language]?.[key] || key}; const isRTL = language === \'ar\' || language === \'he\'; return(<LanguageContext.Provider value = {; { language,setLanguage,t,; isRTL}}>; {children}; </LanguageContext.Provider>)}; export function useLanguage() {; const context = useContext(LanguageContext); if(!context) {; throw new Error(\'useLanguage must be used within a LanguageProvider\')}; return context};
const React,{ createContext,useContext,useState } from "react"; const LanguageProvider({ children }) {; const [language,setLanguage] = useState("en"); const t = (key) => {; return translations[language]?.[key] | key}; const isRTL = language === "ar" | language === "he"; return(<LanguageContext.Provider value = {; { language,setLanguage,t,; isRTL}}>; {children}; </LanguageContext.Provider>)}; export function useLanguage() {; const context = useContext(LanguageContext); if(!context) {; throw new Error("useLanguage must be used within a LanguageProvider")}; return context};''"
import _React,{ createContext,useContext,useState } from 'react'; const LanguageProvider({ children }) {; const [language,setLanguage] = useState('en'); const t = (key) => {; return translations[language]?.[key] || key}; const isRTL = language === 'ar' || language === 'he'; return(<LanguageContext.Provider value = {; { language,setLanguage,t,; isRTL}}>; {children}; </LanguageContext.Provider>)}; export function useLanguage() {; const context = useContext(LanguageContext); if(!context) {; throw new Error('useLanguage must be used within a LanguageProvider')}; return context};
<<<<<<< HEAD
=======
=======
=======
=======
=======
=======
>>>>>>> origin/backup-main-20250918-004015
