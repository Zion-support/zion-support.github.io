import React from 'react';
<<<<<<< HEAD

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
=======
export default function EnhancedCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={["card-base p-4", className].join(' ')}>
      {children}
    </div>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
