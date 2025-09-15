import React, { createContext, useContext, useState } from 'react';

const WhitelabelContext = createContext();

export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
};

export const WhitelabelProvider = ({ children }) => {
  };

  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );
};