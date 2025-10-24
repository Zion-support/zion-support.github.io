<<<<<<< HEAD
'use client';
import React from 'react';
import React, { ReactNode } from 'react';

interface Props {

  children: ReactNode,

}
const EnhancedAccessibilityWrapper: React.FC<Props> = ({ children }) => {
  return (

    <div className="enhanced-accessibility" role="complementary">{children}
    </div></div>
  )
}

=======
'use client'
import { React  ReactNode      } from "react";
interface Props {
  children: ReactNode
}
const EnhancedAccessibilityWrapper: React.FC<Props> = ({ children }) => {
  return (</Props>
    <div className = "enhanced-accessibility" role="complementary">;
      {children};
      </div>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a

export default EnhancedAccessibilityWrapper;
}