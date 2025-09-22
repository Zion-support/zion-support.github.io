import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ReferralStats, as, ReferralStatsType} from "@/types/referrals";
import {Award, Share, Star, TrendingUp} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralStats as ReferralStatsType } from "@/types/referrals";
import { Award, Share, Star, TrendingUp } from "lucide-react";
import { ReferralStats as ReferralStatsType } from "@/types/referrals",
import { Award, Share, Star, TrendingUp } from "lucide-react",

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface ReferralStatsProps {
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662;
interface ReferralStatsProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  stats: ReferralStatsType;
  isLoading: boolean;
}
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {

  const statCards = [
    {
      icon: <Share className="h-5 w-5 text-muted-foreground" />
      description: "People you've invited"
    }
    {"
      title: "Completed"
      value: stats.completedReferrals"
      icon: <Star className="h-5 w-5 text-muted-foreground" />"
      description: "Signed up & completed onboarding"
    }
    {"
      title: "Pending"
      value: stats.pendingReferrals"
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />"
      description: "Not yet completed onboarding"
    }
    {"
      title: "Total Rewards""
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : "-""
      icon: <Award className="h-5 w-5 text-muted-foreground" />"
      description: "Credits earned from referrals"
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Award, Share, Star, TrendingUp  } from './lucide-react';
interface ReferralStatsProps {}
  stats: ReferralStatsType;
  is_loading: boolean;
}
export /**;
 * ReferralStats - Function description;
 */
function ReferralStats() {}
  const stat_cards = [;
    {"
      title: "Total Referrals",
      value: stats.total_referrals,"
      icon: <Share className="h - 5 w - 5 text - muted - foreground" />,'"
      description: "People you've invited",
    },
    {"
      title: "Completed",
      value: stats.completed_referrals,"
      icon: <Star className="h - 5 w - 5 text - muted - foreground" />,"
      description: "Signed up & completed onboarding",
    },
    {"
      title: "Pending",
      value: stats.pending_referrals,"
      icon: <TrendingUp className="h - 5 w - 5 text - muted - foreground" />,"
      description: "Not yet completed onboarding",
    },
    {"
      title: "Total Rewards","`
      value: stats.total_rewards > 0 ? `$${stats.total_rewards.to_fixed (2)}` : "-","
      icon: <Award className="h - 5 w - 5 text - muted - foreground" />,"
      description: "Credits earned from referrals",
    },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4;
  ];
=======
=======  ];
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { Card, CardContent, CardHeader, CardTitle  } from '@/components / ui / card';
import { ReferralStats, as, ReferralStatsType  } from '@/types / referrals';
import { Award, Share, Star, TrendingUp  } from './lucide-react';
interface ReferralStatsProps {
  stats: ReferralStatsType;
  is_loading: boolean;
}
export /**
 * ReferralStats - Function description
 */
