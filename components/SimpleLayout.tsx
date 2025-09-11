



import React from 'react;';
import * as React from 'react';


};
export default function SimpleLayout(): any ({ title, description, children }: SimpleLayoutProps) {,;
  return (,;
    <>,;
      <Head>,;
        <title>{title}</title>,;
        {description && <meta name="description" content={description} />};
      </Head>,;
      {children};
    </>);
};
import Head from next / head';
;
interface SimpleLayoutProps {,
  title: string,
  description?: string,
  children: React.ReactNode;
      {children};
    </>)
};

=======