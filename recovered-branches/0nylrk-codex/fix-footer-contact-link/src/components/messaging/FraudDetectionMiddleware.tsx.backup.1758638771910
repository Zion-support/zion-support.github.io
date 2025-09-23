
<<<<<<< HEAD

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

import React, { useCallback } from 'react',;
import { checkMessage, monitorContent } from '@/services/fraud',;
import { toast } from '@/hooks/use-toast',;
import { supabase } from '@/integrations/supabase/client',;
// Props for the middleware component;
interface FraudDetectionMiddlewareProps {;
  children: React.ReactNode;







>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




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
=======
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
>>>>>>> origin/auto/autonomy-17186719616
    explanation?: string;
  }>;
}

<<<<<<< HEAD
    userId: string
    messageId: string
    content: string
    userEmail?: string
  ) => Promise<{
    isSafe: boolean

    explanation?: string
  }>
}
// Create the context. "createContext" can be untyped if React type definitions
// aren't available. Passing a generic argument to an untyped function causes
// TS2347, so we cast the default value instead of using a type parameter.

export const FraudDetectionContext = React.createContext(

  undefined as FraudDetectionContextType | undefined;
);
  undefined as FraudDetectionContextType | undefined
);
),

=======
// Create the context. "createContext" can be untyped if React type definitions
// aren't available. Passing a generic argument to an untyped function causes
// TS2347, so we cast the default value instead of using a type parameter.
export const FraudDetectionContext = React.createContext(
  undefined as FraudDetectionContextType | undefined
);
>>>>>>> origin/auto/autonomy-17186719616

