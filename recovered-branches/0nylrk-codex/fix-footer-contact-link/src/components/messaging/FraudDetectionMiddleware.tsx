<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
    userId: string,
    messageId: string,
    content: string,
    userEmail?: string
  ) => Promise<{
    isSafe: boolean,
    explanation?: string
  }>
}

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
export const FraudDetectionContext = React.createContext($2);
export const FraudDetectionMiddleware: React.FC<FraudDetectionMiddlewareProps> = ({ children }) => {
  // Function to scan message content for fraud
  const scanMessageContent = $2;
    messageId: string,
    content: string,
    userEmail?: string
  ): Promise<{ isSafe: boolean, explanation?: string }> => {
    try {
      // First do a quick local check using the fraud detection service
      const quickCheck = checkMessage($2);
      // If the quick check finds suspicious content, flag it
      if (quickCheck.isSuspicious) {
        // Flag the content for review
        await monitorContent($2);
        // If it's dangerous, show a warning to the user
        if (quickCheck.severity === 'dangerous') {
          toast($2);
          return { 
            isSafe: false,
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {check_message, monitor_content} from '@/services / fraud';
import {toast} from '@/hooks / use - toast';
import {supabase} from '@/integrations / supabase / client';
// Props for the middleware component;

interface FraudDetectionMiddlewareProps {

}
// Interface for the context
interface FraudDetectionContextType {
  scanMessageContent: (

<<<<<<< HEAD
=======



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useCallback } from 'react',;
import { checkMessage, monitorContent } from '@/services/fraud',;
import { toast } from '@/hooks/use-toast',;

}
import React, { useCallback } from 'react',;
import { checkMessage, monitorContent } from '@/services/fraud',;
import { toast } from '@/hooks/use-toast',;

import { supabase } from '@/integrations/supabase/client',;
// Props for the middleware component;
interface FraudDetectionMiddlewareProps {;
  children: React.ReactNode;

<<<<<<< HEAD
}
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    userId: string
    messageId: string
    content: string
    userEmail?: string
  ) => Promise<{
    isSafe: boolean

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
=======
export const FraudDetectionContext = React.createContext(

<<<<<<< HEAD
  undefined as FraudDetectionContextType | undefined


  undefined as FraudDetectionContextType | undefined;
);
  undefined as FraudDetectionContextType | undefined
);
),

=======

  undefined as FraudDetectionContextType | undefined


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      // If the quick check finds suspicious content, flag it
      if (quickCheck.isSuspicious) {
        // Flag the content for review

        await monitorContent(
'
import {checkMessage, monitorContent} from '@/services/fraud';'
import {toast} from '@/hooks/use-toast';'

=======
<<<<<<< HEAD
      // First do a quick local check using the fraud detection service


      // First do a quick local check using the fraud detection service;
      const quickCheck = checkMessage(content);
      // First do a quick local check using the fraud detection service
      const quickCheck = checkMessage(content);
      const quickCheck = checkMessage(content),
      
=======

      // First do a quick local check using the fraud detection service


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // If the quick check finds suspicious content, flag it
      if (quickCheck.isSuspicious) {
        // Flag the content for review
        await monitorContent(
<<<<<<< HEAD
interface FraudDetectionMiddlewareProps {
  children: React.ReactNode;
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {checkMessage, monitorContent} from '@/services/fraud';
import {toast} from '@/hooks/use-toast';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

=======
// Create the context. "createContext" can be untyped if React type definitions;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
          userEmail;'
          'message';
          messageId;
          content;
        );
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          userId,
          userEmail,'
          'message',
          messageId,
<<<<<<< HEAD
=======
          content
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        ),

<<<<<<< HEAD
        );
        ),
        
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        // If it's dangerous, show a warning to the user
        if (quickCheck.severity === 'dangerous') {
          toast({
            title: "Message Flagged"
            description: "Your message contains content that may violate our terms of service."
            variant: "destructive"
            duration: 5000

<<<<<<< HEAD
=======
<<<<<<< HEAD
          });
          return {
            isSafe: false
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }),
          
          return {}
            isSafe: false,

<<<<<<< HEAD
=======
<<<<<<< HEAD
      


            explanation: "Message contains prohibited content. Please review our communication guidelines."
          }
            explanation: "Message contains prohibited content. Please review our communication guidelines."
          };
      }
      
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
            explanation: "Message contains prohibited content. Please review our communication guidelines."
          }
        }
      }
<<<<<<< HEAD
      // For suspicious but not dangerous content, log but let it pass through
      if (quickCheck.severity === 'suspicious') {
        console.log('Suspicious content detected but allowed:', content)
      }
      // For more complex analysis (in a real app), we would call the edge function
      // This is disabled in this example to avoid unnecessary API calls
      /*
      const { data, error } = await supabase.functions.invoke($2);
      if (error) {
        console.error($2);
        return { isSafe: true}, // Default to safe on error
      }
      
      if (data.classification === 'dangerous') {
        toast($2);
        return { 
          isSafe: false,
          explanation: data.explanation
        }
      }
      */
      // Message is considered safe
      return { isSafe: true}
    } catch (error) {
      console.error($2);
      // On error, let the message pass through but log the error
      return { isSafe: true}
    }
  }, []),

  // Create the context value
  const contextValue: FraudDetectionContextType = $2;
  return (
    <FraudDetectionContext.Provider value = $2;
// Hook to use the fraud detection context
}

