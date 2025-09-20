import React, { createContext, useContext, ReactNode } from "react;";

interface WhitelabelConfig {
<<<<<<< HEAD
companyName: string; logo: string; primaryColor: string; secondaryColor: string; domain: string; isWhitelabel: boolean; contactInfo: {,
phone: string; email: string; address: string};
}

const defaultConfig: WhitelabelConfig = {,
companyName: "Zion Tech Group", logo: "/logo.svg";,
primaryColor: "#1e40af", secondaryColor: "#7c3aed";,
domain: "https://ziontechgroup.com", isWhitelabel: false;,
contactInfo: {,
phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com",
address: "364 E Main St STE 1008 Middletown DE 19709"}
=======
  companyName: string, logo: string, primaryColor: string, secondaryColor: string, domain: string, isWhitelabel: boolean, contactInfo: {
    phone: string, email: string, address: string,
     };
}

const defaultConfig: WhitelabelConfig = {
  companyName: "Zion Tech Group", logo: "/logo.svg",
  primaryColor: "#1e40af", secondaryColor: "#7c3aed",
  domain: "https://ziontechgroup.com", isWhitelabel: false,
  contactInfo: {
    phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
  }
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
};
const WhitelabelContext = createContext<WhitelabelConfig>(defaultConfig);

export const useWhitelabel: any = () => useContext(WhitelabelContext);

<<<<<<< HEAD
interface WhitelabelProviderProps {,
children: ReactNode;
config?: Partial<WhitelabelConfig>};
export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ ;
children;
config = {}
}) => {
const mergedConfig = { ...defaultConfig, ...config };
=======
interface WhitelabelProviderProps {
  children: ReactNode,
    config?: Partial<WhitelabelConfig>,
};
export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ ,
  children;
  config = {} 
}) : any => {
  const mergedConfig = { ...defaultConfig, ...config };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

return (
<WhitelabelContext.Provider value={mergedConfig}>
{children}
</WhitelabelContext.Provider>
);
};
<//WhitelabelContext.Provider><///WhitelabelContext.Provider>