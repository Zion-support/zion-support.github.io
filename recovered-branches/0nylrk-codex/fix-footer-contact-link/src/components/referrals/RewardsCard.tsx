<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ReferralReward} from "@/types/referrals";
import {formatDate} from "@/utils/referralUtils";
import {BadgeDollarSign, Badge} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals",
import { formatDate } from "@/utils/referralUtils",
import { BadgeDollarSign, Badge } from "lucide-react",

import {



interface RewardsCardProps {
  // TODO: Implement
}
  rewards: ReferralReward[];,
  isLoading: boolean;
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {
  if (isLoading) {
import {
import {
  // TODO: Implement
  // TODO: Implement
pr-12325
}

import {
  // TODO: Implement
}
  Card,
  CardContent,
  CardDescription,

  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReferralReward } from "@/types/referrals";
import { formatDate } from "@/utils/referralUtils";
import { BadgeDollarSign, Badge } from "lucide-react";
interface RewardsCardProps {
  rewards: ReferralReward[];
  isLoading: boolean;
}
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {
  if (isLoading) {
<<<<<<< HEAD
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from "@/components/ui/card";
import { ReferralReward } from "@/types/referrals";
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ReferralReward} from "@/types/referrals";
import {formatDate} from "@/utils/referralUtils";
import {BadgeDollarSign, Badge} from "lucide-react";
<<<<<<< HEAD
=======

=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals",
import { formatDate } from "@/utils/referralUtils",
=======






import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";"
import {ReferralReward} from "@/types/referrals";"
import {formatDate} from "@/utils/referralUtils";"
import {BadgeDollarSign, Badge} from "lucide-react";"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card","
import { ReferralReward } from "@/types/referrals","
import { formatDate } from "@/utils/referralUtils","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { BadgeDollarSign, Badge } from "lucide-react",



<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface RewardsCardProps {
  rewards: ReferralReward[];
  isLoading: boolean;
}
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {
  if (isLoading) {
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {
=======
import {}
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
<<<<<<< HEAD
<<<<<<< HEAD
=======
  CardTitle,"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
} from '@/components / ui / card';
import { ReferralReward  } from '@/types / referrals';
import { format_date  } from '@/utils / referral_utils';
=======
;
} from '@/components / ui / card';'
import { ReferralReward  } from '@/types / referrals';'
import { format_date  } from '@/utils / referral_utils';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { BadgeDollarSign, Badge  } from './lucide-react';
interface RewardsCardProps {}
  rewards: ReferralReward[];
  is_loading: boolean;
}
export /**;
 * RewardsCard - Function description;
 */
function RewardsCard() {}
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <Card>
        <CardHeader>"
          <CardTitle className="flex items-center gap-2">"
            <BadgeDollarSign className="h-5 w-5" />
            Your Rewards;
          </CardTitle>
          <CardDescription>
            Rewards earned from successful referrals;
          </CardDescription>
        </CardHeader>
        <CardContent>"
          <div className="flex items-center justify-center p-4">"
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </CardContent>
      </Card>
    );
<<<<<<< HEAD
<<<<<<< HEAD
  }

<<<<<<< HEAD
  if (rewards.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
            Your Rewards
          </CardTitle>
          <CardDescription>
            Rewards earned from successful referrals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <p className="text-muted-foreground">No rewards yet</p>
            <p className="text-sm text-muted-foreground mt-1">
              Refer users to earn rewards once they complete onboarding
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  }        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <BadgeDollarSign className="h-5 w-5" />;
            Your Rewards;
  CardTitle,"
} from '@/components / ui / card';''
import { ReferralReward  } from '@/types / referrals';''
import { format_date  } from '@/utils / referral_utils';''
import { BadgeDollarSign, Badge  } from './lucide-react';'
interface RewardsCardProps {
  // TODO: Implement
}
  rewards: ReferralReward[];,
  is_loading: boolean;
}
export /**
 * RewardsCard - Function description;
 */
