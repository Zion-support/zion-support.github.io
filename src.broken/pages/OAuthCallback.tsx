import React from 'react';

interface OAuthCallbackProps {
  className?: string;
}

const OAuthCallback: React.FC<OAuthCallbackProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OAuthCallback</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OAuthCallback;