function ReferralStats() {
  const stat_cards = [;
    {
      title: "Total Referrals",
      value: stats.total_referrals,
      icon: <Share className="h - 5 w - 5 text - muted - foreground" />,
      description: "People you've invited",
    },
    {
      title: "Completed",
      value: stats.completed_referrals,
      icon: <Star className="h - 5 w - 5 text - muted - foreground" />,
      description: "Signed up & completed onboarding",
    },
    {
      title: "Pending",
      value: stats.pending_referrals,
      icon: <TrendingUp className="h - 5 w - 5 text - muted - foreground" />,
      description: "Not yet completed onboarding",
    },
    {
      title: "Total Rewards",
      value: stats.total_rewards > 0 ? `$${stats.total_rewards.to_fixed (2)}` : "-",
      icon: <Award className="h - 5 w - 5 text - muted - foreground" />,
      description: "Credits earned from referrals",
    },
  ];
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
return (
    <div className=\"grid gap - 4 md:grid - cols - 2 lg:grid - cols-4\" />;
      {stat_cards.map ((card, i) => (}
        <Card key={i} />;
          <CardHeader className=\"flex flex - row items - center justify - between space - y-0 pb-2\" />;
            <CardTitle className=\"text - sm font-medium\" />{card.title}</CardTitle>;
            {card.icon}
          </CardHeader>;
          <CardContent />;
            {is_loading ? (
<div className="h - 6 w - 20 bg - muted animate - pulse rounded" />) : (
              <>;
<<<<<<< HEAD
                <div className="text - 2xl font-bold">{card.value}</div>;
                <p className="text - xs text - muted-foreground">;
                  {card.description}
"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";"
import {ReferralStats, as, ReferralStatsType} from "@/types/referrals";"
import {Award, Share, Star, TrendingUp} from "lucide-react";
interface ReferralStatsProps {}
  stats: ReferralStatsType;
  isLoading: boolean;
}

export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {}
  const statCards = []
    {"
      title: "Total Referrals",
      value: stats.totalReferrals,"
      icon: <Share className="h-5 w-5 text-muted-foreground" />,'"
      description: "People you've invited",
    },
    {"
      title: "Completed",
      value: stats.completedReferrals,"
      icon: <Star className="h-5 w-5 text-muted-foreground" />,"
      description: "Signed up & completed onboarding",
    },
    {"
      title: "Pending",
      value: stats.pendingReferrals,"
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />,"
      description: "Not yet completed onboarding",
    },
    {"
      title: "Total Rewards","`
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : "-","
      icon: <Award className="h-5 w-5 text-muted-foreground" />,"
      description: "Credits earned from referrals",
},
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  ];

  return ("
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statCards.map((card, i) => (
        <Card key={i}>"
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">"
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            {card.icon}
          </CardHeader>
          <CardContent>
            {isLoading ? ("
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />
            ) : (
              <>"
                <div className="text-2xl font-bold">{card.value}</div>"
                <p className="text-xs text-muted-foreground">
                  {card.description}
                </p>
              </>
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralStats as ReferralStatsType } from "@/types/referrals",;
import { Award, Share, Star, TrendingUp } from "lucide-react",;

interface ReferralStatsProps {;
  stats: ReferralStatsType,;
  isLoading: boolean;
}

export function ReferralStats(): any ({ stats, isLoading }: ReferralStatsProps) {;
  const statCards = [;
    {;
      title: "Total Referrals",;
      value: stats && stats.totalReferrals,;
      icon: <Share className="h-5 w-5 text-muted-foreground" />,;
      description: "People you've invited"},;
    {;
      title: "Completed",;
      value: stats && stats.completedReferrals,;
      icon: <Star className="h-5 w-5 text-muted-foreground" />,;
      description: "Signed up & completed onboarding"},;
    {;
      title: "Pending",;
      value: stats && stats.pendingReferrals,;
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />,;
      description: "Not yet completed onboarding"},;
    {;
      title: "Total Rewards",;
      value: stats && stats.totalRewards > 0 ? `$${stats && stats.totalRewards.toFixed(2)}` : "-",;
      icon: <Award className="h-5 w-5 text-muted-foreground" />,;
      description: "Credits earned from referrals"}],;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">;
      {statCards && statCards.map((card, i) => (;
        <Card key={i}>;
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">;
            <CardTitle className="text-sm font-medium">{card && card.title}</CardTitle>;
            {card && card.icon}
          </CardHeader>;
          <CardContent>;
            {isLoading ? (;
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />;
            ) : (;
              <>;
                <div className="text-2xl font-bold">{card && card.value}</div>;
                <p className="text-xs text-muted-foreground">{card && card.description}</p>;
              </>;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
            )}
          </CardContent>;
        </Card>;
      ))}
</div>
);
}
  )
}
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

                </p>;
              </>)}
          </CardContent>;
        </Card>))}
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    </div>
  );
}
;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662;
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

interface ReferralStatsProps {
  // TODO: Implement
}
  stats: ReferralStatsType;,
  isLoading: boolean;
}

export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {

  const statCards = [
    {

      title: "Total Referrals"",
  value: stats.totalReferrals;"
      icon: <Share className="h-5 w-5 text-muted-foreground" />"
"
      icon: <Star className="h-5 w-5 text-muted-foreground" />"
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />"
      icon: <Award className="h-5 w-5 text-muted-foreground" />"
      icon: <Share className="h - 5 w - 5 text - muted - foreground" />,"
      icon: <Star className="h - 5 w - 5 text - muted - foreground" />,"
      icon: <TrendingUp className="h - 5 w - 5 text - muted - foreground" />,"
      icon: <Award className="h - 5 w - 5 text - muted - foreground" />,"
    <div className="grid gap - 4 md:grid - cols - 2 lg:grid - cols - 4">;"
</div>
        <Card key={i}>;
          <CardHeader className="flex flex - row items - center justify - between space - y-0 pb - 2">;"
            <CardTitle className="text - sm font - medium">{card.title};"
          ;
          <CardContent>;
              <div className="h - 6 w - 20 bg - muted animate - pulse rounded" />) : ("
              <>;"
                <div className="text - 2xl font - bold">{card.value}</div>;""
                <p className="text - xs text - muted - foreground">;"
</p>"
      icon: <Share className="h-5 w-5 text-muted-foreground" />,"
      icon: <Star className="h-5 w-5 text-muted-foreground" />,"
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />,"
      icon: <Award className="h-5 w-5 text-muted-foreground" />,"
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">"
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">"
            <CardTitle className="text-sm font-medium">{card.title}"
          <CardContent>
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />"
              <>"
                <div className="text-2xl font-bold">{card.value}</div>""
                <p className="text-xs text-muted-foreground">"
</p>
              </>)
            )}

                </p>
              </>)
            )}

          </CardContent>;
        </Card>;
    </div>;
                </p>;
              </>)}
        ))}
    </div>);
    </div>]"
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
