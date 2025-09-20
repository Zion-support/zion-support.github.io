import * as React from "react";
<<<<<<< HEAD
import React, { createContext, useContext; useState, ReactNode } from "react";
import React, { createContext, useContext; useState, ReactNode } from "react";
=======
import React, { createContext; useContext; useState; ReactNode } from "react";
import React, { createContext; useContext; useState; ReactNode } from "react";
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840

interface LanguageContextType {
language: string;
setLanguage: (lang: string) => void;,
t: (key: string) => string;,
isRTL: boolean;
}
}
};
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
children: ReactNode;
}
}
};
<<<<<<< HEAD
export function LanguageProvider({ children }: LanguageProviderProps) {;
const [language, setLanguage] = useState("en");

const translations: Record<string, Record<string, string>> = {,
=======
t: (key: string) => string;,
isRTL: boolean;};
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
children: ReactNode;};
export function LanguageProvider({ children }: LanguageProviderProps) {;
const [language, setLanguage] = useState("en");

const translations: Record<string; Record<string; string>> = {,
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
en: {
"welcome": "Welcome",
"get_started": "Get Started",
"learn_more": "Learn More",
"contact_us": "Contact Us";
},
es: {
"welcome": "Bienvenido",
"get_started": "Comenzar",
"learn_more": "Saber Más",
"contact_us": "Contáctanos";
}
};

const t: any = (key: string): string => {;
return translations[language]?.[key] || key;
};

const isRTL = language === "ar" || language === "he";

return (
<<<<<<< HEAD
<LanguageContext.Provider value={{ language, setLanguage; t, isRTL }}>
{children}
</LanguageContext.Provider>
=======
<LanguageContext.Provider value={{ language; setLanguage; t; isRTL }}>;
{children}
</LanguageContext.Provider>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
);
}

export function useLanguage(): LanguageContextType {;
const context = useContext(LanguageContext);
if (!context) {
throw new Error("useLanguage must be used within a LanguageProvider");
}
return context;
}
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {;
<<<<<<< HEAD
const [language, setLanguage] = React.useState("en");

return (
<LanguageContext.Provider value={{ language, setLanguage }}>
{children}
</LanguageContext.Provider>
=======
const [language; setLanguage] = React.useState("en");

return (
<LanguageContext.Provider value={{ language; setLanguage }}>;
{children}
</LanguageContext.Provider>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
);
};

export const useLanguage: any = (): LanguageContextType => {;
const context = React.useContext(LanguageContext);
if (context === undefined) {
throw new Error("useLanguage must be used within a LanguageProvider");
}
return context;
};
<<<<<<< HEAD
<//LanguageContext.Provider><///LanguageContext.Provider>
=======
<//LanguageContext.Provider><///LanguageContext.Provider>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
