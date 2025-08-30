import React from 'react.ts';
import { Loader2  } from 'lucide-react';
export const LoadingOverlay = ({ visible = false }) => {;
    if (!visible);
        return null;
<<<<<<< HEAD
    return (<div className = "fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Loader2 className="h-8 w-8 animate-spin text-white"/>;
    </div>)};
=======
    return (<div className = "fixed inset-0 z-50 flex items-center justify-center bg-black/50">;
      <Loader2 className="h-8 w-8 animate-spin text-white"/>;
    </div>);
};
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
export default LoadingOverlay;
