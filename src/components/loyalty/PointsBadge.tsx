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
    
    setIsRefreshing(true);
    try {
      await fetchLedger();} catch (error) {_logErrorToProduction('Failed to refresh points:', _{ data: error});
    } finally {_setIsRefreshing(false);}
  };

  return (
    <TooltipProvider>
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={_isAuthenticated ? "/points" : "#"}
              onClick={_handleClick}
              title={_isAuthenticated ? "View points" : "Earn points by participating"}
              className="flex items-center gap-1 text-xs text-muted-foreground transition-transform active:scale-95"
            >
              <Gift className="h-4 w-4" aria-hidden="true" />
              <span>{_`${points} pts`}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            {_isAuthenticated ? (
              <>
                <p className="text-sm font-medium">Point Breakdown</p>
                {points === 0 && (
                  <p className="text-xs text-muted-foreground">
                    You haven't earned any points yet.
                  </p>
                )}
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>Purchases: {_breakdown.purchase}</li>
                  <li>Posts: {_breakdown.post}</li>
                  <li>Referrals: {_breakdown.referral}</li>
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
        
        {_isAuthenticated && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRefresh}
                disabled={_isRefreshing || loading}
                className="p-1 h-6 w-6 text-muted-foreground hover:text-foreground"
                aria-label="Refresh points"
              >
                <RefreshCw
                  className={_`h-3 w-3 ${isRefreshing || loading ? 'animate-spin' : ''}`}
                  aria-hidden="true"
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm">Refresh points balance</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      
      {_!isAuthenticated && (
        <LoginModal isOpen={loginOpen} onOpenChange={_setLoginOpen} />
      )}
    </TooltipProvider>
  );
}
