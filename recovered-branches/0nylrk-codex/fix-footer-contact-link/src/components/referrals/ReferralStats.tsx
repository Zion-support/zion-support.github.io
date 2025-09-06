<<<<<<< HEAD
=======




<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
interface ReferralStatsProps {
  stats: ReferralStatsType;
  isLoading: boolean
}
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {

  const statCards = [
    {
<<<<<<< HEAD
=======
      title: "Total Referrals"
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      value: stats.totalReferrals
      icon: <Share className="h-5 w-5 text-muted-foreground" />
      description: "People you've invited"
    }
    {
      title: "Completed"
      value: stats.completedReferrals
      icon: <Star className="h-5 w-5 text-muted-foreground" />
      description: "Signed up & completed onboarding"
    }
    {
      title: "Pending"
      value: stats.pendingReferrals
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />
      description: "Not yet completed onboarding"
    }
    {
      title: "Total Rewards"
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : "-"
      icon: <Award className="h-5 w-5 text-muted-foreground" />
      description: "Credits earned from referrals"
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  ];
;
  return (
    <div className="grid gap - 4 md:grid - cols - 2 lg:grid - cols - 4">;
      {stat_cards.map ((card, i) => (
        <Card key={i}>;
          <CardHeader className="flex flex - row items - center justify - between space - y-0 pb - 2">;
            <CardTitle className="text - sm font - medium">{card.title}</CardTitle>;
            {card.icon}
          </CardHeader>;
          <CardContent>;
            {is_loading ? (
              <div className="h - 6 w - 20 bg - muted animate - pulse rounded" />) : (
              <>;
                <div className="text - 2xl font - bold">{card.value}</div>;
                <p className="text - xs text - muted - foreground">;
                  {card.description}

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ReferralStats, as, ReferralStatsType} from "@/types/referrals";
import {Award, Share, Star, TrendingUp} from "lucide-react";
interface ReferralStatsProps {
  stats: ReferralStatsType;
  isLoading: boolean;
}

export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = [
    {
      title: "Total Referrals",
      value: stats.totalReferrals,
      icon: <Share className="h-5 w-5 text-muted-foreground" />,
      description: "People you've invited",
    },
    {
      title: "Completed",
      value: stats.completedReferrals,
      icon: <Star className="h-5 w-5 text-muted-foreground" />,
      description: "Signed up & completed onboarding",
    },
    {
      title: "Pending",
      value: stats.pendingReferrals,
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />,
      description: "Not yet completed onboarding",
    },
    {
      title: "Total Rewards",
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : "-",
      icon: <Award className="h-5 w-5 text-muted-foreground" />,
      description: "Credits earned from referrals",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statCards.map((card, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            {card.icon}
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />
            ) : (
              <>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">
                  {card.description}
                </p>
              </>
            )}
          </CardContent>;
        </Card>;
      ))}

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
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    </div>
  );
}
;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
