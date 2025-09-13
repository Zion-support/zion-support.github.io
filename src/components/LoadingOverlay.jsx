import React from 'react';
import { Loader2 } from 'lucide-react';
export const LoadingOverlay = ({ visible = false }) => {
    if (!visible)
        return null;
    return (<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Loader2 className="h-8 w-8 animate-spin text-white"/>
    </div>);
};
export default LoadingOverlay;
