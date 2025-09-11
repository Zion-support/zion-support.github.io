import React, { createContext, useContext, ReactNode, useState } from 'react';

interface Feedback {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  timestamp: Date;
}

interface FeedbackContextType {
  feedbacks: Feedback[];
  addFeedback: (message: string, type: Feedback['type']) => void;
  removeFeedback: (id: string) => void;
  clearFeedbacks: () => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined
);

interface FeedbackProviderProps {
  children: ReactNode;
}

export const FeedbackProvider: React.FC<FeedbackProviderProps> = ({
  children,
}) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  const addFeedback = (message: string, type: Feedback['type']) => {
    const feedback: Feedback = {
      id: Date.now().toString(),
      message,
      type,
      timestamp: new Date(),
    };
    setFeedbacks(prev => [...prev, feedback]);
  };

  const removeFeedback = (id: string) => {
    setFeedbacks(prev => prev.filter(feedback => feedback.id !== id));
  };

  const clearFeedbacks = () => {
    setFeedbacks([]);
  };

  const value = {
    feedbacks,
    addFeedback,
    removeFeedback,
    clearFeedbacks,
  };

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (context === undefined) {
    throw new Error('useFeedback must be used within a FeedbackProvider');
  }
  return context;
};
