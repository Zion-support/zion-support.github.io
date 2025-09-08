
<<<<<<< HEAD
=======
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ReferralReward} from "@/types/referrals";
import {formatDate} from "@/utils/referralUtils";
import {BadgeDollarSign, Badge} from "lucide-react";


import { BadgeDollarSign, Badge } from "lucide-react",

import {

>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD

    <Card>
</Card>
      <CardHeader>

=======
    <Card>
</Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BadgeDollarSign className="h-5 w-5" />
          Your Rewards
>>>>>>> origin/cursor/delete-old-data-records-6bba
</CardHeader>"
        <CardTitle className="flex items-center gap-2">"
</CardTitle>"
          <BadgeDollarSign className="h-5 w-5" />"
</BadgeDollarSign>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        </CardTitle>
        <CardDescription>
</CardDescription>
        </CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
</CardContent>"
        <div className="space-y-4">"
</div>
            <div;
              key={reward.id}
<<<<<<< HEAD
=======


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

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralReward } from "@/types/referrals",;
import { formatDate } from "@/utils/referralUtils",;
import { BadgeDollarSign, Badge } from "lucide-react",;

}
export function RewardsCard(): any ({ rewards, isLoading }: RewardsCardProps) {;
  if (isLoading) {;
    return (
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralReward } from "@/types/referrals",;
import { formatDate } from "@/utils/referralUtils",;
import { BadgeDollarSign, Badge } from "lucide-react",;

}
<<<<<<< HEAD

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
              </div>
            </div>
        </div>
      </CardContent>
    </Card>
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
;

      <Card>;
        <CardHeader>;

    );
  }
;
  if (rewards.length === 0) {;
    return (;

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
      <CardContent>;
        <div className="space - y-4">;
          {rewards.map ((reward, index) => (
            <div;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              key={reward.id}
              className={`flex justify - between items - start ${"
                index !== rewards.length - 1 ? "border - b pb - 3" : "";`
              }`}
            >;

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <BadgeDollarSign className="h-5 w-5" />;
          Your Rewards;
        </CardTitle>;
        <CardDescription>Rewards earned from successful referrals</CardDescription>;
      </CardHeader>;
<<<<<<< HEAD

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
=======


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
              </div>;
            </div>;
          ))}
        </div>;
      </CardContent>;
    </Card>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

  );
}

<<<<<<< HEAD




=======
}

import {
;


        </div>;
      </CardContent>;
    </Card>;
  );
}
}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
