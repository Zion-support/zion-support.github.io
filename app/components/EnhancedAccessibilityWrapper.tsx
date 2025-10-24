'use client';
import React from "react";
import React, { ReactNode } from 'react';

interface Props {

  children: ReactNode,

}
const EnhancedAccessibilityWrapper: React.FC<Props> = ({ children }) => {
  return (

    <div className = "enhanced-accessibility" role="complementary">{children}
    </div>
  )
}

;
export default EnhancedAccessibilityWrapper;
  );
}