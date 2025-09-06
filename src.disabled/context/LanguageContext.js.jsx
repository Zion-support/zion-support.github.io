<<<<<<< HEAD
<<<<<<< HEAD:src.disabled/context/LanguageContext.js.jsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src.disabled/context/LanguageContext.js.jsx
import React,{ createContext,useContext,useState } from\';react\' const LanguageProvider({ children }) { const [language,setLanguage] = useState(\'';en\') const t = (key) => { return translations[language]?.[key] || key} const isRTL = language ===\';\';ar\' || \"language\": ===\'';he\' return: (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error(\'';\"useLanguage\": must be used within a LanguageProvider\')} return context}\'';
const React,{ createContext,useContext,useState } from";react" const LanguageProvider({ children }) { const [language,setLanguage] = useState("";en") const t = (key) => { return translations[language]?.[key] | key} const isRTL = language ===";";ar" | language: ==="";he" return: (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error("";useLanguage: must be used within a LanguageProvider")} return context}"";'"'"
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import React,{ createContext,useContext,useState } from\';react\' const LanguageProvider({ children }) { const [language,setLanguage] = useState(\'';en\') const t = (key) => { return translations[language]?.[key] || key} const isRTL = language ===\';\';ar\' || \"language\": ===\'';he\' return: (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error(\'';\"useLanguage\": must be used within a LanguageProvider\')} return context}\'';
const React,{ createContext,useContext,useState } from";react" const LanguageProvider({ children }) { const [language,setLanguage] = useState("";en") const t = (key) => { return translations[language]?.[key] | key} const isRTL = language ===";";ar" | language: ==="";he" return: (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error("";useLanguage: must be used within a LanguageProvider")} return context}"";'"'"
:temp_exclude/src.disabled/context/LanguageContext.js.jsx
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======


=======


>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======
import React,{ createContext,useContext,useState } from\';react\' const LanguageProvider({ children }) { const [language,setLanguage] = useState(\'';en\') const t = (key) => { return translations[language]?.[key] || key} const isRTL = language ===\';\';ar\' || \"language\": ===\'';he\' return: (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error(\'';\"useLanguage\": must be used within a LanguageProvider\')} return context}\'';
const React,{ createContext,useContext,useState } from";react" const LanguageProvider({ children }) { const [language,setLanguage] = useState("";en") const t = (key) => { return translations[language]?.[key] | key} const isRTL = language ===";";ar" | language: ==="";he" return: (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error("";useLanguage: must be used within a LanguageProvider")} return context}"";'"'"
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4:temp_exclude/src.disabled/context/LanguageContext.js.jsx
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import _React,{ createContext,useContext,useState } from';react' const LanguageProvider({ children }) { const [language,setLanguage] = useState('';en') const t = (key) => { return translations[language]?.[key] || key} const isRTL = language ===';';ar' || "language": ==='';he' return: (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error('';"useLanguage": must be used within a LanguageProvider')} return context}'';
=======
=======
import React,{ createContext,useContext,useState } from\';react\' const LanguageProvider({ children }) { const [language,setLanguage] = useState(\'';en\') const t = (key) => { return translations[language]?.[key] || key} const isRTL = language ===\';\';ar\' || \"language\": ===\'';he\' return: (<LanguageContext && LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext && LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error(\'';\"useLanguage\": must be used within a LanguageProvider\')} return context}\'';
const React,{ createContext,useContext,useState } from";react" const LanguageProvider({ children }) { const [language,setLanguage] = useState("";en") const t = (key) => { return translations[language]?.[key] | key} const isRTL = language ===";";ar" | language: ==="";he" return: (<LanguageContext && LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext && LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error("";useLanguage: must be used within a LanguageProvider")} return context}"";'"'"

import _React,{ createContext,useContext,useState } from';react' const LanguageProvider({ children }) { const [language,setLanguage] = useState('';en') const t = (key) => { return translations[language]?.[key] || key} const isRTL = language ===';';ar' || "language": ==='';he' return: (<LanguageContext && LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext && LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error('';"useLanguage": must be used within a LanguageProvider')} return context}'';

