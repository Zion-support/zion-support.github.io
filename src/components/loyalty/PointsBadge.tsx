import React, { useState } from 'react';
import { Gift, RefreshCw } from 'lucide-react';
import { usePoints } from '@/hooks/usePoints';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

export function PointsBadge() {
  const { isAuthenticated } = useAuth();
  const { ledger, balance, loading, fetchLedger } = usePoints();
  const [loginOpen, setLoginOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const points = balance;

  const breakdown = ledger.reduce(

    },
    { purchase: 0, post: 0, referral: 0 }
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>,) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setLoginOpen(true);
    }
  };

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
      <div className='flex items-center gap-1'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link

            >
              <Gift className='h-4 w-4' aria-hidden='true' />
              <span>{`${points} pts`}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            {isAuthenticated ? (
              <>
                <p className='text-sm font-medium'>Point Breakdown</p>
                {points === 0 && (
                  <p className='text-xs text-muted-foreground'>
                    You haven't earned any points yet.
                  </p>
                )}
                <ul className='text-xs mt-1 space-y-0.5'>
                  <li>Purchases: {breakdown.purchase}</li>
                  <li>Posts: {breakdown.post}</li>
                  <li>Referrals: {breakdown.referral}</li>
                </ul>
                <p className='text-xs mt-2 text-muted-foreground border-t pt-1'>
                  Click to view full rewards program
                </p>
              </>
            ) : (
              <>
                <p className='text-sm font-medium'>Zion Rewards Program</p>
                <p className='text-xs mt-1 text-muted-foreground'>
                  • Sign up: 50 pts
                  <br />
                  • First purchase: 100 pts
                  <br />
                  • Community posts: 25 pts each
                  <br />• Refer friends: 200 pts each
                </p>
                <p className='text-xs mt-2 text-muted-foreground border-t pt-1'>
                  Click to learn more and join!
                </p>
              </>
            )}
          </TooltipContent>
        </Tooltip>

        {isAuthenticated && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button

              >
                <RefreshCw
                  className={`h-3 w-3 ${isRefreshing || loading ? 'animate-spin' : ''}`}
                  aria-hidden='true'
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className='text-sm'>Refresh points balance</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>

      {!isAuthenticated && (
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
      )}
    </TooltipProvider>
  );