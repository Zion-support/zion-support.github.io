

import React, { useState } from "react",;""
import { useWallet } from "@/hooks/useWallet",;""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;""
import { Button } from "@/components/ui/button",;""
import { Gift, ArrowRight, ExternalLink } from 'lucide-react';'

import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;

  DialogHeader,;
  DialogTitle,;'
  DialogTrigger} from "@/components/ui/dialog",;"

;
type RewardOption = {;
  id:string,;
  title:string,,
  description:string,;

  cost:number,;"
  type:'credit' | 'feature' | 'course';'
},;
;
const REWARD_OPTIONS:RewardOption[] = [;
  {;'
    id:'premium-week',;''
    title:'Premium Week',;''
    description:'7 days of premium features including top placement in search results',;'
    cost:100,;'
    type:'feature';'
  },;
  {;'
    id:'resume-review',;''
    title:'AI Resume Review',;''
    description:'Get your resume analyzed and optimized by our AI',;'
    cost:50,;'
    type:'feature';'
  },;
  {;'
    id:'platform-credit',;''
    title:'$5 Platform Credit',;''
    description:'Get $5 credit to use on any paid service',;'
    cost:100,;'
    type:'credit';'
  }]

],;
;
export function RedeemTokensCard() {;}
  const { wallet, spendTokens } = useWallet(),;
  const [open, setOpen] = useState(false),;
;
  const handleRedeem = async (option:RewardOption) => {;
    if (!wallet || wallet.balance < option.cost) return,;}
    ;}
    await spendTokens(option.cost, `Redeemed:${option.title}`),;
    setOpen(false),;
  },;
;
  return (;

    <Card>;
</Card>
      <CardHeader>;
</CardHeader>'
        <CardTitle className="flex items-center gap-2">;"
</CardTitle>"
          <Gift className="h-5 w-5" /> Redeem Rewards;"
</Gift>

        </CardTitle>;
        <CardDescription />Exchange your ZION$ for rewards and perks</CardDescription>;
      </CardHeader>;

      <CardContent>;
</CardContent>
        <Dialog open={open} onOpenChange={setOpen}>;
</Dialog>
          <DialogTrigger asChild>;
</DialogTrigger>"
            <Button className="w-full">View Available Rewards</Button>;"
          </DialogTrigger>;
          <DialogContent>;
</DialogContent>
            <DialogHeader>;
</DialogHeader>
              <DialogTitle>Available Rewards</DialogTitle>;
              <DialogDescription>;
</DialogDescription>
              </DialogDescription>;
            </DialogHeader>;"
            <div className="space-y-4 py-4">;"
</div>"
                <div key={option.id} className="flex justify-between items-center border-b pb-4">;"
</div>
                  <div>;
</div>"
                    <h3 className="font-medium">{option.title}</h3>;""
                    <p className="text-sm text-muted-foreground">{option.description}</p>;"
                  </div>;"
                  <div className="flex flex-col items-end gap-1">;"
</div>"
                    <span className="text-sm font-bold">{option.cost} ZION$</span>;"
                    <Button ;"
                      size="sm" ;""
                      variant={wallet && wallet.balance >= option.cost ? "default" :"outline"}"
</Button>
                      disabled={!wallet || wallet.balance < option.cost})
                      onClick={() => handleRedeem(option)}
                    >;"
                      Redeem <ArrowRight className="ml-1 h-3 w-3" />;"
</ArrowRight>
                    </Button>;
                  </div>;
                </div>;
            </div>;"
            <div className="flex justify-between">;"
</div>"
              <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Close</Button>;""
              <Button variant="ghost" size="sm">;"
</Button>"
                Learn More <ExternalLink className="ml-1 h-3 w-3" />;"
</ExternalLink>

              </Button>;
            </div>;
          </DialogContent>;
        </Dialog>;
      </CardContent>;
    </Card>;

  if (!wallet || wallet.balance < option.cost) return;
await spendTokens (option.cost, `Redeemed: $ {;
  option.title ;)
}`);
setOpen (false) ;"
};"flex items-center gap-2"> <Gift className=" h-5 w-5"/> Redeem Rewards </CardTitle> <CardDescription>Exchange your ZION$ for rewards and perks</CardDescription> </CardHeader> <CardContent> <Dialog open= {;"
</Gift>"
}onOpenChange= {;"  setOpen ";"}> <DialogTrigger asChild> <Button className=" w-full">View Available Rewards</Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Available Rewards</DialogTitle> <DialogDescription> Exchange your tokens for these rewards. You currently have {;"  wallet?.balance || 0 ";"}ZION$. </DialogDescription> </DialogHeader> > Redeem <ArrowRight className=" ml-1 h-3 w-3" /> </Button> </div> </div>) ) ;""
}</div> </Button> </div> </DialogContent> </Dialog> </CardContent> </Card>) ;"}'"""
}> <DialogTrigger asChild> <Button className=" w-full">View Available Rewards</Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Available Rewards</DialogTitle> <DialogDescription> Exchange your tokens for these rewards. You currently have {;""
  wallet?.balance || 0 ";""
}ZION$. </DialogDescription> </DialogHeader> > Redeem <ArrowRight className=" ml-1 h-3 w-3" /> </Button> </div> </div>) ) ;"
</ArrowRight>
}</div> </Button> </div> </DialogContent> </Dialog> </CardContent> </Card>) ;"

