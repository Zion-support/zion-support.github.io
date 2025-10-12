'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const Loading: React.FC = () => {
  return (
    <div>
      <div>
        <div></div>
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;