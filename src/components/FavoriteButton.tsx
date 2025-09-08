import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface FavoriteButtonProps {
  itemId: string
  isFavorited?: boolean
  onToggle?: (itemId: string, isFavorited: boolean) => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function FavoriteButton({
  itemId,
  isFavorited: initialFavorited = false,
  onToggle,
  className,
  size = 'md'
}: FavoriteButtonProps) {
  const [isFavorited, setIsFavorited] = useState(initialFavorited)

  const handleClick = () => {
    const newFavorited = !isFavorited
    setIsFavorited(newFavorited)
    onToggle?.(itemId, newFavorited)
  }

  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10'
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        sizeClasses[size],
        isFavorited && 'bg-red-50 border-red-200 text-red-600',
        className
      )}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg
        className={cn(
          'h-4 w-4',
          size === 'sm' && 'h-3 w-3',
          size === 'lg' && 'h-5 w-5'
        )}
        fill={isFavorited ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  )
}