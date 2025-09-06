<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { ReferralReward } from '@/types/referrals';
import { formatDate } from '@/utils/referralUtils';
import { BadgeDollarSign, Badge } from 'lucide-react';

interface RewardsCardProps {
  rewards: ReferralReward[];
  isLoading: boolean;
<<<<<<< HEAD
=======
=======

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralReward } from "@/types/referrals";
import { formatDate } from "@/utils/referralUtils";
import { BadgeDollarSign, Badge } from 'lucide-react'
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

interface RewardsCardProps {
  rewards: ReferralReward[],
  isLoading: boolean
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralReward } from "@/types/referrals";
import { formatDate } from "@/utils/referralUtils";
import { BadgeDollarSign, Badge } from 'lucide-react'
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

interface RewardsCardProps {
  rewards: ReferralReward[],
  isLoading: boolean
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
<<<<<<< HEAD
          <CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />
=======
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            Your Rewards
          </CardTitle>
          <CardDescription>
            Rewards earned from successful referrals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex items-center justify-center p-4'>
            <div className='h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent' />
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD
    );  }
=======
<<<<<<< HEAD
    );
=======
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
            Your Rewards
          </CardTitle>
          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center p-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </CardContent>
      </Card>
    )
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    )
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  if (rewards.length === 0) {
    return (
      <Card>
        <CardHeader>
<<<<<<< HEAD
          <CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />
=======
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            Your Rewards
          </CardTitle>
          <CardDescription>
            Rewards earned from successful referrals
          </CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
          <div className='flex flex-col items-center justify-center p-4 text-center'>
            <p className='text-muted-foreground'>No rewards yet</p>
            <p className='text-sm text-muted-foreground mt-1'>              Refer users to earn rewards once they complete onboarding
=======
<<<<<<< HEAD
          <div className='flex flex-col items-center justify-center p-4 text-center'>
            <p className='text-muted-foreground'>No rewards yet</p>
            <p className='text-sm text-muted-foreground mt-1'>
=======
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
            Your Rewards
          </CardTitle>
          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <p className="text-muted-foreground">No rewards yet</p>
            <p className="text-sm text-muted-foreground mt-1">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <p className="text-muted-foreground">No rewards yet</p>
            <p className="text-sm text-muted-foreground mt-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Refer users to earn rewards once they complete onboarding
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </p>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD
    );  }
=======
<<<<<<< HEAD
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    )
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  return (
    <Card>
      <CardHeader>
<<<<<<< HEAD
        <CardTitle className='flex items-center gap-2'>
          <BadgeDollarSign className='h-5 w-5' />
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <CardTitle className='flex items-center gap-2'>
          <BadgeDollarSign className='h-5 w-5' />
=======
        <CardTitle className="flex items-center gap-2">
          <BadgeDollarSign className="h-5 w-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          Your Rewards
        </CardTitle>
        <CardDescription>
          Rewards earned from successful referrals
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          {rewards.map((reward, index) => (
            <div
              key={reward.id}
              className={`flex justify-between items-start ${
                index !== rewards.length - 1 ? 'border-b pb-3' : ''
              }`}
            >
              <div>
                <div className='flex items-center gap-2'>
                  {reward.reward_type === 'credit' ? (
                    <BadgeDollarSign className='h-4 w-4 text-green-600' />
                  ) : (
                    <Badge className='h-4 w-4 text-blue-600' />
                  )}
<<<<<<< HEAD
                  <p className='font-medium'>                    {reward.reward_type === 'credit'
=======
<<<<<<< HEAD
                  <p className='font-medium'>
=======
        <CardTitle className="flex items-center gap-2">
          <BadgeDollarSign className="h-5 w-5" />
          Your Rewards
        </CardTitle>
        <CardDescription>Rewards earned from successful referrals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {rewards.map((reward, index) => (
            <div 
              key={reward.id}
              className={`flex justify-between items-start ${
                index !== rewards.length - 1 ? "border-b pb-3" : "";
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  {reward.reward_type === 'credit' ? (
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />
                  ) : (
                    <Badge className="h-4 w-4 text-blue-600" />
                  )}
                  <p className="font-medium">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <p className="font-medium">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    {reward.reward_type === 'credit'
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      ? `$${reward.amount?.toFixed(2)} Credit`
                      : 'Visibility Boost'}
                  </p>
                </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <p className='text-xs text-muted-foreground mt-1'>
                  Earned on {formatDate(reward.created_at)}
                </p>
                {reward.expires_at && (
<<<<<<< HEAD
                  <p className='text-xs text-muted-foreground'>                    Expires on {formatDate(reward.expires_at)}
=======
                  <p className='text-xs text-muted-foreground'>
=======
                <p className="text-xs text-muted-foreground mt-1">
                  Earned on {formatDate(reward.created_at)}
                </p>
                {reward.expires_at && (
                  <p className="text-xs text-muted-foreground">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <p className="text-xs text-muted-foreground mt-1">
                  Earned on {formatDate(reward.created_at)}
                </p>
                {reward.expires_at && (
                  <p className="text-xs text-muted-foreground">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    Expires on {formatDate(reward.expires_at)}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