export const FraudDetectionMiddleware: React.FC<FraudDetectionMiddlewareProps> = ({ children }) => {
  // Function to scan message content for fraud
  const scanMessageContent = useCallback(async (
<<<<<<< HEAD
    userId: string
    messageId: string
    content: string
    userEmail?: string
  ): Promise<{ isSafe: boolean, explanation?: string }> => {
    try {

      // First do a quick local check using the fraud detection service;
      const quickCheck = checkMessage(content);
      // First do a quick local check using the fraud detection service
      const quickCheck = checkMessage(content);
      const quickCheck = checkMessage(content),
      

=======
    userId: string,
    messageId: string,
    content: string,
    userEmail?: string
  ): Promise<{ isSafe: boolean; explanation?: string }> => {
    try {
      // First do a quick local check using the fraud detection service
      const quickCheck = checkMessage(content);
      
>>>>>>> origin/auto/autonomy-17186719616
      // If the quick check finds suspicious content, flag it
      if (quickCheck.isSuspicious) {
        // Flag the content for review
        await monitorContent(
<<<<<<< HEAD

import {checkMessage, monitorContent} from '@/services/fraud';
import {toast} from '@/hooks/use-toast';
import {supabase} from '@/integrations/supabase/client';
// Props for the middleware component;
interface FraudDetectionMiddlewareProps {;
  children: React && React.ReactNode;
}

// Interface for the context;
interface FraudDetectionContextType {;
  scanMessageContent: (;
    userId: string,;
    messageId: string,;
    content: string,;
    userEmail?: string;
  ) => Promise<{;
    isSafe: boolean,;
    explanation?: string;
  }>;
}

// Create the context. "createContext" can be untyped if React type definitions;
// aren't available. Passing a generic argument to an untyped function causes;
// TS2347, so we cast the default value instead of using a type parameter.;
export const FraudDetectionContext = React && React.createContext(;
  undefined as FraudDetectionContextType | undefined;
);

export const FraudDetectionMiddleware: React.FC<FraudDetectionMiddlewareProps> = ({ children }) => {;
  // Function to scan message content for fraud;
  const scanMessageContent = useCallback(async (;
    userId: string,;
    messageId: string,;
    content: string,;
    userEmail?: string;
  ): Promise<{ isSafe: boolean, explanation?: string }> => {;
    try {;
      // First do a quick local check using the fraud detection service;
      const quickCheck = checkMessage(content);

      // If the quick check finds suspicious content, flag it;
      if (quickCheck && quickCheck.isSuspicious) {;
        // Flag the content for review;
        await monitorContent(;

          userId;
          userEmail;
          'message';
          messageId;
          content;
        );

=======
>>>>>>> origin/auto/autonomy-17186719616
          userId,
          userEmail,
          'message',
          messageId,
          content
<<<<<<< HEAD

        );
        ),
        

        // If it's dangerous, show a warning to the user
        if (quickCheck.severity === 'dangerous') {
          toast({
            title: "Message Flagged"
            description: "Your message contains content that may violate our terms of service."
            variant: "destructive"
            duration: 5000

          });
          return {
            isSafe: false
          }),
          
          return { 
            isSafe: false,

            explanation: "Message contains prohibited content. Please review our communication guidelines."
          }
        }
      }











      // For suspicious but not dangerous content, log but let it pass through
      if (quickCheck.severity === 'suspicious') {
        console.log('Suspicious content detected but allowed:', content)
      }
=======
        );
        
        // If it's dangerous, show a warning to the user
        if (quickCheck.severity === 'dangerous') {
          toast({
            title: "Message Flagged",
            description: "Your message contains content that may violate our terms of service.",
            variant: "destructive",
            duration: 5000
          });
          
          return { 
            isSafe: false,
            explanation: "Message contains prohibited content. Please review our communication guidelines."
          };
        }
      }
      
      // For suspicious but not dangerous content, log but let it pass through
      if (quickCheck.severity === 'suspicious') {
        console.log('Suspicious content detected but allowed:', content);
      }
      
>>>>>>> origin/auto/autonomy-17186719616
      // For more complex analysis (in a real app), we would call the edge function
      // This is disabled in this example to avoid unnecessary API calls
      /*
      const { data, error } = await supabase.functions.invoke('analyze-content-fraud', {
        body: { content, contentType: 'message' }
      });
<<<<<<< HEAD
      if (error) {
        console.error('Error analyzing message:', error);
        return { isSafe: true }, // Default to safe on error
      }








      

      if (data.classification === 'dangerous') {
        toast({
          title: "Message Blocked"
          description: data.explanation |"This message contains prohibited content."
          variant: "destructive"

        });
        return {
          isSafe: false
          explanation: data.explanation
        }),
        return { 
          isSafe: false,
          explanation: data.explanation

;
      if (data.classification === 'dangerous') {;
        toast({;
          title: "Message Blocked",;
          description: data.explanation || "This message contains prohibited content.",;
          variant: "destructive";
        }),;
        return {;
          isSafe: false,;
          explanation: data.explanation;

        }
      }
      */
      // Message is considered safe

      return { isSafe: true }
    } catch (error) {
      console.error('Error in fraud detection:', error);
      // On error, let the message pass through but log the error
      return { isSafe: true }
    }
  }, []);
  // Create the context value
  const contextValue: FraudDetectionContextType = {
    scanMessageContent}
  return (
    <FraudDetectionContext && FraudDetectionContext.Provider value={contextValue}>;
      {children}
    </FraudDetectionContext.Provider>
  )
}
=======
      
      if (error) {
        console.error('Error analyzing message:', error);
        return { isSafe: true }; // Default to safe on error
      }
      
      if (data.classification === 'dangerous') {
        toast({
          title: "Message Blocked",
          description: data.explanation || "This message contains prohibited content.",
          variant: "destructive"
        });
        return { 
          isSafe: false,
          explanation: data.explanation
        };
      }
      */
      
      // Message is considered safe
      return { isSafe: true };
    } catch (error) {
      console.error('Error in fraud detection:', error);
      // On error, let the message pass through but log the error
      return { isSafe: true };
    }
  }, []);

  // Create the context value
  const contextValue: FraudDetectionContextType = {
    scanMessageContent,
  };

  return (
    <FraudDetectionContext.Provider value={contextValue}>
      {children}
    </FraudDetectionContext.Provider>
  );
};

>>>>>>> origin/auto/autonomy-17186719616
// Hook to use the fraud detection context
export const useFraudDetection = () => {
  const context = React.useContext(FraudDetectionContext);
  if (context === undefined) {
<<<<<<< HEAD
    throw new Error('useFraudDetection must be used within a FraudDetectionMiddleware')
  }
  return context
}


    } catch (error) {;
      console.error('Error in fraud detection:', error),;
      // On error, let the message pass through but log the error;

      return { isSafe: true }


  // Create the context value;
  const contextValue: FraudDetectionContextType = {;
    scanMessageContent};


  return (
    <FraudDetectionContext && FraudDetectionContext.Provider value={contextValue}>;
      {children}


    </FraudDetectionContext && FraudDetectionContext.Provider>;




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

};


// Hook to use the fraud detection context;
export const useFraudDetection = () => {;
  const context = React && React.useContext(FraudDetectionContext);
  if (context === undefined) {;
=======
>>>>>>> origin/auto/autonomy-17186719616
    throw new Error('useFraudDetection must be used within a FraudDetectionMiddleware');
  }
  return context;
};
<<<<<<< HEAD

=======
>>>>>>> origin/auto/autonomy-17186719616
