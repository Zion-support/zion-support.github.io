<<<<<<< HEAD
<<<<<<< HEAD
export function EmptyState({ 
  text = "No items available",
  description,
  onRetry,
  showRetry = false,
=======
import { Button } from './button';
interface EmptyStateProps {;

import { Package, RefreshCw } from 'lucide-react'
=======
import { Package, RefreshCw } from 'lucide-react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
import { Button } from './button';
interface EmptyStateProps {

  text?: string;
  description?: string;
  onRetry?: () => void;
  showRetry?: boolean;
<<<<<<< HEAD


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
}

export function EmptyState({ 
  text;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  icon
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-4 text-gray-400">
        {icon |<Package className="h-16 w-16" />}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
<<<<<<< HEAD
=======
import { Package, RefreshCw } from 'lucide-react';
import { Button } from './button';
interface EmptyStateProps {
  text?: string;
  description?: string;
  on_retry?: () => void;
  show_retry?: boolean;
  icon?: React.ReactNode;
export /**
 * EmptyState - Function description
 */
function EmptyState() {
  return (
    <div className="flex flex - col items - center justify - center py - 16 px - 4 text - center">;
      <div className="mb - 4 text - gray - 400">;
        {icon || <Package className="h - 16 w - 16" />}
      </div>;
      <h3 className="text - xl font - semibold text - white mb - 2">;
        {text}
      </h3>
      {description && (


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  icon?: React && React.ReactNode;

export function EmptyState(): any ({;
  text = 'No items available',;
<<<<<<< HEAD
=======

        <p className="text-gray-400 mb-6 max-w-md">
;
export function EmptyState({;
  text = "No items available",;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  description,;
  onRetry;
  showRetry = false;
  icon;
}: EmptyStateProps) {;
  return (;
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
<<<<<<< HEAD
    <div className='flex flex-col items-center justify-center py-16 px-4 text-center'>;
      <div className='mb-4 text-gray-400'>;
        {icon || <Package className='h-16 w-16' />}
      </div>;
      <h3 className='text-xl font-semibold text-white mb-2'>{text}</h3>;
      {description && (;
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

<<<<<<< HEAD
=======
=======
    <div className='flex flex-col items-center justify-center py-16 px-4 text-center'>
      <div className='mb-4 text-gray-400'>
        {icon || <Package className='h-16 w-16' />}
      </div>
      <h3 className='text-xl font-semibold text-white mb-2'>{text}</h3>
      {description && (
        <p className='text-gray-400 mb-6 max-w-md'>{description}</p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      )}
      {showRetry && onRetry && (;

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          onClick={onRetry}
variant='outline'
          className='flex items-center gap-2'
        >
<<<<<<< HEAD
          <RefreshCw className="h-4 w-4" />



          Try Again

        </Button>
      )}
    </div>;
  );

} 

        <p className='text - gray - 400 mb - 6 max - w-md'>{description}</p>;
  show_retry = false,
  icon,
}: EmptyStateProps) {
  return (
    <div className='flex flex - col items - center justify - center py - 16 px - 4 text - center'>;
      <div className='mb - 4 text - gray - 400'>;
        {icon || <Package className='h - 16 w - 16' />}
      </div>;
      <h3 className='text - xl font - semibold text - white mb - 2'>{text}</h3>;
      {description && (
        <p className='text - gray - 400 mb - 6 max - w-md'>{description}</p>      )}
      {show_retry && on_retry && (
        <Button;
          on_click={on_retry}
          variant='outline';
          className='flex items - center gap - 2';
        >;
          <RefreshCw className='h - 4 w - 4' />          Try Again      )}
      {show_retry && on_retry && (
        <Button;
          on_click={on_retry}
          variant='outline';
          className='flex items - center gap - 2';
        >;
          <RefreshCw className='h - 4 w - 4' />        <p className="text - gray - 400 mb - 6 max - w-md">;
          {description}
        </p>)}
      {show_retry && on_retry && (
        <Button;
          on_click={on_retry}
          variant="outline";
          className="flex items - center gap - 2";
        >;
          <RefreshCw className="h - 4 w - 4" />;
        </Button>)}
    </div>);
<<<<<<< HEAD
=======
}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
          <RefreshCw className='h-4 w-4' />
          Try Again
        </Button>
      )}
    </div>
  );
} 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
