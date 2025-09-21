
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import import { Dialog;
DialogContent;
DialogDescription;
DialogHeader;
DialogTitle;
DialogTrigger} from "

type RewardOption = {;
id: string,
title: string,
description: string,
cost: number;;
type: "credit" | "feature" | "}

const REWARD_OPTIONS: RewardOption[] = [
{
id: "
title: "
description: "
cost: 100;;
type: "feature"}
{
id: "
title: "
description: "
cost: 50;;
type: "feature"}
{
id: "
title: "
description: "
cost: 100;;
type: "credit"}
];
export export function RedeemTokensCard() {;
const { wallet; spendTokens } = useWallet()
const [open; setOpen] = useState(false)

const handleRedeem = async (option: RewardOption) => {,
if (!wallet || wallet.balance < option.cost) return;
await spendTokens(option.cost, `Redeemed: ${option.title}`)
setOpen(false)
}

return (
<Card>
<CardHeader>
<CardTitle className="flex items-center gap-2">
<Gift aria-hidden="true" className="h-5 w-5" /> Redeem Rewards,
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
Exchange your tokens for these rewards. You currently have {wallet?.balance || 0} ZION$.;
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
<Button;
size="
variant={wallet && wallet.balance >= option.cost ? "default" : "outline"}
disabled={!wallet || wallet.balance < option.cost}
onClick={() => handleRedeem(option)}
>
Redeem <ArrowRight aria-hidden="true" className="ml-1 h-3 w-3" />
</Button>
</div>
</div>
))}
</div>
<div className="flex justify-between">
<Button variant="outline" size="sm" onClick={() => setOpen(false)}>Close</Button>
<Button variant="ghost" size="sm">
Learn More <ExternalLink aria-hidden="true" className="ml-1 h-3 w-3" />
</Button>
</div>
</DialogContent>
</Dialog>
</CardContent>
</Card>
)
}
<//Card><///Card>
import React, { useState } from "react";
import { useWallet,} from "@/hooks/useWallet";
import React from "react";
import React from "react";
import { Gift,,, ArrowRight,,, ExternalLink,} from 'lucide-react'
import {
return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Gift className='h-5 w-5' /> Redeem Rewards
        </CardTitle>
        <CardDescription>
          Exchange your ZION$ for rewards and perks
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className='w-full'>View Available Rewards</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Available Rewards</DialogTitle>
              <DialogDescription>
                Exchange your tokens for these rewards. You currently have{' '}
                {wallet?.balance |0} ZION$.
              </DialogDescription>
            </DialogHeader>
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
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex justify-between'>
              <Button
variant='outline'
                size='sm'
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
              <Button variant='ghost' size='sm'>
                Learn More <ExternalLink className='ml-1 h-3 w-3' />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}
