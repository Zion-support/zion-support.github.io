import React from 'react';

export default function EnhancedCard(_{_children, _className = ''}: {_children: React.ReactNode; className?: string}) {_return (
    <div className={["card-base p-4", _className].join(' ')}>
      {_children}
    </div>
  );
}