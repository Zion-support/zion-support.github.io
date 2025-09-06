
import * as React from 'react'
import * as React from 'react'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import {
  RefreshCw,
  Wifi,
  Server,
  ShoppingCart,
  Users,
  Wrench,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components / ui / button';
import Link from 'next / link';
import { use_translation } from 'react - i18next';
export interface EmptyStateProps {
  type: 'products' | 'categories' | 'talent' | 'equipment' | 'search' | 'error' | 'network' | 'loading';
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void
  }
  icon?: React.ReactNode
    onClick: () => void;
  },;
  icon?: React.ReactNode;
}




>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      {type === 'error' && (
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <p>If this issue continues, please contact our support team.</p>
        </div>
      )}

      {type === 'network' && (
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <p>

  )
export function CategoriesEmptyState({ onRetry }: { onRetry?: () => void }) {


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

=======
        label: isAuthenticated ? 'Add Product' : 'Login to Add Product'
        onClick: onAddProduct
      }
    : onRetry
      ? { label: 'Try Again', onClick: onRetry }
      : undefined
  const customDescription = isAuthenticated
    ? "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or add your own!"
    : "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or log in to add your own!"
      />
<<<<<<< HEAD
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
<<<<<<< HEAD




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
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
