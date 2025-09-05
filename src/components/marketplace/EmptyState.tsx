import * as React from 'react',;
import { RefreshCw, Wifi, Server, ShoppingCart, Users, Wrench, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import Link from 'next/link',;
import { useTranslation } from 'react-i18next',;
export interface EmptyStateProps {;
  type: 'products' | 'categories' | 'talent' | 'equipment' | 'search' | 'error' | 'network' | 'loading',;
  title?: string,;
  description?: string,;
  action?: {;
    label: string,;
    onClick: () => void;
  },;
  icon?: React.ReactNode;
}
<<<<<<< HEAD

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
=======
;
const defaultContent = {;
  products: {;
    icon: <ShoppingCart className="w-16 h-16 text-gray-400" />,;
    title: 'No Products Available',;
    description: 'We\'re loading our marketplace products. If this persists, there might be a connection issue. Try refreshing the page or check back soon for exciting new offerings!'},;
  categories: {;
    icon: <Lightbulb className="w-16 h-16 text-gray-400" />,;
    title: 'No Categories Found',;
    description: 'Categories are being organized. Please try refreshing the page or come back later.'},;
  talent: {;
    icon: <Users className="w-16 h-16 text-gray-400" />,;
    title: 'No Talent Profiles',;
    description: 'No talent profiles match your criteria. Try adjusting your filters or search terms.'},;
  equipment: {;
    icon: <Wrench className="w-16 h-16 text-gray-400" />,;
    title: 'No Equipment Available',;
    description: 'Equipment listings are being updated. Please check back soon for the latest hardware offerings.'},;
  search: {;
    icon: <ShoppingCart className="w-16 h-16 text-gray-400" />,;
    title: 'No Results Found',;
    description: 'Try adjusting your search terms or browse our categories to discover what we have available.'},;
  error: {;
    icon: <Server className="w-16 h-16 text-red-400" />,;
    title: 'Unable to Load Data',;
    description: 'We\'re experiencing technical difficulties. Our team has been notified and is working on a fix.'},;
  network: {;
    icon: <Wifi className="w-16 h-16 text-orange-400" />,;
    title: 'Connection Issue',;
    description: 'Please check your internet connection and try again. If the problem persists, our servers might be temporarily unavailable.'},;
  loading: {;
    icon: <RefreshCw className="w-16 h-16 text-blue-400 animate-spin" />,;
    title: 'Loading...',;
    description: 'We\'re fetching the latest data for you. This should only take a moment.'}},;
export function EmptyState({;
  type,;
  title,;
  description,;
  action,;
  icon;
}: EmptyStateProps) {;
  const { t } = useTranslation(),;
  const content = defaultContent[type],;
  const displayTitle = title || content.title,;
  const displayDescription = description || content.description,;
  const displayIcon = icon || content.icon,;
  return (;
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">;
      <div className="mb-4">;
        {displayIcon}
      </div>;
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">;
        {displayTitle}
      </h3>;
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        {displayDescription}
      </p>;
      {action && (;
        <Button;
          onClick={action.onClick}
<<<<<<< HEAD
          variant=&quot;outline&quot;
          className=&quot;flex items-center gap-2&quot;
        >
          <RefreshCw className=&quot;w-4 h-4&quot; />
=======
          variant="outline";
          className="flex items-center gap-2";
        >;
          <RefreshCw className="w-4 h-4" />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          {action.label}
        </Button>;
      )}
<<<<<<< HEAD
      
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
=======
;
      {type === 'error' && (;
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">;
          <p>If this issue continues, please contact our support team.</p>;
        </div>;
      )}
;
      {type === 'network' && (;
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">;
          <p>;
            {t('general.check_status_page')}
            {" "}
            <Link href="https://status.zion.ai" className="underline">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              {t('general.status_page')}
            </Link>;
            .;
          </p>;
        </div>;
      )}
    </div>;
  );
}
;
// Specific empty state variants for quick use;
export function ProductsEmptyState({;
  onRetry,;
  onAddProduct,;
  isAuthenticated = false;
}: {;
  onRetry?: () => void,;
  onAddProduct?: () => void,;
  isAuthenticated?: boolean;
}) {;
  const action = onAddProduct;
    ? {;
        label: isAuthenticated ? 'Add Product' : 'Login to Add Product',;
        onClick: onAddProduct;
      }
    : onRetry;
    ? { label: 'Try Again', onClick: onRetry }
<<<<<<< HEAD
    : undefined,

  const customDescription = isAuthenticated 
<<<<<<< HEAD
    ? "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or add your own!"
    : "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or log in to add your own!",
=======
    ? &quot;We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or add your own!&quot;
    : &quot;We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or log in to add your own!&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <EmptyState 
      type=&quot;products&quot; 
=======
    : undefined;
  const customDescription = isAuthenticated;
    ? "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or add your own!";
    : "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or log in to add your own!";
  return (;
    <EmptyState;
      type="products";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      action={action}
      description={customDescription}
    />;
  );
}
<<<<<<< HEAD

export function CategoriesEmptyState({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      type=&quot;categories&quot;
=======
;
export function CategoriesEmptyState({ onRetry }: { onRetry?: () => void }) {;
  return (;
    <EmptyState;
      type="categories";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      action={onRetry ? { label: 'Refresh Categories', onClick: onRetry } : undefined}
    />;
  );
}
<<<<<<< HEAD

export function TalentEmptyState({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      type=&quot;talent&quot;
=======
;
export function TalentEmptyState({ onRetry }: { onRetry?: () => void }) {;
  return (;
    <EmptyState;
      type="talent";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      action={onRetry ? { label: 'Reset Filters', onClick: onRetry } : undefined}
    />;
  );
}
<<<<<<< HEAD

export function EquipmentEmptyState({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      type=&quot;equipment&quot;
=======
;
export function EquipmentEmptyState({ onRetry }: { onRetry?: () => void }) {;
  return (;
    <EmptyState;
      type="equipment";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      action={onRetry ? { label: 'Refresh Listings', onClick: onRetry } : undefined}
    />;
  );
}
<<<<<<< HEAD

export function SearchEmptyState({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      type=&quot;search&quot;
=======
;
export function SearchEmptyState({ onRetry }: { onRetry?: () => void }) {;
  return (;
    <EmptyState;
      type="search";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      action={onRetry ? { label: 'Clear Search', onClick: onRetry } : undefined}
    />;
  );
}
<<<<<<< HEAD

export function NetworkErrorState({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      type=&quot;network&quot;
=======
;
export function NetworkErrorState({ onRetry }: { onRetry?: () => void }) {;
  return (;
    <EmptyState;
      type="network";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      action={onRetry ? { label: 'Try Again', onClick: onRetry } : undefined}
    />;
  );
}
<<<<<<< HEAD

export function ServerErrorState({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      type=&quot;error&quot;
=======
;
export function ServerErrorState({ onRetry }: { onRetry?: () => void }) {;
  return (;
    <EmptyState;
      type="error";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      action={onRetry ? { label: 'Retry', onClick: onRetry } : undefined}
    />;
  );
} ;