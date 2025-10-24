import React from 'react';

interface PageBroken2Props {
  className?: string;
}

export default function PageBroken2({ className }: PageBroken2Props) {
  return (
    <div className={className}>
      <h1>page-broken2</h1>
      <p>Component content</p>
    </div>
  );
}