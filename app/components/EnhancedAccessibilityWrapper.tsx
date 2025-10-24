'use client'
import { React  ReactNode     } from 'react';

interface Props {
  children: ReactNode;
}
const EnhancedAccessibilityWrapper: React.FC<Props> = ({ children }) => {

  return (</Props>
    <div className="en hanced-accessibility role= complementary">
      {children;
};
    </div>
  );
};

export default EnhancedAccessibilityWrapper;