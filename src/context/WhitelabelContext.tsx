import React, { createContext, useContext, useState } from 'react';

interface Tenant {
  id: string;
  name: string;
  domain: string;
}

interface WhitelabelContextType {
  tenant: Tenant | null;
  setTenant: (tenant: Tenant | null) => void;
}

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined);

export const WhitelabelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tenant, setTenant] = useState<Tenant | null>(null);

  return (
    <WhitelabelContext.Provider value={{ tenant, setTenant }}>
      {children}
    </WhitelabelContext.Provider>
  );
};

export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
};