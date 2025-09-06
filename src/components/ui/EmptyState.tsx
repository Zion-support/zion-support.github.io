import { Package, RefreshCw } from 'lucide-react';
import { Button } from './button';
<<<<<<< HEAD
=======
import { Package, RefreshCw } from 'lucide-react'
import { Button } from './button';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
interface EmptyStateProps {
  text?: string;
  description?: string;
  onRetry?: () => void;
  showRetry?: boolean;
  icon?: React.ReactNode;

export function EmptyState({
  text = 'No items available',
  description,
  onRetry,

export function EmptyState({ 
  text = "No items available";
  description;
  onRetry;
  showRetry = false;
  icon
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-4 text-gray-400">
        {icon || <Package className="h-16 w-16" />}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
        {text}
      </h3>
      {description && (
        <p className='text-gray-400 mb-6 max-w-md'>{description}</p>
  showRetry = false,
  icon,
}: EmptyStateProps) {
  return (
    <div className='flex flex-col items-center justify-center py-16 px-4 text-center'>
      <div className='mb-4 text-gray-400'>
        {icon || <Package className='h-16 w-16' />}
      </div>
      <h3 className='text-xl font-semibold text-white mb-2'>{text}</h3>
      {description && (
        <p className='text-gray-400 mb-6 max-w-md'>{description}</p>      )}
      {showRetry && onRetry && (
        <Button
          onClick={onRetry}
          variant='outline'
          className='flex items-center gap-2'
        >
          <RefreshCw className='h-4 w-4' />          Try Again
=======
        <p className="text-gray-400 mb-6 max-w-md">
          {description}
        </p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      )}
      {showRetry && onRetry && (
        <Button
<<<<<<< HEAD
          onClick={onRetry}
<<<<<<< HEAD
          variant='outline'
          className='flex items-center gap-2'
        >
          <RefreshCw className='h-4 w-4' />
=======
=======
          onClick = {onRetry,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          Try Again
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </Button>
      )}
    </div>
  );
} 
=======
} 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
