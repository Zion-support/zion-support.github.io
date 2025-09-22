
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from "react";
import {useWallet} from "@/hooks/useWallet";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Gift, ArrowRight, ExternalLink} from "lucide-react";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
type RewardOption = {
  id: string
  title: string
  description: string
  cost: number
  type: 'credit' | 'feature' | 'course'
<<<<<<< HEAD
=======
}
},
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const REWARD_OPTIONS: RewardOption[] = [
  {
    id: 'premium-week'
    title: 'Premium Week'
    description: '7 days of premium features including top placement in search results'
    cost: 100
    type: 'feature'
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  {
    id: 'resume-review'
    title: 'AI Resume Review'
    description: 'Get your resume analyzed and optimized by our AI'
    cost: 50
    type: 'feature'
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  {
    id: 'platform-credit'
    title: '$5 Platform Credit'
    description: 'Get $5 credit to use on any paid service'
    cost: 100
    type: 'credit'
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const handleRedeem = async (option: RewardOption) => {
    if (!wallet |wallet.balance < option.cost) return
    await spendTokens(option.cost, `Redeemed: ${option.title}`)
    setOpen(false)

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <Card />
      <CardHeader />
        <CardTitle className=\"flex items-center gap-2\" />
          <Gift className=\"h-5 w-5\" /> Redeem Rewards;
        </CardTitle>
        <CardDescription />Exchange your ZION$ for rewards and perks</CardDescription>
      </CardHeader>
      <CardContent />
        <Dialog open={open} onOpenChange={setOpen} />
          <DialogTrigger asChild />
            <Button className=\"w-full\" />View Available Rewards</Button>
          </DialogTrigger>
          <DialogContent />
            <DialogHeader />
              <DialogTitle />Available Rewards</DialogTitle>
              <DialogDescription />
                Exchange your tokens for these rewards. You currently have {wallet?.balance |0} ZION$.
              </DialogDescription>
            </DialogHeader>
            <div className=\"space-y-4 py-4\" />
              {REWARD_OPTIONS.map((option) => (}
                <div key={option.id} className=\"flex justify-between items-center border-b pb-4\" />
                  <div />
                    <h3 className=\"font-medium\" />{option.title}</h3>
                    <p className=\"text-sm text-muted-foreground\" />{option.description}</p>
                  </div>
                  <div className=\"flex flex-col items-end gap-1\" />
                    <span className=\"text-sm font-bold\" />{option.cost} ZION$</span>
                    <Button;
size=\"sm\"
                      variant={wallet && wallet.balance  />= option.cost ? \"default\" : \"outline\"}
                      disabled={!wallet |wallet.balance < option.cost}
<<<<<<< HEAD


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
              ))}
            </div>
            <div className=\"flex justify-between\" />
              <Button variant=\"outline\" size=\"sm\" onClick={() = /> setOpen(false)}>Close</Button>
              <Button variant=\"ghost\" size=\"sm\" />
                Learn More <ExternalLink className=\"ml-1 h-3 w-3\" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
import React, { useState } from \"react\";
import { useWallet } from \"@/hooks/useWallet\";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from \"@/components/ui/card\",;
import { Button } from \"@/components/ui/button\",;
import { Gift, ArrowRight, ExternalLink } from \"lucide-react\",;
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogHeader,;}
  DialogTitle,;}
  DialogTrigger} from \"@/components/ui/dialog\",;
type RewardOption = {;
  id: string,;
  title: string,,
  description: string,;
  cost: number,;
  type: 'credit' | 'feature' | 'course';
const REWARD_OPTIONS: RewardOption[] = [;
  {;
    id: 'premium-week',;
    title: 'Premium Week',,
  description: '7 days of premium features including top placement in search results',;
    cost: 100,;
    type: 'feature';
  {;
    id: 'resume-review',;
    title: 'AI Resume Review',,
  description: 'Get your resume analyzed and optimized by our AI',;
    cost: 50,;
    type: 'feature';
  {;
    id: 'platform-credit',;
    title: '$5 Platform Credit',,
  description: 'Get $5 credit to use on any paid service',;
    cost: 100,;}
    type: 'credit';}
  }
    <Card />;
      <CardHeader />;
        <CardTitle className=\"flex items-center gap-2\" />;
          <Gift className=\"h-5 w-5\" /> Redeem Rewards;
        </CardTitle>;
        <CardDescription />Exchange your ZION$ for rewards and perks</CardDescription>;
      </CardHeader>;
      <CardContent />;
        <Dialog open={open} onOpenChange={setOpen} />;
          <DialogTrigger asChild />;
            <Button className=\"w-full\" />View Available Rewards</Button>;
          </DialogTrigger>;
          <DialogContent />;
            <DialogHeader />;
              <DialogTitle />Available Rewards</DialogTitle>;
              <DialogDescription />;
                Exchange your tokens for these rewards. You currently have {wallet?.balance || 0} ZION$.;
              </DialogDescription>;
            </DialogHeader>;
<<<<<<< HEAD
            <div className="space-y-4 py-4">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            <div className=\"space-y-4 py-4\" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      onClick={() => handleRedeem(option)}
                    >;
                      Redeem <ArrowRight className=\"ml-1 h-3 w-3\" />;
                    </Button>;
                  </div>;
                </div>;
              ))}
<<<<<<< HEAD

            </div>;
            <div className="flex justify-between">;
              <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Close</Button>;
              <Button variant="ghost" size="sm">;
                Learn More <ExternalLink className="ml-1 h-3 w-3" />;
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              </Button>;
            </div>;
          </DialogContent>;
        </Dialog>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </Card>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

}
;
    </Card>);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
;
    </Card>);
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
