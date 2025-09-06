import React from 'react';
<<<<<<< HEAD
interface DocsProps {
  // Add props here as needed
export default function Docs({ }: DocsProps) {
=======

interface DocsProps {
  className?: string;
}

const Docs: React.FC<DocsProps> = ({ className }) => {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <div className={className || ''}>
      <h1>Docs</h1>
      <p>This component is under development.</p>
    </div>
  );
<<<<<<< HEAD
}
=======
}
}
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
