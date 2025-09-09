
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  toggleViewMode: () => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);


  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;

};