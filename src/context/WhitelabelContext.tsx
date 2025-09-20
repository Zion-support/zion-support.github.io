import React, { createContext, useContext, useState, ReactNode } from "react";
interface WhitelabelContextType {
  isWhitelabeled: boolean,brandName: string,brandLogo: string,primaryColor: string,secondaryColor: string,setBrandName: (name: string) => void,setBrandLogo: (logo: string) => void,setPrimaryColor: (color: string) => void,setSecondaryColor: (color: string) => void
}

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined)
export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext)
  if (if (context === undefined) {
  ) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider')
  }
  return context
}

interface WhitelabelProviderProps {
  children: ReactNode
}

export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ children }) => {
  const [brandName, setBrandName] = useState('Zion Tech Group')
  const [brandLogo, setBrandLogo] = useState('/logo.svg')
  const [primaryColor, setPrimaryColor] = useState('#3B82F6')
  const [secondaryColor, setSecondaryColor] = useState('#8B5CF6')
  const const value: WhitelabelContextType = {
  = {
    isWhitelabeled: false;
    brandName;
    brandLogo;
    primaryColor;
    secondaryColor;
    setBrandName;
    setBrandLogo;
    setPrimaryColor;
    setSecondaryColor
}

  return (
    <WhitelabelContext.Provider value={value}>
      {{children},
  }
    </WhitelabelContext.Provider>
  )
}