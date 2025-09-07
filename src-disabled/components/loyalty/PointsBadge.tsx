<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/loyalty/PointsBadge.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
  }
    } catch (error) {
      logErrorToProduction ('Failed to refresh points:', { data: error });
    } finally {

{ purchase: 0, post: 0, referral: 0 });
  const handle_click = (e: React.MouseEvent < HTMLAnchorElement>, ) =>: any {}
    // Check condition;
if ( {) {}
  $2;
=======
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
{ purchase: 0, post: 0, referral: 0 }
  );
  const handle_click = (e: React.MouseEvent < HTMLAnchorElement>, ) =>: any {
    // Check condition
if ( {) {
  $2
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/loyalty/PointsBadge.tsx
}
      e.prevent_default ();
      setLoginOpen (true);
    }
  }
<<<<<<< HEAD:src-disabled/components/loyalty/PointsBadge.tsx
  const handleRefresh = async (e: React.MouseEvent<HTMLButtonElement>) => {;,
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) return;
    setIsRefreshing(true);    try {}
      await fetchLedger()
<<<<<<< HEAD
=======
=======
  const handleRefresh = async (e: React.MouseEvent<HTMLButtonElement>) => {;
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) return;
    setIsRefreshing(true);    try {
      await fetchLedger()
    } catch (error) {
      logErrorToProduction('Failed to refresh points:', { data: error })
    } finally {
<<<<<<< HEAD
      setIsRefreshing(false)
    }
  }
import React, { useState } from 'react',;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/loyalty/PointsBadge.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Gift, RefreshCw } from 'lucide-react';
import { usePoints } from '@/hooks/usePoints',;
import { useAuth } from '@/hooks/useAuth',;
import Link from 'next/link',;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',;
import { LoginModal } from '@/components/auth/LoginModal',;
import { Button } from '@/components/ui/button',;
<<<<<<< HEAD:src-disabled/components/loyalty/PointsBadge.tsx

import {logErrorToProduction} from '@/utils/productionLogger',;
export function PointsBadge() { return null; }
  const { isAuthenticated } = useAuth(),;
  const { ledger, balance, loading, fetchLedger } = usePoints(),;,
  const [loginOpen, setLoginOpen] = useState(false),;,
