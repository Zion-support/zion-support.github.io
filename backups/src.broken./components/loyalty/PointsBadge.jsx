import React, { useState } from 'react';
import { Gift } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export default function PointsBadge() {
  const { user } = useAuth();
  const [points] = useState(user?.points || 0);

  return (
    <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full">
      <Gift className="h-4 w-4" />
      <span className="font-semibold">{points} points</span>
    </div>
  );
}