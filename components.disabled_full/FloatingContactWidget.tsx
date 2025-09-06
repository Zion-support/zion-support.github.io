import React from 'react';

interface FloatingContactWidgetProps {
  className?: string;
}

const FloatingContactWidget: React.FC<FloatingContactWidgetProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FloatingContactWidget</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FloatingContactWidget;