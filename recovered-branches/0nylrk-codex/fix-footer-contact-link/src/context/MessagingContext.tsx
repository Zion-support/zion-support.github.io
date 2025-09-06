
import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useAuth  } from '@/hooks/useAuth';
import { MessagingContextType  } from '@/types/messaging';
import { useMessagingOperations, useMessagingRealtime } from '@/hooks/messaging';
// Default context used when React type definitions are missing
const defaultContext: MessagingContextType;
  return (
    <MessagingContext.Provider value={contextValue}>
      {children}
    </MessagingContext.Provider>
  )
}
;