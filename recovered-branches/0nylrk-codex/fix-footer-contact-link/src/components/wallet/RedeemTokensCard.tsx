
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { useWallet } from "@/hooks/useWallet",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Gift, ArrowRight, ExternalLink } from "lucide-react",
=======
import React, { useState } from &quot;react&quot;;
import { useWallet } from &quot;@/hooks/useWallet&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Gift, ArrowRight, ExternalLink } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
<<<<<<< HEAD
  DialogTrigger} from "@/components/ui/dialog",
=======
  DialogTrigger} from &quot;@/components/ui/dialog&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

type RewardOption = {
  id: string,
  title: string,
  description: string,
  cost: number,
  type: 'credit' | 'feature' | 'course'
},

const REWARD_OPTIONS: RewardOption[] = [
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
=======
import React, {_useState} from "react";
import {_Dialog, _DialogContent, _DialogDescription, _DialogHeader, _DialogTitle, _DialogTrigger} from "@/components/ui/dialog";

type RewardOption = {_id: string;
  title: string;
  description: string;
  cost: number;
  type: 'credit' | 'feature' | 'course';};

const REWARD_OPTIONS: RewardOption[] = [
  {_id: 'premium-week', _title: 'Premium Week', _description: '7 days of premium features including top placement in search results', _cost: 100, _type: 'feature'},
  {_id: 'resume-review', _title: 'AI Resume Review', _description: 'Get your resume analyzed and optimized by our AI', _cost: 50, _type: 'feature'},
  {_id: 'platform-credit', _title: '$5 Platform Credit', _description: 'Get $5 credit to use on any paid service', _cost: 100, _type: 'credit'}
];

export function RedeemTokensCard() {_const { wallet, _spendTokens} = useWallet();
  const [open, setOpen] = useState(false);

  const _handleRedeem = async (_option: RewardOption) => {_if (!wallet || wallet.balance < option.cost) return;
    
    await spendTokens(option.cost, _`Redeemed: ${option.title}`);
    setOpen(false);
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<Card>
      <CardHeader>
        <CardTitle className=&quot;flex items-center gap-2&quot;>
          <Gift className=&quot;h-5 w-5&quot; /> Redeem Rewards
        </CardTitle>
        <CardDescription>Exchange your ZION$ for rewards and perks</CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog open={_open} onOpenChange={_setOpen}>
          <DialogTrigger asChild>
            <Button className=&quot;w-full&quot;>View Available Rewards</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Available Rewards</DialogTitle>
              <DialogDescription>
                Exchange your tokens for these rewards. You currently have {_wallet?.balance || 0} ZION$.
              </DialogDescription>
            </DialogHeader>
<<<<<<< HEAD
            <div className=&quot;space-y-4 py-4&quot;>
              {REWARD_OPTIONS.map((option) => (
                <div key={option.id} className=&quot;flex justify-between items-center border-b pb-4&quot;>
                  <div>
                    <h3 className=&quot;font-medium&quot;>{option.title}</h3>
                    <p className=&quot;text-sm text-muted-foreground&quot;>{option.description}</p>
                  </div>
                  <div className=&quot;flex flex-col items-end gap-1&quot;>
                    <span className=&quot;text-sm font-bold&quot;>{option.cost} ZION$</span>
                    <Button 
                      size=&quot;sm&quot; 
                      variant={wallet && wallet.balance >= option.cost ? &quot;default&quot; : &quot;outline&quot;}
                      disabled={!wallet || wallet.balance < option.cost}
                      onClick={() => handleRedeem(option)}
=======
            <div className="space-y-4 py-4">
              {_REWARD_OPTIONS.map((option) => (_<div key={option.id} className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h3 className="font-medium">{_option.title}</h3>
                    <p className="text-sm text-muted-foreground">{_option.description}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-sm font-bold">{_option.cost} ZION$</span>
                    <Button 
                      size="sm" 
                      variant={_wallet && wallet.balance >= option.cost ? "default" : "outline"}
                      disabled={_!wallet || wallet.balance < option.cost}
                      onClick={_() => handleRedeem(option)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      Redeem <ArrowRight className=&quot;ml-1 h-3 w-3&quot; />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
<<<<<<< HEAD
            <div className=&quot;flex justify-between&quot;>
              <Button variant=&quot;outline&quot; size=&quot;sm&quot; onClick={() => setOpen(false)}>Close</Button>
              <Button variant=&quot;ghost&quot; size=&quot;sm&quot;>
                Learn More <ExternalLink className=&quot;ml-1 h-3 w-3&quot; />
=======
            <div className="flex justify-between">
              <Button variant="outline" size="sm" onClick={_() => setOpen(false)}>Close</Button>
              <Button variant="ghost" size="sm">
                Learn More <ExternalLink className="ml-1 h-3 w-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}
