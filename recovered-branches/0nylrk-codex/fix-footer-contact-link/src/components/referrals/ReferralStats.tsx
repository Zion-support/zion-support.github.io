<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralStats as ReferralStatsType } from "@/types/referrals";
import { Award, Share, Star, TrendingUp } from "lucide-react";
interface ReferralStatsProps {
<<<<<<< HEAD
=======
  stats: ReferralStatsType,
  isLoading: boolean}

export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = $2;
      value: stats.totalReferrals,
      icon: <Share className = $2;
      description: "People you've invited"},
    {
      title: "Completed",
      value: stats.completedReferrals,
      icon: <Star className = $2;
      description: "Signed up & completed onboarding"},
    {
      title: "Pending",
      value: stats.pendingReferrals,
      icon: <TrendingUp className = $2;
      description: "Not yet completed onboarding"},
    {
      title: "Total Rewards",
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : "-",
      icon: <Award className = $2;
      description: "Credits earned from referrals"}],

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statCards.map((card, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
=======
<<<<<<< HEAD
=======



<<<<<<< HEAD
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ReferralStats, as, ReferralStatsType} from "@/types/referrals";
import {Award, Share, Star, TrendingUp} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralStats as ReferralStatsType } from "@/types/referrals";
import { Award, Share, Star, TrendingUp } from "lucide-react";
import { ReferralStats as ReferralStatsType } from "@/types/referrals",
import { Award, Share, Star, TrendingUp } from "lucide-react",

interface ReferralStatsProps {
  stats: ReferralStatsType;
  isLoading: boolean
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralStats as ReferralStatsType } from "@/types/referrals";
import { Award, Share, Star, TrendingUp } from "lucide-react";

interface ReferralStatsProps {
  stats: ReferralStatsType;
  isLoading: boolean

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralStats, as, ReferralStatsType } from "@/types/referrals";
import { Award, Share, Star, TrendingUp } from "lucide-react";
interface ReferralStatsProps {
  stats: ReferralStatsType;
  isLoading: boolean;

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ReferralStatsProps {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

interface ReferralStatsProps {}

  stats: ReferralStatsType;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  isLoading: boolean;
}

<<<<<<< HEAD
}
const statCards = [;
    {

>>>>>>> merged-prs-20250907-203621
            {card.icon}
          </CardHeader>
          <CardContent>
            {isLoading ? (
<<<<<<< HEAD

=======
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

  ];

;

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
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />
            ) : (
              <>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  {card.description}
                </p>
              </>

            )}
          </CardContent>
        </Card>
      ))}
<<<<<<< HEAD

=======
    </div>
  )
}
=======

=======
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

  ];

;

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
>>>>>>> origin/chore/fix-lint-and-merge
                  {card.description}
                </p>
              </>

=======
  isLoading: boolean
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {

  const statCards = [
    {
<<<<<<< HEAD
title: "Total Referrals"
=======
      title: "Total Referrals"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralStats as ReferralStatsType } from "@/types/referrals",;
import { Award, Share, Star, TrendingUp } from "lucide-react",;

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ReferralStats, as, ReferralStatsType} from "@/types/referrals";
import {Award, Share, Star, TrendingUp} from "lucide-react";
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            )}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralStats as ReferralStatsType } from "@/types/referrals",;
import { Award, Share, Star, TrendingUp } from "lucide-react",;
;
interface ReferralStatsProps {;
  stats:ReferralStatsType,;
  isLoading:boolean;
}
;
export function ReferralStats({ stats, isLoading } ReferralStatsProps) {;
  const statCards = [;
    {;
      title:"Total Referrals",;
      value:stats.totalReferrals,;
      icon:<Share className="h-5 w-5 text-muted-foreground" />,;
      description:"People you've invited"},;
    {;
      title:"Completed",;
      value:stats.completedReferrals,;
      icon:<Star className="h-5 w-5 text-muted-foreground" />,;
      description:"Signed up & completed onboarding"},;
    {;
      title:"Pending",;
      value:stats.pendingReferrals,;
      icon:<TrendingUp className="h-5 w-5 text-muted-foreground" />,;
      description:"Not yet completed onboarding"},;
    {;
      title:"Total Rewards",;
      value:stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` :"-",;
      icon:<Award className="h-5 w-5 text-muted-foreground" />,;
      description:"Credits earned from referrals"}],;
;
  return (;
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">;
      {statCards.map((card, i) => (;
        <Card key={i}>;
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">;
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>;
            {card.icon}
          </CardHeader>;
          <CardContent>;
            {isLoading ? (;
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />;
            ) :(;
              <>;
                <div className="text-2xl font-bold">{card.value}</div>;
                <p className="text-xs text-muted-foreground">{card.description}</p>;

<<<<<<< HEAD
=======
    </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
    </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    </div>
  );
}
;

<<<<<<< HEAD
'"`
=======
<<<<<<< HEAD
'"`
=======
<<<<<<< HEAD
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
    </div>
  );
}
  )
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
