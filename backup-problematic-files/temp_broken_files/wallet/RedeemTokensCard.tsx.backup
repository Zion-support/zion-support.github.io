import React, { useState } from "react",;
import { useWallet } from "@/hooks/useWallet",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
<<<<<<< HEAD


import { Gift, ArrowRight, ExternalLink } from 'lucide-react';


=======

import { Gift, ArrowRight, ExternalLink } from 'lucide-react';

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  description:string,;
  cost:number,;

  type:'credit' | 'feature' | 'course';
},;
const REWARD_OPTIONS:RewardOption[] = [;
  {;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    cost:100,;
    type:'feature';
  },;
  {;
    id:'resume-review',;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    cost:50,;
    type:'feature';
  },;
  {;
    id:'platform-credit',;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    cost:100,;

    type:'credit';
  }]
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
],;
export function RedeemTokensCard() {;
  const { wallet, spendTokens } = useWallet(),;
  const [open, setOpen] = useState(false),;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleRedeem = async (option:RewardOption) => {;
    if (!wallet || wallet.balance < option.cost) return,;
    await spendTokens(option.cost, `Redeemed: ${option.title;}`),;
    setOpen(false),;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (;

    <Card>;

      <CardHeader>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <CardTitle className="flex items-center gap-2">;"
"
          <Gift className="h-5 w-5" /> Redeem Rewards;"

        <CardDescription>Exchange your ZION$ for rewards and perks;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <CardContent>;

        <Dialog open={open} onOpenChange={setOpen}>;

          <DialogTrigger asChild>;
<<<<<<< HEAD

            <Button className="w-full">View Available Rewards;"

=======
            <Button className="w-full">View Available Rewards;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <DialogContent>;

            <DialogHeader>;

              <DialogTitle>Available Rewards;
              <DialogDescription>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                      onClick={() => handleRedeem(option)}
                    >;"
                      Redeem <ArrowRight className="ml-1 h-3 w-3" />;"

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
 } from "lucide-react";
>>>>>>> origin/cursor/delete-old-data-records-6bba
  Dialog;
DialogContent;
DialogDescription;
DialogHeader;
DialogTitle;
type RewardOption = {;
  id: string;
<<<<<<< HEAD


  description: string;

=======

  description: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba
cost: number;';
type: 'credit' | 'feature' | 'course' ;
};
const REWARD OPTIONS: RewardOption[] = [ {';
  id: 'premium-week';';
<<<<<<< HEAD

title: 'Premium Week';',
  description: '7 days of premium features including top placement in search results';

=======
title: 'Premium Week';',
  description: '7 days of premium features including top placement in search results';
>>>>>>> origin/cursor/delete-old-data-records-6bba
cost: 100;';
type: 'feature' ;
};
{';
  id: 'resume-review';';
<<<<<<< HEAD

title: 'AI Resume Review';',
  description: 'Get your resume analyzed and optimized by our AI';

=======
title: 'AI Resume Review';',
  description: 'Get your resume analyzed and optimized by our AI';
>>>>>>> origin/cursor/delete-old-data-records-6bba
cost: 50;';
type: 'feature' ;
};
{';
  id: 'platform-credit';';
<<<<<<< HEAD

title: '$5 Platform Credit';',
  description: 'Get $5 credit to use on any paid service';


=======
title: '$5 Platform Credit';',
  description: 'Get $5 credit to use on any paid service';

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
=======
:temp_broken_files/wallet/RedeemTokensCard.tsx
}onOpenChange= {;"  setOpen ";"}> <DialogTrigger asChild> <Button className=" w-full">View Available Rewards</Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Available Rewards</DialogTitle> <DialogDescription> Exchange your tokens for these rewards. You currently have {;"  wallet?.balance || 0 ";"}ZION$. </DialogDescription> </DialogHeader> > Redeem <ArrowRight className=" ml-1 h-3 w-3" /> </Button> </div> </div>) ) ;
}</div> </Button> </div> </DialogContent> </Dialog> </CardContent> </Card>) ;"}'"
>>>>>>> origin/cursor/delete-old-data-records-6bba
}onOpenChange= {;
  setOpen ";
}> <DialogTrigger asChild> <Button className=" w-full">View Available Rewards</Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Available Rewards</DialogTitle> <DialogDescription> Exchange your tokens for these rewards. You currently have {;
  wallet?.balance || 0 ";
}ZION$. </DialogDescription> </DialogHeader> > Redeem <ArrowRight className=" ml-1 h-3 w-3" /> </Button> </div> </div>) ) ;
}</div> </Button> </div> </DialogContent> </Dialog> </CardContent> </Card>) ;
}'"

<<<<<<< HEAD


=======
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/wallet/RedeemTokensCard.tsx
>>>>>>> origin/cursor/delete-old-data-records-6bba