function RewardsCard() {
  // Check condition;
if ( {) {
  $2;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

}

export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {
  if (isLoading) {
    return (

      <Card>
</Card>
        <CardHeader>
</CardHeader>'
          <CardTitle className="flex items-center gap-2">"
</CardTitle>"
            <BadgeDollarSign className="h-5 w-5" />"
</BadgeDollarSign>
          </CardTitle>
          <CardDescription>
</CardDescription>
          </CardDescription>
        </CardHeader>
        <CardContent>
</CardContent>"
          <div className="flex items-center justify-center p-4">"
</div>"
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />"
</div>
          </div>
        </CardContent>
      </Card>
      <Card>
</Card>
        <CardHeader>
</CardHeader>"
          <CardTitle className="flex items-center gap-2">"
</CardTitle>"
            <BadgeDollarSign className="h-5 w-5" />"
</BadgeDollarSign>
          </CardTitle>
          <CardDescription>
</CardDescription>
          </CardDescription>
        </CardHeader>
        <CardContent>
</CardContent>"
          <div className="flex flex-col items-center justify-center p-4 text-center">"
</div>"
            <p className="text-muted-foreground">No rewards yet</p>""
            <p className="text-sm text-muted-foreground mt-1">"
</p>
            </p>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD
    );
  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <Card>
</Card>
      <CardHeader>
</CardHeader>"
        <CardTitle className="flex items-center gap-2">"
</CardTitle>"
          <BadgeDollarSign className="h-5 w-5" />"
</BadgeDollarSign>
        </CardTitle>
        <CardDescription>
</CardDescription>
        </CardDescription>
      </CardHeader>
      <CardContent>
</CardContent>"
        <div className="space-y-4">"
</div>
            <div;
              key={reward.id}
<<<<<<< HEAD
              className={`flex justify-between items-start ${
                index !== rewards.length - 1 ? "border-b pb-3" : ""
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

  )

=======
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              className={`flex justify-between items-start ${"
                index !== rewards.length - 1 ? "border-b pb-3" : """
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              }`}
            >
</div>
              <div>
</div>"
                <div className="flex items-center gap-2">"
</div>"
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />"
</BadgeDollarSign>"
                    <Badge className="h-4 w-4 text-blue-600" />"
</Badge>"
                  <p className="font-medium">"
</p>
                  </p>
                </div>"
                <p className="text-xs text-muted-foreground mt-1">"
</p>
                </p>"
                  <p className="text-xs text-muted-foreground">"
</p>

                  </p>
              </div>
            </div>
        </div>
      </CardContent>
    </Card>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralReward } from "@/types/referrals",;
import { formatDate } from "@/utils/referralUtils",;
import { BadgeDollarSign, Badge } from "lucide-react",;
<<<<<<< HEAD
<<<<<<< HEAD

interface RewardsCardProps {;
  rewards: ReferralReward[],;
  isLoading: boolean;
=======
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

export function RewardsCard(): any ({ rewards, isLoading }: RewardsCardProps) {;
  if (isLoading) {;
    return (
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface RewardsCardProps {;
  rewards: ReferralReward[];
  isLoading: boolean;
}
;
<<<<<<< HEAD
export function RewardsCard() { return null; }
  }
;
  if (rewards.length === 0) {;
    return (;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <Card>;
        <CardHeader>;
=======
  }        <CardHeader>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }        <CardHeader>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {;
  if (isLoading) {;
    return (;
      <Card>;
</Card>
        <CardHeader>;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <CardTitle className="flex items-center gap-2">;
            <BadgeDollarSign className="h-5 w-5" />;
            Your Rewards;
=======
</CardHeader>"
          <CardTitle className="flex items-center gap-2">;"
</CardTitle>"
            <BadgeDollarSign className="h-5 w-5" />;"
</BadgeDollarSign>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </CardTitle>;
          <CardDescription>Rewards earned from successful referrals</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex items-center justify-center p-4">;
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />;
          </div>;
        </CardContent>;
      </Card>;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    );
  }
;
  if (rewards.length === 0) {;
    return (;

<<<<<<< HEAD
  if (rewards && rewards.length === 0) {;
    return (
    ),;
    return (    ),;
  }
;
  if (rewards.length === 0) {;
    return (;
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
  return (

    return (;    );
  }
  return (
  // Check condition
if ( {) {
  $2
}
    return (
      <Card>;
        <CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
          <CardTitle className="flex items - center gap-2">;
            <BadgeDollarSign className="h - 5 w-5" />;
=======
      <Card>;
        <CardHeader>;"
          <CardTitle className="flex items-center gap-2">;"
            <BadgeDollarSign className="h-5 w-5" />;
            Your Rewards;
          </CardTitle>;
          <CardDescription>Rewards earned from successful referrals</CardDescription>;
        </CardHeader>;
        <CardContent>;"
          <div className="flex flex-col items-center justify-center p-4 text-center">;"
            <p className="text-muted-foreground">No rewards yet</p>;"
            <p className="text-sm text-muted-foreground mt-1">;
              Refer users to earn rewards once they complete onboarding;
            </p>;
          </div>;
        </CardContent>;
      </Card>;



  // Check condition;
if ( {) {}
  $2;
}
    return (
      <Card>;
        <CardHeader>;"
          <CardTitle className="flex items - center gap - 2">;"
            <BadgeDollarSign className="h - 5 w - 5" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <CardTitle className="flex items - center gap - 2">;
            <BadgeDollarSign className="h - 5 w - 5" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          <CardTitle className="flex items - center gap-2">;
            <BadgeDollarSign className="h - 5 w-5" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            Your Rewards;
          </CardTitle>;
          <CardDescription>;
            Rewards earned from successful referrals;
          </CardDescription>;
        </CardHeader>;
<<<<<<< HEAD
        <CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="flex flex - col items - center justify - center p - 4 text-center">;
            <p className="text - muted-foreground">No rewards yet</p>;
            <p className="text - sm text - muted - foreground mt-1">;
=======
        <CardContent>;"
          <div className="flex flex - col items - center justify - center p - 4 text - center">;"
            <p className="text - muted - foreground">No rewards yet</p>;"
            <p className="text - sm text - muted - foreground mt - 1">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <div className="flex flex - col items - center justify - center p - 4 text - center">;
            <p className="text - muted - foreground">No rewards yet</p>;
            <p className="text - sm text - muted - foreground mt - 1">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          <div className="flex flex - col items - center justify - center p - 4 text-center">;
            <p className="text - muted-foreground">No rewards yet</p>;
            <p className="text - sm text - muted - foreground mt-1">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              Refer users to earn rewards once they complete onboarding;
            </p>;
          </div>;
        </CardContent>;
      </Card>);
  }
  return (
    <Card>;
<<<<<<< HEAD
      <CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
        <CardTitle className="flex items - center gap-2">;
          <BadgeDollarSign className="h - 5 w-5" />;
=======
      <CardHeader>;"
        <CardTitle className="flex items - center gap - 2">;"
          <BadgeDollarSign className="h - 5 w - 5" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <CardTitle className="flex items - center gap - 2">;
          <BadgeDollarSign className="h - 5 w - 5" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        <CardTitle className="flex items - center gap-2">;
          <BadgeDollarSign className="h - 5 w-5" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          Your Rewards;
        </CardTitle>;
        <CardDescription>;
          Rewards earned from successful referrals;
        </CardDescription>;
      </CardHeader>;
<<<<<<< HEAD
      <CardContent>;
        <div className="space-y-4">;
          {rewards.map ((reward, index) => (
            <div;
<<<<<<< HEAD
=======
      <CardContent>;"
        <div className="space - y-4">;
          {rewards.map ((reward, index) => (
            <div;



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              key={reward.id}
              className={`flex justify - between items - start ${"
                index !== rewards.length - 1 ? "border - b pb - 3" : "";`
              }`}
            >;
<<<<<<< HEAD
              <div>;
                <div className="flex items - center gap-2">;
                  {reward.reward_type === "credit" ? (
                    <BadgeDollarSign className="h - 4 w - 4 text - green-600" />) : (
                    <Badge className="h - 4 w - 4 text - blue-600" />)}
                  <p className="font-medium">;
                    {reward.reward_type === "credit";
                      ? `$${reward.amount?.to_fixed (2)} Credit`;
                      : "Visibility Boost"}
                  </p>;
                </div>;
                <p className="text - xs text - muted - foreground mt-1">;
                  Earned on {format_date (reward.created_at)}
                </p>;
<<<<<<< HEAD
                {reward.expires_at && (                )}
=======
              <div>;"
                <div className="flex items - center gap - 2">;"
                  {reward.reward_type === "credit" ? ("
                    <BadgeDollarSign className="h - 4 w - 4 text - green - 600" />) : ("
                    <Badge className="h - 4 w - 4 text - blue - 600" />)}"
                  <p className="font - medium">;"
                    {reward.reward_type === "credit";`
                      ? `$${reward.amount?.to_fixed (2)} Credit`;"
                      : "Visibility Boost"}
                  </p>;
                </div>;"
                <p className="text - xs text - muted - foreground mt - 1">;
                  Earned on {format_date (reward.created_at)}
                </p>;
                {reward.expires_at && (

    <Card>;
      <CardHeader>;"
        <CardTitle className="flex items-center gap-2">;"
=======
                {reward.expires_at && (

    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <BadgeDollarSign className="h-5 w-5" />;
          Your Rewards;
        </CardTitle>;
        <CardDescription>Rewards earned from successful referrals</CardDescription>;
      </CardHeader>;
<<<<<<< HEAD
      <CardContent>;"
        <div className="space-y-4">;
          {rewards && rewards.map((reward, index) => (;
            <div;
              key={reward && reward.id}`
              className={`flex justify-between items-start ${"
                index !== rewards && rewards.length - 1 ? "border-b pb-3" : ""`
              }`}>;
              <div>;"
                <div className="flex items-center gap-2">;'
                  {reward && reward.reward_type === 'credit' ? (;"
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />;
                  ) : (;"
                    <Badge className="h-4 w-4 text-blue-600" />;
                  )}"
                  <p className="font-medium">;'
                    {reward && reward.reward_type === 'credit';`
                      ? `$${reward && reward.amount?.toFixed(2)} Credit`;'
                      : 'Visibility Boost'}
                  </p>;
                </div>;"
                <p className="text-xs text-muted-foreground mt-1">;
                  Earned on {formatDate(reward && reward.created_at)}
                </p>;
                {reward && reward.expires_at && (;"
                  <p className="text-xs text-muted-foreground">;
                    Expires on {formatDate(reward && reward.expires_at)}



                )}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      <CardContent>;
        <div className="space-y-4">;
          {rewards && rewards.map((reward, index) => (;
            <div
              key={reward && reward.id}
              className={`flex justify-between items-start ${
                index !== rewards && rewards.length - 1 ? "border-b pb-3" : ""
              }`}>;
              <div>;
                <div className="flex items-center gap-2">;
                  {reward && reward.reward_type === 'credit' ? (;
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />;
                  ) : (;
                    <Badge className="h-4 w-4 text-blue-600" />;
                  )}
                  <p className="font-medium">;
                    {reward && reward.reward_type === 'credit';
                      ? `$${reward && reward.amount?.toFixed(2)} Credit`;
                      : 'Visibility Boost'}
                  </p>;
                </div>;
                <p className="text-xs text-muted-foreground mt-1">;
                  Earned on {formatDate(reward && reward.created_at)}
                </p>;
                {reward && reward.expires_at && (;
                  <p className="text-xs text-muted-foreground">;
                    Expires on {formatDate(reward && reward.expires_at)}
                  </p>;

),;
  }
    );
  }
;
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
        <div className="space-y-4">;
          {rewards.map((reward, index) => (;
            <div;
              key={reward.id}
              className={`flex justify-between items-start ${;
                index !== rewards.length - 1 ? "border-b pb-3" : "";
              }`}
            >;
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
                <p className="text-xs text-muted-foreground mt-1">;
                  Earned on {formatDate(reward.created_at)}
                </p>;
                {reward.expires_at && (;
                  <p className="text-xs text-muted-foreground">;
                    Expires on {formatDate(reward.expires_at)}
                  </p>;
                )}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                {reward.expires_at && (                )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </div>;
            </div>;
          ))}

<<<<<<< HEAD
<<<<<<< HEAD
}
import {        </div>;
      </CardContent>;
    </Card>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
}
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

}
  );

}
                  <p className="text - xs text - muted-foreground">;
                    Expires on {format_date (reward.expires_at)}
                  </p>)}
              </div>;
            </div>))}
        </div>;
      </CardContent>;
    </Card>);
}
  ),;}
 interface RewardsCardProps {
  rewards: ReferralReward[];
isLoading: boolean 
}rewards, isLoading 
}: RewardsCardProps) {
  if (isLoading) {
  return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BadgeDollarSign className="h-5 w-5" /> Your Rewards </CardTitle> <CardDescription>Rewards earned from successful referrals</CardDescription> </CardHeader> <CardContent> <div className="flex items-center justify-center p-4" > <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" /> </div> </CardContent> </Card> if (rewards.length === 0) {
  return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BadgeDollarSign className="h-5 w-5" /> Your Rewards </CardTitle> <CardDescription>Rewards earned from successful referrals</CardDescription> </CardHeader> <CardContent> <div className="flex flex-col items-center justify-center p-4 text-center" > <p className="text-muted-foreground" >No rewards yet</p> <p className="text-sm text-muted-foreground mt-1" > Refer users to earn rewards once they complete onboarding </p> </div> </CardContent> </Card> return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BadgeDollarSign className="h-5 w-5" /> Your Rewards </CardTitle> <CardDescription>Rewards earned from successful referrals</CardDescription> </CardHeader> <CardContent> > <div> <div className="flex items-center gap-2"> {
  reward.reward type === 'credit' ? (<BadgeDollarSign className="h-4 w-4 text-green-600" />) : (<Badge className="h-4 w-4 text-blue-600" />) 
}<p className="font-medium"> {
  reward.reward type === 'credit' ? `$$ {
  reward.amount?.toFixed (2) 
}Credit` : 'Visibility Boost' 
}</p> </div> <p className="text-xs text-muted-foreground mt-1"> Earned on {
  formatDate (reward.created at) 
}</p> {
  reward.expires at && (<p className="text-xs text-muted-foreground"> Expires on {
  formatDate (reward.expires at) 
}</p>) 
}</div> </div>) ) 
}</div> </CardContent> </Card>) 
}
        </div>;
      </CardContent>;
    </Card>;
=======
        </div>;
      </CardContent>;
    </Card>;
  );
}
import {        </div>;
      </CardContent>;
    </Card>;
  );

}
  );

}
                  <p className="text - xs text - muted-foreground">;
                    Expires on {format_date (reward.expires_at)}
                  </p>)}
              </div>;
            </div>))}
        </div>;
      </CardContent>;
    </Card>);
}
  ),;}
 interface RewardsCardProps {
  rewards: ReferralReward[];
isLoading: boolean 
}rewards, isLoading 
}: RewardsCardProps) {
  if (isLoading) {
  return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BadgeDollarSign className="h-5 w-5" /> Your Rewards </CardTitle> <CardDescription>Rewards earned from successful referrals</CardDescription> </CardHeader> <CardContent> <div className="flex items-center justify-center p-4" > <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" /> </div> </CardContent> </Card> if (rewards.length === 0) {
  return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BadgeDollarSign className="h-5 w-5" /> Your Rewards </CardTitle> <CardDescription>Rewards earned from successful referrals</CardDescription> </CardHeader> <CardContent> <div className="flex flex-col items-center justify-center p-4 text-center" > <p className="text-muted-foreground" >No rewards yet</p> <p className="text-sm text-muted-foreground mt-1" > Refer users to earn rewards once they complete onboarding </p> </div> </CardContent> </Card> return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BadgeDollarSign className="h-5 w-5" /> Your Rewards </CardTitle> <CardDescription>Rewards earned from successful referrals</CardDescription> </CardHeader> <CardContent> > <div> <div className="flex items-center gap-2"> {
  reward.reward type === 'credit' ? (<BadgeDollarSign className="h-4 w-4 text-green-600" />) : (<Badge className="h-4 w-4 text-blue-600" />) 
}<p className="font-medium"> {
  reward.reward type === 'credit' ? `$$ {
  reward.amount?.toFixed (2) 
}Credit` : 'Visibility Boost' 
}</p> </div> <p className="text-xs text-muted-foreground mt-1"> Earned on {
  formatDate (reward.created at) 
}</p> {
  reward.expires at && (<p className="text-xs text-muted-foreground"> Expires on {
  formatDate (reward.expires at) 
}</p>) 
}</div> </div>) ) 
}</div> </CardContent> </Card>) 
}
        </div>;
      </CardContent>;
    </Card>;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        </div>;
      </CardContent>;
    </Card>;
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  );
}
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
;

  );
}
}
;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
import {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



}
import {}
'";`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
import {
  // TODO: Implement
  is_loading: boolean;
export /**
 * RewardsCard - Function description;
 */
function RewardsCard() {
  // Check condition;
if ( {) {
  $2;
    return (
      <Card>

        <CardHeader>

          <CardTitle className="flex items-center gap-2">"
"
            <BadgeDollarSign className="h-5 w-5" />"

          <CardDescription>

        <CardContent>
          <div className="flex items-center justify-center p-4">"
</CardContent>"
          <div className="flex items-center justify-center p-4">;"
</div>"
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />"
</div>



          <div className="flex flex-col items-center justify-center p-4 text-center">"
            <p className="text-muted-foreground">No rewards yet</p>""
            <p className="text-sm text-muted-foreground mt-1">"
</p>



        <div className="space-y-4">"
            <div;
              key={reward.id}
              className={`flex justify-between items-start ${"
                index !== rewards.length - 1 ? "border-b pb-3" : """`;
              }`}
            >
              <div>
                <div className="flex items-center gap-2">"
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />"
                    <Badge className="h-4 w-4 text-blue-600" />"
                  <p className="font-medium">"
                <p className="text-xs text-muted-foreground mt-1">"
                </p>"
                  <p className="text-xs text-muted-foreground">"
      <Card>;

        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;"
            <BadgeDollarSign className="h-5 w-5" />;"

          ;
          <CardDescription>Rewards earned from successful referrals;
        <CardContent>;
          <div className="flex items-center justify-center p-4">;"
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />;"
          </div>;


          <div className="flex flex-col items-center justify-center p-4 text-center">;"
            <p className="text-muted-foreground">No rewards yet</p>;""
            <p className="text-sm text-muted-foreground mt-1">;"
            </p>;

          <CardTitle className="flex items - center gap - 2">;"
            <BadgeDollarSign className="h - 5 w - 5" />;"

          <CardDescription>;

          <div className="flex flex - col items - center justify - center p - 4 text - center">;"
            <p className="text - muted - foreground">No rewards yet</p>;""
            <p className="text - sm text - muted - foreground mt - 1">;"
        ;)
      );



        <div className="space - y-4">;"

              key={reward.id}`;
              className={`flex justify - between items - start ${"
                index !== rewards.length - 1 ? "border - b pb - 3" : "";"`;
            >;
              <div>;
                <div className="flex items - center gap - 2">;"
                    <BadgeDollarSign className="h - 4 w - 4 text - green - 600" />) : ("
)"
                    <Badge className="h - 4 w - 4 text - blue - 600" />)}"
                  <p className="font - medium">;"
                </div>;"
                <p className="text - xs text - muted - foreground mt - 1">;"


        <div className="space-y-4">;"
              key={reward && reward.id}`;
                index !== rewards && rewards.length - 1 ? "border-b pb-3" : """`;
              }`}>;
                <div className="flex items-center gap-2">;"
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />;"
                    <Badge className="h-4 w-4 text-blue-600" />;"
                  <p className="font-medium">;"
                <p className="text-xs text-muted-foreground mt-1">;"
                </p>;"
                  <p className="text-xs text-muted-foreground">;"
    ;"`;
pr-12325
</p>
                  </p>;
              </div>;
            </div>;
        </div>;
      </CardContent>;
    </Card>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
