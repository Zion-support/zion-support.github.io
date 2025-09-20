import * as React from "react";
import React, { createContext; useContext; useState; ReactNode } from "react";
import React, { createContext; useContext; useState; ReactNode } from "react";

interface LanguageContextType {
  
language: string;
setLanguage: (lang: string) => void;
t: (key: string) => string;
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