<<<<<<< HEAD
import { Package, RefreshCw } from 'lucide-react';
import { Button } from './button',;
;
interface EmptyStateProps {;
  text?:string,;
  description?:string,;
  onRetry?:() => void,;
  showRetry?:boolean,;
  icon?:React.ReactNode,;
}
;
export function EmptyState({ ;
  text = "No items available",;
  description,;
  onRetry,;
  showRetry = false,;
  icon;
} EmptyStateProps) {;
  return (;
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">;
      <div className="mb-4 text-gray-400">;
        {icon || <Package className="h-16 w-16" />}
      </div>;
      <h3 className="text-xl font-semibold text-white mb-2">;
        {text}
      </h3>;
      {description && (;
        <p className="text-gray-400 mb-6 max-w-md">;
=======
import { Package, RefreshCw } from 'lucide-react'
import { Button } from './button',
interface EmptyStateProps {
  text?: string,
  description?: string,
  onRetry?: () => void,
  showRetry?: boolean,
  icon?: React.ReactNode
}

export function EmptyState({ 
  text = "No items available",  description,
  onRetry,
  showRetry = false,
  icon
}: EmptyStateProps) {
  return (
    <div className=&quot;flex flex-col items-center justify-center py-16 px-4 text-center&quot;>
      <div className=&quot;mb-4 text-gray-400&quot;>
        {icon || <Package className=&quot;h-16 w-16&quot; />}
      </div>
      <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>
        {text}
      </h3>
      {description && (
        <p className=&quot;text-gray-400 mb-6 max-w-md&quot;>

interface EmptyStateProps {_text?: string;
  description?: string;
  onRetry?: () => void;
  showRetry?: boolean;
  icon?: React.ReactNode;}

export function EmptyState(_{_text = "No items available", _description, _onRetry, _showRetry = false, _icon}: EmptyStateProps) {_return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-4 text-gray-400">
        {icon || <Package className="h-16 w-16" />}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
        {_text}
      </h3>
      {_description && (
        <p className="text-gray-400 mb-6 max-w-md">
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          {description}
        </p>;
      )}
<<<<<<< HEAD
      {showRetry && onRetry && (;
        <Button;
          onClick={onRetry}
          variant="outline";
          className="flex items-center gap-2";
        >;
          <RefreshCw className="h-4 w-4" />;
          Try Again;
        </Button>;
      )}
    </div>;
  ),;
=======
      {_showRetry && onRetry && (
        <Button
          onClick={onRetry}
          variant=&quot;outline&quot;
          className=&quot;flex items-center gap-2&quot;
        >
          <RefreshCw className=&quot;h-4 w-4&quot; />
          Try Again
        </Button>
      )}
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
} 