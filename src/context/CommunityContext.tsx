import React, { createContext, useContext, ReactNode } from 'react';

interface CommunityContextType {
  joinCommunity: () => void;
}

const CommunityContext = createContext<CommunityContextType | undefined>(undefined);

export function CommunityProvider({ children }: { children: ReactNode }) {
  const joinCommunity = () => {
    // Placeholder for community joining logic
    console.log('Joining community...');
  };

  return (
    <CommunityContext.Provider value={{ joinCommunity }}>
      {children}
    </CommunityContext.Provider>
  );
}

export function useCommunity() {
  const context = useContext(CommunityContext);
  if (context === undefined) {
    throw new Error('useCommunity must be used within a CommunityProvider');
  }
  return context;
}