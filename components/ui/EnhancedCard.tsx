import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function EnhancedCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
<<<<<<< HEAD
  return (
    <div className={['card-base p-4', className].join(' ')}>{children}</div>
  );
=======
=======
export default function EnhancedCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  return (
    <div className={["card-base p-4", className].join(' ')}>
      {children}
    </div>
  );
<<<<<<< HEAD
=======
export default function EnhancedCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={["card-base p-4", className].join(' ')}>
      {children}
    </div>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
