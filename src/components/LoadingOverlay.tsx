<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react.ts';
import { Loader2 export const LoadingOverlay = ({ visible = false }) => {
=======
import React from 'react.ts';
import { Loader2  } from 'lucide-react.ts';
export const LoadingOverlay = ({ visible = false }) => {
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
    if (!visible)
=======
import React from 'react.ts';
import { Loader2   } from 'lucide-react.ts';
export const LoadingOverlay = ({ visible = false }) => {;
    if (!visible);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        return null;
<<<<<<< HEAD
    return (<div className = "fixed inset-0 z-50 flex items-center justify-center bg-black/50">;
      <Loader2 className="h-8 w-8 animate-spin text-white"/>;
    </div>)};
=======
    return (<div className = "fixed inset-0 z-50 flex items-center justify-center bg-black/50">;
      <Loader2 className="h-8 w-8 animate-spin text-white"/>;
    </div>);
};
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
export default LoadingOverlay;
}