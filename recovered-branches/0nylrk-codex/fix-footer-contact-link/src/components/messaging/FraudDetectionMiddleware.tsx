<<<<<<< HEAD

<<<<<<< HEAD
import {check_message, monitor_content} from '@/services / fraud';
import {toast} from '@/hooks / use - toast';
import {supabase} from '@/integrations / supabase / client';
// Props for the middleware component;

interface FraudDetectionMiddlewareProps {
  children: React.ReactNode;
}




=======
=======
import React, { useCallback } from 'react';
import { checkMessage, monitorContent  } from '@/services/fraud';
import { toast  } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
// Props for the middleware component
interface FraudDetectionMiddlewareProps {
  children: React.ReactNode
=======
interface FraudDetectionMiddlewareProps {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
// Interface for the context
interface FraudDetectionContextType {
  scanMessageContent: (
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  children: React.ReactNode;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useCallback } from 'react',;
import { checkMessage, monitorContent } from '@/services/fraud',;
import { toast } from '@/hooks/use-toast',;
import { supabase } from '@/integrations/supabase/client',;
// Props for the middleware component;
interface FraudDetectionMiddlewareProps {;
  children: React.ReactNode;
<<<<<<< HEAD


<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    explanation?: string;
  }>;
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
<<<<<<< HEAD

<<<<<<< HEAD

  undefined as FraudDetectionContextType | undefined


=======
  undefined as FraudDetectionContextType | undefined


  undefined as FraudDetectionContextType | undefined;
);
  undefined as FraudDetectionContextType | undefined
);
),

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export const FraudDetectionMiddleware: React.FC<FraudDetectionMiddlewareProps> = ({ children }) => {
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

      // First do a quick local check using the fraud detection service


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
      // If the quick check finds suspicious content, flag it
      if (quickCheck.isSuspicious) {
        // Flag the content for review
        await monitorContent(
<<<<<<< HEAD
<<<<<<< HEAD

=======
interface FraudDetectionMiddlewareProps {
  children: React.ReactNode;
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          userId;
          userEmail;
          'message';
          messageId;
          content;
        );
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          userId,
          userEmail,
          'message',
          messageId,
          content
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        ),
        


<<<<<<< HEAD
=======
        );
        ),
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          });
          return {
            isSafe: false
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          }),
          
          return { 
            isSafe: false,

<<<<<<< HEAD

            explanation: "Message contains prohibited content. Please review our communication guidelines."
          }
        }
      }


      


=======
      


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            explanation: "Message contains prohibited content. Please review our communication guidelines."
          }
            explanation: "Message contains prohibited content. Please review our communication guidelines."
          };
      }


      
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      if (data.classification === 'dangerous') {
        toast({
          title: "Message Blocked"
          description: data.explanation |"This message contains prohibited content."
          variant: "destructive"
<<<<<<< HEAD
<<<<<<< HEAD


=======
        });
        return {
          isSafe: false
          explanation: data.explanation
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        }),
        return { 
          isSafe: false,
          explanation: data.explanation
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

        }),
        return { 
          isSafe: false,
          explanation: data.explanation
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        }
      }
      */
      // Message is considered safe
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

        // If it's dangerous, show a warning to the user;
        if (quickCheck && quickCheck.severity === 'dangerous') {;
          toast({;
            title: "Message Flagged",;
            description: "Your message contains content that may violate our terms of service.",;
            variant: "destructive",;
            duration: 5000;
          });
          return { ;
            isSafe: false,;
            explanation: "Message contains prohibited content. Please review our communication guidelines.";
          }
        }
      }
      // For suspicious but not dangerous content, log but let it pass through;
      if (quickCheck && quickCheck.severity === 'suspicious') {;
        console && console.log('Suspicious content detected but allowed:', content);
      }
      // For more complex analysis (in a real app), we would call the edge function;
      // This is disabled in this example to avoid unnecessary API calls;
      /*;
      const { data, error } = await supabase && supabase.functions.invoke('analyze-content-fraud', {;
        body: { content, contentType: 'message' }
      });
      if (error) {;
        console && console.error('Error analyzing message:', error);
        return { isSafe: true }, // Default to safe on error;
      }
      if (data && data.classification === 'dangerous') {;
        toast({;
          title: "Message Blocked",;
          description: data && data.explanation || "This message contains prohibited content.",;
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


  // Create the context value;
  const contextValue: FraudDetectionContextType = {;
    scanMessageContent};


  return (
    <FraudDetectionContext && FraudDetectionContext.Provider value={contextValue}>;
      {children}

    </FraudDetectionContext && FraudDetectionContext.Provider>;
<<<<<<< HEAD
=======


=======
=======


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
    <FraudDetectionContext.Provider value={contextValue}>
      {children}
    </FraudDetectionContext.Provider>
  )
}
// Hook to use the fraud detection context
export const useFraudDetection = () => {;
  const context = React.useContext(FraudDetectionContext);
  if (context === undefined) {
    throw new Error('useFraudDetection must be used within a FraudDetectionMiddleware')
  }
  return context
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    } catch (error) {;
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

=======
=======


      return { isSafe: true }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    } catch (error) {;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  );
};

// Hook to use the fraud detection context;
export const useFraudDetection = () => {;
  const context = React && React.useContext(FraudDetectionContext);
<<<<<<< HEAD
=======
  );
},;
// Hook to use the fraud detection context;
export const useFraudDetection = () => {;
  const context = React.useContext(FraudDetectionContext);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  if (context === undefined) {;
    throw new Error('useFraudDetection must be used within a FraudDetectionMiddleware');
  }
  return context;



};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
// Interface for the context;
interface FraudDetectionContextType {
  scanMessageContent: (
    user_id: string,
    message_id: string,
    content: string,
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
  // Function to scan message content for fraud;
  const scanMessageContent = useCallback (async (
    user_id: string,
    message_id: string,
    content: string,
    user_email?: string): Promise<{ is_safe: boolean, explanation?: string }> => {
    try {
      // First do a quick local check using the fraud detection service;
      const quick_check = check_message (content);
;
      // If the quick check finds suspicious content, flag it;
      // Check condition
if ( {) {
  $2
}
        // Flag the content for review;
        await monitor_content (
          user_id;
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
            variant: "destructive",
            duration: 5000;
          });
;
          return {
            is_safe: false,
            explanation: "Message contains prohibited content. Please review our communication guidelines.";
          }
        }
      }
      // For suspicious but not dangerous content, log but let it pass through;
      // Check condition
if ( {) {
  $2
}
        console.log ('Suspicious content detected but allowed:', content);
      }
      // For more complex analysis (in a real app), we would call the edge function;
      // This is disabled in this example to avoid unnecessary API calls;
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
          is_safe: false,
          explanation: data.explanation;
        }
      }
      */;
      // Message is considered safe;
      return { is_safe: true }
    } catch (error) {
      console.error ('Error in fraud detection:', error);
      // On error, let the message pass through but log the error;
      return { is_safe: true }
    }
  }, []);
;
  // Create the context value;
  const context_value: FraudDetectionContextType = {
    scanMessageContent}
;
  return (
    <FraudDetectionContext.Provider value={context_value}>;
      {children}
    </FraudDetectionContext.Provider>);
}
;
// Hook to use the fraud detection context;
export const useFraudDetection = () =>: any {
  const context = React.useContext (FraudDetectionContext);
  // Check condition
if ( {) {
  $2
}
    throw new Error ('useFraudDetection must be used within a FraudDetectionMiddleware');
  }
  return context;
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

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
// Hook to use the fraud detection context 
};
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
