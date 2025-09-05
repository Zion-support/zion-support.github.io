
<<<<<<< HEAD
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
=======
import React, { useCallback } from 'react',
import { checkMessage, monitorContent } from '@/services/fraud',
import { toast } from '@/hooks/use-toast',
import { supabase } from '@/integrations/supabase/client',
// Props for the middleware component
interface FraudDetectionMiddlewareProps {
  children: React.ReactNode
}

// Interface for the context
interface FraudDetectionContextType {
  scanMessageContent: (
    userId: string,
    messageId: string,
    content: string,
    userEmail?: string
  ) => Promise<{
    isSafe: boolean,
    explanation?: string
  }>}

// Create the context. &quot;createContext&quot; can be untyped if React type definitions
// aren't available. Passing a generic argument to an untyped function causes
// TS2347, so we cast the default value instead of using a type parameter.
export const FraudDetectionContext = React.createContext(
  undefined as FraudDetectionContextType | undefined
),

export const FraudDetectionMiddleware: React.FC<FraudDetectionMiddlewareProps> = ({ children }) => {
  // Function to scan message content for fraud
  const scanMessageContent = useCallback(async (
    userId: string,
    messageId: string,
    content: string,
    userEmail?: string
  ): Promise<{ isSafe: boolean, explanation?: string }> => {
    try {
      // First do a quick local check using the fraud detection service
      const quickCheck = checkMessage(content),      
      // If the quick check finds suspicious content, _flag it
      if (quickCheck.isSuspicious) {
        // Flag the content for review
        await monitorContent(
          userId,
          userEmail,
          'message',
          messageId,
          content
        ),        
        // If it's dangerous, _show a warning to the user
        if (quickCheck.severity === 'dangerous') {
          toast({
            title: &quot;Message Flagged&quot;,
            description: &quot;Your message contains content that may violate our terms of service.&quot;,
            variant: &quot;destructive&quot;,
            duration: 5000
          }),
          
          return { 
            isSafe: false,
            explanation: "Message contains prohibited content. Please review our communication guidelines."
          }            title: "Message Flagged", _description: "Your message contains content that may violate our terms of service.", _variant: "destructive", _duration: 5000});
          
          return {_isSafe: false, _explanation: "Message contains prohibited content. Please review our communication guidelines."};
        }
      }
      
      // For suspicious but not dangerous content, log but let it pass through
      if (quickCheck.severity === 'suspicious') {
        // // // console.log('Suspicious content detected but allowed:', content)      }
      if (quickCheck.severity === 'suspicious') {}
      
      // For more complex analysis (in a real app), we would call the edge function
      // This is disabled in this example to avoid unnecessary API calls
      /*
      const { data, error } = await supabase.functions.invoke('analyze-content-fraud', {
        body: { content, contentType: 'message' }
      }),
      
      if (error) {
        console.error('Error analyzing message:', error),
        return { isSafe: true }, // Default to safe on error
      }
      
      if (data.classification === 'dangerous') {
        toast({
          title: "Message Blocked",
          description: data.explanation || "This message contains prohibited content.",
          variant: "destructive"
        }),        return { 
          isSafe: false,
          explanation: data.explanation
        }
      const {_data, _error} = await supabase.functions.invoke(_'analyze-content-fraud', _{_body: { content, _contentType: 'message'}
      });
      
      if (error) {_return { isSafe: true}; // Default to safe on error
      }
      
      if (data.classification === 'dangerous') {_toast({
          title: "Message Blocked", _description: data.explanation || "This message contains prohibited content.", _variant: "destructive"});
        return {_isSafe: false, _explanation: data.explanation};
      }
      */
      
      // Message is considered safe
      return { isSafe: true }
    } catch (error) {
      console.error('Error in fraud detection:', error),
      // On error, let the message pass through but log the error
      return { isSafe: true }    }
  }, []),

  // Create the context value
  const contextValue: FraudDetectionContextType = {
    scanMessageContent},
  return (
    <FraudDetectionContext.Provider value={_contextValue}>
      {_children}
    </FraudDetectionContext.Provider>
  )
},

// Hook to use the fraud detection context
export const useFraudDetection = () => {
  const context = React.useContext(FraudDetectionContext),
  if (context === undefined) {
    throw new Error('useFraudDetection must be used within a FraudDetectionMiddleware')
  }
  return context
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
