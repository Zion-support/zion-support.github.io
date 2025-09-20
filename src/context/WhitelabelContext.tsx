import React, { createContext, useContext, ReactNode } from 'react';

interface WhitelabelContextType {
  isWhitelabel: boolean;
  primaryColor: string;
<<<<<<< HEAD
=======
  setPrimaryColor: (color: string) => void;
  brandName: string;
  setBrandName: (name: string) => void;
  logo: string;
  setLogo: (logo: string) => void;
  tenant?: {
    id: string;
    name: string;
    domain: string;
  };
>>>>>>> origin/zion-enhancements-v6
}

const WhitelabelContext = createContext<WhitelabelContextType>({
  isWhitelabel: false,
  primaryColor: '#22ddd2', // Default Zion cyan
});

export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
};

interface WhitelabelProviderProps {
  children: ReactNode;
}

<<<<<<< HEAD
export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ children }) => {
  const value: WhitelabelContextType = {
    isWhitelabel: false,
    primaryColor: '#22ddd2',
=======
export function WhitelabelProvider({ children }: WhitelabelProviderProps) {
  const [isWhitelabel] = useState(false); // Set to true for white-label instances
  const [primaryColor, setPrimaryColor] = useState('#8B5CF6'); // Default Zion purple
  const [brandName, setBrandName] = useState('Zion Tech Group');
  const [logo, setLogo] = useState('');
  const [tenant] = useState({
    id: 'zion-tech-group',
    name: 'Zion Tech Group',
    domain: 'ziontechgroup.com'
  });

  const value: WhitelabelContextType = {
    isWhitelabel,
    primaryColor,
    setPrimaryColor,
    brandName,
    setBrandName,
    logo,
    setLogo,
    tenant,
>>>>>>> origin/zion-enhancements-v6
  };

  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );
};