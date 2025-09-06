module.exports = default function APIPage() { return null}
import React from 'react';

interface ApiProps {
  className?: string;
}

const Api: React.FC<ApiProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Api</h1>
      <p>This component is under development.</p>
    </div>
  );
}
}
}
