<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Package, RefreshCw } from 'lucide-react'
import { Button } from './button';
interface EmptyStateProps {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { Button } from './button';
interface EmptyStateProps {;

import { Package, RefreshCw } from 'lucide-react'
import { Button } from './button';
interface EmptyStateProps {

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  text?: string;
  description?: string;
  onRetry?: () => void;
  showRetry?: boolean;
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
  icon?: React.ReactNode

export function EmptyState({
  text = 'No items available'
  description
  onRetry
export function EmptyState({
  text = "No items available"
  description
  onRetry
  showRetry = false

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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  icon
>>>>>>> }: EmptyStateProps) {
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        {text}
      </h3>
      {description && (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           onClick={onRetry}
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

  icon?: React && React.ReactNode;

export function EmptyState(): any ({;
  text = 'No items available',;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <p className="text-gray-400 mb-6 max-w-md">
;
export function EmptyState({;
  text = "No items available",;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
        <p className="text-gray-400 mb-6 max-w-md">;
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          {description}
        </p>;

      )}
      {showRetry && onRetry && (;
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          onClick={onRetry}
>>>>>>>           variant="outline"
=======
        <Button;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          onClick={onRetry}
          variant="outline"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          Try Again

        </Button>
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </Button>
      )}
    </div>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
          Try Again
>>>>>>>         </Button>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      )}
    </div>;
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  );
} ;
<<<<<<< HEAD

<<<<<<< HEAD
=======
}
}
}
>>>>>>> 

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          Try Again
        </Button>
      )}
    </div>;
  );
} ;
}
}
}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
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
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
