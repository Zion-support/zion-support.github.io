<<<<<<< HEAD
<<<<<<< HEAD


import React, { useState } from "react",
import { useWallet } from "@/hooks/useWallet",

=======
import React, { useState } from 'react'
import { useWallet } from '@/hooks/useWallet'
=======
=======
<<<<<<< HEAD
import React, { useState } from 'react'
import { useWallet } from '@/hooks/useWallet'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

import React, { useState } from "react",
import { useWallet } from "@/hooks/useWallet",
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, ArrowRight, ExternalLink } from 'lucide-react'
import {
<<<<<<< HEAD
import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Gift, ArrowRight, ExternalLink } from 'lucide-react'
<<<<<<< HEAD
import {
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button'; import { Gift, ArrowRight, ExternalLink } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD

  Dialog,
=======
>>>>>>>   Dialog,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  Dialog,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
<<<<<<< HEAD
<<<<<<< HEAD

} from '@/components/ui/dialog'
type RewardOption = {

=======
  DialogTrigger} from "@/components/ui/dialog",
=======
  DialogTrigger} from "@/components/ui/dialog",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'; import { Gift, ArrowRight, ExternalLink } from 'lucide-react'
  Dialog
  DialogContent
  DialogDescription
  DialogHeader
  DialogTitle
  DialogTrigger
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  DialogTrigger,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from '@/components/ui/dialog'
type RewardOption = {
<<<<<<< HEAD
  id: string
title: string;
description: string;
cost: number;'
type: 'credit' | 'feature' | 'course'
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const REWARD_OPTIONS: RewardOption[] = [
  {
    id: 'premium-week'
    title: 'Premium Week'
    description:
      '7 days of premium features including top placement in search results'
    cost: 100
    type: 'feature'
  }
  {
    id: 'resume-review'
    title: 'AI Resume Review'
    description: 'Get your resume analyzed and optimized by our AI'
    cost: 50
    type: 'feature'
  }
  {
    id: 'platform-credit'
    title: '$5 Platform Credit'
    description: 'Get $5 credit to use on any paid service'
    cost: 100
    type: 'credit'
  }
]
export function RedeemTokensCard() {
  const { wallet, spendTokens } = useWallet()
  const [open, setOpen] = useState(false)
  const handleRedeem = async (option: RewardOption) => {
    if (!wallet |wallet.balance < option.cost) return
    await spendTokens(option.cost, `Redeemed: ${option.title}`)
    setOpen(false)
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  id: string,
  title: string,
  description: string,
  cost: number,
  type: 'credit' | 'feature' | 'course'
},

<<<<<<< HEAD
const REWARD_OPTIONS: RewardOption[] = [
=======
onst REWARD_OPTIONS: RewardOption[] = [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
=======
  DialogTrigger} from "@/components/ui/dialog",

type RewardOption = {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string,
  title: string,
  description: string,
  cost: number,
  type: 'credit' | 'feature' | 'course'
},

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const REWARD_OPTIONS: RewardOption[] = [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    id: 'premium-week',
    title: 'Premium Week',
    description: '7 days of premium features including top placement in search results',
    cost: 100,
    type: 'feature'
  },
  {
    id: 'resume-review',
    title: 'AI Resume Review',
    description: 'Get your resume analyzed and optimized by our AI',
    cost: 50,
    type: 'feature'
  },
  {
    id: 'platform-credit',
    title: '$5 Platform Credit',
    description: 'Get $5 credit to use on any paid service',
    cost: 100,
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    type: 'credit',
  },
]
export function RedeemTokensCard() {
  const { wallet, spendTokens } = useWallet()
  const [open, setOpen] = useState(false)
  const handleRedeem = async (option: RewardOption) => {
    if (!wallet || wallet.balance < option.cost) return;
    await spendTokens(option.cost, `Redeemed: ${option.title}`)
    setOpen(false)
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    type: 'credit'
  }
],


  const handleRedeem = async (option: RewardOption) => {
    if (!wallet || wallet.balance < option.cost) return,
    
    await spendTokens(option.cost, `Redeemed: ${option.title}`),
    setOpen(false)
  },
<<<<<<< HEAD

  return (
=======
>>>>>>> 
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    type: 'credit'
  }
],

export function RedeemTokensCard() {
  const { wallet, spendTokens } = useWallet(),
  const [open, setOpen] = useState(false),

  const handleRedeem = async (option: RewardOption) => {
    if (!wallet || wallet.balance < option.cost) return,
    
    await spendTokens(option.cost, `Redeemed: ${option.title}`),
    setOpen(false)
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                Exchange your tokens for these rewards. You currently have{' '}
                {wallet?.balance |0} ZION$.
              </DialogDescription>
            </DialogHeader>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className='space-y-4 py-4'>
              {REWARD_OPTIONS.map(option => (
                <div
                  key={option.id}
                  className='flex justify-between items-center border-b pb-4'
                >                  <div>
                    <h3 className='font-medium'>{option.title}</h3>
                    <p className='text-sm text-muted-foreground'>
                      {option.description}
                    </p>
                  </div>
                  <div className='flex flex-col items-end gap-1'>
                    <span className='text-sm font-bold'>
                      {option.cost} ZION$
                    </span>
                    <Button
                      size='sm'
                      variant={
                        wallet && wallet.balance >= option.cost
                          ? 'default'
                          : 'outline'
                      }
                      disabled={!wallet |wallet.balance < option.cost}
                      onClick={() => handleRedeem(option)}                    >
                      Redeem <ArrowRight className='ml-1 h-3 w-3' />
<<<<<<< HEAD
<<<<<<< HEAD

=======
                Exchange your tokens for these rewards. You currently have {wallet?.balance || 0} ZION$.
              </DialogDescription>
            </DialogHeader>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
                Exchange your tokens for these rewards. You currently have {wallet?.balance || 0} ZION$.
              </DialogDescription>
            </DialogHeader>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                      disabled={!wallet || wallet.balance < option.cost}
                      onClick={() => handleRedeem(option)}
                    >
                      Redeem <ArrowRight className="ml-1 h-3 w-3" />
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </Button>
=======
>>>>>>>                     </Button>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Close</Button>
              <Button variant="ghost" size="sm">
                Learn More <ExternalLink className="ml-1 h-3 w-3" />
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
<<<<<<< HEAD
<<<<<<< HEAD

=======
  );
};
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  );
};
=======
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react",;
import { useWallet } from "@/hooks/useWallet",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Gift, ArrowRight, ExternalLink } from 'lucide-react';
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogHeader,;
  DialogTitle,;
  DialogTrigger} from "@/components/ui/dialog",;
