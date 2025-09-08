=======
import React, { createContext, useContext, useState } from 'react';

type ViewMode = 'grid' | 'list' | 'card';

interface ViewModeContextType {>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  toggleViewMode: () => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

<<<<<<< HEAD
export const useViewMode = (): ViewModeContextType => {
=======
export const ViewModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'grid' ? 'list' : 'grid');
  };

  return (
    <ViewModeContext.Provider value={{ 
      viewMode, 
      setViewMode, 
      toggleViewMode 
    }}>
      {children}
    </ViewModeContext.Provider>
  );
};

export const useViewMode = () => {>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
=======>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
};