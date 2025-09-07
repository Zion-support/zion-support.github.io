import React, { useState } from "react",;
import { useWallet } from "@/hooks/useWallet",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
<<<<<<< HEAD
import { Gift, ArrowRight, ExternalLink } from 'lucide-react';
=======

import { Gift, ArrowRight, ExternalLink } from 'lucide-react';

>>>>>>> merged-prs-20250907-203621
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogHeader,;
  DialogTitle,;
  DialogTrigger} from "@/components/ui/dialog",;
;
type RewardOption = {;
<<<<<<< HEAD
  id:string,;
  title:string,;
  description:string,;
  cost:number,;
  type:'credit' | 'feature' | 'course';
},;
;
const REWARD_OPTIONS:RewardOption[] = [;
  {;
    id:'premium-week',;
    title:'Premium Week',;
    description:'7 days of premium features including top placement in search results',;
=======

  description:string,;
  cost:number,;

  type:'credit' | 'feature' | 'course';
},;
const REWARD_OPTIONS:RewardOption[] = [;
  {;

>>>>>>> merged-prs-20250907-203621
    cost:100,;
    type:'feature';
  },;
  {;
    id:'resume-review',;
<<<<<<< HEAD
    title:'AI Resume Review',;
    description:'Get your resume analyzed and optimized by our AI',;
=======

>>>>>>> merged-prs-20250907-203621
    cost:50,;
    type:'feature';
  },;
  {;
    id:'platform-credit',;
<<<<<<< HEAD
    title:'$5 Platform Credit',;
    description:'Get $5 credit to use on any paid service',;
    cost:100,;
    type:'credit';
  }
=======

    cost:100,;

    type:'credit';
  }]
>>>>>>> merged-prs-20250907-203621
],;
export function RedeemTokensCard() {;
  const { wallet, spendTokens } = useWallet(),;
  const [open, setOpen] = useState(false),;
<<<<<<< HEAD
;
  const handleRedeem = async (option:RewardOption) => {;
    if (!wallet || wallet.balance < option.cost) return,;
    ;
    await spendTokens(option.cost, `Redeemed:${option.title}`),;
    setOpen(false),;
  },;
;
=======
  const handleRedeem = async (option:RewardOption) => {;
    if (!wallet || wallet.balance < option.cost) return,;
    await spendTokens(option.cost, `Redeemed: ${option.title;}`),;
    setOpen(false),;
>>>>>>> merged-prs-20250907-203621
  return (;

    <Card>;

      <CardHeader>;
<<<<<<< HEAD
        <CardTitle className="flex items-center gap-2">;
          <Gift className="h-5 w-5" /> Redeem Rewards;
        </CardTitle>;
        <CardDescription>Exchange your ZION$ for rewards and perks</CardDescription>;
      </CardHeader>;
=======

        <CardTitle className="flex items-center gap-2">;"
"
          <Gift className="h-5 w-5" /> Redeem Rewards;"

        <CardDescription>Exchange your ZION$ for rewards and perks;
>>>>>>> merged-prs-20250907-203621
      <CardContent>;

        <Dialog open={open} onOpenChange={setOpen}>;

          <DialogTrigger asChild>;
<<<<<<< HEAD
            <Button className="w-full">View Available Rewards</Button>;
          </DialogTrigger>;
=======
            <Button className="w-full">View Available Rewards;"
>>>>>>> merged-prs-20250907-203621
          <DialogContent>;

            <DialogHeader>;

              <DialogTitle>Available Rewards;
              <DialogDescription>;
<<<<<<< HEAD
                Exchange your tokens for these rewards. You currently have {wallet?.balance || 0} ZION$.;
              </DialogDescription>;
            </DialogHeader>;
            <div className="space-y-4 py-4">;
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
                      onClick={() => handleRedeem(option)}
                    >;
                      Redeem <ArrowRight className="ml-1 h-3 w-3" />;
                    </Button>;
=======

                      onClick={() => handleRedeem(option)}
                    >;"
                      Redeem <ArrowRight className="ml-1 h-3 w-3" />;"

>>>>>>> merged-prs-20250907-203621
                  </div>;
                </div>;
              ))}
            </div>;
            <div className="flex justify-between">;
              <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Close</Button>;
              <Button variant="ghost" size="sm">;
                Learn More <ExternalLink className="ml-1 h-3 w-3" />;
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
 } from "lucide-react";
import {;
=======
<<<<<<< HEAD
 } from "lucide-react";"
  }
=======
 } from "lucide-react";
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
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
=======

  description: string;
