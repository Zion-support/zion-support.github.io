interface ReferralStatsProps {
  stats: ReferralStatsType,
  isLoading: boolean,
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card','
import { ReferralStats as ReferralStatsType } from '@/types/referrals','
import { Award, Share, Star, TrendingUp } from 'lucide-react''
  stats: ReferralStatsType
  isLoading: boolean

import { ReferralStats as ReferralStatsType } from '@/types/referrals',
import { Award, Share, Star, TrendingUp } from 'lucide-react'

<<<<<<< HEAD:src-disabled/components/referrals/ReferralStats.tsx
=======
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralStats as ReferralStatsType } from "@/types/referrals";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ReferralStats as ReferralStatsType } from '@/types/referrals'
import { Award, Share, Star, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralStats as ReferralStatsType } from "@/types/referrals";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ReferralStats as ReferralStatsType } from '@/types/referrals'
import { Award, Share, Star, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralStats as ReferralStatsType } from "@/types/referrals",
import { Award, Share, Star, TrendingUp } from 'lucide-react'

interface ReferralStatsProps {
  stats: ReferralStatsType
  isLoading: boolean
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = [
    {
      title: 'Total Referrals'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReferralStats as ReferralStatsType } from "@/types/referrals"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Star } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralStats as ReferralStatsType } from "@/types/referrals",
import { Award, Share, Star, TrendingUp } from 'lucide-react'
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralStats.tsx
interface ReferralStatsProps {

  stats: ReferralStatsType
  isLoading: boolean
<<<<<<< HEAD
}
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = [
    {
      title: 'Total Referrals'
      icon: <Share className='h-5 w-5 text-muted-foreground' />
      description: "People you've invited"
    }
      title: 'Total Referrals',
      icon: <Share className='h-5 w-5 text-muted-foreground' />,
      description: "People you've invited",
    },
    {
      title: 'Completed'
      value: stats.completedReferrals
      icon: <Star className='h-5 w-5 text-muted-foreground' />
      description: 'Signed up & completed onboarding'
    }
    {
      title: 'Pending'
      value: stats.pendingReferrals
      icon: <TrendingUp className='h-5 w-5 text-muted-foreground' />
      description: 'Not yet completed onboarding'
    }
    {
      title: 'Total Rewards'
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : '-'
      icon: <Award className='h-5 w-5 text-muted-foreground' />
      description: 'Credits earned from referrals'
    }
  ]
ursor/fix-website-loading-errors-and-merge-6662
interface ReferralStatsProps {

