<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

interface RewardsCardProps {
  rewards: ReferralReward[];
  is_loading: boolean;
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components / ui / card';
import { ReferralReward  } from '@/types / referrals';
import { format_date  } from '@/utils / referral_utils';
import { Badge } from '@/components / ui / badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
interface RewardsCardProps {
=======
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals",
import { formatDate } from "@/utils/referralUtils",
import { BadgeDollarSign, Badge } from 'lucide-react'
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import { BadgeDollarSign, Badge } from 'lucide-react'
interface RewardsCardProps {
  rewards: ReferralReward[]
  isLoading: boolean
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ReferralReward } from "@/types/referrals"
import { formatDate } from "@/utils/referralUtils"
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
<<<<<<< HEAD
=======
=======

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals",
import { formatDate } from "@/utils/referralUtils",
import { BadgeDollarSign, Badge } from 'lucide-react'

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface RewardsCardProps {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7


<<<<<<< HEAD
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
<<<<<<< HEAD

=======
>>>>>>> interface RewardsCardProps {
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralReward } from "@/types/referrals";
import { formatDate } from "@/utils/referralUtils";
import { BadgeDollarSign, Badge } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface RewardsCardProps {
>>>>>>> 
  rewards: ReferralReward[]

  isLoading: boolean
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
}


=======
  isLoading: boolean
}
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {
  if (isLoading) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return (
      <Card>
        <CardHeader>
<<<<<<< HEAD

=======
          <CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />
<<<<<<< HEAD
>>>>>>>             Your Rewards
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            Your Rewards
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>           </CardTitle>
          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center p-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD

=======
    ) }            Your Rewards
=======
=======
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            Your Rewards
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </CardTitle>
          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center p-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD
>>>>>>>     )
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    )
>>>>>>>   }
  if (rewards.length === 0) {
    return (
      <Card>
        <CardHeader>
<<<<<<< HEAD

=======
          <CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />
<<<<<<< HEAD
>>>>>>>             Your Rewards
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            Your Rewards
>>>>>>>           </CardTitle>
          <CardDescription>
            Rewards earned from successful referrals
          </CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD

=======
          <div className='flex flex-col items-center justify-center p-4 text-center'>
            <p className='text-muted-foreground'>No rewards yet</p>
            <p className='text-sm text-muted-foreground mt-1'>              Refer users to earn rewards once they complete onboarding            Your Rewards
=======
=======
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            Your Rewards
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </CardTitle>
          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
>>>>>>>           <div className="flex flex-col items-center justify-center p-4 text-center">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
          <div className='flex flex-col items-center justify-center p-4 text-center'>
            <p className='text-muted-foreground'>No rewards yet</p>
            <p className='text-sm text-muted-foreground mt-1'>              Refer users to earn rewards once they complete onboarding            Your Rewards
          </CardTitle>
          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="flex flex-col items-center justify-center p-4 text-center">
>>>>>>>             <p className="text-muted-foreground">No rewards yet</p>
            <p className="text-sm text-muted-foreground mt-1">
              Refer users to earn rewards once they complete onboarding
            </p>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD

  }
  return (
    <Card>
      <CardHeader>

=======
<<<<<<< HEAD
    ) }    )
>>>>>>>   }
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <BadgeDollarSign className='h-5 w-5' />
>>>>>>>           Your Rewards
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          Your Rewards
>>>>>>>         </CardTitle>
=======
    )
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
  return (
    <Card>
      <CardHeader>
<<<<<<< HEAD
        <CardTitle className='flex items-center gap-2'>
          <BadgeDollarSign className='h-5 w-5' />
=======
        <CardTitle className="flex items-center gap-2">
          <BadgeDollarSign className="h-5 w-5" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          Your Rewards
        </CardTitle>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <CardDescription>Rewards earned from successful referrals</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
<<<<<<< HEAD
=======
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items-center gap-2'>;
            <BadgeDollarSign className='h-5 w-5' />;
  rewards: ReferralReward[],
  is_loading: boolean;
}
export /**
 * RewardsCard - Function description
 */
function RewardsCard() {
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            Your Rewards;
          </CardTitle>;
          <CardDescription>;
            Rewards earned from successful referrals;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;

    )

>>>>>>>   }

  if (rewards && rewards.length === 0) {;
    return (
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <BadgeDollarSign className="h-5 w-5" />;
            Your Rewards;
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
    );
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          Your Rewards;
        </CardTitle>;
        <CardDescription>Rewards earned from successful referrals</CardDescription>;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div>;
                <div className="flex items-center gap-2">;
                  {reward.reward_type === 'credit' ? (;
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />;
                  ) : (;
                    <Badge className="h-4 w-4 text-blue-600" />;
                  )}
                  <p className="font-medium">;
                    {reward.reward_type === 'credit';
                      ? `$${reward.amount?.toFixed(2)} Credit`;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Earned on {formatDate(reward.created_at)}
                </p>;
                {reward.expires_at && (;
                  <p className="text-xs text-muted-foreground">;
                    Expires on {formatDate(reward.expires_at)}
<<<<<<< HEAD
                  </p>

>>>>>>>                 )}
              </div>;
            </div>;
          ))}

=======
                  </p>;
                )}
              </div>;
            </div>;
          ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>;
      </CardContent>;
    </Card>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
