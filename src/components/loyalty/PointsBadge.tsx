import React, { useState } from 'react';
import { Gift, RefreshCw } from 'lucide-react'


    { purchase: 0, post: 0, referral: 0 }
              title={
                isAuthenticated ? 'View points' : 'Earn points by participating'
              }
              className='flex items-center gap-1 text-xs text-muted-foreground transition-transform active:scale-95'            >
              <Gift className='h-4 w-4' aria-hidden='true' />
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


        


                variant="ghost"
                />
ursor/fix-website-loading-errors-and-merge-6662

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
;
