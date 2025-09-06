import React from 'react';

interface CartContextProps {
  className?: string;
}

const CartContext: React.FC<CartContextProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CartContext</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CartContext;