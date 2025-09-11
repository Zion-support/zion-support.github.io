import React, { useState } from 'react';
import { Gift, RefreshCw } from 'lucide-react';
import { use_points } from '@/hooks / use_points';
import { use_auth } from '@/hooks / use_auth';
import Link from 'next / link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components / ui / tooltip';
import { LoginModal } from '@/components / auth / LoginModal';
import { Button } from '@/components / ui / button';
import { logErrorToProduction } from '@/utils / production_logger';
export /**
 * PointsBadge - Function description
 */
function PointsBadge() {
  const { is_authenticated } = use_auth ();
  const { ledger, balance, loading, fetch_ledger } = use_points ();
  const [login_open, setLoginOpen] = useState (false);
  const [is_refreshing, setIsRefreshing] = useState (false);
  const points = balance;
  const breakdown = ledger.reduce (
    (acc, e) => {
      // Check condition
if (acc.purchase += e.delta) {
  $2
}
      // Check condition
if (acc.post += e.delta) {
  $2
}
      // Check condition
if (acc.referral += e.delta) {
  $2
}
      return acc },
    { purchase: 0, post: 0, referral: 0 }
  );
  const handle_click = (e: React.MouseEvent < HTMLAnchorElement>, ) =>: any {
    // Check condition
if ( {) {
  $2
}
      e.prevent_default ();
      setLoginOpen (true);
    }
  }
  const handle_refresh = async (e: React.MouseEvent < HTMLButtonElement>) => {
    e.prevent_default ();
    e.stop_propagation ();
    // Check condition
if (return) {
  $2
}
    setIsRefreshing (true);    try {
      await fetch_ledger ();
    } catch (error) {
      logErrorToProduction ('Failed to refresh points:', { data: error });
    } finally {
import { Gift, RefreshCw } from 'lucide-react';
import { usePoints } from '@/hooks/usePoints';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger,;
} from '@/components/ui/tooltip';
import { LoginModal } from '@/components/auth/LoginModal';
import { Button } from '@/components/ui/button';
import { logErrorToProduction } from '@/utils/productionLogger';
export function PointsBadge() {;
  const { isAuthenticated } = useAuth();
  const { ledger, balance, loading, fetchLedger } = usePoints();
  const [loginOpen, setLoginOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const points = balance;
  const breakdown = ledger && ledger.reduce(;
    (acc, e) => {;
      if (e && e.reason === 'purchase') acc && acc.purchase += e && e.delta;
      if (e && e.reason === 'post') acc && acc.post += e && e.delta;
      if (e && e.reason === 'referral') acc && acc.referral += e && e.delta;
      return acc;    },;
    { purchase: 0, post: 0, referral: 0 }
  );
  const handleClick = (e: React && React.MouseEvent<HTMLAnchorElement>,) => {;
    if (!isAuthenticated) {;
      e && e.preventDefault();
      setLoginOpen(true);
    }
  };
  const handleRefresh = async (e: React && React.MouseEvent<HTMLButtonElement>) => {;
    e && e.preventDefault();
    e && e.stopPropagation();
    if (!isAuthenticated) return;
    setIsRefreshing(true);    try {;
      await fetchLedger();
    } catch (error) {;
      logErrorToProduction('Failed to refresh points:', { data: error });
    } finally {;
      setIsRefreshing(false);
      setIsRefreshing (false);
    }
  }
  return (
    <TooltipProvider>;
      <div className='flex items - center gap - 1'>;
        <Tooltip>;
          <TooltipTrigger as_child>;
            <Link;
              href={is_authenticated ? '/points' : '#'}
              on_click={handle_click}
              title={
                is_authenticated ? 'View points' : 'Earn points by participating';
              }
              className='flex items - center gap - 1 text - xs text - muted - foreground transition - transform active:scale - 95'            >;
              <Gift className='h - 4 w - 4' aria - hidden='true' />;
              <span>{`${points} pts`}</span>;
            </Link>;
          </TooltipTrigger>;
          <TooltipContent>;
            {is_authenticated ? (
              <>;
                <p className='text - sm font - medium'>Point Breakdown</p>;
                {points === 0 && (
                  <p className='text - xs text - muted - foreground'>;
                    You haven't earned any points yet.;
                  </p>)}
                <ul className='text - xs mt - 1 space - y-0.5'>;
                  <li > Purchases: {breakdown.purchase}</li>;
                  <li > Posts: {breakdown.post}</li>;
                  <li > Referrals: {breakdown.referral}</li>;
                </ul>;
                <p className='text - xs mt - 2 text - muted - foreground border - t pt - 1'>;
                  Click to view full rewards program;
                </p>;
              </>) : (
              <>;
                <p className='text - sm font - medium'>Zion Rewards Program</p>;
                <p className='text - xs mt - 1 text - muted - foreground'>;
                  • Sign up: 50 pts;
                  <br />;
                  • First purchase: 100 pts;
                  <br />;
                  • Community posts: 25 pts each;
                  <br />• Refer friends: 200 pts each;
                </p>;
          </TooltipContent>;
        </Tooltip>;
        {isAuthenticated && (;
          <Tooltip>;
            <TooltipTrigger asChild>;
              <Button
                variant='ghost'
                size='sm'
                onClick={handleRefresh}
                disabled={isRefreshing |loading}
                className='p-1 h-6 w-6 text-muted-foreground hover:text-foreground'
                aria-label='Refresh points'>;
                <RefreshCw
                  className={`h-3 w-3 ${isRefreshing |loading ? 'animate-spin' : ''}`}
                  aria-hidden='true'
                <p className='text - xs mt - 2 text - muted - foreground border - t pt - 1'>;
                  Click to learn more and join!;
                </p>;
              </>)}
          </TooltipContent>;
        </Tooltip>;
        {is_authenticated && (
          <Tooltip>;
            <TooltipTrigger as_child>;
              <Button;
                variant='ghost';
                size='sm';
                on_click={handle_refresh}
                disabled={is_refreshing || loading}
                className='p - 1 h - 6 w - 6 text - muted - foreground hover:text - foreground';
                aria - label='Refresh points'              >;
                <RefreshCw;
                  className={`h - 3 w - 3 ${is_refreshing || loading ? 'animate - spin' : ''}`}
                  aria - hidden='true';
                />;
              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;
      </div>;
      {!isAuthenticated && (;
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
      )}
    </TooltipProvider>;
  );
}
}
}
              <p className='text - sm'>Refresh points balance</p>;
            </TooltipContent>;
          </Tooltip>)}
      </div>;
      {!is_authenticated && (
        <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />)}
    </TooltipProvider>);
}
}