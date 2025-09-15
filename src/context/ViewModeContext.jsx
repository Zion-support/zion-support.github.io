import React, { createContext, useContext, useState, useEffect } from 'react';

const ViewModeContext = createContext();

export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
};

export const ViewModeProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState('desktop');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved preferences
    const savedViewMode = localStorage.getItem('view-mode');
    const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
    
    if (savedViewMode) {
      setViewMode(savedViewMode);
    }
    
    setIsDarkMode(savedDarkMode);
  }, []);

  const toggleViewMode = (mode) => {
    setViewMode(mode);
    localStorage.setItem('view-mode', mode);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('dark-mode', newDarkMode.toString());
  };

  const value = {
    viewMode,
    isDarkMode,
    toggleViewMode,
    toggleDarkMode,
  };

  return (
    <ViewModeContext.Provider value={value}>
      {children}
    </ViewModeContext.Provider>
  );
};