
import {check_message, monitor_content} from '@/services / fraud';
import {toast} from '@/hooks / use - toast';
import {supabase} from '@/integrations / supabase / client';
// Props for the middleware component;

interface FraudDetectionMiddlewareProps {

interface FraudDetectionMiddlewareProps {
  children: React.ReactNode}
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

export const FraudDetectionContext = React.createContext(export const FraudDetectionMiddleware: React.FC<FraudDetectionMiddlewareProps> = ({ children }) => {
  // Function to scan message content for fraud
  const scanMessageContent = useCallback(async (
    userId: string
    messageId: string
    content: string
    userEmail?: string
  ): Promise<{ isSafe: boolean, explanation?: string }> => {
    try {

      // First do a quick local check using the fraud detection service
          userId;
          userEmail;'
          'message';
          messageId;
          content;
        );
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
        toast({;
          title: "Message Blocked",,
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
    </FraudDetectionContext && FraudDetectionContext.Provider>;
  )
};

// Hook to use the fraud detection context;
export const useFraudDetection = () => {;
  const context = React && React.useContext(FraudDetectionContext);
    throw new Error('useFraudDetection must be used within a FraudDetectionMiddleware');
  }
  return context
};
