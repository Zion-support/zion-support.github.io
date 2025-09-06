<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { ReferralReward } from '@/types/referrals'
import { formatDate } from '@/utils/referralUtils'
<<<<<<< HEAD

=======
interface RewardsCardProps {
  rewards: ReferralReward[];
  is_loading: boolean;
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components / ui / card';
import { ReferralReward  } from '@/types / referrals';
import { format_date  } from '@/utils / referral_utils';
import { Badge } from '@/components / ui / badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
interface RewardsCardProps {
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals",
import { formatDate } from "@/utils/referralUtils",
import { BadgeDollarSign, Badge } from 'lucide-react'

import { BadgeDollarSign, Badge } from 'lucide-react'
interface RewardsCardProps {
  rewards: ReferralReward[]
  isLoading: boolean
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ReferralReward } from "@/types/referrals"
import { formatDate } from "@/utils/referralUtils"
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals",
import { formatDate } from "@/utils/referralUtils",
import { BadgeDollarSign, Badge } from 'lucide-react'

interface RewardsCardProps {



import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralReward } from "@/types/referrals";
import { formatDate } from "@/utils/referralUtils";
import { BadgeDollarSign, Badge } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';




interface RewardsCardProps {
  rewards: ReferralReward[]

  isLoading: boolean
  isLoading: boolean
}
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />
    ) }            Your Rewards
          <CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
            Your Rewards
}


    return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />

          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />


            Your Rewards
<<<<<<< HEAD
          <CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />

