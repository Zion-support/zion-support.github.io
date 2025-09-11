




import React, { useState } from "react";
import {useWallet} from "@/hooks/useWallet";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Gift, ArrowRight, ExternalLink} from "lucide-react";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react",
import { useWallet } from "@/hooks/useWallet",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Gift, ArrowRight, ExternalLink } from "lucide-react",
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger} from "@/components/ui/dialog",




<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type RewardOption = {
  id: string
  title: string
  description: string
  cost: number
  type: 'credit' | 'feature' | 'course'
<<<<<<< HEAD


},



<<<<<<< HEAD
}
},

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
},

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const REWARD_OPTIONS: RewardOption[] = [
  {
    id: 'premium-week'
    title: 'Premium Week'
    description: '7 days of premium features including top placement in search results'
    cost: 100
    type: 'feature'
<<<<<<< HEAD

<<<<<<< HEAD
  },


  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    id: 'resume-review'
    title: 'AI Resume Review'
    description: 'Get your resume analyzed and optimized by our AI'
    cost: 50
    type: 'feature'
<<<<<<< HEAD

<<<<<<< HEAD
  },


  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    id: 'platform-credit'
    title: '$5 Platform Credit'
    description: 'Get $5 credit to use on any paid service'
    cost: 100
    type: 'credit'
  }
<<<<<<< HEAD


],



<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleRedeem = async (option: RewardOption) => {
    if (!wallet |wallet.balance < option.cost) return
    await spendTokens(option.cost, `Redeemed: ${option.title}`)
    setOpen(false)
<<<<<<< HEAD


  },


<<<<<<< HEAD
  }
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gift className="h-5 w-5" /> Redeem Rewards
        </CardTitle>
        <CardDescription>Exchange your ZION$ for rewards and perks</CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="w-full">View Available Rewards</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Available Rewards</DialogTitle>
              <DialogDescription>
                Exchange your tokens for these rewards. You currently have {wallet?.balance |0} ZION$.
              </DialogDescription>
            </DialogHeader>
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
                      disabled={!wallet |wallet.balance < option.cost}
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type RewardOption = {;
  id: string,;
  title: string,;
  description: string,;
  cost: number,;
  type: 'credit' | 'feature' | 'course';
<<<<<<< HEAD
<<<<<<< HEAD
},;
=======
};

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
};

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const REWARD_OPTIONS: RewardOption[] = [;
  {;
    id: 'premium-week',;
    title: 'Premium Week',;
    description: '7 days of premium features including top placement in search results',;
    cost: 100,;
    type: 'feature';
<<<<<<< HEAD
<<<<<<< HEAD
  },;
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {;
    id: 'resume-review',;
    title: 'AI Resume Review',;
    description: 'Get your resume analyzed and optimized by our AI',;
    cost: 50,;
    type: 'feature';
<<<<<<< HEAD
<<<<<<< HEAD
  },;
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {;
    id: 'platform-credit',;
    title: '$5 Platform Credit',;
    description: 'Get $5 credit to use on any paid service',;
    cost: 100,;
    type: 'credit';
  }
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                      onClick={() => handleRedeem(option)}
                    >;
                      Redeem <ArrowRight className="ml-1 h-3 w-3" />;
                    </Button>;
                  </div>;
                </div>;
              ))}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>;
            <div className="flex justify-between">;
              <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Close</Button>;
              <Button variant="ghost" size="sm">;
                Learn More <ExternalLink className="ml-1 h-3 w-3" />;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Button>;
            </div>;
          </DialogContent>;
        </Dialog>;
      </CardContent>;




<<<<<<< HEAD
<<<<<<< HEAD
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
