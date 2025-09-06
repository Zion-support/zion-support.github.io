import * as React from 'react';
import { RefreshCw, Wifi, Server, ShoppingCart, Users, Wrench, Lightbulb } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
export interface EmptyStateProps {
  type: 'products' | 'categories' | 'talent' | 'equipment' | 'search' | 'error' | 'network' | 'loading';
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void
  },
  icon?: React.ReactNode
}

const defaultContent = null;
  return (
    <EmptyState 
      type="products" 
      action={action}
      description={customDescription}
    />
  )
}

export function CategoriesEmptyState({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      type="categories"
      action={onRetry ? { label: 'Refresh Categories', onClick: onRetry } : undefined}
    />
  )
}

export function TalentEmptyState({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      type="talent"
      action={onRetry ? { label: 'Reset Filters', onClick: onRetry } : undefined}
    />
  )
}

export function EquipmentEmptyState({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      type="equipment"
      action={onRetry ? { label: 'Refresh Listings', onClick: onRetry } : undefined}
    />
  )
}

export function SearchEmptyState({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      type="search"
      action={onRetry ? { label: 'Clear Search', onClick: onRetry } : undefined}
    />
  )
}

export function NetworkErrorState({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      type="network"
      action={onRetry ? { label: 'Try Again', onClick: onRetry } : undefined}
    />
  )
}

export function ServerErrorState({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      type="error"
      action={onRetry ? { label: 'Retry', onClick: onRetry } : undefined}
    />
  )
} 