=======
import {logErrorToProduction} from '@/utils/productionLogger',;
export function PointsBadge() {;
  const { isAuthenticated } = useAuth(),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/loyalty/PointsBadge.tsx
  const { ledger, balance, loading, fetchLedger } = usePoints(),;
  const [loginOpen, setLoginOpen] = useState(false),;
  const [isRefreshing, setIsRefreshing] = useState(false),;
  const points = balance,;
  const breakdown = ledger.reduce(;
<<<<<<< HEAD:src-disabled/components/loyalty/PointsBadge.tsx
    (acc, e) => {;'
      if (e.reason === 'purchase') acc.purchase += e.delta,;'
      if (e.reason === 'post') acc.post += e.delta,;'
=======
    (acc, e) => {;
      if (e.reason === 'purchase') acc.purchase += e.delta,;
      if (e.reason === 'post') acc.post += e.delta,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/loyalty/PointsBadge.tsx
      if (e.reason === 'referral') acc.referral += e.delta,;
      return acc;
    },;
    { purchase: 0, post: 0, referral: 0 }
  ),;
<<<<<<< HEAD:src-disabled/components/loyalty/PointsBadge.tsx
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {;,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/loyalty/PointsBadge.tsx
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {;
    if (!isAuthenticated) {;
      e.preventDefault(),;
      setLoginOpen(true);
    }
  },;
  const handleRefresh = async (e: React.MouseEvent<HTMLButtonElement>) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
    if (!isAuthenticated) return,;
    setIsRefreshing(true);
    try {;
      await fetchLedger();
    } catch (error) {;'
      logErrorToProduction('Failed to refresh points:', { data: error });
    } finally {;
      setIsRefreshing(false);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  },
<<<<<<< HEAD:src-disabled/components/loyalty/PointsBadge.tsx
=======

  return (
<<<<<<< HEAD
    <TooltipProvider>
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={isAuthenticated ? '/points' : '#'}
              onClick={handleClick}
              title={
                isAuthenticated ? 'View points' : 'Earn points by participating'
              }
=======
    <TooltipProvider>;

      <div className='flex items - center gap - 1'>;
        <Tooltip>;
          <TooltipTrigger as_child>;
            <Link;
              href={is_authenticated ? '/points' : '#'}
              on_click={handle_click}

              title={
                isAuthenticated ? 'View points' : 'Earn points by participating'
              }

              className='flex items - center gap - 1 text - xs text - muted - foreground transition - transform active:scale - 95'            >;
              <Gift className='h - 4 w - 4' aria - hidden='true' />;

              <span>{`${points} pts`}</span>;
            </Link>;
          </TooltipTrigger>;
          <TooltipContent>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/loyalty/PointsBadge.tsx

    }
  },

<<<<<<< HEAD:src-disabled/components/loyalty/PointsBadge.tsx
import React, { useState } from 'react';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/loyalty/PointsBadge.tsx


export function PointsBadge() {


  return (
    <TooltipProvider>;

              <Gift className='h - 4 w - 4' aria - hidden='true' />;
              <span>{`${points} pts`}</span>;`
            </Link>;
          </TooltipTrigger>;
          <TooltipContent>;
    }
  },

  return (
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/loyalty/PointsBadge.tsx
=======
            <Link
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/loyalty/PointsBadge.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              href={isAuthenticated ? "/points" : "#"}
              onClick={handleClick}"
              title={isAuthenticated ? "View points" : "Earn points by participating"}"
              className="flex items-center gap-1 text-xs text-muted-foreground transition-transform active:scale-95"
            >"
              <Gift className="h-4 w-4" aria-hidden="true" />

              <span>{`${points} pts`}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            {isAuthenticated ? (

                  </p>
<<<<<<< HEAD:src-disabled/components/loyalty/PointsBadge.tsx

=======
<<<<<<< HEAD
                )}
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/loyalty/PointsBadge.tsx
                <ul className='text-xs mt-1 space-y-0 && 0.5'>;
                  <li>Purchases: {breakdown && breakdown.purchase}</li>;
                  <li>Posts: {breakdown && breakdown.post}</li>;
                  <li>Referrals: {breakdown && breakdown.referral}</li>;
                </ul>;'
                <p className='text-xs mt-2 text-muted-foreground border-t pt-1'>;
                  Click to view full rewards program;
                </p>;
              </>;
            ) : (;
              <>;'
                <p className='text-sm font-medium'>Zion Rewards Program</p>;'
                <p className='text-xs mt-1 text-muted-foreground'>;

            {is_authenticated ? (
              <>;'
                <p className='text - sm font - medium'>Point Breakdown</p>;
                {points === 0 && ('
                  <p className='text - xs text - muted - foreground'>;'
                    You haven't earned any points yet.;
                  </p>)}'
                <ul className='text - xs mt - 1 space - y-0.5'>;
                  <li > Purchases: {breakdown.purchase}</li>;
                  <li > Posts: {breakdown.post}</li>;
                  <li > Referrals: {breakdown.referral}</li>;
                </ul>;'
                <p className='text - xs mt - 2 text - muted - foreground border - t pt - 1'>;
                  Click to view full rewards program;
                </p>;
              </>) : (
              <>;'
                <p className='text - sm font - medium'>Zion Rewards Program</p>;'
                <p className='text - xs mt - 1 text - muted - foreground'>;
                  • Sign up: 50 pts;

                  <br />;
                  • First purchase: 100 pts;
                  <br />;
                  • Community posts: 25 pts each;
                  <br />• Refer friends: 200 pts each;
                </p>;

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

        {isAuthenticated && (
          <Tooltip>
            <TooltipTrigger asChild>

<<<<<<< HEAD
=======
<<<<<<< HEAD
        
        {isAuthenticated && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant='ghost'
                size='sm'
                onClick={handleRefresh}
                disabled={isRefreshing |loading}
                className='p-1 h-6 w-6 text-muted-foreground hover:text-foreground'
                aria-label='Refresh points'              >
                <RefreshCw
                  className={`h-3 w-3 ${isRefreshing |loading ? 'animate-spin' : ''}`}
                  aria-hidden='true'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                variant="ghost"

                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing || loading}"
                className="p-1 h-6 w-6 text-muted-foreground hover:text-foreground""
                aria-label="Refresh points"
              >
<<<<<<< HEAD
                />
                  className={`h-3 w-3 ${isRefreshing || loading ? 'animate-spin' : ''}`}
                  aria-hidden="true"
=======

<<<<<<< HEAD:src-disabled/components/loyalty/PointsBadge.tsx
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/loyalty/PointsBadge.tsx
                <RefreshCw
                  className={`h-3 w-3 ${isRefreshing || loading ? 'animate-spin' : ''}`}

                  aria-hidden="true"
                />
              </Button>
            </TooltipTrigger>

              <p className="text-sm">Refresh points balance</p>
            </TooltipContent>
          </Tooltip>
        )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
;

      </div>;
<<<<<<< HEAD:src-disabled/components/loyalty/PointsBadge.tsx
      {!isAuthenticated && (;
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
      )}
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </div>;
      {!isAuthenticated && (;
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
      )}
    </TooltipProvider>;
  );
}
<<<<<<< HEAD
;


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/loyalty/PointsBadge.tsx

              <p className='text - sm'>Refresh points balance</p>;
            </TooltipContent>;
          </Tooltip>)}
      </div>;
      {!is_authenticated && (
        <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />)}
    </TooltipProvider>);
}
}
<<<<<<< HEAD:src-disabled/components/loyalty/PointsBadge.tsx

    </TooltipProvider>
  );
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/loyalty/PointsBadge.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
