import React from 'react';
<<<<<<< HEAD

interface LoadingOverlayProps {
  visible: boolean;
  className?: string;
}

export function LoadingOverlay({ visible, className = '' }: LoadingOverlayProps) {
  if (!visible) return null;

  return (
    <div className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 ${className}`}>
      <div className="bg-white rounded-lg p-6 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-700">Loading...</span>
        </div>
      </div>
    </div>
  );
}
=======
import { Loader2 } from 'lucide-react';
export const LoadingOverlay = ({ visible = false }) => {
    if (!visible)
        return null;
    return (<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Loader2 className="h-8 w-8 animate-spin text-white"/>
    </div>);
};
export default LoadingOverlay;
>>>>>>> cursor/expand-services-and-deploy-updates-6593
