import React from 'react';

interface AddToCart.testProps {
  className?: string;
}

const AddToCart.test: React.FC<AddToCart.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AddToCart.test</h1>
      <p>This component is under development.</p>
    </div>
  );
}
}
}
