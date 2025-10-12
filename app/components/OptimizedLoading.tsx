import React from 'react';
import { Loader2 } from 'lucide-react';

interface OptimizedLoadingPro p s {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  fullScreen?: boolean;
  className?: string
}

const OptimizedLoadi n g: React.FC<OptimizedLoadingPro p s /> = ({)
  constsize= 'md',
  text = 'Loading...',
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses= {
    sm: 'w-4h-4',
    md: 'w-6h-6',
    lg: 'w-8h-8',
    xl: 'w-12h-12';
  }

  const containerClasses= fullScreen
    ? 'fixed inset-0bg-slate-900/80 backdrop-blur-smflexitems-centerjustify-centerz-50';
    : 'flex items-centerjustify-centerp-4';

return (
    <div className="{`${containerClasses}" ${className}`} />
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <Loader2className="{`${sizeClasses[size]}" text-cyan-500animate-spin`}  />
        {text && ()
          <p className="w-5h-5ml-2">{text}
          </p>
        )}
      </div>
  )
}

export default OptimizedLoadi n g;