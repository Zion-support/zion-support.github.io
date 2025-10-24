<<<<<<< HEAD
'use client'
import { React  ReactNode     } from 'react'

interface Props {
  children: ReactNode}
}
;
=======
'use client';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

>>>>>>> cursor/fix-errors-and-merge-to-main-75df
const AccessibilityEnhancer: React.FC<Props> = ({ children }) => {
  return (</Props>
    <div className="accessibility-enhanced" role="main">
<<<<<<< HEAD
      {children};
    </div>);
};

export default AccessibilityEnhancer
=======
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
>>>>>>> cursor/fix-errors-and-merge-to-main-75df
