<<<<<<< HEAD
import React from 'react',
import { Loader2 } from 'lucide-react',
export interface LoadingOverlayProps {
  visible?: boolean
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ visible = false }) => {
  if (!visible) return null,
=======
import React from 'react';

export interface LoadingOverlayProps {_visible?: boolean;}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = (_{_visible = false}) => {_if (!visible) return null;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  return (
    <div className=&quot;fixed inset-0 z-50 flex items-center justify-center bg-black/50&quot;>
      <Loader2 className=&quot;h-8 w-8 animate-spin text-white&quot; />
    </div>
<<<<<<< HEAD
  )
},
=======
  );};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default LoadingOverlay,
