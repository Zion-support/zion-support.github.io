import React from 'react';

export default function EnhancedCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={[&quot;card-base p-4&quot;, className].join(' ')}>
      {children}
    </div>
  );
}