  stats: ReferralStatsType
  isLoading: boolean
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { ReferralStats as ReferralStatsType } from '@/types / referrals';

import { Award, Share, Star, TrendingUp } from 'lucide-react';
interface ReferralStatsProps {}
  stats: ReferralStatsType;
  is_loading: boolean;
export /**;
 * ReferralStats - Function description;
 */
function ReferralStats() {}
  const stat_cards = [;
    {'
      title: 'Total Referrals','
import { Card, CardContent, CardHeader, CardTitle  } from '@/components / ui / card';'
import { ReferralStats as ReferralStatsType  } from '@/types / referrals';'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';'

import { Star } from 'lucide-react';

  stats: ReferralStatsType,
  isLoading: boolean
}

interface ReferralStatsProps {;
  stats: ReferralStatsType;
  isLoading: boolean;
export function ReferralStats(): any ({ stats, isLoading }: ReferralStatsProps) {;
  const statCards = [;
    {;'
      title: 'Total Referrals',;'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';'
import { ReferralStats as ReferralStatsType } from '@/types/referrals';'
import { Award, Share, Star, TrendingUp } from 'lucide-react';'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';'

interface ReferralStatsProps {;
  stats: ReferralStatsType,;
  isLoading: boolean;
}
export function ReferralStats(): any ({ stats, isLoading }: ReferralStatsProps) {;

    },;
    {;'
      title: 'Completed',;

    },;
    {;'
      title: 'Pending',;

  return (

    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>;

          </CardHeader>;
          <CardContent>;
            {isLoading ? (;'
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>;'
            <CardTitle className='text-sm font-medium'>{card && card.title}</CardTitle>;'
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>;
      {statCards && statCards.map((card, i) => (;
        <Card key={i}>;'
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>;'
            <CardTitle className='text-sm font-medium'>{card && card.title}</CardTitle>;
            {card && card.icon}
          </CardHeader>;
          <CardContent>;
            {isLoading ? (;'
              <div className='h-6 w-20 bg-muted animate-pulse rounded' />;
            ) : (;
              <>;'
                <div className='text-2xl font-bold'>{card && card.value}</div>;'
                <p className='text-xs text-muted-foreground'>;
                  {card && card.description}'
                </p>              </>              <div className='h-6 w-20 bg-muted animate-pulse rounded' />;
            ) : (;
              <>;'
                <div className='text-2xl font-bold'>{card && card.value}</div>;'
                <p className='text-xs text-muted-foreground'>{card && card.description}</p>;
            )}
          </CardContent>;
        </Card>;
      ))}

<<<<<<< HEAD

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {statCards.map((card, i) => (        <Card key={i}>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>{card.title}</CardTitle>            {card.icon}
          </CardHeader>
          <CardContent>
            {isLoading ? (
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
      title: "Total Referrals",
      value: stats.totalReferrals,
      icon: <Share className="h-5 w-5 text-muted-foreground" />,
      description: "People you've invited"},
    {
      title: "Completed",
      value: stats.completedReferrals,
      icon: <Star className="h-5 w-5 text-muted-foreground" />,
      description: "Signed up & completed onboarding"},
    {
      title: "Pending",
      value: stats.pendingReferrals,
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />,
      description: "Not yet completed onboarding"},
    {
      title: "Total Rewards",
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : "-",
      icon: <Award className="h-5 w-5 text-muted-foreground" />,
      description: "Credits earned from referrals"}],

  return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
<<<<<<< HEAD:src-disabled/components/referrals/ReferralStats.tsx
      {statCards.map((card, i) => (
        <Card key={i}>"
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">"
=======
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralStats.tsx
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
  stats: ReferralStatsType;
  isLoading: boolean
}
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = null;
    {
      title: 'Total Referrals'
      icon: <Share className='h-5 w-5 text-muted-foreground' />
      description: 'People you've invited'
    }
    {
      title: 'Completed'
      value: stats.completedReferrals
      icon: <Star className='h-5 w-5 text-muted-foreground' />
      description: 'Signed up & completed onboarding'
    }
    {
      title: 'Pending'
      value: stats.pendingReferrals
      icon: <TrendingUp className='h-5 w-5 text-muted-foreground' />
      description: 'Not yet completed onboarding'
    }
    {
      title: 'Total Rewards'
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : '-'
      icon: <Award className='h-5 w-5 text-muted-foreground' />
      description: 'Credits earned from referrals'
    }
  ]
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {statCards.map((card, i) => (        <Card key={i}>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>{card.title}</CardTitle>
origin/cursor/automate-test-improve-and-merge-code-2533
            {card.icon}
          </CardHeader>
          <CardContent>
            {isLoading ? (
<<<<<<< HEAD
              <div className='h-6 w-20 bg-muted animate-pulse rounded' />
            ) : (
              <>
                <div className='text-2xl font-bold'>{card.value}</div>
                <p className='text-xs text-muted-foreground'>
                  {card.description}
                </p>              </>              <div className="h-6 w-20 bg-muted animate-pulse rounded" />
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />
=======

              <div className='h-6 w-20 bg-muted animate-pulse rounded' />

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />

            ) : (
<<<<<<< HEAD:src-disabled/components/referrals/ReferralStats.tsx

=======
              <>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">{card.description}</p>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      title: 'Total Referrals',
      icon: <Share className='h - 5 w - 5 text - muted - foreground' />,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralStats.tsx
      description: "People you've invited",
    },
    {'
      title: 'Completed',
      value: stats.completed_referrals,'
      icon: <Star className='h - 5 w - 5 text - muted - foreground' />,'
      description: 'Signed up & completed onboarding',
    },
    {'
      title: 'Pending',
      value: stats.pending_referrals,'
      icon: <TrendingUp className='h - 5 w - 5 text - muted - foreground' />,'
      description: 'Not yet completed onboarding',
    },
    {'
      title: 'Total Rewards','`
      value: stats.total_rewards > 0 ? `$${stats.total_rewards.to_fixed (2)}` : '-','
      icon: <Award className='h - 5 w - 5 text - muted - foreground' />,'
      description: 'Credits earned from referrals',

    },
  ];
  return ('
    <div className='grid gap - 4 md:grid - cols - 2 lg:grid - cols - 4'>;

          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD:src-disabled/components/referrals/ReferralStats.tsx
=======
            {is_loading ? (
          <CardHeader className="flex flex - row items - center justify - between space - y-0 pb - 2">;
            <CardTitle className="text - sm font - medium">{card.title}</CardTitle>;
    <div className="grid gap - 4 md:grid - cols - 2 lg:grid - cols - 4">;
      {stat_cards.map ((card, i) => (
            )}
          </CardContent>
        </Card>
      ))};
    </div>;
  );
};
}
}
}
}
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralStats.tsx

      {stat_cards.map ((card, i) => (
}
}
}
}

              </>
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { ReferralStats as ReferralStatsType } from '@/types/referrals',;

interface ReferralStatsProps {;
  stats: ReferralStatsType,;
  isLoading: boolean;
}
;

export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {;
    {;
      title: 'Total Referrals',
      value: stats.totalReferrals,;
      icon: <Share className='h-5 w-5 text-muted-foreground' />,,
  description: 'People you've invited'},;
    {;
      title: 'Completed',
      value: stats.completedReferrals,;
      icon: <Star className='h-5 w-5 text-muted-foreground' />,,
  description: 'Signed up & completed onboarding'},;
    {;
      title: 'Pending',
      value: stats.pendingReferrals,;
      icon: <TrendingUp className='h-5 w-5 text-muted-foreground' />,,
  description: 'Not yet completed onboarding'},;
    {;
      title: 'Total Rewards',
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : '-',;
      icon: <Award className='h-5 w-5 text-muted-foreground' />;',
      icon: <Award className='h-5 w-5 text-muted-foreground' />;
      description: 'Credits earned from referrals'}];
      icon: <Award className='h-5 w-5 text-muted-foreground' />,
  description: 'Credits earned from referrals'}];
  return (;
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>;
      {statCards.map((card, i) => (;
<<<<<<< HEAD:src-disabled/components/referrals/ReferralStats.tsx
        <Card key={i}>;
          <CardHeader className="flex flex - row items - center justify - between space - y-0 pb-2">;
            <CardTitle className="text - sm font-medium">{card.title}</CardTitle>;
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Card key={i}>;
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">;
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralStats.tsx
            {card.icon}
          </CardHeader>;
          <CardContent>;
            {isLoading ? (;
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />;
            ) : (;
              <>;
<<<<<<< HEAD:src-disabled/components/referrals/ReferralStats.tsx
                <div className='text - 2xl font - bold'>{card.value}</div>;
                <p className='text - xs text - muted - foreground'>;
                  {card.description}
                </p>              </>              <div className='h - 6 w - 20 bg - muted animate-pulse rounded' />) : (
              <>;
                <div className='text - 2xl font-bold'>{card.value}</div>;
                <p className='text - xs text - muted-foreground'>{card.description}</p>)}

          </CardContent>;
        </Card>))}
    </div>);
}
=======
                <div className="text-2xl font-bold">{card.value}</div>;
                <p className="text-xs text-muted-foreground">{card.description}</p>;
              </>;
            )}
          </CardContent>;
        </Card>;
      ))}
    </div>;
  );
}
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
;
;
=======

;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralStats.tsx
