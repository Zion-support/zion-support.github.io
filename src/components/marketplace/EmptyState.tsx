

      
      {type === 'error' && (
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <p>If this issue continues, please contact our support team.</p>
        </div>
      )}


  return (
    <EmptyState
      type="categories"
      action={onRetry ? { label: 'Refresh Categories', onClick: onRetry } : undefined}

    />;

}

export function TalentEmptyState({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      type="talent"
      action={onRetry ? { label: 'Reset Filters', onClick: onRetry } : undefined}

    />;
  );

}

export function EquipmentEmptyState({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      type="equipment"
      action={onRetry ? { label: 'Refresh Listings', onClick: onRetry } : undefined}

    />;
  );

}

export function SearchEmptyState({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      type="search"
      action={onRetry ? { label: 'Clear Search', onClick: onRetry } : undefined}

    />;
  );

}

export function NetworkErrorState({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      type="network"
      action={onRetry ? { label: 'Try Again', onClick: onRetry } : undefined}

    />;
  );

}

export function ServerErrorState({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      type="error"
      action={onRetry ? { label: 'Retry', onClick: onRetry } : undefined}

    />;
  );
} ;




        label: is_authenticated ? 'Add Product' : 'Login to Add Product',
        on_click: onAddProduct,
      }
    : on_retry;
      ? { label: 'Try Again', on_click: on_retry }
      : undefined;
  const custom_description = is_authenticated;
    ? "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or add your own!";
    : "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or log in to add your own!";
      />);
export function CategoriesEmptyState ({ on_retry }: { on_retry?: () => void }) {
      />);
export function TalentEmptyState ({ on_retry }: { on_retry?: () => void }) {
      />);
export function EquipmentEmptyState ({ on_retry }: { on_retry?: () => void }) {
      />);
export function SearchEmptyState ({ on_retry }: { on_retry?: () => void }) {
      />);
export function NetworkErrorState ({ on_retry }: { on_retry?: () => void }) {
      />);
export function ServerErrorState ({ on_retry }: { on_retry?: () => void }) {
      />);
}

