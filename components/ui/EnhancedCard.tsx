import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

export default function EnhancedCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
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
