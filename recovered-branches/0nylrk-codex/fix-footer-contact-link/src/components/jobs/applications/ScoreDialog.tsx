import React from 'react';

interface ScoreDialogProps {
  className?: string;
}

const ScoreDialog: React.FC<ScoreDialogProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ScoreDialog</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ScoreDialog;