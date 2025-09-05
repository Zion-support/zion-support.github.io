<<<<<<< HEAD
import * as React from 'react',
import { RefreshCw, Wifi, Server, ShoppingCart, Users, Wrench, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button',
import Link from 'next/link',
import { useTranslation } from 'react-i18next',
export interface EmptyStateProps {
  type: 'products' | 'categories' | 'talent' | 'equipment' | 'search' | 'error' | 'network' | 'loading',
  title?: string,
  description?: string,
  action?: {
    label: string,
    onClick: () => void
  },
  icon?: React.ReactNode
}

const defaultContent = {
  products: {
    icon: <ShoppingCart className=&quot;w-16 h-16 text-gray-400&quot; />,
    title: 'No Products Available',
    description: 'We\'re loading our marketplace products. If this persists, there might be a connection issue. Try refreshing the page or check back soon for exciting new offerings!'},
  categories: {
    icon: <Lightbulb className=&quot;w-16 h-16 text-gray-400&quot; />,
    title: 'No Categories Found',
    description: 'Categories are being organized. Please try refreshing the page or come back later.'},
  talent: {
    icon: <Users className=&quot;w-16 h-16 text-gray-400&quot; />,
    title: 'No Talent Profiles',
    description: 'No talent profiles match your criteria. Try adjusting your filters or search terms.'},
  equipment: {
    icon: <Wrench className=&quot;w-16 h-16 text-gray-400&quot; />,
    title: 'No Equipment Available',
    description: 'Equipment listings are being updated. Please check back soon for the latest hardware offerings.'},
  search: {
    icon: <ShoppingCart className=&quot;w-16 h-16 text-gray-400&quot; />,
    title: 'No Results Found',
    description: 'Try adjusting your search terms or browse our categories to discover what we have available.'},
  error: {
    icon: <Server className=&quot;w-16 h-16 text-red-400&quot; />,
    title: 'Unable to Load Data',
    description: 'We\'re experiencing technical difficulties. Our team has been notified and is working on a fix.'},
  network: {
    icon: <Wifi className=&quot;w-16 h-16 text-orange-400&quot; />,
    title: 'Connection Issue',
    description: 'Please check your internet connection and try again. If the problem persists, our servers might be temporarily unavailable.'},
  loading: {
    icon: <RefreshCw className=&quot;w-16 h-16 text-blue-400 animate-spin&quot; />,
    title: 'Loading...',
    description: 'We\'re fetching the latest data for you. This should only take a moment.'}},

export function EmptyState({
  type,
  title,
  description,
  action,
  icon
}: EmptyStateProps) {
  const { t } = useTranslation(),
  const content = defaultContent[type],
  const displayTitle = title || content.title,
  const displayDescription = description || content.description,
  const displayIcon = icon || content.icon,

  return (
    <div className=&quot;flex flex-col items-center justify-center py-12 px-6 text-center&quot;>
      <div className=&quot;mb-4&quot;>
        {displayIcon}
      </div>
      
      <h3 className=&quot;text-xl font-semibold text-gray-900 dark:text-white mb-2&quot;>
        {displayTitle}
      </h3>
      
      <p className=&quot;text-gray-600 dark:text-gray-400 max-w-md mb-6&quot;>
        {displayDescription}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </p>
      
      {_action && (
        <Button
          onClick={action.onClick}
          variant=&quot;outline&quot;
          className=&quot;flex items-center gap-2&quot;
        >
<<<<<<< HEAD
          <RefreshCw className=&quot;w-4 h-4&quot; />
          {action.label}
        </Button>
      )}
      
      {type === 'error' && (
        <div className=&quot;mt-4 text-sm text-gray-500 dark:text-gray-400&quot;>
          <p>If this issue continues, please contact our support team.</p>
        </div>
      )}
      
      {type === 'network' && (
        <div className=&quot;mt-4 text-sm text-gray-500 dark:text-gray-400&quot;>
          <p>
            {t('general.check_status_page')}
            {&quot; &quot;}
            <Link href=&quot;https://status.zion.ai&quot; className=&quot;underline&quot;>
              {t('general.status_page')}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  )
}

// Specific empty state variants for quick use
<<<<<<< HEAD
export function ProductsEmptyState({
  onRetry,
  onAddProduct,
  isAuthenticated = false
}: {
  onRetry?: () => void,
  onAddProduct?: () => void,
  isAuthenticated?: boolean
}) {
  const action = onAddProduct
=======
export function ProductsEmptyState(_{_onRetry, _onAddProduct, _isAuthenticated = false}: {_onRetry?: () => void;
  onAddProduct?: () => void;
  isAuthenticated?: boolean;}) {_const _action = onAddProduct
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    ? { 
        label: isAuthenticated ? 'Add Product' : 'Login to Add Product', _onClick: onAddProduct}
    : onRetry
<<<<<<< HEAD
    ? { label: 'Try Again', onClick: onRetry }
    : undefined,

  const customDescription = isAuthenticated 
<<<<<<< HEAD
=======
    ? {_label: 'Try Again', _onClick: onRetry}
    : undefined;

  const _customDescription = isAuthenticated 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    ? "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or add your own!"
    : "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or log in to add your own!",
=======
    ? &quot;We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or add your own!&quot;
    : &quot;We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or log in to add your own!&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <EmptyState 
<<<<<<< HEAD
      type=&quot;products&quot; 
      action={action}
      description={customDescription}
=======
      type="products" 
      action={_action}
      description={_customDescription}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
}

export function CategoriesEmptyState(_{_onRetry}: {_onRetry?: () => void}) {_return (
    <EmptyState
<<<<<<< HEAD
      type=&quot;categories&quot;
      action={onRetry ? { label: 'Refresh Categories', onClick: onRetry } : undefined}
=======
      type="categories"
      action={onRetry ? { label: 'Refresh Categories', _onClick: onRetry} : undefined}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
}

export function TalentEmptyState(_{_onRetry}: {_onRetry?: () => void}) {_return (
    <EmptyState
<<<<<<< HEAD
      type=&quot;talent&quot;
      action={onRetry ? { label: 'Reset Filters', onClick: onRetry } : undefined}
=======
      type="talent"
      action={onRetry ? { label: 'Reset Filters', _onClick: onRetry} : undefined}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
}

export function EquipmentEmptyState(_{_onRetry}: {_onRetry?: () => void}) {_return (
    <EmptyState
<<<<<<< HEAD
      type=&quot;equipment&quot;
      action={onRetry ? { label: 'Refresh Listings', onClick: onRetry } : undefined}
=======
      type="equipment"
      action={onRetry ? { label: 'Refresh Listings', _onClick: onRetry} : undefined}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
}

export function SearchEmptyState(_{_onRetry}: {_onRetry?: () => void}) {_return (
    <EmptyState
<<<<<<< HEAD
      type=&quot;search&quot;
      action={onRetry ? { label: 'Clear Search', onClick: onRetry } : undefined}
=======
      type="search"
      action={onRetry ? { label: 'Clear Search', _onClick: onRetry} : undefined}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
}

export function NetworkErrorState(_{_onRetry}: {_onRetry?: () => void}) {_return (
    <EmptyState
<<<<<<< HEAD
      type=&quot;network&quot;
      action={onRetry ? { label: 'Try Again', onClick: onRetry } : undefined}
=======
      type="network"
      action={onRetry ? { label: 'Try Again', _onClick: onRetry} : undefined}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
}

export function ServerErrorState(_{_onRetry}: {_onRetry?: () => void}) {_return (
    <EmptyState
<<<<<<< HEAD
      type=&quot;error&quot;
      action={onRetry ? { label: 'Retry', onClick: onRetry } : undefined}
=======
      type="error"
      action={onRetry ? { label: 'Retry', _onClick: onRetry} : undefined}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
} 