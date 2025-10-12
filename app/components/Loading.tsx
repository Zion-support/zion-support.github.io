'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const Loading: React.FC = ($2) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
  return (
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
      </div>
      </div>
    </div>
  );
};

export default Loading;