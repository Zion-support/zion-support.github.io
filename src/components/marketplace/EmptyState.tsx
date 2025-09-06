<<<<<<< HEAD
import * as React from 'react';
import { RefreshCw, Wifi, Server, ShoppingCart, Users, Wrench, Lightbulb } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import * as React from 'react'
import {
  RefreshCw
  Wifi
  Server
  ShoppingCart
  Users
  Wrench
  Lightbulb
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export interface EmptyStateProps {
  type: 'products' | 'categories' | 'talent' | 'equipment' | 'search' | 'error' | 'network' | 'loading';
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void
  }
  icon?: React.ReactNode
<<<<<<< HEAD

const defaultContent = {
  products: {
    icon: <ShoppingCart className='w-16 h-16 text-gray-400' />
    title: 'No Products Available'
    description:
      "We're loading our marketplace products. If this persists, there might be a connection issue. Try refreshing the page or check back soon for exciting new offerings!"
  }
  categories: {
    icon: <Lightbulb className='w-16 h-16 text-gray-400' />
    title: 'No Categories Found'
    description:
      'Categories are being organized. Please try refreshing the page or come back later.'
  }
  talent: {
    icon: <Users className='w-16 h-16 text-gray-400' />
    title: 'No Talent Profiles'
    description:
      'No talent profiles match your criteria. Try adjusting your filters or search terms.'
  }
  equipment: {
    icon: <Wrench className='w-16 h-16 text-gray-400' />
    title: 'No Equipment Available'
    description:
      'Equipment listings are being updated. Please check back soon for the latest hardware offerings.'
  }
  search: {
    icon: <ShoppingCart className='w-16 h-16 text-gray-400' />
    title: 'No Results Found'
    description:
      'Try adjusting your search terms or browse our categories to discover what we have available.'
  }
  error: {
    icon: <Server className='w-16 h-16 text-red-400' />
    title: 'Unable to Load Data'
    description:
      "We're experiencing technical difficulties. Our team has been notified and is working on a fix."
  }
  network: {
    icon: <Wifi className='w-16 h-16 text-orange-400' />
    title: 'Connection Issue'
    description:
      'Please check your internet connection and try again. If the problem persists, our servers might be temporarily unavailable.'
  }
  loading: {
    icon: <RefreshCw className='w-16 h-16 text-blue-400 animate-spin' />
    title: 'Loading...'
    description:
<<<<<<< HEAD
      "We're fetching the latest data for you. This should only take a moment."
  }
}
=======
      "We're fetching the latest data for you. This should only take a moment.",
  },
};
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function EmptyState({
  type
  title
  description
  action
  icon
}: EmptyStateProps) {
<<<<<<< HEAD
  const { t } = useTranslation();  const content = defaultContent[type]
  const content = defaultContent[type]
  const displayTitle = title |content.title
  const displayDescription = description |content.description
  const displayIcon = icon |content.icon
=======
  const { t } = useTranslation();
  const content = defaultContent[type];
  const displayTitle = title || content.title;
  const displayDescription = description || content.description;
  const displayIcon = icon || content.icon;

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  return (
    <div className='flex flex-col items-center justify-center py-12 px-6 text-center'>
      <div className='mb-4'>{displayIcon}</div>
      <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
        {displayTitle}
      </h3>
      <p className='text-gray-600 dark:text-gray-400 max-w-md mb-6'>
        {displayDescription}
      </p>
      {action && (
        <Button
          onClick={action.onClick}
          variant='outline'
          className='flex items-center gap-2'        >
          <RefreshCw className='w-4 h-4' />
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    description:
      "We're fetching the latest data for you. This should only take a moment.",
  },
}
export function EmptyState({
  type,
  title,
  description,;
  action,;
  icon;
}: EmptyStateProps) {;
  const { t } = useTranslation();  const content = defaultContent[type]
  const content = defaultContent[type]
  const displayTitle = title || content.title
  const displayDescription = description || content.description
  const displayIcon = icon || content.icon
  return (
    <div className='flex flex-col items-center justify-center py-12 px-6 text-center'>
      <div className='mb-4'>{displayIcon}</div>
      <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
        {displayTitle}
      </h3>
      <p className='text-gray-600 dark:text-gray-400 max-w-md mb-6'>
        {displayDescription}
      </p>
      {action && (
        <Button
          onClick={action.onClick}
          variant='outline'
          className='flex items-center gap-2'        >
          <RefreshCw className='w-4 h-4' />
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      <div className="mb-4">
        {displayIcon}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {displayTitle}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
        {displayDescription}
      </p>;
      {action && (;
        <Button;
          onClick={action.onClick}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {action.label}
        </Button>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

=======
      
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {type === 'error' && (
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <p>If this issue continues, please contact our support team.</p>
        </div>
      )}
<<<<<<< HEAD
=======
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      {type === 'network' && (
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <p>
<<<<<<< HEAD
            {t('general.check_status_page')}{' '}
            <Link href='https://status.zion.ai' className='underline'>
              {t('general.status_page')}
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  )
// Specific empty state variants for quick use
}

export function ProductsEmptyState({
  onRetry
  onAddProduct
  isAuthenticated = false
}: {
  onRetry?: () => void
  onAddProduct?: () => void
  isAuthenticated?: boolean }) {
  const action = onAddProduct
    ? {
        label: isAuthenticated ? 'Add Product' : 'Login to Add Product'
        onClick: onAddProduct
      }
    : onRetry
      ? { label: 'Try Again', onClick: onRetry }
      : undefined
  const customDescription = isAuthenticated
    ? "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or add your own!"
<<<<<<< HEAD
    : "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or log in to add your own!"
      />
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
=======
    : "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or log in to add your own!";

    />
  );
}

export function CategoriesEmptyState({ onRetry }: { onRetry?: () => void }) {

    />
=======
}
}
}
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
        onClick: onAddProduct;
      }
    : onRetry;
    ? { label: 'Try Again', onClick: onRetry }
    : undefined,

  const customDescription = isAuthenticated 
    ? "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or add your own!"
    : "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or log in to add your own!",

  return (
    <EmptyState 
      type="products" 
    : undefined;
  const customDescription = isAuthenticated;
    ? "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or add your own!";
    : "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or log in to add your own!";
  return (;
    <EmptyState;
      type="products";
      action={action}
      description={customDescription}
    />;
  );
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  )
export function CategoriesEmptyState({ onRetry }: { onRetry?: () => void }) {
<<<<<<< HEAD
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
}
=======
  return (
    <EmptyState
      type="categories"
      action={onRetry ? { label: 'Refresh Categories', onClick: onRetry } : undefined}
    />;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  );
}

export function TalentEmptyState({ onRetry }: { onRetry?: () => void }) {
<<<<<<< HEAD

    />
=======
  return (
    <EmptyState
      type="talent"
      action={onRetry ? { label: 'Reset Filters', onClick: onRetry } : undefined}
    />;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  );
}

export function EquipmentEmptyState({ onRetry }: { onRetry?: () => void }) {
<<<<<<< HEAD

    />
=======
  return (
    <EmptyState
      type="equipment"
      action={onRetry ? { label: 'Refresh Listings', onClick: onRetry } : undefined}
    />;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  );
}

export function SearchEmptyState({ onRetry }: { onRetry?: () => void }) {
<<<<<<< HEAD

    />
=======
  return (
    <EmptyState
      type="search"
      action={onRetry ? { label: 'Clear Search', onClick: onRetry } : undefined}
    />;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  );
}

export function NetworkErrorState({ onRetry }: { onRetry?: () => void }) {
<<<<<<< HEAD

    />
=======
  return (
    <EmptyState
      type="network"
      action={onRetry ? { label: 'Try Again', onClick: onRetry } : undefined}
    />;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  );
}

export function ServerErrorState({ onRetry }: { onRetry?: () => void }) {
<<<<<<< HEAD

    />
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  return (
    <EmptyState
      type="error"
      action={onRetry ? { label: 'Retry', onClick: onRetry } : undefined}
    />;
  );
} ;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
