<<<<<<< HEAD
import React, { useState } from 'react',
import { Gift, RefreshCw } from 'lucide-react'
import { usePoints } from '@/hooks/usePoints',
import { useAuth } from '@/hooks/useAuth',
import Link from 'next/link',
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',
import { LoginModal } from '@/components/auth/LoginModal',
import { Button } from '@/components/ui/button',
import {logErrorToProduction} from '@/utils/productionLogger',
export function PointsBadge() {

  const { isAuthenticated } = useAuth(),
  const { ledger, balance, loading, fetchLedger } = usePoints(),
  const [loginOpen, setLoginOpen] = useState(false),
  const [isRefreshing, setIsRefreshing] = useState(false),

  const points = balance,

  const breakdown = ledger.reduce(
    (acc, e) => {
      if (e.reason === 'purchase') acc.purchase += e.delta,
      if (e.reason === 'post') acc.post += e.delta,
      if (e.reason === 'referral') acc.referral += e.delta,
      return acc
    },
    { purchase: 0, post: 0, referral: 0 }
  ),

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isAuthenticated) {
      e.preventDefault(),
      setLoginOpen(true)
    }
  },

  const handleRefresh = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(),
    e.stopPropagation(),
    if (!isAuthenticated) return,
=======
import React, {_useState} from 'react';
import Link from 'next/link';

export function PointsBadge() {_const { isAuthenticated} = useAuth();
  const {_ledger, _balance, _loading, _fetchLedger} = usePoints();
  const [loginOpen, setLoginOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const _points = balance;

  const _breakdown = ledger.reduce(_(acc, _e) => {_if (e.reason === 'purchase') acc.purchase += e.delta;
      if (e.reason === 'post') acc.post += e.delta;
      if (e.reason === 'referral') acc.referral += e.delta;
      return acc;},
    {_purchase: 0, _post: 0, _referral: 0}
  );

  const _handleClick = (_e: React.MouseEvent<HTMLAnchorElement>) => {_if (!isAuthenticated) {
      e.preventDefault();
      setLoginOpen(true);}
  };

  const _handleRefresh = async (_e: React.MouseEvent<HTMLButtonElement>) => {_e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsRefreshing(true),
    try {
<<<<<<< HEAD
      await fetchLedger()
    } catch (error) {
      logErrorToProduction('Failed to refresh points:', { data: error })
    } finally {
      setIsRefreshing(false)
    }
  },
=======
      await fetchLedger();} catch (error) {_logErrorToProduction('Failed to refresh points:', _{ data: error});
    } finally {_setIsRefreshing(false);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <TooltipProvider>
      <div className=&quot;flex items-center gap-1&quot;>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
<<<<<<< HEAD
              href={isAuthenticated ? &quot;/points&quot; : &quot;#&quot;}
              onClick={handleClick}
              title={isAuthenticated ? &quot;View points&quot; : &quot;Earn points by participating&quot;}
              className=&quot;flex items-center gap-1 text-xs text-muted-foreground transition-transform active:scale-95&quot;
            >
              <Gift className=&quot;h-4 w-4&quot; aria-hidden=&quot;true&quot; />
              <span>{`${points} pts`}</span>
=======
              href={_isAuthenticated ? "/points" : "#"}
              onClick={_handleClick}
              title={_isAuthenticated ? "View points" : "Earn points by participating"}
              className="flex items-center gap-1 text-xs text-muted-foreground transition-transform active:scale-95"
            >
              <Gift className="h-4 w-4" aria-hidden="true" />
              <span>{_`${points} pts`}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            {_isAuthenticated ? (
              <>
                <p className=&quot;text-sm font-medium&quot;>Point Breakdown</p>
                {points === 0 && (
                  <p className=&quot;text-xs text-muted-foreground&quot;>
                    You haven't earned any points yet.
                  </p>
                )}
<<<<<<< HEAD
                <ul className=&quot;text-xs mt-1 space-y-0.5&quot;>
                  <li>Purchases: {breakdown.purchase}</li>
                  <li>Posts: {breakdown.post}</li>
                  <li>Referrals: {breakdown.referral}</li>
=======
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>Purchases: {_breakdown.purchase}</li>
                  <li>Posts: {_breakdown.post}</li>
                  <li>Referrals: {_breakdown.referral}</li>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </ul>
                <p className=&quot;text-xs mt-2 text-muted-foreground border-t pt-1&quot;>
                  Click to view full rewards program
                </p>
              </>
            ) : (
              <>
                <p className=&quot;text-sm font-medium&quot;>Zion Rewards Program</p>
                <p className=&quot;text-xs mt-1 text-muted-foreground&quot;>
                  • Sign up: 50 pts<br/>
                  • First purchase: 100 pts<br/>
                  • Community posts: 25 pts each<br/>
                  • Refer friends: 200 pts each
                </p>
                <p className=&quot;text-xs mt-2 text-muted-foreground border-t pt-1&quot;>
                  Click to learn more and join!
                </p>
              </>
            )}
          </TooltipContent>
        </Tooltip>
        
        {_isAuthenticated && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant=&quot;ghost&quot;
                size=&quot;sm&quot;
                onClick={handleRefresh}
<<<<<<< HEAD
                disabled={isRefreshing || loading}
                className=&quot;p-1 h-6 w-6 text-muted-foreground hover:text-foreground&quot;
                aria-label=&quot;Refresh points&quot;
              >
                <RefreshCw
                  className={`h-3 w-3 ${isRefreshing || loading ? 'animate-spin' : ''}`}
                  aria-hidden=&quot;true&quot;
=======
                disabled={_isRefreshing || loading}
                className="p-1 h-6 w-6 text-muted-foreground hover:text-foreground"
                aria-label="Refresh points"
              >
                <RefreshCw
                  className={_`h-3 w-3 ${isRefreshing || loading ? 'animate-spin' : ''}`}
                  aria-hidden="true"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className=&quot;text-sm&quot;>Refresh points balance</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      
      {_!isAuthenticated && (
        <LoginModal isOpen={loginOpen} onOpenChange={_setLoginOpen} />
      )}
    </TooltipProvider>
  )
}
