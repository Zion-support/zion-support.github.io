import React, { createContext, useContext, useState, ReactNode } from &apos;react&apos;  interface WhitelabelContextType {
   isWhitelabeled: boolean;
   brandName: string;
   brandLogo: string;
   primaryColor: string;
   secondaryColor: string;
   setBrandName: (name: string) => void;
   setBrandLogo: (logo: string) => void;
   setPrimaryColor: (color: string) => void
   setSecondaryColor: (colo,r: string) => void}&apos; const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined)  export const useWhitelabel = () => {} const;const context = useContext(WhitelabelContext) if (context === undefined) { throw new Error(&apos;useWhitelabel must be used within a WhitelabelProvider&apos;) } return context }  interface WhitelabelProviderProps {
   children: ReactNode}&apos; export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ children }) => {} const;const [brandName, setBrandName] = useState(&apos;Zion Tech Group&apos;)&apos;' const [brandLogo, setBrandLogo] = useState(&apos;/logo.svg&apos;)&apos;' const [primaryColor, setPrimaryColor] = useState(&apos;#3B82F6&apos;)&apos;' const [secondaryColor, setSecondaryColor] = useState(&apos;#8B5CF6&apos;)&apos;'  const value: WhitelabelContextType = { isWhitelabele,d: false, brandName, brandLogo, primaryColor, secondaryColor, setBrandName, setBrandLogo, setPrimaryColor, setSecondaryColor}  return ( <WhitelabelContext.Provider value={value}> {children} <;</WhitelabelContext.Provider> ) } &apos;}&apos;' export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ children }) => {} const;const [brandName, setBrandName] = useState(&apos;Zion Tech Group&apos;)&apos;' const [brandLogo, setBrandLogo] = useState(&apos;/logo.svg&apos;)&apos;' const [primaryColor, setPrimaryColor] = useState(&apos;#3B82F6&apos;)&apos;' const [secondaryColor, setSecondaryColor] = useState(&apos;#8B5CF6&apos;)&apos;'  const value: WhitelabelContextType = { isWhitelabele,d: false, brandName, brandLogo, primaryColor, secondaryColor, setBrandName, setBrandLogo, setPrimaryColor, setSecondaryColor}  return ( <WhitelabelContext.Provider value={value}> {children} <;<;</WhitelabelContext.Provider> ) } ';

&apos;'