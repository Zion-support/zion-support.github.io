import React, { useState } from 'react';
import { Gift, RefreshCw } from 'lucide-react';


import { usePoints } from '@/hooks/usePoints';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { LoginModal } from '@/components/auth/LoginModal';
import { Button } from '@/components/ui/Button';
import {logErrorToProduction} from '@/utils/productionLogger';

export function PointsBadge() {

  const { isAuthenticated } = useAuth();
  const { ledger, balance, loading, fetchLedger } = usePoints();
  const [loginOpen, setLoginOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const points = balance;

  const breakdown = ledger.reduce(
    (acc, e) => {
      if (e.reason === 'purchase') acc.purchase += e.delta;
      if (e.reason === 'post') acc.post += e.delta;
      if (e.reason === 'referral') acc.referral += e.delta;
      return acc;
    },
    { purchase: 0, post: 0, referral: 0 }
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setLoginOpen(true);
    }
  };

  const handleRefresh = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) return;
    
    setIsRefreshing(true);
    try {
      await fetchLedger();
    } catch (error) {
      logErrorToProduction('Failed to refresh points:', { data: error });
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/wallet"
            title="View wallet"
            className="flex items-center gap-1 text-xs text-muted-foreground"
          >
            <Gift className="h-4 w-4" />
            <span>{`${points} pts`}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm font-medium">Point Breakdown</p>
          <ul className="text-xs mt-1 space-y-0.5">
            <li>Purchases: {breakdown.purchase}</li>
            <li>Posts: {breakdown.post}</li>
            <li>Referrals: {breakdown.referral}</li>
          </ul>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
