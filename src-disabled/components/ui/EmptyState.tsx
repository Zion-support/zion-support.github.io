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
import { Button } from './button';
interface EmptyStateProps {}
  text?: string;
  description?: string;
  onRetry?: () => void;
  showRetry?: boolean;
}

export function EmptyState({ 
  text;
  icon
  showRetry = false,  icon
  showRetry = false,
  icon
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-4 text-gray-400">
        {icon || <Package className="h-16 w-16" />}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
import { Button } from './button';
interface EmptyStateProps {}
  text?: string;
  description?: string;
  on_retry?: () => void;
  show_retry?: boolean;
  icon?: React.ReactNode;
export /**;
 * EmptyState - Function description;
 */
function EmptyState() {
  return (
    <div className="flex flex - col items - center justify - center py - 16 px - 4 text-center">;
      <div className="mb - 4 text - gray-400">;
        {icon || <Package className="h - 16 w-16" />}
      </div>;
      <h3 className="text - xl font - semibold text - white mb - 2">;
        {text}
      </h3>
      {description && (
        <p className="text-gray-400 mb-6 max-w-md">
;
export function EmptyState({;
  text = "No items available",;

  description,;
      <h3 className="text - xl font - semibold text - white mb-2">;
        {text}
      </h3>
      {description && (

  icon?: React && React.ReactNode;

export function EmptyState(): any ({;
  text = 'No items available',;
  onRetry;
  showRetry = false;
  icon;
  description,;
  onRetry;
  showRetry = false;
  icon;
}:,  EmptyStateProps) {;
  return (;
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">;
      <div className="mb-4 text-gray-400">;
        {icon || <Package className="h-16 w-16" />}"
}: EmptyStateProps) {;
  return (;
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">;
      <div className="mb-4 text-gray-400">;

        {icon || <Package className="h-16 w-16" />}
      </div>;"
      <h3 className="text-xl font-semibold text-white mb-2">;
        {text}
      </h3>;
{description && (;
<p className="text-gray-400 mb-6 max-w-md">;
        <p className='text-gray-400 mb-6 max-w-md'>{description}</p>;
  showRetry = false,;
  icon,;
}: EmptyStateProps) {;
return (
    <div className='flex flex-col items-center justify-center py-16 px-4 text-center'>;
      <div className='mb-4 text-gray-400'>;
        {icon || <Package className='h-16 w-16' />}
      </div>;'
      <h3 className='text-xl font-semibold text-white mb-2'>{text}</h3>;
      {description && (;'
        <p className='text-gray-400 mb-6 max-w-md'>{description}</p>      )}
      {showRetry && onRetry && (;
        <Button;
          onClick={onRetry}'
          variant='outline''
          className='flex items-center gap-2'>;'
          <RefreshCw className='h-4 w-4' />          Try Again      )}
      {showRetry && onRetry && (;
        <Button;
          onClick={onRetry}'
          variant='outline''
          className='flex items-center gap-2'>;'"
          <RefreshCw className='h-4 w-4' />        <p className="text-gray-400 mb-6 max-w-md">;
          {description}
        </p>;
    <div className='flex flex-col items-center justify-center py-16 px-4 text-center'>
      <div className='mb-4 text-gray-400'>
        {icon || <Package className='h-16 w-16' />}
      </div>
      <h3 className='text-xl font-semibold text-white mb-2'>{text}</h3>
      {description && (
        <p className='text-gray-400 mb-6 max-w-md'>{description}</p>
      )}
      {showRetry && onRetry && (;
        <Button;
          onClick={onRetry}
variant='outline'
          className='flex items-center gap-2'
        >
<RefreshCw className="h-4 w-4" />
          Try Again


          Try Again;
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
      )}
    </div>;
  );
} ;
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
}
          on_click={on_retry}
          variant="outline";
          className="flex items - center gap - 2";
        >;
          <RefreshCw className="h - 4 w - 4" />;
        </Button>)}
    </div>);
}
}}}}}})))
} ;
          <RefreshCw className='h-4 w-4' />
          Try Again
        </Button>
      )}
    </div>
  );
} 
origin/cursor/automate-test-improve-and-merge-code-2533
