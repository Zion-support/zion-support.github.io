'use client';
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


export default EnhancedAccessibilityWrapper;