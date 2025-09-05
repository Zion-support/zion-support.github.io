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
<<<<<<< HEAD
  text = "No items available",
=======
  text = &quot;No items available&quot;, 
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  description,
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
          {description}
        </p>
      )}
      {showRetry && onRetry && (
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
} 