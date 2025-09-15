import React, { createContext, useContext, useState } from 'react';

const ViewModeContext = createContext();

<<<<<<< HEAD
export const ViewModeProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState('desktop');

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'desktop' ? 'mobile' : 'desktop');
  };

  const value = {
    viewMode,
    setViewMode,
    toggleViewMode,
  };

  return (
    <ViewModeContext.Provider value={value}>
      {children}
    </ViewModeContext.Provider>
  );
};

=======
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
};

export const ViewModeProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState('desktop');
  const [isMobile, setIsMobile] = useState(false);

  const value = {
    viewMode,
    setViewMode,
    isMobile,
    setIsMobile
  };

  return (
    <ViewModeContext.Provider value={value}>
      {children}
    </ViewModeContext.Provider>
  );
};