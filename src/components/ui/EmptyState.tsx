=======
import { Button } from './button';
interface EmptyStateProps {;

=======
import { Package, RefreshCw } from 'lucide-react'
import { Button } from './button';
interface EmptyStateProps {

  text?: string;
  description?: string;
  onRetry?: () => void;
  showRetry?: boolean;

export function EmptyState({
  text = 'No items available'
  description
  onRetry
export function EmptyState({
  text = "No items available"
  description
  onRetry
  showRetry = false
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

import { Package, RefreshCw } from 'lucide-react';
import { Button } from './button',;
interface EmptyStateProps {;
  text?: string,;
  description?: string,;
  onRetry?: () => void,;
  showRetry?: boolean,;
  icon?: React.ReactNode;
}

export function EmptyState({ 
  text = "No items available",
  description,
  onRetry,
  showRetry = false,
