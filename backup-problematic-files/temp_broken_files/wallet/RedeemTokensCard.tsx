
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/RedeemTokensCard.tsx
=======
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/wallet/RedeemTokensCard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React, { useState } from "react",;
import { useWallet } from "@/hooks/useWallet",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/RedeemTokensCard.tsx
import { Gift, ArrowRight, ExternalLink } from "lucide-react",;
=======
import { Gift, ArrowRight, ExternalLink } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/wallet/RedeemTokensCard.tsx
=======
import { Gift, ArrowRight, ExternalLink } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogHeader,;
  DialogTitle,;
  DialogTrigger} from "@/components/ui/dialog",;
;
type RewardOption = {;
  id:string,;
<<<<<<< HEAD
  title:string,;
=======
  title:string,,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  description:string,;
  cost:number,;
  type:'credit' | 'feature' | 'course';
},;
;
const REWARD_OPTIONS:RewardOption[] = [;
  {;
    id:'premium-week',;
<<<<<<< HEAD
    title:'Premium Week',;
    description:'7 days of premium features including top placement in search results',;
=======
    title:'Premium Week',,
  description:'7 days of premium features including top placement in search results',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    cost:100,;
    type:'feature';
  },;
  {;
    id:'resume-review',;
<<<<<<< HEAD
    title:'AI Resume Review',;
    description:'Get your resume analyzed and optimized by our AI',;
=======
    title:'AI Resume Review',,
  description:'Get your resume analyzed and optimized by our AI',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    cost:50,;
    type:'feature';
  },;
  {;
    id:'platform-credit',;
<<<<<<< HEAD
    title:'$5 Platform Credit',;
    description:'Get $5 credit to use on any paid service',;
=======
    title:'$5 Platform Credit',,
  description:'Get $5 credit to use on any paid service',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    cost:100,;
    type:'credit';
  }
],;
;
export function RedeemTokensCard() {;
  const { wallet, spendTokens } = useWallet(),;
  const [open, setOpen] = useState(false),;
;
  const handleRedeem = async (option:RewardOption) => {;
    if (!wallet || wallet.balance < option.cost) return,;
    ;
    await spendTokens(option.cost, `Redeemed:${option.title}`),;
    setOpen(false),;
  },;
;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/RedeemTokensCard.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/wallet/RedeemTokensCard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <Gift className="h-5 w-5" /> Redeem Rewards;
        </CardTitle>;
        <CardDescription>Exchange your ZION$ for rewards and perks</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Dialog open={open} onOpenChange={setOpen}>;
          <DialogTrigger asChild>;
            <Button className="w-full">View Available Rewards</Button>;
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;
              <DialogTitle>Available Rewards</DialogTitle>;
              <DialogDescription>;
                Exchange your tokens for these rewards. You currently have {wallet?.balance || 0} ZION$.;
              </DialogDescription>;
            </DialogHeader>;
            <div className="space-y-4 py-4">;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/RedeemTokensCard.tsx

=======
              {REWARD_OPTIONS.map((option) => (;
                <div key={option.id} className="flex justify-between items-center border-b pb-4">;
                  <div>;
                    <h3 className="font-medium">{option.title}</h3>;
                    <p className="text-sm text-muted-foreground">{option.description}</p>;
                  </div>;
                  <div className="flex flex-col items-end gap-1">;
                    <span className="text-sm font-bold">{option.cost} ZION$</span>;
                    <Button ;
                      size="sm" ;
                      variant={wallet && wallet.balance >= option.cost ? "default" :"outline"}
                      disabled={!wallet || wallet.balance < option.cost}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      onClick={() => handleRedeem(option)}
                    >;
                      Redeem <ArrowRight className="ml-1 h-3 w-3" />;
                    </Button>;
                  </div>;
                </div>;
              ))}
            </div>;
            <div className="flex justify-between">;
              <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Close</Button>;
              <Button variant="ghost" size="sm">;
                Learn More <ExternalLink className="ml-1 h-3 w-3" />;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/RedeemTokensCard.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              </Button>;
            </div>;
          </DialogContent>;
        </Dialog>;
      </CardContent>;
    </Card>;
  ),;}
 import { ;
  {;
  {;
  Gift,  ArrowRight, ExternalLink ;
 } from "lucide-react";
import {;
  Dialog;
DialogContent;
DialogDescription;
DialogHeader;
DialogTitle;
type RewardOption = {;
  id: string;
<<<<<<< HEAD
title: string;
description: string;
cost: number;';
type: 'credit' | 'feature' | 'course' ;
};
const REWARD OPTIONS: RewardOption[] = [ {';
  id: 'premium-week';';
title: 'Premium Week';';
description: '7 days of premium features including top placement in search results';
cost: 100;';
type: 'feature' ;
};
{';
  id: 'resume-review';';
title: 'AI Resume Review';';
description: 'Get your resume analyzed and optimized by our AI';
cost: 50;';
type: 'feature' ;
};
{';
  id: 'platform-credit';';
title: '$5 Platform Credit';';
description: 'Get $5 credit to use on any paid service';
=======
title: string,
  description: string;
cost: number;';
type: 'credit' | 'feature' | 'course' 
};
const REWARD OPTIONS: RewardOption[] = [ {';
  id: 'premium-week';';
title: 'Premium Week';',
  description: '7 days of premium features including top placement in search results';
cost: 100;';
type: 'feature' 
};
{';
  id: 'resume-review';';
title: 'AI Resume Review';',
  description: 'Get your resume analyzed and optimized by our AI';
cost: 50;';
type: 'feature' 
};
{';
  id: 'platform-credit';';
title: '$5 Platform Credit';',
  description: 'Get $5 credit to use on any paid service';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
cost: 100;';
type: 'credit' ;
}];
export function RedeemTokensCard () {;
  const { ;
  wallet, spendTokens ;
 } = useWallet ();
const [open, setOpen] = useState (false);
const handleRedeem = async (option: RewardOption) => {;
  if (!wallet || wallet.balance < option.cost) return;
await spendTokens (option.cost, `Redeemed: $ {;
  option.title ;
}`);
<<<<<<< HEAD
setOpen (false) ;
=======
setOpen (false) 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};"flex items-center gap-2"> <Gift className=" h-5 w-5"/> Redeem Rewards </CardTitle> <CardDescription>Exchange your ZION$ for rewards and perks</CardDescription> </CardHeader> <CardContent> <Dialog open= {;
  open ;
:temp_broken_files/wallet/RedeemTokensCard.tsx
}onOpenChange= {;"  setOpen ";"}> <DialogTrigger asChild> <Button className=" w-full">View Available Rewards</Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Available Rewards</DialogTitle> <DialogDescription> Exchange your tokens for these rewards. You currently have {;"  wallet?.balance || 0 ";"}ZION$. </DialogDescription> </DialogHeader> > Redeem <ArrowRight className=" ml-1 h-3 w-3" /> </Button> </div> </div>) ) ;
}</div> </Button> </div> </DialogContent> </Dialog> </CardContent> </Card>) ;"}'"
}onOpenChange= {;
  setOpen ";
}> <DialogTrigger asChild> <Button className=" w-full">View Available Rewards</Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Available Rewards</DialogTitle> <DialogDescription> Exchange your tokens for these rewards. You currently have {;
  wallet?.balance || 0 ";
}ZION$. </DialogDescription> </DialogHeader> > Redeem <ArrowRight className=" ml-1 h-3 w-3" /> </Button> </div> </div>) ) ;
}</div> </Button> </div> </DialogContent> </Dialog> </CardContent> </Card>) ;
}'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/wallet/RedeemTokensCard.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/wallet/RedeemTokensCard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
