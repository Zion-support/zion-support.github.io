import React from 'react';

interface pageProps {
  className?: string;}
}
;
const page: React.FC<pageProps> = ({ className = '' }) => {
  return (</pageProps>
    <div className={className}></div>
      <h2>page</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default page;
