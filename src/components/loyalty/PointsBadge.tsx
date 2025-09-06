<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState } from 'react';
import { Gift, RefreshCw } from 'lucide-react'


import React, { useState } from 'react';
import React, { useState } from 'react'
import { Gift, RefreshCw } from 'lucide-react'

import { usePoints } from '@/hooks/usePoints'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'
import {
  Tooltip
  TooltipContent
  TooltipProvider
  TooltipTrigger
} from '@/components/ui/tooltip'
import { LoginModal } from '@/components/auth/LoginModal'
import { Button } from '@/components/ui/button'
import { logErrorToProduction } from '@/utils/productionLogger'
export function PointsBadge() {
  const { isAuthenticated } = useAuth()
  const { ledger, balance, loading, fetchLedger } = usePoints()
  const [loginOpen, setLoginOpen] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const points = balance
  const breakdown = ledger.reduce(
    (acc, e) => {
      if (e.reason === 'purchase') acc.purchase += e.delta
      if (e.reason === 'post') acc.post += e.delta
      if (e.reason === 'referral') acc.referral += e.delta
      return acc }
    { purchase: 0, post: 0, referral: 0 }
  )
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>,) => {
    if (!isAuthenticated) {
      e.preventDefault()
      setLoginOpen(true)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
      setIsRefreshing(false)
    }
  }
import React, { useState } from 'react',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    }
  }
    } catch (error) {
      logErrorToProduction ('Failed to refresh points:', { data: error });
    } finally {
import React, { useState } from 'react',;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }
  }




  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <TooltipProvider>;

      <div className='flex items - center gap - 1'>;
        <Tooltip>;
          <TooltipTrigger as_child>;
            <Link;
              href={is_authenticated ? '/points' : '#'}
              on_click={handle_click}

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <TooltipProvider>
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
<<<<<<< HEAD
              href={isAuthenticated ? '/points' : '#'}
              onClick={handleClick}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              title={
                is_authenticated ? 'View points' : 'Earn points by participating';
              }
