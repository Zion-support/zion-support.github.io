import React, { ReactNode } from 'react';

interface MetaManagerProps {
  children: ReactNode;
}

export default function MetaManager({ children }: MetaManagerProps) {
  return (
    <div className="metamanager">
      {children}
    </div>
  );
}