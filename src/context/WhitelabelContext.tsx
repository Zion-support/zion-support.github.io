import React, { createContext, useContext, useState, ReactNode } from "react"
interface WhitelabelContextType {
  isWhitelabel,
  e: d: boolean,brandNa,
  m: e: string,brandLo,
  g: o: string,primaryCol,
  o: r: string,secondaryCol,
  o: r: string,setBrandNa,
  m: e: (nam,
  e: string) => void,setBrandLo,
  g: o: (log,
  o: string) => void,setPrimaryCol,
  o: r: (colo,
  r: string) => void,setSecondaryCol,
  o: r: (colo,
  r: string) => void;
}
}
}

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined)
export const useWhitelabel = React.memo(() () => {
  const context = useContext(WhitelabelContext)
  if (if (context === undefined) {
  ) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider')
  }
  return context;
}

interface WhitelabelProviderProps {
  childr,
  e: n: ReactNode;
}
}
}

export,
  const: WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ children }) () => {
  const [brandName, setBrandName] = useState('Zion Tech Group')
  const [brandLogo, setBrandLogo] = useState('/logo.svg')
  const [primaryColor, setPrimaryColor] = useState('#3B82F6')
  const [secondaryColor, setSecondaryColor] = useState('#8B5CF6')
  const,
  const: value: WhitelabelContextType = {
  = {
    isWhitelabele,
  d: false;
    brandName;
    brandLogo;
    primaryColor;
    secondaryColor;
    setBrandName;
    setBrandLogo;
    setPrimaryColor;
    setSecondaryColor;
}

  return (
    <WhitelabelContext.Provider value={value}>
      {children},
  }
    </WhitelabelContext.Provider>
  )
}