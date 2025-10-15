import React, { useState } from 'react';
import { AlertTriangle, Send, CheckCircle } from 'lucide-react';

interface EnhancedErrorFeedbackProps {
  onErrorReport?: (error: ErrorReport) => void;
  className?: string;
}

interface ErrorReport {
  message: string;
  stack?: string;
  userAgent: string;
  url: string;
  timestamp: string;
  userFeedback?: string;
}

const EnhancedErrorFeedback: React.FC<EnhancedErrorFeedbackProps> = ({
  onErrorReport,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const errorReport: ErrorReport = {
        message: 'User reported error',
        userAgent: navigator.userAgent,
        url: window.location.href,
        timestamp: new Date().toISOString(),
        userFeedback: feedback
      };

      if (onErrorReport) {
        onErrorReport(errorReport);
      }

      setIsSubmitted(true);
      setFeedback('');
      
      // Hide the form after 3 seconds
      setTimeout(() => {
        setIsVisible(false);
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-4 ${className}`}>
        <div className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
          <span className="text-green-800">Thank you for your feedback!</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-red-50 border border-red-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-center mb-3">
        <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
        <span className="text-red-800 font-medium">Report an Issue</span>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Please describe what went wrong..."
          className="w-full px-3 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          rows={3}
        />
        
        <div className="flex space-x-2">
          <button
            type="submit"
            disabled={isSubmitting || !feedback.trim()}
            className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? 'Sending...' : 'Send Report'}
          </button>
          
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnhancedErrorFeedback;
