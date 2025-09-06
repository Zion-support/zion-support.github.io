export default function Home() { return (<main style={{\"padding\": \'20\'}}><h1>Zion Tech Group</h1><p>Build placeholder page.</p></main>)}
module.exports = default function Home() { return (<main style={{padding: "20"}}><h1>Zion Tech Group</h1><p>Build placeholder page.</p></main>)}'"'"
import React from 'react';

interface IndexProps {
  className?: string;
}

const Index: React.FC<IndexProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Index</h1>
      <p>This component is under development.</p>
    </div>
  );
}
}
}
