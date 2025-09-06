import React from 'react';

interface SliderProps {
  className?: string;
}

const Slider: React.FC<SliderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Slider</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Slider;