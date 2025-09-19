// View mode context,
import React, { createContext, useContext } from 'react';
const ViewModeContext = createContext();
export const ViewModeProvider = ({ children }) => {,
  const value = {,
    viewMode: 'desktop';
    setViewMode: () => {}
  };
  return (,
    <ViewModeContext.Provider value={value}>,
      {children}
    </ViewModeContext.Provider>,
  );
};
export const useViewMode = () => useContext(ViewModeContext);