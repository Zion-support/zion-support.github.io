import React from 'react';

interface CartDrawerProps {
  className?: string;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CartDrawer</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CartDrawer;