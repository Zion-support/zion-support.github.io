import React from 'react';

interface QuizProps {
  className?: string;
}

const Quiz: React.FC<QuizProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Quiz</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Quiz;