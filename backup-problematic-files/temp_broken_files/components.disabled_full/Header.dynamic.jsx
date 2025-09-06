import React from 'react';

const Header.dynamic = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Header.dynamic</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Header.dynamic;