<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
interface RewardsCardProps {,
  rewards: ReferralReward[];,
  is_loading: boolean;,

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralReward } from "@/types/referrals";
import { formatDate } from "@/utils/referralUtils";
import { BadgeDollarSign, Badge } from 'lucide-react'
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { ReferralReward } from '@/types/referrals'
import { formatDate } from '@/utils/referralUtils'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
interface RewardsCardProps {
  rewards: ReferralReward[];
  is_loading: boolean;
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components / ui / card';
import { ReferralReward  } from '@/types / referrals';
import { format_date  } from '@/utils / referral_utils';
import { Badge } from '@/components / ui / badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
interface RewardsCardProps {
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals",
import { formatDate } from "@/utils/referralUtils",
import { BadgeDollarSign, Badge } from 'lucide-react'

import { BadgeDollarSign, Badge } from 'lucide-react'
interface RewardsCardProps {
  rewards: ReferralReward[]
  isLoading: boolean
=======


interface RewardsCardProps {
  // TODO: Implement
}
  rewards: ReferralReward[];,
  is_loading: boolean;
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/ card';
import { ReferralReward  } from '@/types/ referrals';
import { format_date  } from '@/utils/ referral_utils';
import { Badge } from '@/components/ui/ badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/ card';
  // TODO: Implement
pr-12325
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

<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
=======
interface RewardsCardProps {;
  rewards: ReferralReward[];
  isLoading: boolean;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ReferralReward } from "@/types/referrals"
import { formatDate } from "@/utils/referralUtils"
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
<<<<<<< HEAD

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals",
import { formatDate } from "@/utils/referralUtils",
import { BadgeDollarSign, Badge } from 'lucide-react'

interface RewardsCardProps {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralReward } from "@/types/referrals";
import { formatDate } from "@/utils/referralUtils";
import { BadgeDollarSign, Badge } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals",
import { formatDate } from "@/utils/referralUtils",

interface RewardsCardProps {
<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
  rewards: ReferralReward[],

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
  rewards: ReferralReward[]

  rewards: ReferralReward[];
origin/cursor/automate-test-improve-and-merge-code-2533
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
          <CardTitle className="flex items-center gap-2">"
            <BadgeDollarSign className="h-5 w-5" />"
          <CardTitle className="flex items-center gap-2">"
            <BadgeDollarSign className="h-5 w-5" />"

export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
            Your Rewards
          </CardTitle>
          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center p-4">"
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />"
          <div className="flex items-center justify-center p-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
    )
      <Card>
        <CardHeader>
<CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




    )
  if (rewards.length === 0) {
    return (
      <Card>
        <CardHeader>
<<<<<<< HEAD
          <CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
            Your Rewards
          <CardDescription>
            Rewards earned from successful referrals
          </CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
          <div className='flex items-center justify-center p-4'>
            <div className='h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent' />
          </div>
        </CardContent>
      </Card>
    );
origin/cursor/automate-test-improve-and-merge-code-2533
  }

  if (rewards.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">"
            <BadgeDollarSign className="h-5 w-5" />"

=======
<<<<<<< HEAD
          <div className='flex flex-col items-center justify-center p-4 text-center'>
            <p className='text-muted-foreground'>No rewards yet</p>
            <p className='text-sm text-muted-foreground mt-1'>              Refer users to earn rewards once they complete onboarding            Your Rewards
          <CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
            Your Rewards
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx

          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />

<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx

<CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />
origin/cursor/automate-test-improve-and-merge-code-2533
            Your Rewards
          </CardTitle>
          <CardDescription>
            Rewards earned from successful referrals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CardTitle className="flex items-center gap-2">"
            <BadgeDollarSign className="h-5 w-5" />"
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
            Your Rewards
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
          </CardTitle>
          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
          <div className="flex flex-col items-center justify-center p-4 text-center">"
            <p className="text-muted-foreground">No rewards yet</p>"
            <p className="text-sm text-muted-foreground mt-1">"
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <p className="text-sm text-muted-foreground mt-1">
          <div className='flex flex-col items-center justify-center p-4 text-center'>
            <p className='text-muted-foreground'>No rewards yet</p>
            <p className='text-sm text-muted-foreground mt-1'>
origin/cursor/automate-test-improve-and-merge-code-2533
              Refer users to earn rewards once they complete onboarding
            </p>
          </div>
        </CardContent>
      </Card>
    )


);
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">"
          <BadgeDollarSign className="h-5 w-5" />"

<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
  return (
    <Card>
      <CardHeader>
=======
<<<<<<< HEAD
    ) }    )
    )
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <BadgeDollarSign className='h-5 w-5' />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
        <CardTitle className="flex items-center gap-2">
          <BadgeDollarSign className="h-5 w-5" />

