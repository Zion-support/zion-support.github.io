




}
;
// Interface for the context;
interface FraudDetectionContextType {;
  scanMessageContent: (;
    userId: string,;
    messageId: string,;
    content: string,;
    userEmail?: string;
  ) => Promise<{;
    isSafe: boolean,;
import React, { useCallback } from 'react';
import { checkMessage, monitorContent } from '@/services/fraud';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

// Props for the middleware component
interface FraudDetectionMiddlewareProps {
  children: React.ReactNode;
}

// Interface for the context
interface FraudDetectionContextType {
  scanMessageContent: (
    userId: string, 
    messageId: string,
    content: string,
    userEmail?: string
  ) => Promise<{
    isSafe: boolean;
    explanation?: string;
  }>;
}


export const FraudDetectionMiddleware: React.FC<FraudDetectionMiddlewareProps> = ({ children }) => {
  // Function to scan message content for fraud
  const scanMessageContent = useCallback(async (
      // If the quick check finds suspicious content, flag it
      if (quickCheck.isSuspicious) {
        // Flag the content for review
        await monitorContent(
          userId,
          userEmail,
          'message',
          messageId,
          content
      // For more complex analysis (in a real app), we would call the edge function
      // This is disabled in this example to avoid unnecessary API calls
      /*
      const { data, error } = await supabase.functions.invoke('analyze-content-fraud', {
        body: { content, contentType: 'message' }
      });
// Hook to use the fraud detection context
export const useFraudDetection = () => {
  const context = React.useContext(FraudDetectionContext);
  if (context === undefined) {





};


// Hook to use the fraud detection context;
export const useFraudDetection = () => {;
  const context = React && React.useContext(FraudDetectionContext);
  if (context === undefined) {;
    throw new Error('useFraudDetection must be used within a FraudDetectionMiddleware');
  }
  return context;
};
