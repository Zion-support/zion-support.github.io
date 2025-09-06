import React from 'react';

interface GuestCheckoutModalProps {
  className?: string;
}

const GuestCheckoutModal: React.FC<GuestCheckoutModalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GuestCheckoutModal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GuestCheckoutModal;