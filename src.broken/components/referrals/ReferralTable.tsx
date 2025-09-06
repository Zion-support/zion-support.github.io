import React from 'react';

interface ReferralTableProps {
  className?: string;
}

const ReferralTable: React.FC<ReferralTableProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ReferralTable</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ReferralTable;