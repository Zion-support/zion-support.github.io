import React from 'react';
import { cn } from '@/lib/utils';

type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated';

interface ProfileBadgeProps {
  type: BadgeType;
  className?: string;
}

export function ProfileBadge({ type, className }: ProfileBadgeProps) {
  const badgeConfig = {
    verified: {
      icon: '✓',
      text: 'Verified',
      colors: 'bg-green-100 text-green-800'
    },
    featured: {
      icon: '⭐',
      text: 'Featured',
      colors: 'bg-yellow-100 text-yellow-800'
    },
    new: {
      icon: '🆕',
      text: 'New',
      colors: 'bg-blue-100 text-blue-800'
    },
    'top-rated': {
      icon: '🏆',
      text: 'Top Rated',
      colors: 'bg-purple-100 text-purple-800'
    }
  };

  const { icon, text, colors } = badgeConfig[type];

  return (
    <div className={cn("flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium", colors, className)}>
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}