<<<<<<< HEAD
import React from 'react',;
import { Loader2 } from 'lucide-react',;
;
export interface LoadingOverlayProps {;
  visible?:boolean,;
}
;
export const LoadingOverlay:React.FC<LoadingOverlayProps> = ({ visible = false }) => {;
  if (!visible) return null,;
  return (;
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">;
      <Loader2 className="h-8 w-8 animate-spin text-white" />;
    </div>;
  ),;
},;
;
export default LoadingOverlay,;
=======
import React from 'react',
import { Loader2 } from 'lucide-react',
export interface LoadingOverlayProps {
  visible?: boolean
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ visible = false }) => {
  if (!visible) return null,  return (
    <div className=&quot;fixed inset-0 z-50 flex items-center justify-center bg-black/50&quot;>
      <Loader2 className=&quot;h-8 w-8 animate-spin text-white&quot; />
    </div>
  )
},
export default LoadingOverlay,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
