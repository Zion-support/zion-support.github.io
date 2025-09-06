
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {check_message, monitor_content} from '@/services / fraud';
import {toast} from '@/hooks / use - toast';
import {supabase} from '@/integrations / supabase / client';
// Props for the middleware component;

interface FraudDetectionMiddlewareProps {
<<<<<<< HEAD
  children: React.ReactNode
=======
  children: React.ReactNode;
}

<<<<<<< HEAD
interface FraudDetectionMiddlewareProps {
<<<<<<< HEAD
<<<<<<< HEAD
  children: React.ReactNode
=======
interface FraudDetectionMiddlewareProps {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
// Interface for the context
interface FraudDetectionContextType {
  scanMessageContent: (
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  children: React.ReactNode;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useCallback } from 'react',;
import { checkMessage, monitorContent } from '@/services/fraud',;
import { toast } from '@/hooks/use-toast',;
=======
}
// Interface for the context;
interface FraudDetectionContextType {}
  scanMessageContent: (

import React, { useCallback } from 'react',;'
import { checkMessage, monitorContent } from '@/services/fraud',;'
import { toast } from '@/hooks/use-toast',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  children: React.ReactNode;
}
import React, { useCallback } from 'react',;
import { checkMessage, monitorContent } from '@/services/fraud',;
import { toast } from '@/hooks/use-toast',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { supabase } from '@/integrations/supabase/client',;
// Props for the middleware component;
interface FraudDetectionMiddlewareProps {;
  children: React.ReactNode;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
=======
  children: React.ReactNode}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  children: React.ReactNode}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
    explanation?: string;
  }>;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    userId: string
    messageId: string
    content: string
    userEmail?: string
  ) => Promise<{
    isSafe: boolean
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



    userId: string;
    messageId: string;
    content: string;
    userEmail?: string;
  ) => Promise<{}
    isSafe: boolean;
    explanation?: string;
  }>
}
// Create the context. "createContext" can be untyped if React type definitions'
// aren't available. Passing a generic argument to an untyped function causes;
// TS2347, so we cast the default value instead of using a type parameter.

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const FraudDetectionContext = React.createContext(



<<<<<<< HEAD

  undefined as FraudDetectionContextType | undefined;
);
  undefined as FraudDetectionContextType | undefined
);
),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export const FraudDetectionMiddleware: React.FC<FraudDetectionMiddlewareProps> = ({ children }) => {
=======
export const FraudDetectionContext = React.createContext(export const FraudDetectionMiddleware: React.FC<FraudDetectionMiddlewareProps> = ({ children }) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export const FraudDetectionContext = React.createContext(export const FraudDetectionMiddleware: React.FC<FraudDetectionMiddlewareProps> = ({ children }) => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export const FraudDetectionContext = React.createContext(


  undefined as FraudDetectionContextType | undefined


export const FraudDetectionMiddleware: React.FC<FraudDetectionMiddlewareProps> = ({ children }) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Function to scan message content for fraud
  const scanMessageContent = useCallback(async (
    userId: string
    messageId: string
    content: string
    userEmail?: string
  ): Promise<{ isSafe: boolean, explanation?: string }> => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD


      // First do a quick local check using the fraud detection service


<<<<<<< HEAD
=======
      // First do a quick local check using the fraud detection service


      // First do a quick local check using the fraud detection service;
      const quickCheck = checkMessage(content);
      // First do a quick local check using the fraud detection service
      const quickCheck = checkMessage(content);
      const quickCheck = checkMessage(content),
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // If the quick check finds suspicious content, flag it
      if (quickCheck.isSuspicious) {
        // Flag the content for review
=======
export const FraudDetectionMiddleware: React.FC<FraudDetectionMiddlewareProps> = ({ children }) => {};
  // Function to scan message content for fraud;
  const scanMessageContent = useCallback(async (
    userId: string;
    messageId: string;
    content: string;
    userEmail?: string;
  ): Promise<{ isSafe: boolean, explanation?: string }> => {}
    try {}
      // If the quick check finds suspicious content, flag it;
      if (quickCheck.isSuspicious) {}
        // Flag the content for review;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        await monitorContent(
'
import {checkMessage, monitorContent} from '@/services/fraud';'
import {toast} from '@/hooks/use-toast';'
=======
      // If the quick check finds suspicious content, flag it
      if (quickCheck.isSuspicious) {
        // Flag the content for review
        await monitorContent(

import {checkMessage, monitorContent} from '@/services/fraud';
import {toast} from '@/hooks/use-toast';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
"
// Create the context. "createContext" can be untyped if React type definitions;'
=======

// Create the context. "createContext" can be untyped if React type definitions;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

      // First do a quick local check using the fraud detection service
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

      // First do a quick local check using the fraud detection service
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          userId;
          userEmail;'
          'message';
          messageId;
          content;
        );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

          userId,
          userEmail,'
          'message',
          messageId,
<<<<<<< HEAD
          content
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          content;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

          userId,
          userEmail,
          'message',
          messageId,
          content

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        ),
        


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        );
        ),
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        // If it's dangerous, show a warning to the user
        if (quickCheck.severity === 'dangerous') {
          toast({
            title: "Message Flagged"
            description: "Your message contains content that may violate our terms of service."
            variant: "destructive"
            duration: 5000
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
          });
          return {
            isSafe: false
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


'
        // If it's dangerous, show a warning to the user'
        if (quickCheck.severity === 'dangerous') {}
          toast({"
            title: "Message Flagged""
            description: "Your message contains content that may violate our terms of service.""
            variant: "destructive"
            duration: 5000;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          }),
          
          return {}
            isSafe: false,

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


          }),
          
          return { 
            isSafe: false,

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

            explanation: "Message contains prohibited content. Please review our communication guidelines."
          }
        }
      }
<<<<<<< HEAD
<<<<<<< HEAD
      
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


      


<<<<<<< HEAD
=======
      


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            explanation: "Message contains prohibited content. Please review our communication guidelines."
          }
=======
"
            explanation: "Message contains prohibited content. Please review our communication guidelines."
          }"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            explanation: "Message contains prohibited content. Please review our communication guidelines."
          }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            explanation: "Message contains prohibited content. Please review our communication guidelines."
          };
      }


      

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // For suspicious but not dangerous content, log but let it pass through
      if (quickCheck.severity === 'suspicious') {
=======
      // For suspicious but not dangerous content, log but let it pass through'
      if (quickCheck.severity === 'suspicious') {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        console.log('Suspicious content detected but allowed:', content)
      }
      // For more complex analysis (in a real app), we would call the edge function;
      // This is disabled in this example to avoid unnecessary API calls;
      /*'
      const { data, error } = await supabase.functions.invoke('analyze-content-fraud', {'
        body: { content, contentType: 'message' }
      });
      if (error) {'
        console.error('Error analyzing message:', error);
        return { isSafe: true }, // Default to safe on error;
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

      // For suspicious but not dangerous content, log but let it pass through
      if (quickCheck.severity === 'suspicious') {
        console.log('Suspicious content detected but allowed:', content)
      }
      // For more complex analysis (in a real app), we would call the edge function
      // This is disabled in this example to avoid unnecessary API calls
      /*
      const { data, error } = await supabase.functions.invoke('analyze-content-fraud', {
        body: { content, contentType: 'message' }
      });
      if (error) {
        console.error('Error analyzing message:', error);
        return { isSafe: true }, // Default to safe on error
      }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




      
<<<<<<< HEAD


      
<<<<<<< HEAD
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      
      
      
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      if (data.classification === 'dangerous') {
        toast({
          title: "Message Blocked"
          description: data.explanation |"This message contains prohibited content."
          variant: "destructive"
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
'
      if (data.classification === 'dangerous') {}
        toast({"
          title: "Message Blocked""
          description: data.explanation |"This message contains prohibited content.""
          variant: "destructive"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

        }),
        return {}
          isSafe: false,
<<<<<<< HEAD
          explanation: data.explanation
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
          explanation: data.explanation;
;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      if (data.classification === 'dangerous') {;
        toast({;"
          title: "Message Blocked",;"
          description: data.explanation || "This message contains prohibited content.",;"
=======


        }),
        return { 
          isSafe: false,
          explanation: data.explanation
;
      if (data.classification === 'dangerous') {;
        toast({;
          title: "Message Blocked",;
          description: data.explanation || "This message contains prohibited content.",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          variant: "destructive";
        }),;
        return {;
          isSafe: false,;
          explanation: data.explanation;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        }),
        return { 
          isSafe: false,
          explanation: data.explanation
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        }
      }
      */
      // Message is considered safe
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
        }
      }
      */
      // Message is considered safe;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        // If it's dangerous, show a warning to the user;
        if (quickCheck && quickCheck.severity === 'dangerous') {;
          toast({;
            title: "Message Flagged",,
  description: "Your message contains content that may violate our terms of service.",;
=======
'
        // If it's dangerous, show a warning to the user;'
        if (quickCheck && quickCheck.severity === 'dangerous') {;
          toast({;"
            title: "Message Flagged",;"
            description: "Your message contains content that may violate our terms of service.",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}


        // If it's dangerous, show a warning to the user;
        if (quickCheck && quickCheck.severity === 'dangerous') {;
          toast({;
            title: "Message Flagged",;
            description: "Your message contains content that may violate our terms of service.",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            variant: "destructive",;
            duration: 5000;
          });
          return { ;
            isSafe: false,;"
            explanation: "Message contains prohibited content. Please review our communication guidelines.";
          }
        }
      }
      // For suspicious but not dangerous content, log but let it pass through;'
      if (quickCheck && quickCheck.severity === 'suspicious') {;'
        console && console.log('Suspicious content detected but allowed:', content);
      }
      // For more complex analysis (in a real app), we would call the edge function;
      // This is disabled in this example to avoid unnecessary API calls;
      /*;'
      const { data, error } = await supabase && supabase.functions.invoke('analyze-content-fraud', {;'
        body: { content, contentType: 'message' }
      });
      if (error) {;'
        console && console.error('Error analyzing message:', error);
        return { isSafe: true }, // Default to safe on error;
      }'
      if (data && data.classification === 'dangerous') {;
<<<<<<< HEAD
        toast({;
<<<<<<< HEAD
          title: "Message Blocked",,
  description: data && data.explanation || "This message contains prohibited content.",;
=======
        toast({;"
          title: "Message Blocked",;"
          description: data && data.explanation || "This message contains prohibited content.",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          title: "Message Blocked",;
          description: data && data.explanation || "This message contains prohibited content.",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          variant: "destructive";
        });
        return { ;
          isSafe: false,;
          explanation: data && data.explanation;
        }
      }
      */;
      return { isSafe: true }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


  // Create the context value;
  const contextValue: FraudDetectionContextType = {;
    scanMessageContent};


  return (
    <FraudDetectionContext && FraudDetectionContext.Provider value={contextValue}>;
      {children}

    </FraudDetectionContext && FraudDetectionContext.Provider>;
<<<<<<< HEAD

<<<<<<< HEAD

=======
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return { isSafe: true }

<<<<<<< HEAD
};
      return { isSafe: true }


  // Create the context value;
  const contextValue: FraudDetectionContextType = {;
    scanMessageContent};


  return (
    <FraudDetectionContext && FraudDetectionContext.Provider value={contextValue}>;
      {children}

    </FraudDetectionContext && FraudDetectionContext.Provider>;
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } catch (error) {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    } catch (error) {;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    } catch (error) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      console.error('Error in fraud detection:', error),;
      // On error, let the message pass through but log the error;
      return { isSafe: true }
    }
  }, []),;
  // Create the context value;
  const contextValue: FraudDetectionContextType = {;
    scanMessageContent},;
  return (;
    <FraudDetectionContext.Provider value={contextValue}>;
      {children}
    </FraudDetectionContext.Provider>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    } catch (error) {;
=======

    } catch (error) {;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      console.error('Error in fraud detection:', error),;
      // On error, let the message pass through but log the error;
      return { isSafe: true }
    }
  }, []);
  return (
    <FraudDetectionContext && FraudDetectionContext.Provider value={contextValue}>;
      {children}
<<<<<<< HEAD
    </FraudDetectionContext && FraudDetectionContext.Provider>;
  );
};

