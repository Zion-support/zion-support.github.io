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
  }
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
}
