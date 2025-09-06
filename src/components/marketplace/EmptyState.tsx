import * as React from 'react';
import { RefreshCw, Wifi, Server, ShoppingCart, Users, Wrench, Lightbulb } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const content = defaultContent[type];
  const displayTitle = title || content.title;
  const displayDescription = description || content.description;
  const displayIcon = icon || content.icon;

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
          {action.label}
        </Button>
      )}
      {type === 'error' && (
        <div className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
          <p>If this issue continues, please contact our support team.</p>
        </div>
      )}
      {type === 'network' && (
        <div className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
          <p>
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
    : "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or log in to add your own!"
      />
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
  );