// Hook to use the fraud detection context;
export const useFraudDetection = () => {;
  const context = React && React.useContext(FraudDetectionContext);
<<<<<<< HEAD
=======

  if (context === undefined) {;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    throw new Error('useFraudDetection must be used within a FraudDetectionMiddleware');
  }
<<<<<<< HEAD
<<<<<<< HEAD
  return context;
<<<<<<< HEAD
=======
=======
  if (context === undefined) {;
    throw new Error('useFraudDetection must be used within a FraudDetectionMiddleware');
  }
  return context;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



};
<<<<<<< HEAD




// Interface for the context;
interface FraudDetectionContextType {}
=======
// Interface for the context;
interface FraudDetectionContextType {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  scanMessageContent: (
    user_id: string,
    message_id: string,
    content: string,
<<<<<<< HEAD
    user_email?: string) => Promise<{}
    is_safe: boolean,
    explanation?: string;
  }>;
}"
// Create the context. "create_context" can be untyped if React type definitions;'
// aren't available. Passing a generic argument to an untyped function causes;
// TS2347, so we cast the default value instead of using a type parameter.;
export const FraudDetectionContext = React.create_context (;
  undefined as FraudDetectionContextType | undefined);
;
export const FraudDetectionMiddleware: React.FC < FraudDetectionMiddlewareProps> = ({ children }) => {};
=======
    user_email?: string) => Promise<{
    is_safe: boolean,
    explanation?: string;
  }>;
}
// Create the context. "create_context" can be untyped if React type definitions;
// aren't available. Passing a generic argument to an untyped function causes;
// TS2347, so we cast the default value instead of using a type parameter.;
export const FraudDetectionContext = React.create_context (
  undefined as FraudDetectionContextType | undefined);