<CardTitle className='flex items-center gap-2'>
          <BadgeDollarSign className='h-5 w-5' />
origin/cursor/automate-test-improve-and-merge-code-2533
          Your Rewards
        </CardTitle>
        <CardDescription>Rewards earned from successful referrals</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
}
        <div className="space-y-4">"
          {rewards.map((reward, index) => (
            <div
              key={reward.id}
              className={`flex justify-between items-start ${`
                index !== rewards.length - 1 ? "border-b pb-3" : """
=======
<<<<<<< HEAD
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
=======

}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
        <div className="space-y-4">
          {rewards.map((reward, index) => (
            <div 
              key={reward.id}
              className={`flex justify-between items-start ${
                index !== rewards.length - 1 ? "border-b pb-3" : ""
import { ReferralReward } from "@/types/referrals",;
import { formatDate } from "@/utils/referralUtils",;
interface RewardsCardProps {;
  rewards: ReferralReward[];,
  isLoading: boolean;
}
;
export function RewardsCard({ rewards, isLoading }:,  RewardsCardProps) {;
  rewards: ReferralReward[];
  isLoading: boolean;
}
;
interface RewardsCardProps {;
  isLoading: boolean;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"""
import { ReferralReward } from "@/types/referrals"""
import { formatDate } from "@/utils/referralUtils"""
import { Badge } from '@/components/ui/badge
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";""
import { ReferralReward } from "@/types/referrals";""
import { formatDate } from "@/utils/referralUtils";""
  // TODO: Implement
  rewards: ReferralReward[],


    return (

          <CardTitle className="flex items-center gap-2">"
"
            <BadgeDollarSign className="h-5 w-5" />"

          <CardDescription>Rewards earned from successful referrals
        <CardContent>
          <div className="flex items-center justify-center p-4">"
</div>"
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />"
</div>
      <Card>

        <CardHeader>



          <CardDescription>





          <div className="flex flex-col items-center justify-center p-4 text-center">"
            <p className="text-muted-foreground">No rewards yet</p>""
            <p className="text-sm text-muted-foreground mt-1">"
</p>



        <div className="space-y-4">"
            <div;
              key={reward.id}
              className={`flex justify-between items-start ${"
                index !== rewards.length - 1 ? "border-b pb-3" : """"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;""
import { ReferralReward } from "@/types/referrals",;""
import { formatDate } from "@/utils/referralUtils",;""
;)
pr-12325
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {;
  if (isLoading) {;
    return (;
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items-center gap-2'>;
            <BadgeDollarSign className='h-5 w-5' />;,
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
            Your Rewards;
          </CardTitle>;
          <CardDescription>;
            Rewards earned from successful referrals;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
    )
<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
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
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
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
<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
          <div className='flex flex-col items-center justify-center p-4 text-center'>;
            <p className='text-muted-foreground'>No rewards yet</p>;
            <p className='text-sm text-muted-foreground mt-1'>              Refer users to earn rewards once they complete onboarding            Your Rewards;
=======
          <div className="flex items-center justify-center p-4">;
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />;
          </div>;
        </CardContent>;
      </Card>;
    );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
;
  if (rewards.length === 0) {;
    return (;
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
    );  }    );
  }
<<<<<<< HEAD
;
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <BadgeDollarSign className="h-5 w-5" />;
=======
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
<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
    );
  }
;
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <BadgeDollarSign className="h-5 w-5" />;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
          Your Rewards;
        </CardTitle>;
        <CardDescription>Rewards earned from successful referrals</CardDescription>;
      </CardHeader>;
      <CardContent>;
<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
=======
<<<<<<< HEAD
        <div className="space-y-4">;
          {rewards.map((reward, index) => (;
            <div;
              key={reward.id}
              className={`flex justify-between items-start ${;
                index !== rewards.length - 1 ? "border-b pb-3" : "";
              }`}
            >;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
              key={reward && reward.id}
        <div className="space-y-4">;
          {rewards && rewards.map((reward, index,) => (;
            <div
              key = {reward && reward.id,}
<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
              className={`flex justify-between items-start ${`
                index !== rewards && rewards.length - 1 ? 'border-b pb-3' : '''
              }`}>;`
        <div className="space-y-4">;
          {rewards.map((reward, index) => (;
            <div;
              key={reward.id}
              className={`flex justify-between items-start ${;
                index !== rewards.length - 1 ? "border-b pb-3" : "";
              }`}
            >;
=======

              className={`flex justify-between items-start ${
                index !== rewards && rewards.length - 1 ? 'border-b pb-3' : ''
              }`}>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
              <div>;
                <div className="flex items-center gap-2">;
                  {reward.reward_type === 'credit' ? (;
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />;
                  ) : (;
                    <Badge className="h-4 w-4 text-blue-600" />;
                  )}
                  <p className="font-medium">;
                    {reward.reward_type === 'credit';
<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
                      ? `$${reward.amount?.toFixed(2)} Credit`;`
                      : 'Visibility Boost'}'
                  <p className='font-medium'>                    {reward && reward.reward_type === 'credit'                  <p className="font-medium">;
                    {reward && reward.reward_type === 'credit';
                      ? `$${reward && reward.amount?.toFixed(2)} Credit`;
=======
                      ? `$${reward.amount?.toFixed(2)} Credit`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
                      : 'Visibility Boost'}
                  </p>;
                </div>;
<<<<<<< HEAD
                <p className="text-xs text-muted-foreground mt-1">;
=======
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
        <CardTitle className="flex items-center gap-2">"
          <BadgeDollarSign className="h-5 w-5" />"
          Your Rewards
        </CardTitle>
        <CardDescription>Rewards earned from successful referrals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">"
          {rewards.map((reward, index) => (
            <div
              key={reward.id}
              className={`flex justify-between items-start ${`
                index !== rewards.length - 1 ? "border-b pb-3" : "";
              }`}`
            >
              <div>
                <div className="flex items-center gap-2">"
                  {reward.reward_type === 'credit' ? ('
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />"
                  ) : (
                    <Badge className="h-4 w-4 text-blue-600" />"
                  )}
                  <p className="font-medium">"
                    {reward.reward_type === 'credit''
                      ? `$${reward.amount?.toFixed(2)} Credit``
                      : 'Visibility Boost'}'
                  <p className="font-medium">
                  <p className='font-medium'>
origin/cursor/automate-test-improve-and-merge-code-2533
                    {reward.reward_type === 'credit'
                      ? `$${reward.amount?.toFixed(2)} Credit`
                      : 'Visibility Boost'}
                  </p>
                </div>
<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
                <p className="text-xs text-muted-foreground mt-1">"
                      ? `$${reward.amount?.toFixed(2)} Credit`;
                      : 'Visibility Boost'}
                  </p>;
                </div>;
                <p className="text-xs text-muted-foreground mt-1">;
                  Earned on {formatDate(reward.created_at)}
                </p>
                {reward.expires_at && (
                  <p className="text-xs text-muted-foreground">
                </p>;
                {reward.expires_at && (;
                  <p className="text-xs text-muted-foreground">;
<p className='text-xs text-muted-foreground mt-1'>
                  Earned on {formatDate(reward.created_at)}
                </p>
                {reward.expires_at && (
                  <p className='text-xs text-muted-foreground'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
                <p className="text-xs text-muted-foreground mt-1">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Earned on {formatDate(reward.created_at)}
                </p>;
                {reward.expires_at && (;
                  <p className="text-xs text-muted-foreground">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
                    Expires on {formatDate(reward.expires_at)}
<<<<<<< HEAD
=======
                  </p>
<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
                  </p>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
                )}
              </div>;
            </div>;
          ))}
<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
=======

<<<<<<< HEAD
                  </p>;
                )}
              </div>;
            </div>;
          ))}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
        </div>;
      </CardContent>;
    </Card>;
  );
}
        <div className='space - y-4'>          {rewards.map ((reward, index) => ('
            <div;
              key={reward.id}
        <div className="space - y-4">;
          {rewards.map ((reward, index, ) => (
            <div;
              key = {reward.id, }
              className={`flex justify - between items - start ${`
                index !== rewards.length - 1 ? 'border - b pb - 3' : '';
              }`}`
            >;
              <div>;
                <div className='flex items - center gap - 2'>;
                  {reward.reward_type === 'credit' ? ('
                    <BadgeDollarSign className='h - 4 w - 4 text - green - 600' />) : ('
                    <Badge className='h - 4 w - 4 text - blue - 600' />)}'
                  <p className='font - medium'>                    {reward.reward_type === 'credit'                  <p className="font - medium">;
                    {reward.reward_type === 'credit';
                      ? `$${reward.amount?.to_fixed (2)} Credit`;`
                      : 'Visibility Boost'}'
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
<<<<<<< HEAD:src-disabled/components/referrals/RewardsCard.tsx
;
}}}}}})))))))
;
        </div>
      </CardContent>
    </Card>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533

          <CardTitle className='flex items-center gap-2'>;

            <BadgeDollarSign className='h-5 w-5' />;



          <CardTitle className='flex items - center gap - 2'>;

            <BadgeDollarSign className='h - 5 w - 5' />;

          ;
          <CardDescription>;

        <CardContent>;

          <div className='flex items - center justify - center p - 4'>;
            <div className='h - 8 w - 8 animate - spin rounded - full border - 4 border - primary border - t-transparent' />;
          </div>;
      ) }            Your Rewards;
          <CardDescription > Rewards earned from successful referrals;

          <div className="flex items - center justify - center p - 4">;"
            <div className="h - 8 w - 8 animate - spin rounded - full border - 4 border - primary border - t-transparent" />;"
      );







          <CardTitle className="flex items-center gap-2">;"
            <BadgeDollarSign className="h-5 w-5" />;"

          <CardDescription>Rewards earned from successful referrals;
          <div className="flex flex-col items-center justify-center p-4 text-center">;"
            <p className="text-muted-foreground">No rewards yet</p>;""
            <p className="text-sm text-muted-foreground mt-1">;"
            </p>;
      ;"
          <div className='flex flex - col items - center justify - center p - 4 text - center'>;
            <p className='text - muted - foreground'>No rewards yet</p>;
            <p className='text - sm text - muted - foreground mt - 1'>              Refer users to earn rewards once they complete onboarding            Your Rewards;

          <div className="flex flex - col items - center justify - center p - 4 text - center">;"
            <p className="text - muted - foreground">No rewards yet</p>;""
            <p className="text - sm text - muted - foreground mt - 1">;"
      ) }    );




        <div className="space-y-4">;"
              key = {reward && reward.id,}
