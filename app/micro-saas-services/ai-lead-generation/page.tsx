import React from 'react';
;;
;
;
;

export const metadata = {
  title: 'Page - Zion Tech Group',
  description: 'Professional services by Zion Tech Group.',
}


function PageComponent() {
  return (
    <div>
      <h1>Ai Lead Generation</h1>
      <p>Professional ai lead generation services by Zion Tech Group</p>
    </div>
  );
}

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <PageComponent {...props} />
  );
}