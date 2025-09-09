import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { HeartIcon } from '@/components/icons/index';

interface FavoriteButtonProps {
  isFavorited?: boolean;
  onToggle?: (isFavorited: boolean) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  count?: number;
  disabled?: boolean;
  'aria-label'?: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorited = false,
  onToggle,
  className,
  size = 'md',
  showCount = false,
  count = 0,
  disabled = false,
  'aria-label': ariaLabel = 'Toggle favorite',
}) => {
  const [internalFavorited, setInternalFavorited] = useState(isFavorited);
  const [internalCount, setInternalCount] = useState(count);

  const isCurrentlyFavorited = onToggle ? isFavorited : internalFavorited;
  const currentCount = onToggle ? count : internalCount;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (disabled) return;

    const newFavorited = !isCurrentlyFavorited;
    const newCount = newFavorited ? currentCount + 1 : Math.max(0, currentCount - 1);

    if (onToggle) {
      onToggle(newFavorited);
    } else {
      setInternalFavorited(newFavorited);
      setInternalCount(newCount);
    }
  };

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const iconSizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-pressed={isCurrentlyFavorited}
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
        sizeClasses[size],
        isCurrentlyFavorited
          ? 'text-red-500 hover:text-red-600 focus:ring-red-500'
          : 'text-gray-400 hover:text-red-500 focus:ring-gray-400',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      <HeartIcon
        className={cn(
          iconSizeClasses[size],
          isCurrentlyFavorited && 'fill-current'
        )}
      />
      {showCount && (
        <span className="ml-1 text-xs font-medium">
          {currentCount}
        </span>
      )}
    </button>
  );
};

export default FavoriteButton;