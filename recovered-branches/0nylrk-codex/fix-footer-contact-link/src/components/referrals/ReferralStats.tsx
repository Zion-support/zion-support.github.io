<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface ReferralStatsProps {
  stats: ReferralStatsType;
  isLoading: boolean
}
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {

  const statCards = [
    {
      title: "Total Referrals"
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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

=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralStats, as, ReferralStatsType } from "@/types/referrals";
import { Award, Share, Star, TrendingUp } from "lucide-react";
>>>>>>> main
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
<<<<<<< HEAD
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralStats as ReferralStatsType } from "@/types/referrals",;
import { Award, Share, Star, TrendingUp } from "lucide-react",;

<<<<<<< HEAD
=======
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ReferralStats, as, ReferralStatsType} from "@/types/referrals";
import {Award, Share, Star, TrendingUp} from "lucide-react";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            )}
          </CardContent>;
        </Card>;
      ))}

    </div>;
  );
}

=======
                </p>;
              </>)}
          </CardContent>;
        </Card>))}
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
    </div>
  );
}
;

  ),;}
 interface ReferralStatsProps {
  stats: ReferralStatsType;
isLoading: boolean 
}stats, isLoading 
}: ReferralStatsProps) {
  const statCards = [ {
  icon: <Award className="h-5 w-5 text-muted-foreground" />;
description: "Credits earned from referrals" 
}];
}</CardContent> </Card>) ) 
}</div>) 
}
              </>;
            )}
          </CardContent>
        </Card>
      ))}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </div>
  );
}
  )
}
;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
