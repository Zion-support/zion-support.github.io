import React, { createContext, useContext, ReactNode } from 'react';

interface FeedbackContextType {
  submitFeedback: (feedback: string) => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export function FeedbackProvider({ children }: { children: ReactNode }) {
  const submitFeedback = (feedback: string) => {
    // Placeholder for feedback submission
    console.log('Feedback submitted:', feedback);
  };

  return (
    <FeedbackContext.Provider value={{ submitFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  const context = useContext(FeedbackContext);
  if (context === undefined) {
    throw new Error('useFeedback must be used within a FeedbackProvider');
  }
  return context;
}