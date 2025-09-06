import React from 'react';

interface CartProps {
  className?: string;
}

const Cart: React.FC<CartProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Cart</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Cart;