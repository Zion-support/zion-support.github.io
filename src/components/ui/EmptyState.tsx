<<<<<<< HEAD
<<<<<<< HEAD
import { Package, RefreshCw } from 'lucide-react'
=======
import React from 'react';
import { Package, RefreshCw } from 'lucide-react';
import { Button } from './button';
import { Package, RefreshCw } from 'lucide-react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import { Button } from './button';
interface EmptyStateProps {;
=======
import { Package, RefreshCw } from 'lucide-react'
import { Button } from './button';
interface EmptyStateProps {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  text?: string;
  description?: string;
  onRetry?: () => void;
  showRetry?: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  icon?: React.ReactNode
}

export function EmptyState({ 

  text = "No items available",
  description;
  onRetry;
  showRetry = false,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  icon
}: EmptyStateProps) {
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
=======
  icon?: React && React.ReactNode;

export function EmptyState(): any ({;
  text = 'No items available',;
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
        <Button
          onClick={onRetry}
          variant="outline"
          className="flex items-center gap-2">;
          <RefreshCw className="h-4 w-4" />;
        </Button>;
      )}
<<<<<<< HEAD
    </div>
  )
}
=======
    </div>;
  );
} ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
        <p className="text-gray-400 mb-6 max-w-md">
          {description}
        </p>
      )}
      {showRetry && onRetry && (
        <Button
          onClick={onRetry}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
      )}
    </div>
  );
} 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
