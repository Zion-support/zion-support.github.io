import React, { useState } from "react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useWallet } from "@/hooks/useWallet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, ArrowRight, ExternalLink } from "lucide-react";
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useWallet} from "@/hooks/useWallet";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Gift, ArrowRight, ExternalLink} from "lucide-react";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from "react",
import { useWallet } from "@/hooks/useWallet",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Gift, ArrowRight, ExternalLink } from "lucide-react",
>>>>>>> merged-prs-20250907-203621
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger} from "@/components/ui/dialog",

<<<<<<< HEAD
type RewardOption = $2;
  title: string,
  description: string,
  cost: number,
  type: 'credit' | 'feature' | 'course'
},

=======



<<<<<<< HEAD


=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
type RewardOption = {
  id: string
  title: string
  description: string
  cost: number
  type: 'credit' | 'feature' | 'course'

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

},



<<<<<<< HEAD
}
},

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const REWARD_OPTIONS: RewardOption[] = [
  {
    id: 'premium-week'
    title: 'Premium Week'
    description: '7 days of premium features including top placement in search results'
    cost: 100
    type: 'feature'
<<<<<<< HEAD

  {
    id: 'resume-review'
    title: 'AI Resume Review'
    description: 'Get your resume analyzed and optimized by our AI'
    cost: 50
    type: 'feature'

  {
    id: 'platform-credit'
    title: '$5 Platform Credit'
    description: 'Get $5 credit to use on any paid service'
    cost: 100
    type: 'credit'
  }

  const handleRedeem = async (option: RewardOption) => {
    if (!wallet |wallet.balance < option.cost) return
    await spendTokens(option.cost, `Redeemed: ${option.title}`)
    setOpen(false)

  return (
=======
<<<<<<< HEAD
  }
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
  },


  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  {
    id: 'resume-review'
    title: 'AI Resume Review'
    description: 'Get your resume analyzed and optimized by our AI'
    cost: 50
    type: 'feature'
<<<<<<< HEAD
  }
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
  },


  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  {
    id: 'platform-credit'
    title: '$5 Platform Credit'
    description: 'Get $5 credit to use on any paid service'
    cost: 100
    type: 'credit'
  }
<<<<<<< HEAD
],

export function RedeemTokensCard() {
  const { wallet, spendTokens } = useWallet($2);
  const [open, setOpen] = useState($2);
  const handleRedeem = $2;
    await spendTokens($2);
    setOpen(false)
  },

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gift className="h-5 w-5" /> Redeem Rewards
=======

<<<<<<< HEAD
=======

],



<<<<<<< HEAD
];
export function RedeemTokensCard() {
  const { wallet, spendTokens } = useWallet();
  const [open, setOpen] = useState(false);
],