type RewardOption = {;
  id: string,;
  title: string,;
  description: string,;
  cost: number,;
  type: 'credit' | 'feature' | 'course';
},;
const REWARD_OPTIONS: RewardOption[] = [;
  {;
    id: 'premium-week',;
    title: 'Premium Week',;
    description: '7 days of premium features including top placement in search results',;
    cost: 100,;
    type: 'feature';
  },;
  {;
    id: 'resume-review',;
    title: 'AI Resume Review',;
    description: 'Get your resume analyzed and optimized by our AI',;
    cost: 50,;
    type: 'feature';
  },;
  {;
    id: 'platform-credit',;
    title: '$5 Platform Credit',;
    description: 'Get $5 credit to use on any paid service',;
    cost: 100,;
    type: 'credit';
  }
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
                    >;
                      Redeem <ArrowRight className="ml-1 h-3 w-3" />;
                    </Button>;
                  </div>;
                </div>;
              ))}
            </div>;
<<<<<<< HEAD
            <div className='flex justify - between'>;
              <Button;
                variant='outline';
                size='sm';
                on_click={() => set_open (false)}

              >;
                Close;
              </Button>;
              <Button variant='ghost' size='sm'>;

                Learn More <ExternalLink className='ml - 1 h - 3 w - 3' />;

=======
            <div className="flex justify-between">;
              <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Close</Button>;
              <Button variant="ghost" size="sm">;
                Learn More <ExternalLink className="ml-1 h-3 w-3" />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </Button>;
            </div>;
          </DialogContent>;
        </Dialog>;
      </CardContent>;
    </Card>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
  )

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
