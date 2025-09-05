
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

  return (_<Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gift className="h-5 w-5" /> Redeem Rewards
        </CardTitle>
        <CardDescription>Exchange your ZION$ for rewards and perks</CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog open={_open} onOpenChange={_setOpen}>
          <DialogTrigger asChild>
            <Button className="w-full">View Available Rewards</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Available Rewards</DialogTitle>
              <DialogDescription>
                Exchange your tokens for these rewards. You currently have {_wallet?.balance || 0} ZION$.
              </DialogDescription>
            </DialogHeader>
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
                    >
                      Redeem <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <Button variant="outline" size="sm" onClick={_() => setOpen(false)}>Close</Button>
              <Button variant="ghost" size="sm">
                Learn More <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
