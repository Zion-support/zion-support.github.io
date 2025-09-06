
import * as React from 'react';
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

const defaultContent = {
  products: {
    icon: <ShoppingCart className="w-16 h-16 text-gray-400" />,
    title: 'No Products Available',
    description: 'We\'re loading our marketplace products. If this persists, there might be a connection issue. Try refreshing the page or check back soon for exciting new offerings!'},
  categories: {
    icon: <Lightbulb className="w-16 h-16 text-gray-400" />,
    title: 'No Categories Found',
    description: 'Categories are being organized. Please try refreshing the page or come back later.'},
  talent: {
    icon: <Users className="w-16 h-16 text-gray-400" />,
    title: 'No Talent Profiles',
    description: 'No talent profiles match your criteria. Try adjusting your filters or search terms.'},
  equipment: {
    icon: <Wrench className="w-16 h-16 text-gray-400" />,
    title: 'No Equipment Available',
    description: 'Equipment listings are being updated. Please check back soon for the latest hardware offerings.'},
  search: {
    icon: <ShoppingCart className="w-16 h-16 text-gray-400" />,
    title: 'No Results Found',
    description: 'Try adjusting your search terms or browse our categories to discover what we have available.'},
  error: {
    icon: <Server className="w-16 h-16 text-red-400" />,
    title: 'Unable to Load Data',
    description: 'We\'re experiencing technical difficulties. Our team has been notified and is working on a fix.'},
  network: {
    icon: <Wifi className="w-16 h-16 text-orange-400" />,
    title: 'Connection Issue',
    description: 'Please check your internet connection and try again. If the problem persists, our servers might be temporarily unavailable.'},
  loading: {
    icon: <RefreshCw className="w-16 h-16 text-blue-400 animate-spin" />,
    title: 'Loading...',

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      {type === 'error' && (
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <p>If this issue continues, please contact our support team.</p>
        </div>
      )}

}: {
  onRetry?: () => void
  onAddProduct?: () => void
  isAuthenticated?: boolean }) {
  const action = onAddProduct
    ? {

      {type === 'error' && (;
        <div className='mt-4 text-sm text-gray-500 dark:text-gray-400'>;
          <p>If this issue continues, please contact our support team.</p>;
        </div>;
      )}

      {type === 'network' && (;
        <div className='mt-4 text-sm text-gray-500 dark:text-gray-400'>;
          <p>;
            {t('general && general.check_status_page')}{' '}
            <Link href='https://status && status.zion.ai' className='underline'>;
              {t('general && general.status_page')}

  )
export function CategoriesEmptyState({ onRetry }: { onRetry?: () => void }) {
      />
  )
export function TalentEmptyState({ onRetry }: { onRetry?: () => void }) {
      />
  )
export function EquipmentEmptyState({ onRetry }: { onRetry?: () => void }) {
      />
  )
export function SearchEmptyState({ onRetry }: { onRetry?: () => void }) {
      />
  )
export function NetworkErrorState({ onRetry }: { onRetry?: () => void }) {
      />
  )
export function ServerErrorState({ onRetry }: { onRetry?: () => void }) {
      />
  )
} 
};
;
}
}
}
}
}
}
}

            {t('general.check_status_page')}
            {" "}
            <Link href="https://status.zion.ai" className="underline">
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

  return (
    <EmptyState
      type="categories"
      action={onRetry ? { label: 'Refresh Categories', onClick: onRetry } : undefined}
    />;
  );
}

    />;
  );
}

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
