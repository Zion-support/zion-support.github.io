import React from 'react';

interface ViewModeContextProps {
  className?: string;

const ViewModeContext: React.FC<ViewModeContextProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ViewModeContext</h1>
      <p>This component is under development.</p>
    </div>
  );

export default ViewModeContext;