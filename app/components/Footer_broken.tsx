'use client';

import React, { memo } from 'react';

interface FooterBrokenProps {
  className?: string;
  children?: React.ReactNode;
}

const FooterBroken: React.FC<FooterBrokenProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`footer-broken ${className}`}>
      {children}
    </div>
  );
});

FooterBroken.displayName = 'FooterBroken';

export default FooterBroken;