;
export const FraudDetectionMiddleware: React.FC < FraudDetectionMiddlewareProps> = ({ children }) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Function to scan message content for fraud;
  const scanMessageContent = useCallback (async (
    user_id: string,
    message_id: string,
    content: string,
<<<<<<< HEAD
    user_email?: string): Promise<{ is_safe: boolean, explanation?: string }> => {}
    try {}
=======
    user_email?: string): Promise<{ is_safe: boolean, explanation?: string }> => {
    try {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // First do a quick local check using the fraud detection service;
      const quick_check = check_message (content);
;
      // If the quick check finds suspicious content, flag it;
<<<<<<< HEAD
      // Check condition;
if ( {) {}
  $2;
=======
      // Check condition
if ( {) {
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
        // Flag the content for review;
        await monitor_content (
          user_id;
<<<<<<< HEAD
          user_email;'
          'message';
          message_id;
          content);
;'
        // If it's dangerous, show a warning to the user;
        // Check condition;
if ( {) {}
  $2;
}
          toast ({"
            title: "Message Flagged","
            description: "Your message contains content that may violate our terms of service.","
=======
          user_email;
          'message';
          message_id;
          content);
;
        // If it's dangerous, show a warning to the user;
        // Check condition
if ( {) {
  $2
}
          toast ({
            title: "Message Flagged",
            description: "Your message contains content that may violate our terms of service.",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            variant: "destructive",
            duration: 5000;
          });
;
<<<<<<< HEAD
          return {}
            is_safe: false,"
=======
          return {
            is_safe: false,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            explanation: "Message contains prohibited content. Please review our communication guidelines.";
          }
        }
      }
      // For suspicious but not dangerous content, log but let it pass through;
<<<<<<< HEAD
      // Check condition;
if ( {) {}
  $2;
}'
=======
      // Check condition
if ( {) {
  $2
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        console.log ('Suspicious content detected but allowed:', content);
      }
      // For more complex analysis (in a real app), we would call the edge function;
      // This is disabled in this example to avoid unnecessary API calls;
<<<<<<< HEAD
      /*;'
      const { data, error } = await supabase.functions.invoke ('analyze - content - fraud', {'
        body: { content, content_type: 'message' }
      });
;
      // Check condition;
if ( {) {}
  $2;
}'
        console.error ('Error analyzing message:', error);
        return { is_safe: true }, // Default to safe on error;
      }
      // Check condition;
if ( {) {}
  $2;
}
        toast ({"
          title: "Message Blocked","
          description: data.explanation || "This message contains prohibited content.","
          variant: "destructive";
        });
        return {}
=======
      /*;
      const { data, error } = await supabase.functions.invoke ('analyze - content - fraud', {
        body: { content, content_type: 'message' }
      });
;
      // Check condition
if ( {) {
  $2
}
        console.error ('Error analyzing message:', error);
        return { is_safe: true }, // Default to safe on error;
      }
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Message Blocked",
          description: data.explanation || "This message contains prohibited content.",
          variant: "destructive";
        });
        return {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          is_safe: false,
          explanation: data.explanation;
        }
      }
      */;
      // Message is considered safe;
      return { is_safe: true }
<<<<<<< HEAD
    } catch (error) {'
=======
    } catch (error) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      console.error ('Error in fraud detection:', error);
      // On error, let the message pass through but log the error;
      return { is_safe: true }
    }
  }, []);
;
  // Create the context value;
<<<<<<< HEAD
  const context_value: FraudDetectionContextType = {}
=======
  const context_value: FraudDetectionContextType = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    scanMessageContent}
;
  return (
    <FraudDetectionContext.Provider value={context_value}>;
      {children}
    </FraudDetectionContext.Provider>);
}
;
// Hook to use the fraud detection context;
<<<<<<< HEAD
export const useFraudDetection = () =>: any {};
  const context = React.useContext (FraudDetectionContext);
  // Check condition;
