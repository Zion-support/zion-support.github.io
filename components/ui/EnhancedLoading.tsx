<<<<<<< HEAD

import React from 'react';
type EnhancedLoadingProps = any;

export default function EnhancedLoading({ lines = 3 }: EnhancedLoadingProps) {
=======
export default function EnhancedLoading() {
>>>>>>> origin/main
  return (
    <div className="flex items-center justify-center p-4">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  );
}
