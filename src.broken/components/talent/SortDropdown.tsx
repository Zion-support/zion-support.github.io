import React from 'react';

interface SortDropdownProps {
  className?: string;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SortDropdown</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SortDropdown;