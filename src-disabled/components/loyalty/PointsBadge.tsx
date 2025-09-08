<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba


}
      e.prevent_default ();
      setLoginOpen (true);
    }
  }
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
=======
<<<<<<< HEAD
      setIsRefreshing(false)
    }
  }
import React, { useState } from 'react',;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/loyalty/PointsBadge.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
    } catch (error) {;'
      logErrorToProduction('Failed to refresh points:', { data: error });
    } finally {;
      setIsRefreshing(false);



    }
  },


  return (



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
>>>>>>> origin/cursor/delete-old-data-records-6bba

            <Link

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
                variant="ghost"

                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing || loading}"
                className="p-1 h-6 w-6 text-muted-foreground hover:text-foreground""
                aria-label="Refresh points"
              >



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
=======
<<<<<<< HEAD
;
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD
=======
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba


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

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
