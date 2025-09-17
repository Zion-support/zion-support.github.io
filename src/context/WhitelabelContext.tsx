// Whitelabel context
import React, { createContext, useContext, ReactNode }  from 'react';

interface WhitelabelContextType {
  theme: string;
  branding: Record<string, any>;
};
const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined);

interface WhitelabelProviderProps {
  children: ReactNode;
};
export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ children }) => {
  const value: WhitelabelContextType = {
    theme: 'default',
    branding: {};
  };
  return (
    <WhitelabelContext.Provider value={value}>
      {children};
    </WhitelabelContext.Provider>
  );
  };
export const useWhitelabel = (): WhitelabelContextType => {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  };
return context;
  };