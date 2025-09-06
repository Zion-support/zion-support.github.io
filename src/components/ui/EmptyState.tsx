<<<<<<< HEAD
import { Package, RefreshCw } from 'lucide-react';
import { Button } from './button';

=======
import { Package, RefreshCw } from 'lucide-react'
import { Button } from './button';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
interface EmptyStateProps {
  text?: string;
  description?: string;
  onRetry?: () => void;
  showRetry?: boolean;
<<<<<<< HEAD
  icon?: React.ReactNode;

export function EmptyState({
  text = 'No items available',
  description,
  onRetry,
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
        <p className='text-gray-400 mb-6 max-w-md'>{description}</p>
=======
  icon?: React.ReactNode
}

export function EmptyState({ 

  text = "No items available",
  description;
  onRetry;
  showRetry = false,

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
        <p className="text-gray-400 mb-6 max-w-md">
          {description}
        </p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      )}
      {showRetry && onRetry && (
        <Button
          onClick={onRetry}
<<<<<<< HEAD
          variant='outline'
          className='flex items-center gap-2'
        >
          <RefreshCw className='h-4 w-4' />
=======
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          Try Again
        </Button>
      )}
    </div>
  );
<<<<<<< HEAD
=======
} 
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
