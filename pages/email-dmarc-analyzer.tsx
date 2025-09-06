import React from 'react';

interface EmailDmarcAnalyzerProps {
  className?: string;
}

const EmailDmarcAnalyzer: React.FC<EmailDmarcAnalyzerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EmailDmarcAnalyzer</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EmailDmarcAnalyzer;