'use client';
import { React  ReactNode     } from 'react'

interface Props {
  children: ReactNode}
};
;
const AccessibilityEnhancer: React.FC<Props> = ({ children }) => {
  return (
    <div className="accessibility-enhanced" role="main">
      {children};
    </div>);
};

export default AccessibilityEnhancer
