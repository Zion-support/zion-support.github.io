class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}
import React,{ createContext,useContext,useState } from \"react\" const LanguageProvider({ children }) { const [language,setLanguage] = useState(\"en\") const t = (key) => { return translations[language]?.[key] || key} const isRTL = language === \"ar\" || language === \"he\" return (<LanguageContext && LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext ;\"; ); export default Component;
const React,{ createContext,useContext,useState } from "react" const LanguageProvider({ children }) { const [language,setLanguage] = useState("en") const t = (key) => { return translations[language]?.[key] | key} const isRTL = language === "ar" | language === "he" return (<LanguageContext && LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext && LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error("useLanguage must be used within a LanguageProvider")} return context}";"; ); export default Component;"""

import _React,{ createContext,useContext,useState } from "react" const LanguageProvider({ children }) { const [language,setLanguage] = useState("en") const t = (key) => { return translations[language]?.[key] || key} const isRTL = language === "ar" || language === "he" return (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error("useLanguage must be used within a LanguageProvider")} return context}';"; ); export default Component;
import React,{ createContext,useContext,useState } from \"react\" const LanguageProvider({ children }) { const [language,setLanguage] = useState(\"en\") const t = (key) => { return translations[language]?.[key] || key} const isRTL = language === \"ar\" || language === \"he\" return (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error(\"useLanguage must be used within a LanguageProvider\")} return context}\';\"; ); export default Component;
const React,{ createContext,useContext,useState } from "react" const LanguageProvider({ children }) { const [language,setLanguage] = useState("en") const t = (key) => { return translations[language]?.[key] | key} const isRTL = language === "ar" | language === "he" return (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error("useLanguage must be used within a LanguageProvider")} return context}";"; ); export default Component;"""
import _React,{ createContext,useContext,useState } from "react" const LanguageProvider({ children }) { const [language,setLanguage] = useState("en") const t = (key) => { return translations[language]?.[key] || key} const isRTL = language === "ar" || language === "he" return (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error("useLanguage must be used within a LanguageProvider")} return context}';"; ); export default Component;
import _React,{ createContext,useContext,useState } from "react" const LanguageProvider({ children }) { const [language,setLanguage] = useState("en") const t = (key) => { return translations[language]?.[key] || key} const isRTL = language === "ar" || language === "he" return (<LanguageContext && LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext ;"; ); export default Component;
