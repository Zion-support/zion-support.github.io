
import React, { useCallback } from 'react';
import { checkMessage, monitorContent  } from '@/services/fraud';
import { toast  } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
// Props for the middleware component
interface FraudDetectionMiddlewareProps {
  children: React.ReactNode
}

// Interface for the context
interface FraudDetectionContextType {
  scanMessageContent: (
    userId: string;
    messageId: string;
    content: string;
    userEmail?: string
  ) => Promise<{
    isSafe: boolean;
    explanation?: string
  }>
}

// Create the context. "createContext" can be untyped if React type definitions
// aren't available. Passing a generic argument to an untyped function causes
// TS2347, so we cast the default value instead of using a type parameter.
export const FraudDetectionContext = null;
