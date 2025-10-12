import { Loader2 } from 'lucide-react';

interface OptimizedLoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const OptimizedLoading: React.FC<OptimizedLoadingProps />= ({
  
    ? 'fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4'

export default function OptimizedLoading() {
  return (</OptimizedLoadingProps>
    <div>{text}</p>
          </p>
        )}
      </div>
  )

export default OptimizedLoading;

}}