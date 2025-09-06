import React from 'react';

interface CookiesProps {
  className?: string;

const Cookies: React.FC<CookiesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Cookies</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Cookies;