import React from 'react';

interface KanbanColumnProps {
  className?: string;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>KanbanColumn</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default KanbanColumn;