>>>>>>> merged-prs-20250907-203621
cost: number;';
type: 'credit' | 'feature' | 'course' ;
};
const REWARD OPTIONS: RewardOption[] = [ {';
  id: 'premium-week';';
<<<<<<< HEAD
title: 'Premium Week';';
description: '7 days of premium features including top placement in search results';
=======
title: 'Premium Week';',
  description: '7 days of premium features including top placement in search results';
>>>>>>> merged-prs-20250907-203621
cost: 100;';
type: 'feature' ;
};
{';
  id: 'resume-review';';
<<<<<<< HEAD
title: 'AI Resume Review';';
description: 'Get your resume analyzed and optimized by our AI';
=======
title: 'AI Resume Review';',
  description: 'Get your resume analyzed and optimized by our AI';
>>>>>>> merged-prs-20250907-203621
cost: 50;';
type: 'feature' ;
};
{';
  id: 'platform-credit';';
<<<<<<< HEAD
title: '$5 Platform Credit';';
description: 'Get $5 credit to use on any paid service';
=======
title: '$5 Platform Credit';',
  description: 'Get $5 credit to use on any paid service';

>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
await spendTokens (option.cost, `Redeemed: $ {;
  option.title ;
}`);
setOpen (false) ;
};"flex items-center gap-2"> <Gift className=" h-5 w-5"/> Redeem Rewards </CardTitle> <CardDescription>Exchange your ZION$ for rewards and perks</CardDescription> </CardHeader> <CardContent> <Dialog open= {;
  open ;
}onOpenChange= {;"  setOpen ";"}> <DialogTrigger asChild> <Button className=" w-full">View Available Rewards</Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Available Rewards</DialogTitle> <DialogDescription> Exchange your tokens for these rewards. You currently have {;"  wallet?.balance || 0 ";"}ZION$. </DialogDescription> </DialogHeader> > Redeem <ArrowRight className=" ml-1 h-3 w-3" /> </Button> </div> </div>) ) ;
}</div> </Button> </div> </DialogContent> </Dialog> </CardContent> </Card>) ;"}'"
=======
            <div className="flex justify-between">;"
              <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Close;""
              <Button variant="ghost" size="sm">;"
                Learn More <ExternalLink className="ml-1 h-3 w-3" />;"

  if (!wallet || wallet.balance < option.cost) return;`;
pr-12325
await spendTokens (option.cost, `Redeemed: $ {;
  option.title ;)`;
}`);

};"flex items-center gap-2"> <Gift className=" h-5 w-5"/> Redeem Rewards </CardTitle> <CardDescription>Exchange your ZION$ for rewards and perks</CardDescription> </CardHeader> <CardContent> <Dialog open= {;
  open ;
<<<<<<< HEAD
:temp_broken_files/wallet/RedeemTokensCard.tsx
}onOpenChange= {;"  setOpen ";"}> <DialogTrigger asChild> <Button className=" w-full">View Available Rewards</Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Available Rewards</DialogTitle> <DialogDescription> Exchange your tokens for these rewards. You currently have {;"  wallet?.balance || 0 ";"}ZION$. </DialogDescription> </DialogHeader> > Redeem <ArrowRight className=" ml-1 h-3 w-3" /> </Button> </div> </div>) ) ;
}</div> </Button> </div> </DialogContent> </Dialog> </CardContent> </Card>) ;"}'"
=======
<<<<<<< HEAD
:temp_broken_files/wallet/RedeemTokensCard.tsx
}onOpenChange= {;"  setOpen ";"}> <DialogTrigger asChild> <Button className=" w-full">View Available Rewards</Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Available Rewards</DialogTitle> <DialogDescription> Exchange your tokens for these rewards. You currently have {;"  wallet?.balance || 0 ";"}ZION$. </DialogDescription> </DialogHeader> > Redeem <ArrowRight className=" ml-1 h-3 w-3" /> </Button> </div> </div>) ) ;
}</div> </Button> </div> </DialogContent> </Dialog> </CardContent> </Card>) ;"}'"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}onOpenChange= {;
  setOpen ";
}> <DialogTrigger asChild> <Button className=" w-full">View Available Rewards</Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Available Rewards</DialogTitle> <DialogDescription> Exchange your tokens for these rewards. You currently have {;
  wallet?.balance || 0 ";
}ZION$. </DialogDescription> </DialogHeader> > Redeem <ArrowRight className=" ml-1 h-3 w-3" /> </Button> </div> </div>) ) ;
}</div> </Button> </div> </DialogContent> </Dialog> </CardContent> </Card>) ;
}'"
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/wallet/RedeemTokensCard.tsx
=======
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/wallet/RedeemTokensCard.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
