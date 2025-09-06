export default function Home() { return ( <main style={{ \"minHeight\": \'100vh\',\"display\": \'flex\',\"alignItems\": \'center\',\"justifyContent\": \'center\',\"fontFamily\": \'system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial\'}}> <div> <h1>Zion Tech Group</h1> <p>Site under maintenance. Core build is healthy.</p> </div> </main> )}
module.exports = default function Home() { return ( <main style={{ minHeight: "100vh",display: "flex",alignItems: "center",justifyContent: "center",fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial"}}> <div> <h1>Zion Tech Group</h1> <p>Site under maintenance. Core build is healthy.</p> </div> </main> )}'"'"
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
