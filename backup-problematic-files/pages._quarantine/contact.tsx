import React from 'react';

interface ContactProps {
  className?: string;

const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Contact</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Contact;