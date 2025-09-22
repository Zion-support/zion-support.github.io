<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ReferralReward} from "@/types/referrals";
import {formatDate} from "@/utils/referralUtils";
import {BadgeDollarSign, Badge} from "lucide-react";

import { BadgeDollarSign, Badge } from "lucide-react",

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
          </CardDescription>
        </CardHeader>
        <CardContent>"
          <div className="flex items-center justify-center p-4">"
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </CardContent>
      </Card>
    );
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
);
  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
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
className={`flex justify-between items-start ${
                index !== rewards.length - 1 ? "border-b pb-3" : ""
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
  )
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralReward } from "@/types/referrals",;
import { formatDate } from "@/utils/referralUtils",;
import { BadgeDollarSign, Badge } from "lucide-react",;
interface RewardsCardProps {;
  rewards: ReferralReward[],;
  isLoading: boolean;
}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

export function RewardsCard(): any ({ rewards, isLoading }: RewardsCardProps) {;
  if (isLoading) {;
    return (

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface RewardsCardProps {;
  rewards: ReferralReward[];
  isLoading: boolean;
}
;
export function RewardsCard() { return null; }
  }
;
  if (rewards.length === 0) {;
    return (;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Card>;
        <CardHeader>;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    );
  }
;
  if (rewards.length === 0) {;
    return (;

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
          <CardTitle className="flex items - center gap-2">;
            <BadgeDollarSign className="h - 5 w-5" />;
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
<CardContent>;
<<<<<<< HEAD
          <div className="flex flex - col items - center justify - center p - 4 text-center">;
            <p className="text - muted-foreground">No rewards yet</p>;
            <p className="text - sm text - muted - foreground mt-1">;
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
<CardHeader>;
<<<<<<< HEAD
        <CardTitle className="flex items - center gap-2">;
          <BadgeDollarSign className="h - 5 w-5" />;
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
<CardContent>;
        <div className="space-y-4">;
          {rewards.map ((reward, index) => (
            <div;

              key={reward.id}
              className={`flex justify - between items - start ${"
                index !== rewards.length - 1 ? "border - b pb - 3" : "";`
              }`}
            >;
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
{reward.expires_at && (                )}
          <BadgeDollarSign className="h-5 w-5" />;
          Your Rewards;
        </CardTitle>;
        <CardDescription>Rewards earned from successful referrals</CardDescription>;
      </CardHeader>;
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
              </div>;
            </div>;
          ))}

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
}
import {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
