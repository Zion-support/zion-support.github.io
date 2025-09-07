<<<<<<< HEAD
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from "@/components/ui/card";
import { ReferralReward } from "@/types/referrals";

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ReferralReward} from "@/types/referrals";
import {formatDate} from "@/utils/referralUtils";
import {BadgeDollarSign, Badge} from "lucide-react";

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals",
import { formatDate } from "@/utils/referralUtils",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { BadgeDollarSign, Badge } from "lucide-react",

import {

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


interface RewardsCardProps {
  rewards: ReferralReward[];
  isLoading: boolean
}
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {
  if (isLoading) {
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

>>>>>>> merged-prs-20250907-203621
import { formatDate } from "@/utils/referralUtils";
import { BadgeDollarSign, Badge } from "lucide-react";
interface RewardsCardProps {
  rewards: ReferralReward[];
  isLoading: boolean
<<<<<<< HEAD
import {
=======

import {
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
<<<<<<< HEAD

} from '@/components / ui / card';
import { ReferralReward  } from '@/types / referrals';
import { format_date  } from '@/utils / referral_utils';

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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
} from "@/components/ui/card";
import { ReferralReward } from "@/types/referrals";
import { formatDate } from "@/utils/referralUtils";
import { BadgeDollarSign, Badge } from "lucide-react";
interface RewardsCardProps {
<<<<<<< HEAD
  rewards: ReferralReward[],
  isLoading: boolean}

=======
  rewards: ReferralReward[];
  isLoading: boolean;

}
>>>>>>> merged-prs-20250907-203621
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
            Your Rewards
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </CardTitle>
          <CardDescription>
            Rewards earned from successful referrals;
          </CardDescription>
        </CardHeader>
<<<<<<< HEAD
        <CardContent>"
          <div className="flex items-center justify-center p-4">"
=======
        <CardContent>
          <div className="flex items-center justify-center p-4">
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </CardContent>
      </Card>
    );
<<<<<<< HEAD

}

export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {
  if (isLoading) {
    return (

=======
  }
  if (rewards.length === 0) {
    return (
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <Card>
</Card>
        <CardHeader>
<<<<<<< HEAD
</CardHeader>'
          <CardTitle className="flex items-center gap-2">"
</CardTitle>"
            <BadgeDollarSign className="h-5 w-5" />"
</BadgeDollarSign>
=======
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
            Your Rewards
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </CardTitle>
          <CardDescription>
</CardDescription>
          </CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
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
=======
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <p className="text-muted-foreground">No rewards yet</p>
            <p className="text-sm text-muted-foreground mt-1">
              Refer users to earn rewards once they complete onboarding
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </p>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD

    <Card>
</Card>
      <CardHeader>
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
} from '@/components / ui / card';
import { ReferralReward  } from '@/types / referrals';
import { format_date  } from '@/utils / referral_utils';

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
<<<<<<< HEAD
          </CardDescription>
        </CardHeader>
        <CardContent>"
          <div className="flex items-center justify-center p-4">"
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </CardContent>
      </Card>
=======
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex items - center justify - center p - 4">;
            <div className="h - 8 w - 8 animate - spin rounded - full border - 4 border - primary border - t-transparent" />;
          </div>;
        </CardContent>;
      </Card>);
  }
<<<<<<< HEAD
  return (
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    );

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

>>>>>>> merged-prs-20250907-203621
    <Card>
</Card>
      <CardHeader>
<<<<<<< HEAD
        <CardTitle className="flex items-center gap-2">
          <BadgeDollarSign className="h-5 w-5" />
          Your Rewards
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
</CardHeader>"
        <CardTitle className="flex items-center gap-2">"
</CardTitle>"
          <BadgeDollarSign className="h-5 w-5" />"
</BadgeDollarSign>
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </CardTitle>
        <CardDescription>
</CardDescription>
        </CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
</CardContent>"
        <div className="space-y-4">"
</div>
            <div;
              key={reward.id}

              }`}
            >
</div>
              <div>
=======
<<<<<<< HEAD
        <div className="space-y-4">
          {rewards.map((reward, index) => (
            <div
              key={reward.id}
              className={`flex justify-between items-start ${
                index !== rewards.length - 1 ? "border-b pb-3" : ""
              }`}
            >
              <div>
=======
</CardContent>"
        <div className="space-y-4">"
</div>
            <div;
              key={reward.id}
<<<<<<< HEAD
=======
              className={`flex justify-between items-start ${
                index !== rewards.length - 1 ? "border-b pb-3" : ""
<<<<<<< HEAD
  )

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

              }`}
            >
</div>
              <div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
</div>"
                <div className="flex items-center gap-2">"
</div>"
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />"
</BadgeDollarSign>"
                    <Badge className="h-4 w-4 text-blue-600" />"
</Badge>"
                  <p className="font-medium">"
</p>
<<<<<<< HEAD
                  </p>
                </div>"
                <p className="text-xs text-muted-foreground mt-1">"
</p>
                </p>"
                  <p className="text-xs text-muted-foreground">"
</p>

=======
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralReward } from "@/types/referrals",;
import { formatDate } from "@/utils/referralUtils",;
import { BadgeDollarSign, Badge } from "lucide-react",;

}
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
>>>>>>> merged-prs-20250907-203621
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  </p>
              </div>
            </div>
        </div>
      </CardContent>
    </Card>
<<<<<<< HEAD

=======
  )
<<<<<<< HEAD
}
}
;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralReward } from "@/types/referrals",;
import { formatDate } from "@/utils/referralUtils",;
import { BadgeDollarSign, Badge } from "lucide-react",;
<<<<<<< HEAD

}

export function RewardsCard(): any ({ rewards, isLoading }: RewardsCardProps) {;
  if (isLoading) {;
    return (

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface RewardsCardProps {;
  rewards: ReferralReward[];
  isLoading: boolean;
}
;
<<<<<<< HEAD

      <Card>;
        <CardHeader>;

    );
=======
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {;
  if (isLoading) {;
    return (;
=======

export function RewardsCard(): any ({ rewards, isLoading }: RewardsCardProps) {;
  if (isLoading) {;
    return (
<<<<<<< HEAD

interface RewardsCardProps {;
  rewards: ReferralReward[];
  isLoading: boolean;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    ),;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
;
  if (rewards.length === 0) {;
    return (;
<<<<<<< HEAD
=======
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );
  }
  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Check condition
if ( {) {
  $2
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
;

      <Card>;
        <CardHeader>;

    );
  }
;
  if (rewards.length === 0) {;
    return (;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            Your Rewards;
          </CardTitle>;
          <CardDescription>;
            Rewards earned from successful referrals;
          </CardDescription>;
        </CardHeader>;

              Refer users to earn rewards once they complete onboarding;
            </p>;
          </div>;
        </CardContent>;
      </Card>);
  }
  return (
    <Card>;

          Your Rewards;
        </CardTitle>;
        <CardDescription>;
          Rewards earned from successful referrals;
        </CardDescription>;
      </CardHeader>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
      <CardContent>;
        <div className="space - y-4">;
          {rewards.map ((reward, index) => (
            <div;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              key={reward.id}
              className={`flex justify - between items - start ${"
                index !== rewards.length - 1 ? "border - b pb - 3" : "";`
              }`}
            >;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <BadgeDollarSign className="h-5 w-5" />;
          Your Rewards;
        </CardTitle>;
        <CardDescription>Rewards earned from successful referrals</CardDescription>;
      </CardHeader>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              </div>;
            </div>;
          ))}

});

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
<<<<<<< HEAD
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
                )}
              </div>;
            </div>;
          ))}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        </div>;
      </CardContent>;
    </Card>;

  );
}
}

}
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
}
;
=======
import {
>>>>>>> origin/chore/fix-lint-and-merge
=======
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
<<<<<<< HEAD

}
<<<<<<< HEAD
  )
}
}
;
=======
import {
>>>>>>> origin/chore/fix-lint-and-merge
=======
;

=======

        </div>;
      </CardContent>;
    </Card>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
}
<<<<<<< HEAD
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
