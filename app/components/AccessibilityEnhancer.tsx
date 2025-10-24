'use client';
<<<<<<< HEAD
import React from 'react';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode,
=======

import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
}

const AccessibilityEnhancer: React.FC<Props> = ({ children }) => {
  return (
<<<<<<< HEAD
    <div className="accessibility-enhanced" role="main">{children}
    </div></div>
  )
}
=======
    <div className="accessibility-enhanced" role="main">
      {children}
      </div>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a

export default AccessibilityEnhancer;
</Props>
}