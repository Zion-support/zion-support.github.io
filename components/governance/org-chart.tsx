import React from 'react';

interface Org-chartProps {
  className?: string;
}

const Org-chart: React.FC<Org-chartProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Org-chart</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Org-chart;