export const useFraudDetection = () => {
  const context = React.useContext($2);
  if (context = $2;
=======

            explanation: "Message contains prohibited content. Please review our communication guidelines."
          }

            explanation: "Message contains prohibited content. Please review our communication guidelines."
          };
      }

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // For suspicious but not dangerous content, log but let it pass through
      if (quickCheck.severity === 'suspicious') {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



      
<<<<<<< HEAD
      
      
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      if (data.classification === 'dangerous') {
        toast({
          title: "Message Blocked"
          description: data.explanation |"This message contains prohibited content."
          variant: "destructive"
<<<<<<< HEAD
        });
        return {
          isSafe: false
          explanation: data.explanation
=======

        }),
        return {}
          isSafe: false,

;

      if (data.classification === 'dangerous') {;
        toast({;"
          title: "Message Blocked","
          description: data.explanation || "This message contains prohibited content.",;"

          variant: "destructive";
        }),;
        return {;
          isSafe: false,;
          explanation: data.explanation;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        }),
        return { 
          isSafe: false,
          explanation: data.explanation
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        }
      }
      */
      // Message is considered safe
<<<<<<< HEAD

}
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        // If it's dangerous, show a warning to the user;
        if (quickCheck && quickCheck.severity === 'dangerous') {;
          toast({;
            title: "Message Flagged",,
  description: "Your message contains content that may violate our terms of service.",;

            variant: "destructive",;
            duration: 5000;
          });
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          return { ;
            isSafe: false,;"
            explanation: "Message contains prohibited content. Please review our communication guidelines.";
          }
        }
      }
<<<<<<< HEAD
      // For suspicious but not dangerous content, log but let it pass through;'
      if (quickCheck && quickCheck.severity === 'suspicious') {;'
        console && console.log('Suspicious content detected but allowed:', content);
      }
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // For suspicious but not dangerous content, log but let it pass through;
      if (quickCheck && quickCheck.severity === 'suspicious') {;
        console && console.log('Suspicious content detected but allowed:', content);
      }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      // For more complex analysis (in a real app), we would call the edge function;
      // This is disabled in this example to avoid unnecessary API calls;
      /*;'
      const { data, error } = await supabase && supabase.functions.invoke('analyze-content-fraud', {;'
        body: { content, contentType: 'message' }
      });
<<<<<<< HEAD
      if (error) {;'
        console && console.error('Error analyzing message:', error);
        return { isSafe: true }, // Default to safe on error;
      }'
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (error) {;
        console && console.error('Error analyzing message:', error);
        return { isSafe: true }, // Default to safe on error;
      }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      if (data && data.classification === 'dangerous') {;

          variant: "destructive";
        });
        return { ;
          isSafe: false,;
          explanation: data && data.explanation;
        }
      }
      */;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      // Message is considered safe;
      return { isSafe: true }


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

=======

      // Message is considered safe;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return { isSafe: true }

  // Create the context value;
  const contextValue: FraudDetectionContextType = {;
    scanMessageContent};

  return (
    <FraudDetectionContext && FraudDetectionContext.Provider value={contextValue}>;
      {children}

    </FraudDetectionContext && FraudDetectionContext.Provider>;

      return { isSafe: true }

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
    } catch (error) {;
      console && console.error('Error in fraud detection:', error);
      // On error, let the message pass through but log the error;
      return { isSafe: true }
    }
  }, []);
  // Create the context value;
  const contextValue: FraudDetectionContextType = {;
    scanMessageContent};
  return (
    <FraudDetectionContext && FraudDetectionContext.Provider value={contextValue}>;
      {children}
    </FraudDetectionContext && FraudDetectionContext.Provider>;
  );
};
// Hook to use the fraud detection context;
export const useFraudDetection = () => {;
  const context = React && React.useContext(FraudDetectionContext);
  );
},;
// Hook to use the fraud detection context;
export const useFraudDetection = () => {;
  const context = React.useContext(FraudDetectionContext);
=======

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
=======
// Hook to use the fraud detection context;
export const useFraudDetection = () => {;
  const context = React && React.useContext(FraudDetectionContext);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (context === undefined) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    throw new Error('useFraudDetection must be used within a FraudDetectionMiddleware');
  }

<<<<<<< HEAD
};

=======


<<<<<<< HEAD
};
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Interface for the context;
interface FraudDetectionContextType {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  scanMessageContent: (
    user_id: string,
    message_id: string,
    content: string,

  // Function to scan message content for fraud;
  const scanMessageContent = useCallback (async (
    user_id: string,
    message_id: string,
    content: string,

      // First do a quick local check using the fraud detection service;
      const quick_check = check_message (content);
;
      // If the quick check finds suspicious content, flag it;

}
        // Flag the content for review;
        await monitor_content (
          user_id;

            variant: "destructive",
            duration: 5000;
          });
;

            explanation: "Message contains prohibited content. Please review our communication guidelines.";
          }
        }
      }
      // For suspicious but not dangerous content, log but let it pass through;

        console.log ('Suspicious content detected but allowed:', content);
      }
      // For more complex analysis (in a real app), we would call the edge function;
      // This is disabled in this example to avoid unnecessary API calls;

          is_safe: false,
          explanation: data.explanation;
        }
      }
      */;
      // Message is considered safe;
      return { is_safe: true }

      console.error ('Error in fraud detection:', error);
      // On error, let the message pass through but log the error;
      return { is_safe: true }
    }
  }, []);
;
  // Create the context value;

    scanMessageContent}
;
  return (
    <FraudDetectionContext.Provider value={context_value}>;
      {children}
    </FraudDetectionContext.Provider>);
}
;
// Hook to use the fraud detection context;

    throw new Error ('useFraudDetection must be used within a FraudDetectionMiddleware');
  }
  return context;
}
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

};
=======
// Hook to use the fraud detection context 
};
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
