import React, { createContext, useContext, useMemo, useState } from 'react';

export type ViewMode = 'light' | 'dark' | 'system';

interface ViewModeContextValue {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
}

const ViewModeContext = createContext<ViewModeContextValue | undefined>(undefined);

export const ViewModeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [mode, setMode] = useState<ViewMode>('system');
  const value = useMemo(() => ({ mode, setMode }), [mode]);
  return <ViewModeContext.Provider value={value}>{children}</ViewModeContext.Provider>;
};

export const useViewMode = (): ViewModeContextValue => {
  const ctx = useContext(ViewModeContext);
  if (!ctx) throw new Error('useViewMode must be used within a ViewModeProvider');
  return ctx;
};
