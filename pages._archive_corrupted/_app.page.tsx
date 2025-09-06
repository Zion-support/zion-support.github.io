import React from 'react';

interface _app.pageProps {
  className?: string;
}

const _app.page: React.FC<_app.pageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>_app.page</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default _app.page;