`;
                index !== rewards && rewards.length - 1 ? 'border-b pb-3' : `;
              }`}>;
              <div>;
                <div className="flex items-center gap-2">;"
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />;"
                    <Badge className="h-4 w-4 text-blue-600" />;"
                  <p className="font-medium">;"
                </div>;"
                <p className='text-xs text-muted-foreground mt-1'>;
                  <p className='text-xs text-muted-foreground'>                    Expires on {formatDate(reward && reward.expires_at)}                <p className="text-xs text-muted-foreground mt-1">;"
                </p>;"
                  <p className="text-xs text-muted-foreground">;"


              key={reward.id}`;
                index !== rewards.length - 1 ? "border-b pb-3" : "";"`;
              }`}
            >
              <div>
                <div className="flex items-center gap-2">"
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />"
                    <Badge className="h-4 w-4 text-blue-600" />"
                  <p className="font-medium">"
                <p className="text-xs text-muted-foreground mt-1">"
        <div className='space - y-4'>          {rewards.map ((reward, index) => (
        <div className="space - y-4">;"
              key = {reward.id, }`;
              className={`flex justify - between items - start ${"
                index !== rewards.length - 1 ? 'border - b pb - 3' : ;`;
            >;
                <div className='flex items - center gap - 2'>;
</div>)
                    <BadgeDollarSign className='h - 4 w - 4 text - green - 600' />) : (
)
                    <Badge className='h - 4 w - 4 text - blue - 600' />)}

                  <p className='font - medium'>                    {reward.reward_type === 'credit'                  <p className="font - medium">;"
                <p className='text - xs text - muted - foreground mt - 1'>;
                  <p className='text - xs text - muted - foreground'>                    Expires on {format_date (reward.expires_at)}                <p className="text - xs text - muted - foreground mt - 1">;"
                  <p className="text - xs text - muted - foreground">;"
                  </p>)}
            </div>))}
    );"`;
pr-12325
=======
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/RewardsCard.tsx
