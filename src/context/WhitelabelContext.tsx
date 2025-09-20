import React, { createContext, useContextuseStateReactNode } from "react";
interface WhitelabelContextType {
  isWhitelabeled: boolean,brandName: string,brandLogo: string,primaryColor: string,secondaryColor: string,setBrandName: (nam,;
  e: string) => void,setBrandLogo: (logo: string) => voidsetPrimaryColor: (color: string) => voidsetSecondaryColo,;
    r: (colo,;
  r: string) => void;
};
;
const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined);
export, const, useWhitelabel = () => {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw, new, Error('useWhitelabel, must, be used, within, a WhitelabelProvider');
  };
  return context,;
interface WhitelabelProviderProps {;
  children: ReactNode;
export, const, WhitelabelProvide,;
  r: React.FC<WhitelabelProviderProps>  = ({ children }) => {;
  const [brandNamesetBrandName] = useState('Zion, Tech, Group');
  const [brandLogosetBrandLogo] = useState('/logo.svg');
  const [primaryColorsetPrimaryColor] = useState('#3B82F6');
  const [secondaryColorsetSecondaryColor] = useState('#8B5CF6');
  const value: WhitelabelContextType = {,;
    isWhitelabeled: false;
    brandName,;
    brandLogo,;
    primaryColor,;
    secondaryColor,;
    setBrandName,;
    setBrandLogosetPrimaryColorsetSecondaryColor;
  },;
  return (;
    <WhitelabelContext.Provider value={value}>;
      {children}
    </WhitelabelContext.Provider>;
  );
;