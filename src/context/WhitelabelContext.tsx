import React, { createContext, useContext; ReactNode } from "react;";

<<<<<<< HEAD
interface WhitelabelConfig {companyName: string, logo: string, primaryColor: string, secondaryColor: string, domain: string, isWhitelabel: boolean, contactInfo: {}
phone: string, email: string, address: string};
=======
<<<<<<< HEAD
interface WhitelabelConfig {companyName: string; logo: string; primaryColor: string; secondaryColor: string; domain: string; isWhitelabel: boolean; contactInfo: {,}
interface WhitelabelConfig {
companyName: string; logo: string; primaryColor: string; secondaryColor: string; domain: string; isWhitelabel: boolean; contactInfo: {,
phone: string; email: string; address: string};
=======
interface WhitelabelContextType {
  isWhitelabel: boolean;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  brandName: string;
  setBrandName: (name: string) => void;
  logo: string;
  setLogo: (logo: string) => void;
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
}

const defaultConfig: WhitelabelConfig = {
companyName: "Zion Tech Group" logo: "/logo.svg";,
primaryColor: "#1e40af" secondaryColor: "#7c3aed";,
domain: "https://ziontechgroup.com" isWhitelabel: false;,
contactInfo: {
phone: "+1 302 464 0950" email: "kleber@ziontechgroup.com"
address: "364 E Main St STE 1008 Middletown DE 19709"}
};
const WhitelabelContext = createContext<WhitelabelConfig>(defaultConfig);

export const useWhitelabel: any = () => useContext(WhitelabelContext);

<<<<<<< HEAD
interface WhitelabelProviderProps {children: ReactNode;
}
}
config?: Partial<WhitelabelConfig>};
export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ ;
children;
config = {}
}) => {
const mergedConfig = { ...defaultConfig, ...config };
=======
<<<<<<< HEAD
interface WhitelabelProviderProps {children: ReactNode;
}
}
interface WhitelabelProviderProps {
children: ReactNode;
config?: Partial<WhitelabelConfig>};
export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ ;
children;
config = {}
}) => {
const mergedConfig = { ...defaultConfig, ...config };
=======
  const value = {
    isWhitelabel,
    primaryColor,
    setPrimaryColor,
    brandName,
    setBrandName,
    logo,
    setLogo
  };

  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );
}
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840

return (
<WhitelabelContext.Provider value={mergedConfig}>
{children}
</WhitelabelContext.Provider>
);
};
<//WhitelabelContext.Provider><///WhitelabelContext.Provider>