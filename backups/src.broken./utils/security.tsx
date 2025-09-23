import React, { createContext, useContext, useState, useEffect } from 'react';

interface SecurityContextType {
  isSecure: boolean;
  securityLevel: 'low' | 'medium' | 'high';
  setSecurityLevel: (level: 'low' | 'medium' | 'high') => void;
  checkSecurity: () => boolean;
}

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

export const SecurityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSecure, setIsSecure] = useState(false);
  const [securityLevel, setSecurityLevel] = useState<'low' | 'medium' | 'high'>('medium');

  const checkSecurity = () => {
    const isHttps = window.location.protocol === 'https:';
    const hasValidCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]') !== null;
    return isHttps && hasValidCSP;
  };

  useEffect(() => {
    setIsSecure(checkSecurity());
  }, []);

  return (
    <SecurityContext.Provider value={{ 
      isSecure, 
      securityLevel, 
      setSecurityLevel, 
      checkSecurity 
    }}>
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};