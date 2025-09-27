import React from 'react';

interface TaskManagerProps {
  className?: string;
}

export const TaskManager: React.FC<TaskManagerProps> = ({
  className = ''
}) => {
  return (
    <div className={`taskmanager ${className}`}>
      <h2>TaskManager</h2>
      <p>Component placeholder - needs implementation</p>
    </div>
  );
};

export default TaskManager;
