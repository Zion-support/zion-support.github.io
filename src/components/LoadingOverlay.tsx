<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react.ts';
import { Loader2 export const LoadingOverlay = ({ visible = false }) => {
    if (!visible)
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
import React from 'react.ts';
import { Loader2                } from 'lucide-react.ts';
export const LoadingOverlay = ({ visible = false }) => {;
    if (!visible);
        return null;
    return (<div className = "fixed inset-0 z-50 flex items-center justify-center bg-black/50">;
      <Loader2 className="h-8 w-8 animate-spin text-white"/>;
    </div>);
};
export default LoadingOverlay;
}