
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
          {description}
        </p>
      )}
      {_showRetry && onRetry && (
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