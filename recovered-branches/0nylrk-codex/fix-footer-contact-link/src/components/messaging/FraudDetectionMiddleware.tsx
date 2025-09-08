<<<<<<< HEAD


=======

import {check_message, monitor_content} from '@/services / fraud';
import {toast} from '@/hooks / use - toast';
import {supabase} from '@/integrations / supabase / client';
// Props for the middleware component;

interface FraudDetectionMiddlewareProps {

}
// Interface for the context
interface FraudDetectionContextType {
  scanMessageContent: (


>>>>>>> origin/cursor/delete-old-data-records-6bba
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


export const FraudDetectionContext = React.createContext(


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
// Create the context. "createContext" can be untyped if React type definitions;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
          userId,
          userEmail,'
          'message',
          messageId,
<<<<<<< HEAD

          content

        ),



=======

        ),

>>>>>>> origin/cursor/delete-old-data-records-6bba
        // If it's dangerous, show a warning to the user
        if (quickCheck.severity === 'dangerous') {
          toast({
            title: "Message Flagged"
            description: "Your message contains content that may violate our terms of service."
            variant: "destructive"
            duration: 5000

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          }),
          
          return {}
            isSafe: false,

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            explanation: "Message contains prohibited content. Please review our communication guidelines."
          }
        }
      }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            explanation: "Message contains prohibited content. Please review our communication guidelines."
          }

            explanation: "Message contains prohibited content. Please review our communication guidelines."
          };
      }

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
      if (data.classification === 'dangerous') {
        toast({
          title: "Message Blocked"
          description: data.explanation |"This message contains prohibited content."
          variant: "destructive"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        }),
        return { 
          isSafe: false,
          explanation: data.explanation
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        }
      }
      */
      // Message is considered safe

<<<<<<< HEAD

=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
          return { ;
            isSafe: false,;"
            explanation: "Message contains prohibited content. Please review our communication guidelines.";
          }
        }
      }
<<<<<<< HEAD


=======
      // For suspicious but not dangerous content, log but let it pass through;'
      if (quickCheck && quickCheck.severity === 'suspicious') {;'
        console && console.log('Suspicious content detected but allowed:', content);
      }
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // For more complex analysis (in a real app), we would call the edge function;
      // This is disabled in this example to avoid unnecessary API calls;
      /*;'
      const { data, error } = await supabase && supabase.functions.invoke('analyze-content-fraud', {;'
        body: { content, contentType: 'message' }
      });
<<<<<<< HEAD


=======
      if (error) {;'
        console && console.error('Error analyzing message:', error);
        return { isSafe: true }, // Default to safe on error;
      }'
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

    throw new Error('useFraudDetection must be used within a FraudDetectionMiddleware');
  }






// Interface for the context;
interface FraudDetectionContextType {
=======
    throw new Error('useFraudDetection must be used within a FraudDetectionMiddleware');
  }

};
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

// Interface for the context;
interface FraudDetectionContextType {
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


};
>>>>>>> origin/cursor/delete-old-data-records-6bba
