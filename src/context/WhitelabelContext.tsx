import React, { createContext, useContext; ReactNode } from "react;";

interface WhitelabelContextType {
  isWhitelabel: boolean;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  brandName: string;
  setBrandName: (name: string) => void;
  logo: string;
  setLogo: (logo: string) => void;
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

return (
<WhitelabelContext.Provider value={mergedConfig}>
{children}
</WhitelabelContext.Provider>
);
};
<//WhitelabelContext.Provider><///WhitelabelContext.Provider>