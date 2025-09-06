<<<<<<< HEAD
<<<<<<< HEAD

=======
import React, { useState } from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Gift, RefreshCw } from 'lucide-react'


=======
<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState } from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    { purchase: 0, post: 0, referral: 0 }
  )
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>,) => {
    if (!isAuthenticated) {
      e.preventDefault()
      setLoginOpen(true)
    }
  }
  const handleRefresh = async (e: React.MouseEvent<HTMLButtonElement>) => {;
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) return;
    setIsRefreshing(true);    try {
      await fetchLedger()
    } catch (error) {
      logErrorToProduction('Failed to refresh points:', { data: error })
    } finally {
      setIsRefreshing(false)
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from 'react',;
import { Gift, RefreshCw } from 'lucide-react';
import { usePoints } from '@/hooks/usePoints',;
import { useAuth } from '@/hooks/useAuth',;
import Link from 'next/link',;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',;
import { LoginModal } from '@/components/auth/LoginModal',;
import { Button } from '@/components/ui/button',;
import {logErrorToProduction} from '@/utils/productionLogger',;
export function PointsBadge() {;
  const { isAuthenticated } = useAuth(),;
  const { ledger, balance, loading, fetchLedger } = usePoints(),;
  const [loginOpen, setLoginOpen] = useState(false),;
  const [isRefreshing, setIsRefreshing] = useState(false),;
  const points = balance,;
  const breakdown = ledger.reduce(;
    (acc, e) => {;
      if (e.reason === 'purchase') acc.purchase += e.delta,;
      if (e.reason === 'post') acc.post += e.delta,;
      if (e.reason === 'referral') acc.referral += e.delta,;
      return acc;
    },;
    { purchase: 0, post: 0, referral: 0 }
  ),;
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
    } catch (error) {;
      logErrorToProduction('Failed to refresh points:', { data: error });
    } finally {;
      setIsRefreshing(false);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
  return (
    <TooltipProvider>;

      <div className='flex items - center gap - 1'>;
        <Tooltip>;
          <TooltipTrigger as_child>;
            <Link;
              href={is_authenticated ? '/points' : '#'}
              on_click={handle_click}

=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <TooltipProvider>
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
<<<<<<< HEAD
              href={isAuthenticated ? '/points' : '#'}
              onClick={handleClick}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              title={
                isAuthenticated ? 'View points' : 'Earn points by participating'
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
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
>>>>>>>     <TooltipProvider>
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
>>>>>>>               <span>{`${points} pts`}</span>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <span>{`${points} pts`}</span>
>>>>>>>             </Link>
=======
              className='flex items-center gap-1 text-xs text-muted-foreground transition-transform active:scale-95'            >
              <Gift className='h-4 w-4' aria-hidden='true' />
=======
              href={isAuthenticated ? "/points" : "#"}
              onClick={handleClick}
              title={isAuthenticated ? "View points" : "Earn points by participating"}
              className="flex items-center gap-1 text-xs text-muted-foreground transition-transform active:scale-95"
            >
              <Gift className="h-4 w-4" aria-hidden="true" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <span>{`${points} pts`}</span>
            </Link>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </TooltipTrigger>
          <TooltipContent>
            {isAuthenticated ? (
              <>
                <p className="text-sm font-medium">Point Breakdown</p>
                {points === 0 && (
                  <p className="text-xs text-muted-foreground">
                    You haven't earned any points yet.
                  </p>
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

        {isAuthenticated && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button

                variant="ghost"
=======
>>>>>>>         {isAuthenticated && (
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
          </TooltipContent>;
        </Tooltip>;

        {isAuthenticated && (;
          <Tooltip>;
            <TooltipTrigger asChild>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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



>>>>>>>                 variant="ghost"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
                <RefreshCw
                  className={`h-3 w-3 ${isRefreshing |loading ? 'animate-spin' : ''}`}
                  aria-hidden='true'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                variant="ghost"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing || loading}
                className="p-1 h-6 w-6 text-muted-foreground hover:text-foreground"
                aria-label="Refresh points"
              >
<<<<<<< HEAD
<<<<<<< HEAD

                <RefreshCw
                  className={`h-3 w-3 ${isRefreshing || loading ? 'animate-spin' : ''}`}
                  aria-hidden="true"

                />
=======
>>>>>>>                 <RefreshCw
                  className={`h-3 w-3 ${isRefreshing || loading ? 'animate-spin' : ''}`}
                  aria-hidden="true"
>>>>>>>                 />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <RefreshCw
                  className={`h-3 w-3 ${isRefreshing || loading ? 'animate-spin' : ''}`}
                  aria-hidden="true"
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm">Refresh points balance</p>
            </TooltipContent>
          </Tooltip>
        )}
<<<<<<< HEAD
<<<<<<< HEAD

      </div>;
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>       </div>;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      </div>
      {!isAuthenticated && (
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
      )}
    </TooltipProvider>
  )
}
}
<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {!isAuthenticated && (;
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
      )}
    </TooltipProvider>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
