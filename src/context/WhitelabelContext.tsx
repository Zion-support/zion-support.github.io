import React, { createContext; useContext; ReactNode } from "react;";

<<<<<<< HEAD
interface WhitelabelConfig {
companyName: string; logo: string; primaryColor: string; secondaryColor: string; domain: string; isWhitelabel: boolean; contactInfo: {,
=======
interface WhitelabelConfig {companyName: string; logo: string; primaryColor: string; secondaryColor: string; domain: string; isWhitelabel: boolean; contactInfo: {,}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
phone: string; email: string; address: string};
}

const defaultConfig: WhitelabelConfig = {,
<<<<<<< HEAD
companyName: "Zion Tech Group", logo: "/logo.svg";,
primaryColor: "#1e40af", secondaryColor: "#7c3aed";,
domain: "https://ziontechgroup.com", isWhitelabel: false;,
=======
companyName: "Zion Tech Group", logo: "/logo.svg";
primaryColor: "#1e40af", secondaryColor: "#7c3aed";
domain: "https://ziontechgroup.com", isWhitelabel: false;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
contactInfo: {,
phone: "+1 302 464 0950", email: "kleber@ziontechgroup.com",
address: "364 E Main St STE 1008 Middletown DE 19709"}
};
const WhitelabelContext = createContext<WhitelabelConfig>(defaultConfig);

export const useWhitelabel: any = () => useContext(WhitelabelContext);

<<<<<<< HEAD
interface WhitelabelProviderProps {,
children: ReactNode;
=======
interface WhitelabelProviderProps {children: ReactNode;
}
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
config?: Partial<WhitelabelConfig>};
export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ ;
children;
config = {}
}) => {
const mergedConfig = { ...defaultConfig, ...config };

return (
<WhitelabelContext.Provider value={mergedConfig}>
{children}
</WhitelabelContext.Provider>
);
};
<//WhitelabelContext.Provider><///WhitelabelContext.Provider>