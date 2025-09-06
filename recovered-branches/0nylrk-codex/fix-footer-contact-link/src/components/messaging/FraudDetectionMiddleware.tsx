
import {check_message, monitor_content} from '@/services / fraud';
import {toast} from '@/hooks / use - toast';
import {supabase} from '@/integrations / supabase / client';
// Props for the middleware component;

interface FraudDetectionMiddlewareProps {
  children: React.ReactNode;
}

<<<<<<< HEAD



}
// Interface for the context
interface FraudDetectionContextType {
  scanMessageContent: (
  children: React.ReactNode;
}
import React, { useCallback } from 'react',;
import { checkMessage, monitorContent } from '@/services/fraud',;
import { toast } from '@/hooks/use-toast',;
import { supabase } from '@/integrations/supabase/client',;
// Props for the middleware component;
interface FraudDetectionMiddlewareProps {;
  children: React.ReactNode;



}
=======
interface FraudDetectionMiddlewareProps {
  children: React.ReactNode}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

<<<<<<< HEAD
export const FraudDetectionContext = React.createContext(


  undefined as FraudDetectionContextType | undefined


export const FraudDetectionMiddleware: React.FC<FraudDetectionMiddlewareProps> = ({ children }) => {
=======
export const FraudDetectionContext = React.createContext(export const FraudDetectionMiddleware: React.FC<FraudDetectionMiddlewareProps> = ({ children }) => {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  // Function to scan message content for fraud
  const scanMessageContent = useCallback(async (
    userId: string
    messageId: string
    content: string
    userEmail?: string
  ): Promise<{ isSafe: boolean, explanation?: string }> => {
    try {

<<<<<<< HEAD

      // First do a quick local check using the fraud detection service


      // If the quick check finds suspicious content, flag it
      if (quickCheck.isSuspicious) {
        // Flag the content for review
        await monitorContent(

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

=======
      // First do a quick local check using the fraud detection service
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          userId;
          userEmail;
          'message';
          messageId;
          content;
        );
<<<<<<< HEAD

          userId,
          userEmail,
          'message',
          messageId,
          content

        ),
        


        // If it's dangerous, show a warning to the user
        if (quickCheck.severity === 'dangerous') {
          toast({
            title: "Message Flagged"
            description: "Your message contains content that may violate our terms of service."
            variant: "destructive"
            duration: 5000


          }),
          
          return { 
            isSafe: false,


            explanation: "Message contains prohibited content. Please review our communication guidelines."
          }
        }
      }


      


            explanation: "Message contains prohibited content. Please review our communication guidelines."
          }
            explanation: "Message contains prohibited content. Please review our communication guidelines."
          };
      }


      


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




      
      
      
      
      if (data.classification === 'dangerous') {
        toast({
          title: "Message Blocked"
          description: data.explanation |"This message contains prohibited content."
          variant: "destructive"


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

        }),
        return { 
          isSafe: false,
          explanation: data.explanation


        }
      }
      */
      // Message is considered safe
}


        // If it's dangerous, show a warning to the user;
        if (quickCheck && quickCheck.severity === 'dangerous') {;
          toast({;
            title: "Message Flagged",;
            description: "Your message contains content that may violate our terms of service.",;
=======
        // If it's dangerous, show a warning to the user;
        if (quickCheck && quickCheck.severity === 'dangerous') {;
          toast({;
            title: "Message Flagged",,
  description: "Your message contains content that may violate our terms of service.",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
          title: "Message Blocked",;
          description: data && data.explanation || "This message contains prohibited content.",;
=======
          title: "Message Blocked",,
  description: data && data.explanation || "This message contains prohibited content.",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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


  // Create the context value;
  const contextValue: FraudDetectionContextType = {;
    scanMessageContent};


  return (
    <FraudDetectionContext && FraudDetectionContext.Provider value={contextValue}>;
      {children}

    </FraudDetectionContext && FraudDetectionContext.Provider>;
    } catch (error) {;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    } catch (error) {;
      console.error('Error in fraud detection:', error),;
      // On error, let the message pass through but log the error;
      return { isSafe: true }
    }
  }, []);
  return (
    <FraudDetectionContext && FraudDetectionContext.Provider value={contextValue}>;
      {children}
    </FraudDetectionContext && FraudDetectionContext.Provider>;
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
};

// Hook to use the fraud detection context;
export const useFraudDetection = () => {;
  const context = React && React.useContext(FraudDetectionContext);
<<<<<<< HEAD
  if (context === undefined) {;
    throw new Error('useFraudDetection must be used within a FraudDetectionMiddleware');
  }
  return context;



};
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
=======
    throw new Error('useFraudDetection must be used within a FraudDetectionMiddleware');
  }
  return context
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
};
