import React from 'react';

interface AutocompleteSuggestions.testProps {
  className?: string;
}

const AutocompleteSuggestions.test: React.FC<AutocompleteSuggestions.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AutocompleteSuggestions.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AutocompleteSuggestions.test;