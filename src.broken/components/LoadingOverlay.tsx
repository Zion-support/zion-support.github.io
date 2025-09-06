<<<<<<< HEAD
import React from 'react';
import { Loader2 } from 'lucide-react';

export interface LoadingOverlayProps {
  visible?: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  visible = false,
}) => {
  if (!visible) return null;
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      <Loader2 className='h-8 w-8 animate-spin text-white' />
    </div>
  );
};

export default LoadingOverlay;
=======
 return (<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" > <Loader2 className="h-8 w-8 animate-spin text-white" /> </div> export default LoadingOverlay;
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
