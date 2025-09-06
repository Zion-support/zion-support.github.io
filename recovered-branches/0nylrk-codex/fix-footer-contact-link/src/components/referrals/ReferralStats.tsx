<<<<<<< HEAD

<<<<<<< HEAD
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ReferralStats, as, ReferralStatsType} from "@/types/referrals";
import {Award, Share, Star, TrendingUp} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralStats as ReferralStatsType } from "@/types/referrals";
import { Award, Share, Star, TrendingUp } from "lucide-react";
import { ReferralStats as ReferralStatsType } from "@/types/referrals",
import { Award, Share, Star, TrendingUp } from "lucide-react",

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface ReferralStatsProps {
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662;
interface ReferralStatsProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  stats: ReferralStatsType;
  isLoading: boolean;
}
<<<<<<< HEAD
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {

  const statCards = [
    {
      icon: <Share className="h-5 w-5 text-muted-foreground" />
=======
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {}
  const statCards = []
    {}
      title: "Total Referrals"
      value: stats.totalReferrals"
      icon: <Share className="h-5 w-5 text-muted-foreground" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
=======
=======
import { Card, CardContent, CardHeader, CardTitle  } from '@/components / ui / card';
import { ReferralStats, as, ReferralStatsType  } from '@/types / referrals';
=======
=======';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components / ui / card';'
import { ReferralStats, as, ReferralStatsType  } from '@/types / referrals';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======  ];
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
;
<<<<<<< HEAD
  return (
    <div className="grid gap - 4 md:grid - cols - 2 lg:grid - cols-4">;
      {stat_cards.map ((card, i) => (
        <Card key={i}>;
          <CardHeader className="flex flex - row items - center justify - between space - y-0 pb-2">;
            <CardTitle className="text - sm font-medium">{card.title}</CardTitle>;
            {card.icon}
          </CardHeader>;
          <CardContent>;
            {is_loading ? (
              <div className="h - 6 w - 20 bg - muted animate-pulse rounded" />) : (
              <>;
                <div className="text - 2xl font-bold">{card.value}</div>;
                <p className="text - xs text - muted-foreground">;
=======
  return ("
    <div className="grid gap - 4 md:grid - cols - 2 lg:grid - cols - 4">;
      {stat_cards.map ((card, i) => (
        <Card key={i}>;"
          <CardHeader className="flex flex - row items - center justify - between space - y-0 pb - 2">;"
            <CardTitle className="text - sm font - medium">{card.title}</CardTitle>;
            {card.icon}
          </CardHeader>;
          <CardContent>;
            {is_loading ? ("
              <div className="h - 6 w - 20 bg - muted animate - pulse rounded" />) : (
              <>;"
                <div className="text - 2xl font - bold">{card.value}</div>;"
                <p className="text - xs text - muted - foreground">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
    },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
    },;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
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
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
            )}
          </CardContent>;
        </Card>;
      ))}
<<<<<<< HEAD
    </div>
<<<<<<< HEAD
  );
}
  )
}
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

    </div>;
  );
}

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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    </div>
  );
}
;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662;
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
