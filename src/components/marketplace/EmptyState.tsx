import * as React from 'react'
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
  icon?: React.ReactNodeimport * as React from 'react',;
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
          {action.label}
        </Button>
      )}
      
      {type === 'error' && (
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <p>If this issue continues, please contact our support team.</p>
        </div>
      )}

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
<<<<<<< HEAD