<<<<<<< HEAD

              className='flex items - center gap - 1 text - xs text - muted - foreground transition - transform active:scale - 95'            >;
              <Gift className='h - 4 w - 4' aria - hidden='true' />;

              <span>{`${points} pts`}</span>;
            </Link>;
          </TooltipTrigger>;
          <TooltipContent>;

    }
  },




  return (
    <TooltipProvider>
=======



  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
<<<<<<< HEAD

=======
              href={isAuthenticated ? '/points' : '#'}
              onClick={handleClick}
              title={
                isAuthenticated ? 'View points' : 'Earn points by participating'
              }
              className='flex items-center gap-1 text-xs text-muted-foreground transition-transform active:scale-95'            >
              <Gift className='h-4 w-4' aria-hidden='true' />
              <span>{`${points} pts`}</span>
              className='flex items-center gap-1 text-xs text-muted-foreground transition-transform active:scale-95'            >
              <Gift className='h-4 w-4' aria-hidden='true' />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              href={isAuthenticated ? "/points" : "#"}
              onClick={handleClick}
              title={isAuthenticated ? "View points" : "Earn points by participating"}
              className="flex items-center gap-1 text-xs text-muted-foreground transition-transform active:scale-95"
            >
              <Gift className="h-4 w-4" aria-hidden="true" />

              <span>{`${points} pts`}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            {isAuthenticated ? (
              <>
                <p className="text-sm font-medium">Point Breakdown</p>
<<<<<<< HEAD
                {points === 0 && (
                  <p className="text-xs text-muted-foreground">
                    You haven't earned any points yet.
                  </p>
                )}
                <ul className='text-xs mt-1 space-y-0 && 0.5'>;
                  <li>Purchases: {breakdown && breakdown.purchase}</li>;
                  <li>Posts: {breakdown && breakdown.post}</li>;
                  <li>Referrals: {breakdown && breakdown.referral}</li>;
                </ul>;
                <p className='text-xs mt-2 text-muted-foreground border-t pt-1'>;
                  Click to view full rewards program;
                </p>;
              </>;
            ) : (;
              <>;
                <p className='text-sm font-medium'>Zion Rewards Program</p>;
                <p className='text-xs mt-1 text-muted-foreground'>;
            {is_authenticated ? (
              <>;
                <p className='text - sm font - medium'>Point Breakdown</p>;
                {points === 0 && (
=======
                {points === 0 && (
                  <p className="text-xs text-muted-foreground">
                    You haven't earned any points yet.
                  </p>
                )}
<<<<<<< HEAD
=======
                <ul className='text-xs mt-1 space-y-0 && 0.5'>;
                  <li>Purchases: {breakdown && breakdown.purchase}</li>;
                  <li>Posts: {breakdown && breakdown.post}</li>;
                  <li>Referrals: {breakdown && breakdown.referral}</li>;
                </ul>;
                <p className='text-xs mt-2 text-muted-foreground border-t pt-1'>;
                  Click to view full rewards program;
                </p>;
              </>;
            ) : (;
              <>;
                <p className='text-sm font-medium'>Zion Rewards Program</p>;
                <p className='text-xs mt-1 text-muted-foreground'>;
                   Sign up: 50 pts;
                  <br />;
                   First purchase: 100 pts;
                  <br />;
                   Community posts: 25 pts each;
                  <br /> Refer friends: 200 pts each;
                </p>;


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>Purchases: {breakdown.purchase}</li>
                  <li>Posts: {breakdown.post}</li>
                  <li>Referrals: {breakdown.referral}</li>
                </ul>
                <p className="text-xs mt-2 text-muted-foreground border-t pt-1">
                  Click to view full rewards program
                </p>
              </>
            ) : (
              <>
                <p className="text-sm font-medium">Zion Rewards Program</p>
                <p className="text-xs mt-1 text-muted-foreground">
                  • Sign up: 50 pts<br/>
                  • First purchase: 100 pts<br/>
                  • Community posts: 25 pts each<br/>
                  • Refer friends: 200 pts each
                </p>
                <p className="text-xs mt-2 text-muted-foreground border-t pt-1">
                  Click to learn more and join!
                </p>
              </>
            )}
          </TooltipContent>
        </Tooltip>
<<<<<<< HEAD
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                <RefreshCw
                  className={`h-3 w-3 ${isRefreshing |loading ? 'animate-spin' : ''}`}
                  aria-hidden='true'
ursor/fix-website-loading-errors-and-merge-6662
        {isAuthenticated && (
          <Tooltip>
            <TooltipTrigger asChild>
                )}
                <ul className='text-xs mt-1 space-y-0 && 0.5'>;
                  <li>Purchases: {breakdown && breakdown.purchase}</li>;
                  <li>Posts: {breakdown && breakdown.post}</li>;
                  <li>Referrals: {breakdown && breakdown.referral}</li>;
                </ul>;
                <p className='text-xs mt-2 text-muted-foreground border-t pt-1'>;
                  Click to view full rewards program;
                </p>;
              </>;
            ) : (;
              <>;
                <p className='text-sm font-medium'>Zion Rewards Program</p>;
                <p className='text-xs mt-1 text-muted-foreground'>;
            {is_authenticated ? (
              <>;
                <p className='text - sm font - medium'>Point Breakdown</p>;
                {points === 0 && (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


        


        {isAuthenticated && (
          <Tooltip>
            <TooltipTrigger asChild>
          </TooltipContent>;
        </Tooltip>;

        {isAuthenticated && (;
          <Tooltip>;
            <TooltipTrigger asChild>;
              <Button

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



<<<<<<< HEAD
=======
        
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {isAuthenticated && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
<<<<<<< HEAD
                variant='ghost'
                size='sm'
                onClick={handleRefresh}
                disabled={isRefreshing |loading}
                className='p-1 h-6 w-6 text-muted-foreground hover:text-foreground'
                aria-label='Refresh points'              >
                <RefreshCw
                  className={`h-3 w-3 ${isRefreshing |loading ? 'animate-spin' : ''}`}
                  aria-hidden='true'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                variant="ghost"
                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing || loading}
                className="p-1 h-6 w-6 text-muted-foreground hover:text-foreground"
                aria-label="Refresh points"
              >
<<<<<<< HEAD
<<<<<<< HEAD



=======
                />
                  className={`h-3 w-3 ${isRefreshing || loading ? 'animate-spin' : ''}`}
                  aria-hidden="true"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <RefreshCw
                  className={`h-3 w-3 ${isRefreshing || loading ? 'animate-spin' : ''}`}
                  aria-hidden="true"
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm">Refresh points balance</p>
            </TooltipContent>
          </Tooltip>
        )}
<<<<<<< HEAD
<<<<<<< HEAD

;

      </div>;

=======
;

      </div>;
ursor/fix-website-loading-errors-and-merge-6662

      </div>
      {!isAuthenticated && (
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
      )}
    </TooltipProvider>
  )
}
}
;
=======
;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {!isAuthenticated && (;
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
      )}
    </TooltipProvider>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
;


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
<<<<<<< HEAD
;
=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
