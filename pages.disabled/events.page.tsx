import React from 'react';

interface Events.pageProps {
  className?: string;
}

const Events.page: React.FC<Events.pageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Events.page</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Events.page;