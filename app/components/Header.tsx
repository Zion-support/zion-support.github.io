import React from 'react';

interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header(_props: HeaderProps) {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}