






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



// Create the context. "createContext" can be untyped if React type definitions;



          content

        ),






























    throw new Error('useFraudDetection must be used within a FraudDetectionMiddleware');
  }






// Interface for the context;
interface FraudDetectionContextType {




