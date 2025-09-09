import React, { useState } from 'react';
import { Gift } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export default function PointsBadge() {
  const { user } = useAuth();
  const [points] = useState(user?.points || 0);

  return (
    <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full">
      <Gift className="w-4 h-4" />
      <span className="text-sm font-medium">{points} points</span>
    </div>
  );
}