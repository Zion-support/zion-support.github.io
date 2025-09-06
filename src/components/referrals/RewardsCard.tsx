<<<<<<< HEAD
=======

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals";
import { formatDate } from "@/utils/referralUtils";
import { BadgeDollarSign, Badge } from 'lucide-react'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals",
import { formatDate } from "@/utils/referralUtils",
import { BadgeDollarSign, Badge } from 'lucide-react'

=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralReward } from "@/types/referrals";
import { formatDate } from "@/utils/referralUtils";
import { BadgeDollarSign, Badge } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
interface RewardsCardProps {
<<<<<<< HEAD
  rewards: ReferralReward[],
=======
<<<<<<< HEAD

  rewards: ReferralReward[]

=======
  rewards: ReferralReward[];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  isLoading: boolean
}

<<<<<<< HEAD
<<<<<<< HEAD
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {
  if (isLoading) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <Card>
        <CardHeader>
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    )
<<<<<<< HEAD
  }

  if (rewards.length === 0) {
    return (
      <Card>
        <CardHeader>
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
=======
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
      <Card>
        <CardHeader>
<CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            Your Rewards
          </CardTitle>
<<<<<<< HEAD
=======
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
    );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  }
  if (rewards.length === 0) {
    return (
      <Card>
        <CardHeader>
<<<<<<< HEAD


          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />


=======
<CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            Your Rewards
          </CardTitle>
          <CardDescription>
            Rewards earned from successful referrals
          </CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD

          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
            Your Rewards

          </CardTitle>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <p className="text-muted-foreground">No rewards yet</p>
            <p className="text-sm text-muted-foreground mt-1">
=======
          <div className='flex flex-col items-center justify-center p-4 text-center'>
            <p className='text-muted-foreground'>No rewards yet</p>
            <p className='text-sm text-muted-foreground mt-1'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              Refer users to earn rewards once they complete onboarding
            </p>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    )

<<<<<<< HEAD
=======

=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }

  return (
    <Card>
      <CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
        <CardTitle className="flex items-center gap-2">
          <BadgeDollarSign className="h-5 w-5" />
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

        <CardTitle className="flex items-center gap-2">
          <BadgeDollarSign className="h-5 w-5" />

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
<CardTitle className='flex items-center gap-2'>
          <BadgeDollarSign className='h-5 w-5' />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          Your Rewards
        </CardTitle>
        <CardDescription>Rewards earned from successful referrals</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
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
=======

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {;
  if (isLoading) {;
    return (;
      <Card>;
        <CardHeader>;
<<<<<<< HEAD
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
          <div className="flex items - center justify - center p-4">;
            <div className="h - 8 w - 8 animate - spin rounded - full border - 4 border - primary border-t-transparent" />;
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }

<<<<<<< HEAD
  if (rewards && rewards.length === 0) {;
    return (
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
          <div className='flex flex-col items-center justify-center p-4 text-center'>;
            <p className='text-muted-foreground'>No rewards yet</p>;
            <p className='text-sm text-muted-foreground mt-1'>              Refer users to earn rewards once they complete onboarding            Your Rewards;          </CardTitle>;
=======
          </CardTitle>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
;
  return (;
=======
  return (

          <div className='flex flex - col items - center justify - center p - 4 text - center'>;
            <p className='text - muted - foreground'>No rewards yet</p>;
            <p className='text - sm text - muted - foreground mt - 1'>              Refer users to earn rewards once they complete onboarding            Your Rewards;
          </CardTitle>;
          <CardDescription > Rewards earned from successful referrals</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex flex - col items - center justify - center p - 4 text-center">;
            <p className="text - muted-foreground">No rewards yet</p>;
            <p className="text - sm text - muted - foreground mt-1">;
              Refer users to earn rewards once they complete onboarding;
            </p>;
          </div>;
        </CardContent>;
      </Card>) }    );
  }
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <BadgeDollarSign className="h-5 w-5" />;
          Your Rewards;
        </CardTitle>;
        <CardDescription>;
          Rewards earned from successful referrals;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4">;
          {rewards.map((reward, index) => (;
            <div;
              key={reward.id}
              className={`flex justify-between items-start ${;
                index !== rewards.length - 1 ? "border-b pb-3" : "";
              }`}
            >;
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
<<<<<<< HEAD
                  <p className="font-medium">
=======
                  <p className='font-medium'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                    {reward.reward_type === 'credit'
                      ? `$${reward.amount?.toFixed(2)} Credit`
                      : 'Visibility Boost'}
                  </p>
                </div>
<<<<<<< HEAD
                <p className="text-xs text-muted-foreground mt-1">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  Earned on {formatDate(reward.created_at)}
<<<<<<< HEAD
<<<<<<< HEAD
                </p>;
                {reward.expires_at && (;
                  <p className="text-xs text-muted-foreground">;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
<p className='text-xs text-muted-foreground mt-1'>
                  Earned on {formatDate(reward.created_at)}
                </p>
                {reward.expires_at && (
                  <p className='text-xs text-muted-foreground'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    Expires on {formatDate(reward.expires_at)}
<<<<<<< HEAD
                  </p>;
=======
=======
                </p>
                {reward.expires_at && (
                  <p className="text-xs text-muted-foreground">                    Expires on {formatDate(reward.expires_at)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  </p>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                )}
              </div>;
            </div>;
          ))}
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </div>;
      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD
=======

        <div className='space - y-4'>          {rewards.map ((reward, index) => (
            <div;
              key={reward.id}
        <div className="space-y-4">;
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
                  <p className='font - medium'>                    {reward.reward_type === 'credit'                  <p className="font-medium">;
                    {reward.reward_type === 'credit';
                      ? `$${reward.amount?.to_fixed (2)} Credit`;
                      : 'Visibility Boost'}
                  </p>;
                </div>;
                <p className='text - xs text - muted - foreground mt - 1'>;
                  Earned on {format_date (reward.created_at)}
                </p>;
                {reward.expires_at && (
                  <p className='text - xs text - muted - foreground'>                    Expires on {format_date (reward.expires_at)}                <p className="text - xs text - muted - foreground mt-1">;
                  Earned on {format_date (reward.created_at)}
                </p>;
                {reward.expires_at && (
                  <p className="text - xs text - muted-foreground">;
                  </p>)}
              </div>;
            </div>))}
        </div>;
      </CardContent>;
    </Card>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
;
=======
        </div>
      </CardContent>
    </Card>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
