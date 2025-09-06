
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Package, RefreshCw } from 'lucide-react';
import { Button } from './button',;
interface EmptyStateProps {;
  text?: string,;
  description?: string,;
  onRetry?: () => void,;
  showRetry?: boolean,;
  icon?: React.ReactNode;
}

export function EmptyState({ 
  text = "No items available",
  description,
  onRetry,
  showRetry = false,
<<<<<<< HEAD
=======
>>>>>>>   icon
  text?: string;
  description?: string;
  onRetry?: () => void;
  showRetry?: boolean;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  icon
>>>>>>> }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-4 text-gray-400">
        {icon |<Package className="h-16 w-16" />}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
        {text}
      </h3>
      {description && (
<<<<<<< HEAD

=======
        <p className='text-gray-400 mb-6 max-w-md'>{description}</p>
  showRetry = false
  icon
}: EmptyStateProps) {
  return (
    <div className='flex flex-col items-center justify-center py-16 px-4 text-center'>
      <div className='mb-4 text-gray-400'>
        {icon |<Package className='h-16 w-16' />}
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
          <RefreshCw className='h-4 w-4' />          Try Again      )}
      {showRetry && onRetry && (
        <Button
          onClick={onRetry}
          variant='outline'
          className='flex items-center gap-2'
        >
          <RefreshCw className='h-4 w-4' />        <p className="text-gray-400 mb-6 max-w-md">
          {description}
        </p>
      )}
      {showRetry && onRetry && (
        <Button
>>>>>>>           onClick={onRetry}
ursor/fix-website-loading-errors-and-merge-6662
  description,;
  onRetry,;
export function EmptyState(): any ({ ;
  text = "No items available";
  description;
  onRetry;
  showRetry = false;
  icon;
}: EmptyStateProps) {;
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">;
      <div className="mb-4 text-gray-400">;
        {icon || <Package className="h-16 w-16" />}
      </div>;
      <h3 className="text-xl font-semibold text-white mb-2">;
        {text}
      </h3>;
      {description && (;
        <p className='text-gray-400 mb-6 max-w-md'>{description}</p>;
  showRetry = false,;
  icon,;
}: EmptyStateProps) {;
  return (
    <div className='flex flex-col items-center justify-center py-16 px-4 text-center'>;
      <div className='mb-4 text-gray-400'>;
        {icon || <Package className='h-16 w-16' />}
      </div>;
      <h3 className='text-xl font-semibold text-white mb-2'>{text}</h3>;
      {description && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <p className='text-gray-400 mb-6 max-w-md'>{description}</p>      )}
      {showRetry && onRetry && (;
        <Button
          onClick={onRetry}
          variant='outline'
          className='flex items-center gap-2'>;
          <RefreshCw className='h-4 w-4' />          Try Again      )}
      {showRetry && onRetry && (;
        <Button
          onClick={onRetry}
          variant='outline'
          className='flex items-center gap-2'>;
          <RefreshCw className='h-4 w-4' />        <p className="text-gray-400 mb-6 max-w-md">;
          {description}
        </p>;

      )}
      {showRetry && onRetry && (;

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          onClick={onRetry}
>>>>>>>           variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
<<<<<<< HEAD

          Try Again

        </Button>
=======
        </Button>
      )}
    </div>
  )
}
          Try Again
>>>>>>>         </Button>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      )}
    </div>;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  );
} ;
<<<<<<< HEAD

=======
}
}
}
>>>>>>> 

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
