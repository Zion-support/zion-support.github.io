<<<<<<< HEAD:src.disabled/src/context/LanguageContext.jsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD:backup-merge-conflicts/LanguageContext.jsx.backup
:backup-merge-conflicts/LanguageContext.jsx.backup
import React,{ createContext,useContext,useState } from \"react\" const LanguageProvider({ children }) { const [language,setLanguage] = useState(\"en\") const t = (key) => { return translations[language]?.[key] || key} const isRTL = language === \"ar\" || language === \"he\" return (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error(\"useLanguage must be used within a LanguageProvider\")} return context}\';\"; ); export default Component;import _React,{ createContext,useContext,useState } from "react" const LanguageProvider({ children }) { const [language,setLanguage] = useState("en") const t = (key) => { return translations[language]?.[key] || key} const isRTL = language === "ar" || language === "he" return (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error("useLanguage must be used within a LanguageProvider")} return context}';"; ); export default Component;

import _React,{ createContext,useContext,useState } from "react" const LanguageProvider({ children }) { const [language,setLanguage] = useState("en") const t = (key) => { return translations[language]?.[key] || key} const isRTL = language === "ar" || language === "he" return (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error("useLanguage must be used within a LanguageProvider")} return context}';"; ); export default Component;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58:backup-problematic-files/src.disabled/src/context/LanguageContext.jsx
<<<<<<< HEAD
import _React,{ createContext,useContext,useState } from "react" const LanguageProvider({ children }) { const [language,setLanguage] = useState("en") const t = (key) => { return translations[language]?.[key] || key} const isRTL = language === "ar" || language === "he" return (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error("useLanguage must be used within a LanguageProvider")} return context}';"; ); export default Component;
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
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

<<<<<<< HEAD
import _React,{ createContext,useContext,useState } from "react" const LanguageProvider({ children }) { const [language,setLanguage] = useState("en") const t = (key) => { return translations[language]?.[key] || key} const isRTL = language === "ar" || language === "he" return (<LanguageContext && LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext ;"; ); export default Component;

<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
import _React,{ createContext,useContext,useState } from "react" const LanguageProvider({ children }) { const [language,setLanguage] = useState("en") const t = (key) => { return translations[language]?.[key] || key} const isRTL = language === "ar" || language === "he" return (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error("useLanguage must be used within a LanguageProvider")} return context}';"; ); export default Component;
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
import React,{ createContext,useContext,useState } from \"react\" const LanguageProvider({ children }) { const [language,setLanguage] = useState(\"en\") const t = (key) => { return translations[language]?.[key] || key} const isRTL = language === \"ar\" || language === \"he\" return (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error(\"useLanguage must be used within a LanguageProvider\")} return context}\';\"; ); export default Component;
const React,{ createContext,useContext,useState } from "react" const LanguageProvider({ children }) { const [language,setLanguage] = useState("en") const t = (key) => { return translations[language]?.[key] | key} const isRTL = language === "ar" | language === "he" return (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error("useLanguage must be used within a LanguageProvider")} return context}";"; ); export default Component;"""
import _React,{ createContext,useContext,useState } from "react" const LanguageProvider({ children }) { const [language,setLanguage] = useState("en") const t = (key) => { return translations[language]?.[key] || key} const isRTL = language === "ar" || language === "he" return (<LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext.Provider>)} export function useLanguage() { const context = useContext(LanguageContext) if (!context) { throw new Error("useLanguage must be used within a LanguageProvider")} return context}';"; ); export default Component;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
<<<<<<< HEAD:src.disabled/src/context/LanguageContext.jsx
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
import _React,{ createContext,useContext,useState } from "react" const LanguageProvider({ children }) { const [language,setLanguage] = useState("en") const t = (key) => { return translations[language]?.[key] || key} const isRTL = language === "ar" || language === "he" return (<LanguageContext && LanguageContext.Provider value = { { language,setLanguage,t,isRTL }}> {children} </LanguageContext ;"; ); export default Component;
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:src.disabled/src/context/LanguageContext.jsx
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58:backup-problematic-files/src.disabled/src/context/LanguageContext.jsx
