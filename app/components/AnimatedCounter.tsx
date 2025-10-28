'use client';

import React, { memo } from 'react';

const AnimatedCounter: React.FC = memo(() => {
  return (
    <div className="animated-counter">
      Counter
    </div>
  );
});

AnimatedCounter.displayName = 'AnimatedCounter';

export default AnimatedCounter;