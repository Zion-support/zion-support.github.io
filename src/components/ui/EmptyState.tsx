<<<<<<< HEAD
<<<<<<< HEAD
import { Package, RefreshCw } from 'lucide-react';
import { Button } from './button',;
interface EmptyStateProps {;
  text?: string,;
  description?: string,;
  onRetry?: () => void,;
  showRetry?: boolean,;
  icon?: React.ReactNode;
}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export function EmptyState({ 
  text = "No items available",
  description,
  onRetry,
<<<<<<< HEAD
  showRetry = false,
=======
import { Button } from './button';
interface EmptyStateProps {;

import { Package, RefreshCw } from 'lucide-react'
import { Button } from './button';
interface EmptyStateProps {

  text?: string;
  description?: string;
  onRetry?: () => void;
  showRetry?: boolean;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  icon
=======
  showRetry = false,  icon
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-4 text-gray-400">
        {icon || <Package className="h-16 w-16" />}
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
    <div className="flex flex - col items - center justify - center py - 16 px - 4 text-center">;
      <div className="mb - 4 text - gray-400">;
        {icon || <Package className="h - 16 w-16" />}
      </div>;
<<<<<<< HEAD
      <h3 className="text - xl font - semibold text - white mb - 2">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {text}
      </h3>
      {description && (
        <p className="text-gray-400 mb-6 max-w-md">
;
export function EmptyState({;
  text = "No items available",;
  description,;
=======
      <h3 className="text - xl font - semibold text - white mb-2">;
        {text}
      </h3>
      {description && (

  icon?: React && React.ReactNode;

export function EmptyState(): any ({;
  text = 'No items available',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {description}
        </p>;
      )}
      {showRetry && onRetry && (;
        <Button;
          onClick={onRetry}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          Try Again

        </Button>
      )}
    </div>;
  );
<<<<<<< HEAD
} ;
=======

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
          <RefreshCw className='h - 4 w - 4' />        <p className="text - gray - 400 mb - 6 max-w-md">;
          {description}
        </p>)}
      {show_retry && on_retry && (
        <Button;
          on_click={on_retry}
          variant="outline";
          className="flex items - center gap-2";
        >;
          <RefreshCw className="h - 4 w-4" />;
        </Button>)}
    </div>);
<<<<<<< HEAD
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
