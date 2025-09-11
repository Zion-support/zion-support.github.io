
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ReferralReward} from "@/types/referrals";
import {formatDate} from "@/utils/referralUtils";
import {BadgeDollarSign, Badge} from "lucide-react";

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals",
import { formatDate } from "@/utils/referralUtils",
import { BadgeDollarSign, Badge } from "lucide-react",




<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface RewardsCardProps {
  rewards: ReferralReward[];
  isLoading: boolean
}
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {
  if (isLoading) {
<<<<<<< HEAD
<<<<<<< HEAD

import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from "@/components/ui/card";
import { ReferralReward } from "@/types/referrals";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ReferralReward} from "@/types/referrals";
import {formatDate} from "@/utils/referralUtils";
import {BadgeDollarSign, Badge} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals",
import { formatDate } from "@/utils/referralUtils",
import { BadgeDollarSign, Badge } from "lucide-react",

import { formatDate } from "@/utils/referralUtils";
import { BadgeDollarSign, Badge } from "lucide-react";
interface RewardsCardProps {
  rewards: ReferralReward[];
  isLoading: boolean

import {
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
<<<<<<< HEAD
<<<<<<< HEAD
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
          <div className="flex items-center justify-center p-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </CardContent>
      </Card>
    );
  }
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from '@/components / ui / card';
import { ReferralReward  } from '@/types / referrals';
import { format_date  } from '@/utils / referral_utils';
import { BadgeDollarSign, Badge  } from './lucide-react';
interface RewardsCardProps {
  rewards: ReferralReward[];
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    return (
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items - center gap - 2">;
            <BadgeDollarSign className="h - 5 w - 5" />;
            Your Rewards;
          </CardTitle>;
          <CardDescription>;
            Rewards earned from successful referrals;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex items - center justify - center p - 4">;
            <div className="h - 8 w - 8 animate - spin rounded - full border - 4 border - primary border - t-transparent" />;
          </div>;
        </CardContent>;
      </Card>);
  }

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    );
  }
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
        <div className="space-y-4">
          {rewards.map((reward, index) => (
            <div
              key={reward.id}
              className={`flex justify-between items-start ${
                index !== rewards.length - 1 ? "border-b pb-3" : ""
<<<<<<< HEAD
<<<<<<< HEAD
  )

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  )

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralReward } from "@/types/referrals",;
import { formatDate } from "@/utils/referralUtils",;
import { BadgeDollarSign, Badge } from "lucide-react",;

interface RewardsCardProps {;
  rewards: ReferralReward[],;
  isLoading: boolean;
}
<<<<<<< HEAD
<<<<<<< HEAD
export function RewardsCard(): any ({ rewards, isLoading }: RewardsCardProps) {;
  if (isLoading) {;
    return (

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralReward } from "@/types/referrals",;
import { formatDate } from "@/utils/referralUtils",;
import { BadgeDollarSign, Badge } from "lucide-react",;
;
interface RewardsCardProps {;
  rewards:ReferralReward[],;
  isLoading:boolean;
}
;
export function RewardsCard({ rewards, isLoading } RewardsCardProps) {;
  if (isLoading) {;
    return (;
}`}
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  {reward.reward_type === "credit" ? (
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />
                  ) : (
                    <Badge className="h-4 w-4 text-blue-600" />
                  )}
                  <p className="font-medium">
                    {reward.reward_type === "credit"
                      ? `$${reward.amount?.toFixed(2)} Credit`
                      : "Visibility Boost"}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Earned on {formatDate(reward.created_at)}
                </p>
                {reward.expires_at && (
                  <p className="text-xs text-muted-foreground">
                    Expires on {formatDate(reward.expires_at)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralReward } from "@/types/referrals",;
import { formatDate } from "@/utils/referralUtils",;
import { BadgeDollarSign, Badge } from "lucide-react",;
interface RewardsCardProps {;
  rewards: ReferralReward[];
  isLoading: boolean;
}
;
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {;
  if (isLoading) {;
    return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function RewardsCard(): any ({ rewards, isLoading }: RewardsCardProps) {;
  if (isLoading) {;
    return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    ),;
  }
;
  if (rewards.length === 0) {;
    return (;
    );
  }
<<<<<<< HEAD
;
  if (rewards.length === 0) {;
    return (;
=======

  if (rewards && rewards.length === 0) {;
    return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    );
  }

  if (rewards && rewards.length === 0) {;
    return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );
  }
  return (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Check condition
if ( {) {
  $2
}
    return (
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items - center gap - 2">;
            <BadgeDollarSign className="h - 5 w - 5" />;
            Your Rewards;
          </CardTitle>;
          <CardDescription>;
            Rewards earned from successful referrals;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex flex - col items - center justify - center p - 4 text - center">;
            <p className="text - muted - foreground">No rewards yet</p>;
            <p className="text - sm text - muted - foreground mt - 1">;
              Refer users to earn rewards once they complete onboarding;
            </p>;
          </div>;
        </CardContent>;
      </Card>);
  }
  return (
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <BadgeDollarSign className="h - 5 w - 5" />;
          Your Rewards;
        </CardTitle>;
        <CardDescription>;
          Rewards earned from successful referrals;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="space - y-4">;
          {rewards.map ((reward, index) => (
            <div;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              key={reward.id}
              className={`flex justify - between items - start ${
                index !== rewards.length - 1 ? "border - b pb - 3" : "";
              }`}
            >;
              <div>;
                <div className="flex items - center gap - 2">;
                  {reward.reward_type === "credit" ? (
                    <BadgeDollarSign className="h - 4 w - 4 text - green - 600" />) : (
                    <Badge className="h - 4 w - 4 text - blue - 600" />)}
                  <p className="font - medium">;
                    {reward.reward_type === "credit";
                      ? `$${reward.amount?.to_fixed (2)} Credit`;
                      : "Visibility Boost"}
                  </p>;
                </div>;
                <p className="text - xs text - muted - foreground mt - 1">;
                  Earned on {format_date (reward.created_at)}
                </p>;
                {reward.expires_at && (
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          {rewards && rewards.map((reward, index) => (;
            <div
              key={reward && reward.id}
              className={`flex justify-between items-start ${
                index !== rewards && rewards.length - 1 ? "border-b pb-3" : ""
              }`}>;
              <div>;
                <div className="flex items-center gap-2">;
                  {reward && reward.reward_type === 'credit' ? (;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />;
                  ) : (;
                    <Badge className="h-4 w-4 text-blue-600" />;
                  )}
                  <p className="font-medium">;
<<<<<<< HEAD
                    {reward.reward_type === 'credit';
                      ? `$${reward.amount?.toFixed(2)} Credit`;
=======
                    {reward && reward.reward_type === 'credit';
                      ? `$${reward && reward.amount?.toFixed(2)} Credit`;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      : 'Visibility Boost'}
                  </p>;
                </div>;
                <p className="text-xs text-muted-foreground mt-1">;
<<<<<<< HEAD
                  Earned on {formatDate(reward.created_at)}
                </p>;
                {reward.expires_at && (;
                  <p className="text-xs text-muted-foreground">;
                    Expires on {formatDate(reward.expires_at)}
                  </p>;
=======
                  Earned on {formatDate(reward && reward.created_at)}
                </p>;
                {reward && reward.expires_at && (;
                  <p className="text-xs text-muted-foreground">;
                    Expires on {formatDate(reward && reward.expires_at)}
                  </p>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  </p>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                )}
              </div>;
            </div>;
          ))}
<<<<<<< HEAD
<<<<<<< HEAD
        </div>;
      </CardContent>;
    </Card>;
  );

}
  );

}
                  <p className="text - xs text - muted - foreground">;
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

  );
}
}
;

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        </div>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
}
<<<<<<< HEAD
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
