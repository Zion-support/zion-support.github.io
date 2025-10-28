import React from 'react';
;
;;
;

export const metadata = {
  title: 'Page - Zion Tech Group',
  description: 'Professional services by Zion Tech Group.',
}


function PageComponent() {
  return (
    <div>
      <h1>Ai Analytics Dashboard</h1>
      <p>Professional ai analytics dashboard services by Zion Tech Group</p>
    </div>
  );
}

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <PageComponent {...props} />
  );
}