=======
          </CardTitle>
          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center p-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </CardContent>
      </Card>
    ) }            Your Rewards
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
  if (rewards.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />

          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />


            Your Rewards
          <CardDescription>
            Rewards earned from successful referrals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col items-center justify-center p-4 text-center'>
            <p className='text-muted-foreground'>No rewards yet</p>
            <p className='text-sm text-muted-foreground mt-1'>              Refer users to earn rewards once they complete onboarding            Your Rewards
          <CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
            Your Rewards
          </CardTitle>
          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col items-center justify-center p-4 text-center'>
            <p className='text-muted-foreground'>No rewards yet</p>
            <p className='text-sm text-muted-foreground mt-1'>              Refer users to earn rewards once they complete onboarding            Your Rewards
          </CardTitle>
          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>


          <div className="flex flex-col items-center justify-center p-4 text-center">
            <p className="text-sm text-muted-foreground mt-1">
              Refer users to earn rewards once they complete onboarding
            </p>
          </div>
        </CardContent>
      </Card>

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    )


  }
  return (
    <Card>
      <CardHeader>

<<<<<<< HEAD
        <CardTitle className="flex items-center gap-2">
          <BadgeDollarSign className="h-5 w-5" />


}

  }

  if (rewards && rewards.length === 0) {;
    return (
=======
    ) }    )
    )
  }
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
        <div className="space-y-4">
          {rewards.map((reward, index) => (
            <div 
              key={reward.id}
              className={`flex justify-between items-start ${
                index !== rewards.length - 1 ? "border-b pb-3" : ""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralReward } from "@/types/referrals",;
import { formatDate } from "@/utils/referralUtils",;
import { BadgeDollarSign, Badge } from 'lucide-react';
interface RewardsCardProps {;
  rewards: ReferralReward[];
  isLoading: boolean;
}
;
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {;
  if (isLoading) {;
    return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items-center gap-2'>;
            <BadgeDollarSign className='h-5 w-5' />;
            Your Rewards;
          </CardTitle>;
          <CardDescription>;
            Rewards earned from successful referrals;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
          <div className='flex flex-col items-center justify-center p-4 text-center'>;
            <p className='text-muted-foreground'>No rewards yet</p>;
            <p className='text-sm text-muted-foreground mt-1'>              Refer users to earn rewards once they complete onboarding            Your Rewards;
=======
          <div className='flex items - center justify - center p - 4'>;
            <div className='h - 8 w - 8 animate - spin rounded - full border - 4 border - primary border - t-transparent' />;
          </div>;
        </CardContent>;
      </Card>) }            Your Rewards;
          </CardTitle>;
          <CardDescription > Rewards earned from successful referrals</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex items - center justify - center p - 4">;
            <div className="h - 8 w - 8 animate - spin rounded - full border - 4 border - primary border - t-transparent" />;
          </div>;
        </CardContent>;
      </Card>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items - center gap - 2'>;
            <BadgeDollarSign className='h - 5 w - 5' />;
            Your Rewards;
          </CardTitle>;
          <CardDescription>;
            Rewards earned from successful referrals;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;

    )

  }

  if (rewards && rewards.length === 0) {;
    return (
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <BadgeDollarSign className="h-5 w-5" />;
            Your Rewards;
          </CardTitle>;
          <CardDescription>Rewards earned from successful referrals</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex items-center justify-center p-4">;
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />;
          </div>;
        </CardContent>;
      </Card>;
    );
  }
;
  if (rewards.length === 0) {;
    return (;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <BadgeDollarSign className="h-5 w-5" />;
            Your Rewards;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </CardTitle>;
          <CardDescription>Rewards earned from successful referrals</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex flex-col items-center justify-center p-4 text-center">;
            <p className="text-muted-foreground">No rewards yet</p>;
            <p className="text-sm text-muted-foreground mt-1">;
              Refer users to earn rewards once they complete onboarding;
            </p>;
          </div>;
        </CardContent>;
      </Card>;
    );  }    );
  }
<<<<<<< HEAD
  return (

          <div className='flex flex - col items - center justify - center p - 4 text - center'>;
            <p className='text - muted - foreground'>No rewards yet</p>;
            <p className='text - sm text - muted - foreground mt - 1'>              Refer users to earn rewards once they complete onboarding            Your Rewards;
          </CardTitle>;
          <CardDescription > Rewards earned from successful referrals</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex flex - col items - center justify - center p - 4 text - center">;
            <p className="text - muted - foreground">No rewards yet</p>;
            <p className="text - sm text - muted - foreground mt - 1">;
              Refer users to earn rewards once they complete onboarding;
            </p>;
          </div>;
        </CardContent>;
      </Card>) }    );
  }
  return (
    <Card>;
      <CardHeader>;
        <CardTitle className='flex items - center gap - 2'>;
          <BadgeDollarSign className='h - 5 w - 5' />;

=======
;
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <BadgeDollarSign className="h-5 w-5" />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          Your Rewards;
        </CardTitle>;
        <CardDescription>;
          Rewards earned from successful referrals;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
<<<<<<< HEAD

              key={reward && reward.id}
        <div className="space-y-4">;
          {rewards && rewards.map((reward, index,) => (;
            <div
              key = {reward && reward.id,}

              className={`flex justify-between items-start ${
                index !== rewards && rewards.length - 1 ? 'border-b pb-3' : ''
              }`}>;
=======
        <div className="space-y-4">;
          {rewards.map((reward, index) => (;
            <div;
              key={reward.id}
              className={`flex justify-between items-start ${;
                index !== rewards.length - 1 ? "border-b pb-3" : "";
              }`}
            >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <div>;
                <div className='flex items-center gap-2'>;
                  {reward && reward.reward_type === 'credit' ? (;
                    <BadgeDollarSign className='h-4 w-4 text-green-600' />;
                  ) : (;
                    <Badge className='h-4 w-4 text-blue-600' />;
                  )}
                  <p className='font-medium'>                    {reward && reward.reward_type === 'credit'                  <p className="font-medium">;
                    {reward && reward.reward_type === 'credit';
                      ? `$${reward && reward.amount?.toFixed(2)} Credit`;
                      : 'Visibility Boost'}
                  </p>;
                </div>;
<<<<<<< HEAD
                <p className='text-xs text-muted-foreground mt-1'>;
                  Earned on {formatDate(reward && reward.created_at)}
                </p>;
                {reward && reward.expires_at && (;
                  <p className='text-xs text-muted-foreground'>                    Expires on {formatDate(reward && reward.expires_at)}                <p className="text-xs text-muted-foreground mt-1">;
                  Earned on {formatDate(reward && reward.created_at)}
                </p>;
                {reward && reward.expires_at && (;
                  <p className="text-xs text-muted-foreground">;
                  </p>;

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
=======
                <p className="text-xs text-muted-foreground mt-1">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  Earned on {formatDate(reward.created_at)}
                </p>
                {reward.expires_at && (
                  <p className="text-xs text-muted-foreground">
                    Expires on {formatDate(reward.expires_at)}
<<<<<<< HEAD
                  </p>

=======
                )}
              </div>;
            </div>;
          ))}

                  </p>;
                )}
              </div>;
            </div>;
          ))}
        </div>;
      </CardContent>;
    </Card>;
  );
}

        <div className='space - y-4'>          {rewards.map ((reward, index) => (
            <div;
              key={reward.id}
        <div className="space - y-4">;
          {rewards.map ((reward, index, ) => (
            <div;
              key = {reward.id, }
              className={`flex justify - between items - start ${
                index !== rewards.length - 1 ? 'border - b pb - 3' : '';
              }`}
            >;
              <div>;
                <div className='flex items - center gap - 2'>;
                  {reward.reward_type === 'credit' ? (
                    <BadgeDollarSign className='h - 4 w - 4 text - green - 600' />) : (
                    <Badge className='h - 4 w - 4 text - blue - 600' />)}
                  <p className='font - medium'>                    {reward.reward_type === 'credit'                  <p className="font - medium">;
                    {reward.reward_type === 'credit';
                      ? `$${reward.amount?.to_fixed (2)} Credit`;
                      : 'Visibility Boost'}
                  </p>;
                </div>;
                <p className='text - xs text - muted - foreground mt - 1'>;
                  Earned on {format_date (reward.created_at)}
                </p>;
                {reward.expires_at && (
                  <p className='text - xs text - muted - foreground'>                    Expires on {format_date (reward.expires_at)}                <p className="text - xs text - muted - foreground mt - 1">;
                  Earned on {format_date (reward.created_at)}
                </p>;
                {reward.expires_at && (
                  <p className="text - xs text - muted - foreground">;
                  </p>)}
              </div>;
            </div>))}
        </div>;
      </CardContent>;
    </Card>);
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
