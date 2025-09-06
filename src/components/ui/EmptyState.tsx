import { Button } from './button';
interface EmptyStateProps {;

import { Package, RefreshCw } from 'lucide-react'
import { Button } from './button';
interface EmptyStateProps {

  text?: string;
  description?: string;
  onRetry?: () => void;
  showRetry?: boolean;

<<<<<<< HEAD
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
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  icon
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-4 text-gray-400">
        {icon |<Package className="h-16 w-16" />}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
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


  icon?: React && React.ReactNode;

export function EmptyState(): any ({;
  text = 'No items available',;

        <p className="text-gray-400 mb-6 max-w-md">
;
export function EmptyState({;
  text = "No items available",;
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

      )}
      {showRetry && onRetry && (;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

          onClick={onRetry}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



          Try Again
        </Button>
      )}
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
}