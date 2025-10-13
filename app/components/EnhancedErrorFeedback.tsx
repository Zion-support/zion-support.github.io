import React from 'react';

interface EnhancedErrorFeedbackProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
<<<<<<< HEAD
export default function EnhancedErrorFeedback({ className = '', children }: EnhancedErrorFeedbackProps) {
  return (
    <div className={`${className}`}>
=======
export default function EnhancedErrorFeedback({ className = '', children, ...props }: EnhancedErrorFeedbackProps) {
  return (
    <div className={`enhanced-error-feedback-component ${className}`} {...props}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
      {children}
    </div>
  );
}
=======
export default function EnhancedErrorFeedback({ className = '', children, ...props }: EnhancedErrorFeedbackProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
