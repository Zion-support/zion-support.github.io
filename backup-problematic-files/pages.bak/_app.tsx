import React from 'react';

interface _appProps {
  className?: string;
}

const _app: React.FC<_appProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>_app</h1>
      <p>This component is under development.</p>
    </div>
  );
}
}
}
