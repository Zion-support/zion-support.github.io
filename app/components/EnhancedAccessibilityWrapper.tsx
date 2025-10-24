'use client';
import React, { ReactNode } from 'react';

interface Props {
<<<<<<< HEAD
  children: ReactNode;
=======
  children: ReactNode,
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
}

const EnhancedAccessibilityWrapper: React.FC<Props> = ({ children }) => {
  return (
<<<<<<< HEAD
    <div className="enhanced-accessibility" role="complementary">
      {children}
    </div>
  );
};
=======
    <div className="enhanced-accessibility" role="complementary">{children}
    </div></div>
  )
}
>>>>>>> cursor/fix-errors-and-merge-to-main-998c

export default EnhancedAccessibilityWrapper;