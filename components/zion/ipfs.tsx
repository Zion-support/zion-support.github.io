import React from 'react';

interface IpfsProps {
  className?: string;
}

const Ipfs: React.FC<IpfsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Ipfs</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Ipfs;