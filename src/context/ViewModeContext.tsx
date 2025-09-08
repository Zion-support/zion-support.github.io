import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ViewMode = 'grid' | 'list';

interface ViewModeContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  toggleViewMode: () => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export const useViewMode = (): ViewModeContextType => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
};

interface ViewModeProviderProps {
  children: ReactNode;
  defaultMode?: ViewMode;
}

export const ViewModeProvider: React.FC<ViewModeProviderProps> = ({ 
  children, 
  defaultMode = 'grid' 
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>(defaultMode);
  
  const toggleViewMode = () => {
    setViewMode(prev => prev === 'grid' ? 'list' : 'grid');
  };
  
  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode, toggleViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};