import React, { useState } from "react";

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
    cost: 100,;
    type: 'credit';
  }
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




