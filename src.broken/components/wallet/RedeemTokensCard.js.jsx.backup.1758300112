import React, { useState } from "react";"
import { useWallet } from '@/hooks/useWallet';"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';"
import { Button } from '@/components/ui/button';"
import { Gift, ArrowRight, ExternalLink  } from 'lucide-react';"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
export default function Page() {
 onOpenChange={setOpen}>
          <DialogTrigger asChild>"
            <Button className="w-full">View Available Rewards</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Available Rewards</DialogTitle>
              <DialogDescription>
                Exchange your tokens for these rewards.You currently have {wallet?.balance || 0} ZION$.</DialogDescription>
            </DialogHeader>"
            <div className="space-y-4 py-4">"
              {REWARD_OPTIONS.map((option) => (<div key={option.id} className="flex justify-between items-center border-b pb-4">
                  <div>"
                    <h3 className="font-medium">{option.title}</h3>"
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>"
                  <div className="flex flex-col items-end gap-1">"
                    <span className="text-sm font-bold">{option.cost} ZION$</span>"
                    <Button size="sm" variant={wallet && wallet.balance >= option.cost ? "default" : "outline"} disabled={!wallet || wallet.balance < option.cost} onClick={() => handleRedeem(option)}>"
                      Redeem <ArrowRight aria-hidden="true" className="ml-1 h-3 w-3"/>
                    </Button>
                  </div>
                </div>))}
            </div>"
            <div className="flex justify-between">"
              <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Close</Button>"
              <Button variant="ghost" size="sm">"
                Learn More <ExternalLink aria-hidden="true" className="ml-1 h-3 w-3"/>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>)}
"`