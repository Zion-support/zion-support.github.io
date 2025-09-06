interface RewardsCardProps {
  rewards: ReferralReward[];
  is_loading: boolean;
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components / ui / card';
import { ReferralReward  } from '@/types / referrals';
import { format_date  } from '@/utils / referral_utils';
import { Badge } from '@/components / ui / badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
interface RewardsCardProps {

  rewards: ReferralReward[]

import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { ReferralReward } from '@/types/referrals';
import { formatDate } from '@/utils/referralUtils';
import { BadgeDollarSign, Badge } from 'lucide-react';

interface RewardsCardProps {;
  rewards: ReferralReward[];
  isLoading: boolean;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ReferralReward } from "@/types/referrals"
import { formatDate } from "@/utils/referralUtils"
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
interface RewardsCardProps {

  rewards: ReferralReward[]

  isLoading: boolean
}
export function RewardsCard(): any ({ rewards, isLoading }: RewardsCardProps) {;
  if (isLoading) {;

export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />
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
        <CardTitle className='flex items-center gap-2'>
          <BadgeDollarSign className='h-5 w-5' />
        <CardTitle className="flex items-center gap-2">
          <BadgeDollarSign className="h-5 w-5" />
        <div className='space-y-4'>          {rewards.map((reward, index) => (
            <div
              key={reward.id}
        <div className="space-y-4">
          {rewards.map((reward, index,) => (
            <div
              key = {reward.id,}
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
                  <p className='font-medium'>                    {reward.reward_type === 'credit'                  <p className="font-medium">
                    {reward.reward_type === 'credit'
                      ? `$${reward.amount?.toFixed(2)} Credit`
                      : 'Visibility Boost'}
                  </p>
                </div>
                <p className='text-xs text-muted-foreground mt-1'>
                  Earned on {formatDate(reward.created_at)}
                </p>
                {reward.expires_at && (
                  <p className='text-xs text-muted-foreground'>                    Expires on {formatDate(reward.expires_at)}                <p className="text-xs text-muted-foreground mt-1">
                  Earned on {formatDate(reward.created_at)}
                </p>
                {reward.expires_at && (
                  <p className="text-xs text-muted-foreground">
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>;
  );
};
}
}

    <Card>
      <CardHeader>
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
                    {reward.reward_type === 'credit'
                      ? `$${reward.amount?.toFixed(2)} Credit`
                      : 'Visibility Boost'}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Earned on {formatDate(reward.created_at)}
                </p>;
                {reward.expires_at && (;
                  <p className="text-xs text-muted-foreground">;
                    Expires on {formatDate(reward.expires_at)}
                  </p>

                )}
              </div>;
            </div>;
          ))}

        </div>;
      </CardContent>;
    </Card>;
  );
}
;
