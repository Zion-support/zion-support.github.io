<<<<<<< HEAD
import React from 'react';

export default function EnhancedCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={['card-base p-4', className].join(' ')}>{children}</div>
  );
}
=======
 </div>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
