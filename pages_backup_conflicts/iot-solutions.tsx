import React from 'react';

interface Iot-solutionsProps {
  className?: string;
}

const Iot-solutions: React.FC<Iot-solutionsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Iot-solutions</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Iot-solutions;