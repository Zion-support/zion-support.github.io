import React from 'react';

interface SupportWidgetProps {
  className?: string;
}

const SupportWidget: React.FC<SupportWidgetProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SupportWidget</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SupportWidget;