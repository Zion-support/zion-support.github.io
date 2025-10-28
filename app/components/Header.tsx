import React from 'react';

interface HeaderProps {
  [key: string]: any;
}

export default function Header(_props: HeaderProps) {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}