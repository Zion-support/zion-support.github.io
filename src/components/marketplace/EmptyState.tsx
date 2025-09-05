import * as React from 'react';
import Link from 'next/link';

export interface EmptyStateProps {_type: 'products' | 'categories' | 'talent' | 'equipment' | 'search' | 'error' | 'network' | 'loading';
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;};
  icon?: React.ReactNode;
}

const _defaultContent = {_products: {
    icon: <ShoppingCart className="w-16 h-16 text-gray-400" />, _title: 'No Products Available', _description: 'We\'re loading our marketplace products. If this persists, _there might be a connection issue. Try refreshing the page or check back soon for exciting new offerings!'},
  categories: {_icon: <Lightbulb className="w-16 h-16 text-gray-400" />, _title: 'No Categories Found', _description: 'Categories are being organized. Please try refreshing the page or come back later.'},
  talent: {_icon: <Users className="w-16 h-16 text-gray-400" />, _title: 'No Talent Profiles', _description: 'No talent profiles match your criteria. Try adjusting your filters or search terms.'},
  equipment: {_icon: <Wrench className="w-16 h-16 text-gray-400" />, _title: 'No Equipment Available', _description: 'Equipment listings are being updated. Please check back soon for the latest hardware offerings.'},
  search: {_icon: <ShoppingCart className="w-16 h-16 text-gray-400" />, _title: 'No Results Found', _description: 'Try adjusting your search terms or browse our categories to discover what we have available.'},
  error: {_icon: <Server className="w-16 h-16 text-red-400" />, _title: 'Unable to Load Data', _description: 'We\'re experiencing technical difficulties. Our team has been notified and is working on a fix.'},
  network: {_icon: <Wifi className="w-16 h-16 text-orange-400" />, _title: 'Connection Issue', _description: 'Please check your internet connection and try again. If the problem persists, _our servers might be temporarily unavailable.'},
  loading: {_icon: <RefreshCw className="w-16 h-16 text-blue-400 animate-spin" />, _title: 'Loading...', _description: 'We\'re fetching the latest data for you. This should only take a moment.'}};

export function EmptyState(_{_type, _title, _description, _action, _icon}: EmptyStateProps) {_const { t} = useTranslation();
  const _content = defaultContent[type];
  const _displayTitle = title || content.title;
  const _displayDescription = description || content.description;
  const _displayIcon = icon || content.icon;

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      <div className="mb-4">
        {_displayIcon}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {_displayTitle}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
        {_displayDescription}
      </p>
      
      {_action && (
        <Button
          onClick={action.onClick}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          {_action.label}
        </Button>
      )}
      
      {_type === 'error' && (
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <p>If this issue continues, _please contact our support team.</p>
        </div>
      )}
      
      {_type === 'network' && (
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <p>
            {t('general.check_status_page')}
            {_" "}
            <Link href="https://status.zion.ai" className="underline">
              {_t('general.status_page')}
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  );
}

// Specific empty state variants for quick use
export function ProductsEmptyState(_{_onRetry, _onAddProduct, _isAuthenticated = false}: {_onRetry?: () => void;
  onAddProduct?: () => void;
  isAuthenticated?: boolean;}) {_const _action = onAddProduct
    ? { 
        label: isAuthenticated ? 'Add Product' : 'Login to Add Product', _onClick: onAddProduct}
    : onRetry
    ? {_label: 'Try Again', _onClick: onRetry}
    : undefined;

  const _customDescription = isAuthenticated 
    ? "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or add your own!"
    : "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or log in to add your own!";

  return (
    <EmptyState 
      type="products" 
      action={_action}
      description={_customDescription}
    />
  );
}

export function CategoriesEmptyState(_{_onRetry}: {_onRetry?: () => void}) {_return (
    <EmptyState
      type="categories"
      action={onRetry ? { label: 'Refresh Categories', _onClick: onRetry} : undefined}
    />
  );
}

export function TalentEmptyState(_{_onRetry}: {_onRetry?: () => void}) {_return (
    <EmptyState
      type="talent"
      action={onRetry ? { label: 'Reset Filters', _onClick: onRetry} : undefined}
    />
  );
}

export function EquipmentEmptyState(_{_onRetry}: {_onRetry?: () => void}) {_return (
    <EmptyState
      type="equipment"
      action={onRetry ? { label: 'Refresh Listings', _onClick: onRetry} : undefined}
    />
  );
}

export function SearchEmptyState(_{_onRetry}: {_onRetry?: () => void}) {_return (
    <EmptyState
      type="search"
      action={onRetry ? { label: 'Clear Search', _onClick: onRetry} : undefined}
    />
  );
}

export function NetworkErrorState(_{_onRetry}: {_onRetry?: () => void}) {_return (
    <EmptyState
      type="network"
      action={onRetry ? { label: 'Try Again', _onClick: onRetry} : undefined}
    />
  );
}

export function ServerErrorState(_{_onRetry}: {_onRetry?: () => void}) {_return (
    <EmptyState
      type="error"
      action={onRetry ? { label: 'Retry', _onClick: onRetry} : undefined}
    />
  );
} 