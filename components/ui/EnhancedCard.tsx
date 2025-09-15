import React from 'react';

export default function EnhancedCard({ childrenclassName = ', ' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={["card-base p-4"className].join(' ')}>
      {children}
    </div>
  );
}