export function RedeemTokensCard() {;
  const { wallet, spendTokens } = useWallet();
  const [open, setOpen] = useState(false);
export function RedeemTokensCard() {
  const { wallet, spendTokens } = useWallet(),
  const [open, setOpen] = useState(false),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleRedeem = async (option: RewardOption) => {
    if (!wallet |wallet.balance < option.cost) return
    await spendTokens(option.cost, `Redeemed: ${option.title}`)
    setOpen(false)

<<<<<<< HEAD
=======

  },


<<<<<<< HEAD
  }
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <Card />
      <CardHeader />
        <CardTitle className=\"flex items-center gap-2\" />
          <Gift className=\"h-5 w-5\" /> Redeem Rewards;
<<<<<<< HEAD
        </CardTitle>
        <CardDescription />Exchange your ZION$ for rewards and perks</CardDescription>
      </CardHeader>
=======
>>>>>>> merged-prs-20250907-203621
        </CardTitle>
        <CardDescription />Exchange your ZION$ for rewards and perks</CardDescription>
      </CardHeader>
<<<<<<< HEAD
      <CardContent>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="w-full">View Available Rewards</Button>
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <CardContent />
        <Dialog open={open} onOpenChange={setOpen} />
          <DialogTrigger asChild />
            <Button className=\"w-full\" />View Available Rewards</Button>
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </DialogTrigger>
          <DialogContent />
            <DialogHeader />
              <DialogTitle />Available Rewards</DialogTitle>
              <DialogDescription />
                Exchange your tokens for these rewards. You currently have {wallet?.balance |0} ZION$.
              </DialogDescription>
            </DialogHeader>
<<<<<<< HEAD
            <div className=\"space-y-4 py-4\" />
              {REWARD_OPTIONS.map((option) => (}
                <div key={option.id} className=\"flex justify-between items-center border-b pb-4\" />
                  <div />
                    <h3 className=\"font-medium\" />{option.title}</h3>
                    <p className=\"text-sm text-muted-foreground\" />{option.description}</p>
                  </div>
=======
<<<<<<< HEAD
            <div className="space-y-4 py-4">
              {REWARD_OPTIONS.map((option) => (
                <div key={option.id} className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h3 className="font-medium">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-sm font-bold">{option.cost} ZION$</span>
                    <Button
                      size="sm"
                      variant={wallet && wallet.balance >= option.cost ? "default" : "outline"}
=======
            <div className=\"space-y-4 py-4\" />
              {REWARD_OPTIONS.map((option) => (}
                <div key={option.id} className=\"flex justify-between items-center border-b pb-4\" />
                  <div />
                    <h3 className=\"font-medium\" />{option.title}</h3>
                    <p className=\"text-sm text-muted-foreground\" />{option.description}</p>
                  </div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <div className=\"flex flex-col items-end gap-1\" />
                    <span className=\"text-sm font-bold\" />{option.cost} ZION$</span>
                    <Button;
size=\"sm\"
                      variant={wallet && wallet.balance  />= option.cost ? \"default\" : \"outline\"}
<<<<<<< HEAD
                      disabled={!wallet |wallet.balance < option.cost}
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
                      disabled={!wallet |wallet.balance < option.cost}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      onClick={() => handleRedeem(option)}
                    >
                      Redeem <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Close</Button>
              <Button variant="ghost" size="sm">
                Learn More <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useWallet } from "@/hooks/useWallet";"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { Gift, ArrowRight, ExternalLink } from "lucide-react",;"
=======

<<<<<<< HEAD
}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from "react",;
import { useWallet } from "@/hooks/useWallet",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Gift, ArrowRight, ExternalLink } from "lucide-react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {;
  }
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogHeader,;
  DialogTitle,;
<<<<<<< HEAD
  DialogTrigger} from "@/components/ui/dialog",;"
type RewardOption = {;
  }
  "id": string,;
  "title": string,,
  "description": string,;
  "cost": number,;
  "type": 'credit' | 'feature' | 'course';'
  {;
    }
    "id": 'premium-week',;'
    "title": 'Premium Week',,'
  "description": '7 days of premium features including top placement in search results',;'
    "cost": 100,;
    "type": 'feature';'
  {;
    }
    "id": 'resume-review',;'
    "title": 'AI Resume Review',,'
  "description": 'Get your resume analyzed and optimized by our AI',;'
    "cost": 50,;
    "type": 'feature';'
  {;
    }
    "id": 'platform-credit',;'
    "title": '$5 Platform Credit',,'
  "description": 'Get $5 credit to use on any paid service',;'
    "cost": 100,;
    "type": 'credit';'
  }
=======
  DialogTrigger} from "@/components/ui/dialog",;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
type RewardOption = {;
  id: string,;
  title: string,;
  description: string,;
  cost: number,;
  type: 'credit' | 'feature' | 'course';
<<<<<<< HEAD
},;
=======
};

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const REWARD_OPTIONS: RewardOption[] = [;
  {;
    id: 'premium-week',;
    title: 'Premium Week',;
    description: '7 days of premium features including top placement in search results',;
    cost: 100,;
    type: 'feature';
<<<<<<< HEAD
  },;
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {;
    id: 'resume-review',;
    title: 'AI Resume Review',;
    description: 'Get your resume analyzed and optimized by our AI',;
    cost: 50,;
    type: 'feature';
<<<<<<< HEAD
  },;
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {;
    id: 'platform-credit',;
    title: '$5 Platform Credit',;
    description: 'Get $5 credit to use on any paid service',;
    cost: 100,;
    type: 'credit';
  }
<<<<<<< HEAD

import React, { useState } from "react",;
import { useWallet } from "@/hooks/useWallet",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Gift, ArrowRight, ExternalLink } from "lucide-react",;
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
    cost:100,;
    type:'feature';
  },;
  {;
    id:'resume-review',;
    title:'AI Resume Review',;
    description:'Get your resume analyzed and optimized by our AI',;
    cost:50,;
    type:'feature';
  },;
  {;
    id:'platform-credit',;
    title:'$5 Platform Credit',;
    description:'Get $5 credit to use on any paid service',;
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
],;
export function RedeemTokensCard() {;
  const { wallet, spendTokens } = useWallet(),;
  const [open, setOpen] = useState(false),;
  const handleRedeem = async (option: RewardOption) => {;
    if (!wallet || wallet.balance < option.cost) return,;
    await spendTokens(option.cost, `Redeemed: ${option.title}`);
    setOpen(false);
  };
  return (;
=======
];

export function RedeemTokensCard() {;
  const { wallet, spendTokens } = useWallet();
  const [open, setOpen] = useState(false);

  const handleRedeem = async (option: RewardOption) => {;
    if (!wallet || wallet.balance < option && option.cost) return,;

    await spendTokens(option && option.cost, `Redeemed: ${option && option.title}`),;
    setOpen(false);
  };

  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;"
          <Gift className="h-5 w-5" /> Redeem Rewards;"
        </CardTitle>;
        <CardDescription>Exchange your ZION$ for rewards and perks</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Dialog open={open} onOpenChange={setOpen}>;
          <DialogTrigger asChild>;
            <Button className="w-full">View Available Rewards</Button>;"
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;
              <DialogTitle>Available Rewards</DialogTitle>;
              <DialogDescription>;
                Exchange your tokens for these rewards. You currently have {wallet?.balance || 0} ZION$.;
              </DialogDescription>;
            </DialogHeader>;
<<<<<<< HEAD
            <div className="space-y-4 py-4">;"
=======

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
            <div className="space-y-4 py-4">;
<<<<<<< HEAD
              {REWARD_OPTIONS.map((option) => (;
                <div key={option.id} className="flex justify-between items-center border-b pb-4">;
                  <div>;
                    <h3 className="font-medium">{option.title}</h3>;
                    <p className="text-sm text-muted-foreground">{option.description}</p>;
                  </div>;
                  <div className="flex flex-col items-end gap-1">;
                    <span className="text-sm font-bold">{option.cost} ZION$</span>;
                    <Button;
                      size="sm";
                      variant={wallet && wallet.balance >= option.cost ? "default" : "outline"}
                      disabled={!wallet || wallet.balance < option.cost}
                      onClick={() => handleRedeem(option)}
                    >
                      Redeem <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
=======
              {REWARD_OPTIONS && REWARD_OPTIONS.map((option) => (;
                <div key={option && option.id} className="flex justify-between items-center border-b pb-4">;
                  <div>;
                    <h3 className="font-medium">{option && option.title}</h3>;
                    <p className="text-sm text-muted-foreground">{option && option.description}</p>;
                  </div>;
                  <div className="flex flex-col items-end gap-1">;
                    <span className="text-sm font-bold">{option && option.cost} ZION$</span>;
                    <Button
                      size="sm" 
                      variant={wallet && wallet.balance>= option && option.cost ? "default" : "outline"}
                      disabled={!wallet || wallet.balance < option && option.cost}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      onClick={() => handleRedeem(option)}
                    >;
                      Redeem <ArrowRight className=\"ml-1 h-3 w-3\" />;
                    </Button>;
                  </div>;
                </div>;
              ))}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>;
            <div className="flex justify-between">;
              <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Close</Button>;
              <Button variant="ghost" size="sm">;
                Learn More <ExternalLink className="ml-1 h-3 w-3" />;
<<<<<<< HEAD
=======
=======
import React, { useState } from './react';
import { use_wallet } from '@/hooks / use_wallet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Gift, ArrowRight, ExternalLink } from './lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components / ui / dialog';
;
type RewardOption = {
  id: string,
  title: string,
  description: string,
  cost: number,
  type: 'credit' | 'feature' | 'course';
}
;
const REWARD_OPTIONS: RewardOption[] = [;
  {
    id: 'premium - week',
    title: 'Premium Week',
    description: '7 days of premium features including top placement in search results',
    cost: 100,
    type: 'feature';
  }
  {
    id: 'resume - review',
    title: 'AI Resume Review',
    description: 'Get your resume analyzed and optimized by our AI',
    cost: 50,
    type: 'feature';
  }
  {
    id: 'platform - credit',
    title: '$5 Platform Credit',
    description: 'Get $5 credit to use on any paid service',
    cost: 100,
    type: 'credit';
  }
];
;
export /**
 * RedeemTokensCard - Function description
 */
function RedeemTokensCard() {
  const { wallet, spend_tokens } = use_wallet ();
  const [open, set_open] = useState (false);
;
  const handle_redeem = async (option: RewardOption) => {
    // Check condition
if (return, ) {
  $2
}
    await spend_tokens (option.cost, `Redeemed: ${option.title}`),
    set_open (false);
  }
;
  return (
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <Gift className="h - 5 w - 5" /> Redeem Rewards;
        </CardTitle>;
        <CardDescription > Exchange your ZION$ for rewards and perks</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Dialog open={open} onOpenChange={set_open}>;
          <DialogTrigger as_child>;
            <Button className="w - full">View Available Rewards</Button>;
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;
              <DialogTitle > Available Rewards</DialogTitle>;
              <DialogDescription>;
                Exchange your tokens for these rewards. You currently have {wallet?.balance || 0} ZION$.;
              </DialogDescription>;
            </DialogHeader>;
            <div className="space - y-4 py - 4">;
              {REWARD_OPTIONS.map ((option) => (
                <div key={option.id} className="flex justify - between items - center border - b pb - 4">;
                  <div>;
                    <h3 className="font - medium">{option.title}</h3>;
                    <p className="text - sm text - muted - foreground">{option.description}</p>;
                  </div>;
                  <div className="flex flex - col items - end gap - 1">;
                    <span className="text - sm font - bold">{option.cost} ZION$</span>;
                    <Button;
                      size="sm";
                      variant={wallet && wallet.balance >= option.cost ? "default" : "outline"}
                      disabled={!wallet || wallet.balance < option.cost}
                      on_click={() => handle_redeem (option)}
                    >;
                      Redeem <ArrowRight className="ml - 1 h - 3 w - 3" />;
                    </Button>;
                  </div>;
                </div>))}
            </div>;
            <div className="flex justify - between">;
              <Button variant="outline" size="sm" on_click={() => set_open (false)}>Close</Button>;
              <Button variant="ghost" size="sm">;
                Learn More <ExternalLink className="ml - 1 h - 3 w - 3" />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </Button>;
            </div>;
          </DialogContent>;
        </Dialog>;
      </CardContent>;

<<<<<<< HEAD
}
;
    </Card>);
}
=======
<<<<<<< HEAD
=======



<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
}
    </Card>);
}
    </Card>);
}
    </Card>;
  ),;}
 import {
  Dialog;
DialogContent;
DialogDescription;
DialogHeader;
DialogTitle;
type RewardOption = {
  id: string;
title: string;
description: string;
cost: number;
type: 'credit' | 'feature' | 'course' 
};
const REWARD OPTIONS: RewardOption[] = [ {
  id: 'premium-week';
title: 'Premium Week';
description: '7 days of premium features including top placement in search results';
cost: 100;
type: 'feature' 
};
{
  id: 'resume-review';
title: 'AI Resume Review';
description: 'Get your resume analyzed and optimized by our AI';
cost: 50;
type: 'feature' 
};
{
  id: 'platform-credit';
title: '$5 Platform Credit';
description: 'Get $5 credit to use on any paid service';
cost: 100;
type: 'credit' 
}];
export function RedeemTokensCard () {
  const {
  wallet, spendTokens 
}= useWallet ();
const [open, setOpen] = useState (false);
const handleRedeem = async (option: RewardOption) => {
  if (!wallet || wallet.balance < option.cost) return;
await spendTokens (option.cost, `Redeemed: $ {
  option.title 
}`);
setOpen (false) 
};
flex items-center gap-2"> <Gift className=" h-5 w-5"/> Redeem Rewards </CardTitle> <CardDescription>Exchange your ZION$ for rewards and perks</CardDescription> </CardHeader> <CardContent> <Dialog open= {
  open 
}onOpenChange= {
  setOpen 
}> <DialogTrigger asChild> <Button className=" w-full">View Available Rewards</Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Available Rewards</DialogTitle> <DialogDescription> Exchange your tokens for these rewards. You currently have {
  wallet?.balance || 0 
}ZION$. </DialogDescription> </DialogHeader> > Redeem <ArrowRight className=" ml-1 h-3 w-3" /> </Button> </div> </div>) ) 
}</div> </Button> </div> </DialogContent> </Dialog> </CardContent> </Card>) 
}
    </Card>;
  );
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
;
    </Card>);
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