if ( {) {}
  $2;
}'
=======
export const useFraudDetection = () =>: any {
  const context = React.useContext (FraudDetectionContext);
  // Check condition
if ( {) {
  $2
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    throw new Error ('useFraudDetection must be used within a FraudDetectionMiddleware');
  }
  return context;
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import React, { useCallback } from 'react',;
import { checkMessage, monitorContent } from '@/services/fraud',;
import { toast } from '@/hooks/use-toast',;
import { supabase } from '@/integrations/supabase/client',;
;
// Props for the middleware component;
interface FraudDetectionMiddlewareProps {;
  children:React.ReactNode;
}
;
// Interface for the context;
interface FraudDetectionContextType {;
  scanMessageContent:(;
    userId:string,;
    messageId:string,;
    content:string,;
    userEmail?:string;
  ) => Promise<{;
    isSafe:boolean,;
    explanation?:string;
  }>,;
}
;
// Create the context. "createContext" can be untyped if React type definitions;
// aren't available. Passing a generic argument to an untyped function causes;
// TS2347, so we cast the default value instead of using a type parameter.;
export const FraudDetectionContext = React.createContext(;
  undefined as FraudDetectionContextType | undefined;
),;
;
export const FraudDetectionMiddleware:React.FC<FraudDetectionMiddlewareProps> = ({ children }) => {;
  // Function to scan message content for fraud;
  const scanMessageContent = useCallback(async (;
    userId:string,;
    messageId:string,;
    content:string,;
    userEmail?:string;
  ):Promise<{ isSafe:boolean, explanation?:string }> => {;
    try {;
      // First do a quick local check using the fraud detection service;
      const quickCheck = checkMessage(content),;
      ;
      // If the quick check finds suspicious content, flag it;
      if (quickCheck.isSuspicious) {;
        // Flag the content for review;
        await monitorContent(;
          userId,;
          userEmail,;
          'message',;
          messageId,;
          content;
        ),;
        ;
        // If it's dangerous, show a warning to the user;
        if (quickCheck.severity === 'dangerous') {;
          toast({;
            title:"Message Flagged",;
            description:"Your message contains content that may violate our terms of service.",;
            variant:"destructive",;
            duration:5000;
          }),;
          ;
          return { ;
            isSafe:false,;
            explanation:"Message contains prohibited content. Please review our communication guidelines.";
          },;
        }
      }
      ;
      // For suspicious but not dangerous content, log but let it pass through;
      if (quickCheck.severity === 'suspicious') {;
        // // // console.log('Suspicious content detected but allowed:', content),;
      }
      ;
      // For more complex analysis (in a real app), we would call the edge function;
      // This is disabled in this example to avoid unnecessary API calls;
      /*;
      const { data, error } = await supabase.functions.invoke('analyze-content-fraud', {;
        body:{ content, contentType:'message' }
      }),;
      ;
      if (error) {;
        console.error('Error analyzing message:', error),;
        return { isSafe:true }, // Default to safe on error;
      }
      ;
      if (data.classification === 'dangerous') {;
        toast({;
          title:"Message Blocked",;
          description:data.explanation || "This message contains prohibited content.",;
          variant:"destructive";
        }),;
        return { ;
          isSafe:false,;
          explanation:data.explanation;
        },;
      }
      */;
      ;
      // Message is considered safe;
      return { isSafe:true },;
    } catch (error) {;
      console.error('Error in fraud detection:', error),;
      // On error, let the message pass through but log the error;
      return { isSafe:true },;
    }
  }, []),;
;
  // Create the context value;
  const contextValue:FraudDetectionContextType = {;
    scanMessageContent},;
;
  return (;
    <FraudDetectionContext.Provider value={contextValue}>;
      {children}
    </FraudDetectionContext.Provider>;
  ),;
},;
;
// Hook to use the fraud detection context;
export const useFraudDetection = () => {;
  const context = React.useContext(FraudDetectionContext),;
  if (context === undefined) {;
    throw new Error('useFraudDetection must be used within a FraudDetectionMiddleware'),;
  }
  return context,;
},; 
}//Create the context. "createContext" can be untyped if React type definitions //aren't available. Passing a generic argument to an untyped function causes //TS2347, so we cast the default value instead of using a type parameter. //If the quick check finds suspicious content, flag it if (quickCheck.isSuspicious) {
  //Flag the content for review await monitorContent (//If it's dangerous, show a warning to the user if (quickCheck.severity === 'dangerous') {
  toast ({
  
}
}//For suspicious but not dangerous content, log but let it pass through 
}isSafe: false;
explanation: data.explanation 
}
}*/ //Message is considered safe 
}
}, []);
//Create the context value return (<FraudDetectionContext.Provider value= {
  contextValue 
}> {
  children 
}</FraudDetectionContext.Provider>) 
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
// Hook to use the fraud detection context 
};
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  return context
=======
// Hook to use the fraud detection context 
};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  return context
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
