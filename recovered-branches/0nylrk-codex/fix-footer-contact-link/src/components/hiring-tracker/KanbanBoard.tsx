import React from 'react';

interface KanbanBoardProps {
  className?: string;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>KanbanBoard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default KanbanBoard;