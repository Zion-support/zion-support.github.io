import React from 'react';

interface CartItemProps {
  className?: string;
}

const CartItem: React.FC<CartItemProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CartItem</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CartItem;