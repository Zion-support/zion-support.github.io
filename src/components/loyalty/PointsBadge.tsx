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
    }
<<<<<<< HEAD
  },

  return (
    <TooltipProvider>
      <div className=&quot;flex items-center gap-1&quot;>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={isAuthenticated ? &quot;/points&quot; : &quot;#&quot;}
              onClick={handleClick}
              title={isAuthenticated ? &quot;View points&quot; : &quot;Earn points by participating&quot;}
              className=&quot;flex items-center gap-1 text-xs text-muted-foreground transition-transform active:scale-95&quot;
            >
              <Gift className=&quot;h-4 w-4&quot; aria-hidden=&quot;true&quot; />
              <span>{`${points} pts`}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            {isAuthenticated ? (
              <>
                <p className=&quot;text-sm font-medium&quot;>Point Breakdown</p>
                {points === 0 && (
                  <p className=&quot;text-xs text-muted-foreground&quot;>
                    You haven't earned any points yet.
                  </p>
                )}
                <ul className=&quot;text-xs mt-1 space-y-0.5&quot;>
                  <li>Purchases: {breakdown.purchase}</li>
                  <li>Posts: {breakdown.post}</li>
                  <li>Referrals: {breakdown.referral}</li>
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
        
        {isAuthenticated && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant=&quot;ghost&quot;
                size=&quot;sm&quot;
                onClick={handleRefresh}
                disabled={isRefreshing || loading}
                className=&quot;p-1 h-6 w-6 text-muted-foreground hover:text-foreground&quot;
                aria-label=&quot;Refresh points&quot;
              >
                <RefreshCw
                  className={`h-3 w-3 ${isRefreshing || loading ? 'animate-spin' : ''}`}
                  aria-hidden=&quot;true&quot;
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className=&quot;text-sm&quot;>Refresh points balance</p>
            </TooltipContent>
          </Tooltip>
=======
  };
  return (;
    <TooltipProvider>;
      <div className="flex items-center gap-1">;
        <Tooltip>;
          <TooltipTrigger asChild>;
            <Link;
              href={isAuthenticated ? "/points" : "#"}
              onClick={handleClick}
              title={isAuthenticated ? "View points" : "Earn points by participating"}
              className="flex items-center gap-1 text-xs text-muted-foreground transition-transform active:scale-95";
            >;
              <Gift className="h-4 w-4" aria-hidden="true" />;
              <span>{`${points} pts`}</span>;
            </Link>;
          </TooltipTrigger>;
          <TooltipContent>;
            {isAuthenticated ? (;
              <>;
                <p className="text-sm font-medium">Point Breakdown</p>;
                {points === 0 && (;
                  <p className="text-xs text-muted-foreground">;
                    You haven't earned any points yet.;
                  </p>;
                )}
                <ul className="text-xs mt-1 space-y-0.5">;
                  <li>Purchases: {breakdown.purchase}</li>;
                  <li>Posts: {breakdown.post}</li>;
                  <li>Referrals: {breakdown.referral}</li>;
                </ul>;
                <p className="text-xs mt-2 text-muted-foreground border-t pt-1">;
                  Click to view full rewards program;
                </p>;
              </>;
            ) : (;
              <>;
                <p className="text-sm font-medium">Zion Rewards Program</p>;
                <p className="text-xs mt-1 text-muted-foreground">;
                  • Sign up: 50 pts<br/>;
                  • First purchase: 100 pts<br/>;
                  • Community posts: 25 pts each<br/>;
                  • Refer friends: 200 pts each;
                </p>;
                <p className="text-xs mt-2 text-muted-foreground border-t pt-1">;
                  Click to learn more and join!;
                </p>;
              </>;
            )}
          </TooltipContent>;
        </Tooltip>;
        {isAuthenticated && (;
          <Tooltip>;
            <TooltipTrigger asChild>;
              <Button;
                variant="ghost";
                size="sm";
                onClick={handleRefresh}
                disabled={isRefreshing || loading}
                className="p-1 h-6 w-6 text-muted-foreground hover:text-foreground";
                aria-label="Refresh points";
              >;
                <RefreshCw;
                  className={`h-3 w-3 ${isRefreshing || loading ? 'animate-spin' : ''}`}
                  aria-hidden="true";
                />;
              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;
              <p className="text-sm">Refresh points balance</p>;
            </TooltipContent>;
          </Tooltip>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
      </div>;
      {!isAuthenticated && (;
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
      )}
    </TooltipProvider>;
  );
}
;