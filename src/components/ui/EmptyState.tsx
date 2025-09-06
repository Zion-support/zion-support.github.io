=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          onClick={onRetry}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
=======
          Try Again
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        </Button>
      )}
    </div>;
  );
} ;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
