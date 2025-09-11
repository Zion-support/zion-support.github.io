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
import React, { useState } from 'react';
import { Gift, RefreshCw } from 'lucide-react'


}
      e.prevent_default ();
      setLoginOpen (true);
    }
  }

  const handleRefresh = async (e: React.MouseEvent<HTMLButtonElement>) => {;,
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) return;
    setIsRefreshing(true);    try {}
      await fetchLedger()
      setIsRefreshing(false)
    }
  }
import React, { useState } from 'react',;
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
;

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

origin/cursor/automate-test-improve-and-merge-code-2533
;
