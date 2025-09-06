import React from 'react';

interface Contact.routeProps {
  className?: string;
}

const Contact.route: React.FC<Contact.routeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Contact.route</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Contact.route;