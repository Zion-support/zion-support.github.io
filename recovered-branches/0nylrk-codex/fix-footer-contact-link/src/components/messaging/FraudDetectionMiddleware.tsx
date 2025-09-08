

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


export const FraudDetectionMiddleware: React.FC<FraudDetectionMiddlewareProps> = ({ children }) => {

  // Function to scan message content for fraud
  const scanMessageContent = useCallback(async (
    userId: string
    messageId: string
    content: string
    userEmail?: string
  ): Promise<{ isSafe: boolean, explanation?: string }> => {
    try {



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
          userEmail;'
          'message';
          messageId;
          content;
        );



          userId,
          userEmail,'
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
          
          return {}
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





      if (data.classification === 'dangerous') {
        toast({
          title: "Message Blocked"
          description: data.explanation |"This message contains prohibited content."
          variant: "destructive"


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


        }),
        return { 
          isSafe: false,
          explanation: data.explanation



        }
      }
      */
      // Message is considered safe



        // If it's dangerous, show a warning to the user;
        if (quickCheck && quickCheck.severity === 'dangerous') {;
          toast({;
            title: "Message Flagged",,
  description: "Your message contains content that may violate our terms of service.",;

            variant: "destructive",;
            duration: 5000;
          });


          return { ;
            isSafe: false,;"
            explanation: "Message contains prohibited content. Please review our communication guidelines.";
          }
        }
      }


      // For more complex analysis (in a real app), we would call the edge function;
      // This is disabled in this example to avoid unnecessary API calls;
      /*;'
      const { data, error } = await supabase && supabase.functions.invoke('analyze-content-fraud', {;'
        body: { content, contentType: 'message' }
      });


      if (data && data.classification === 'dangerous') {;

          variant: "destructive";
        });
        return { ;
          isSafe: false,;
          explanation: data && data.explanation;
        }
      }
      */;


      return { isSafe: true }

  // Create the context value;
  const contextValue: FraudDetectionContextType = {;
    scanMessageContent};

  return (
    <FraudDetectionContext && FraudDetectionContext.Provider value={contextValue}>;
      {children}

    </FraudDetectionContext && FraudDetectionContext.Provider>;

      return { isSafe: true }



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


    } catch (error) {;

      console.error('Error in fraud detection:', error),;
      // On error, let the message pass through but log the error;
      return { isSafe: true }
    }
  }, []);
  return (
    <FraudDetectionContext && FraudDetectionContext.Provider value={contextValue}>;
      {children}


    throw new Error('useFraudDetection must be used within a FraudDetectionMiddleware');
  }






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




