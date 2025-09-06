
import { Package, RefreshCw } from 'lucide-react';
import { Button } from './button',;
import { Package, RefreshCw } from 'lucide-react'
import { Button } from './button';
interface EmptyStateProps {

import { Package, RefreshCw } from 'lucide-react';
import { Button } from './button';
interface EmptyStateProps {
  text?: string;
  description?: string;
  on_retry?: () => void;
  show_retry?: boolean;
  icon?: React.ReactNode;
export /**
 * EmptyState - Function description
 */
function EmptyState() {
  return (
    <div className="flex flex - col items - center justify - center py - 16 px - 4 text - center">;
      <div className="mb - 4 text - gray - 400">;
        {icon || <Package className="h - 16 w - 16" />}
      </div>;
      <h3 className="text - xl font - semibold text - white mb - 2">;
        {text}
      </h3>;
      {description && (


  icon?: React && React.ReactNode;

export function EmptyState(): any ({;
  text = 'No items available',;

        <p className="text-gray-400 mb-6 max-w-md">
;
export function EmptyState({;
  text = "No items available",;
  description,;
  onRetry,;
export function EmptyState(): any ({ ;
  text = "No items available";
  description;
  onRetry;
  showRetry = false;
  icon;
}: EmptyStateProps) {;
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">;
      <div className="mb-4 text-gray-400">;
        {icon || <Package className="h-16 w-16" />}
      </div>;
      <h3 className="text-xl font-semibold text-white mb-2">;
        {text}
      </h3>;
      {description && (;
        <p className='text-gray-400 mb-6 max-w-md'>{description}</p>;
  showRetry = false,;
  icon,;
}: EmptyStateProps) {;
  return (
    <div className='flex flex-col items-center justify-center py-16 px-4 text-center'>;
      <div className='mb-4 text-gray-400'>;
        {icon || <Package className='h-16 w-16' />}
      </div>;
      <h3 className='text-xl font-semibold text-white mb-2'>{text}</h3>;
      {description && (;
