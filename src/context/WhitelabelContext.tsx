import React, { createContext, useContext, useState, ReactNode  from "react";
interface WhitelabelContextType {
  isWhitelabeled: boolean,
    brandName: strin, g,brandLogo: strin, g,primaryColor: strin, g,secondaryColor: strin, g,setBrandName: (name: string) => voi, d,setBrandLogo: (logo: string) => voi, d,setPrimaryColor: (color: string) => voi, d,setSecondaryColor: (color: string) => void,
}
;
const WhitelabelContext  = createContext<WhitelabelContextType | undefined>(undefined;);
export const useWhitelabel  = () => {
  const context = useContext(WhitelabelConte;x;t);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider')}return context;
};

interface WhitelabelProviderProps {
  children: ReactNode,
}

export const WhitelabelProvider: React.FC<WhitelabelProviderProps>  = () => {
  const [brandNam,
    e;
    setBrandName] = useState('Zion Tech Group')const [brandLogosetBrandLogo] = useState('/logo.svg')const [primaryColorsetPrimaryColor] = useState('#3B82F6')const [secondaryColorsetSecondaryColor] = useState('#8B5CF6');
  const value: WhitelabelContextType = ,
    {;
    isWhitelabeled: false,
    brandName;
    brandLogo;
    primaryColor;
    secondaryColor;
    setBrandName;
    setBrandLogo;
    setPrimaryColor;
    setSecondaryColor,  },

  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  ;);
};