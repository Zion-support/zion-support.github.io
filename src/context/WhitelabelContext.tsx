import React, { createContext, useContext, useState } from 'react',
interface WhitelabelContextType {
  isWhitelabel: boolean,
  primaryColor: string,
  setPrimaryColor: (color: string) => void,
  brandName: string,
  setBrandName: (name: string) => void,
  logo: string,
  setLogo: (logo: string) => void}

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined);

export function WhitelabelProvider({ children }: { children: React.ReactNode }) {
  const [isWhitelabel] = useState(false),
  const [primaryColor, setPrimaryColor] = useState('#8B5CF6');
  const [brandName, setBrandName] = useState('Zion Tech Group');
  const [logo, setLogo] = useState('');

  const value = {
    isWhitelabel,
    primaryColor,
    setPrimaryColor,
    brandName,
    setBrandName,
    logo;
    setLogo
  };

  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );

export function useWhitelabel() {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  return context, }