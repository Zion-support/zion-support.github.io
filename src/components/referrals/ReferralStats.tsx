<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface ReferralStatsProps {
  stats: ReferralStatsType,
  isLoading: boolean,
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card","
import { ReferralStats as ReferralStatsType } from "@/types/referrals","
import { Award, Share, Star, TrendingUp } from 'lucide-react''
  stats: ReferralStatsType
  isLoading: boolean
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
interface ReferralStatsProps {
  stats: ReferralStatsType
  isLoading: boolean
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
=======
interface ReferralStatsProps {}
  stats: ReferralStatsType;
  isLoading: boolean;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ReferralStats as ReferralStatsType } from "@/types/referrals",
import { Award, Share, Star, TrendingUp } from 'lucide-react'

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface ReferralStatsProps {

  stats: ReferralStatsType
  isLoading: boolean
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { ReferralStats as ReferralStatsType } from '@/types / referrals';
=======
interface ReferralStatsProps {};
  stats: ReferralStatsType;
  isLoading: boolean'
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';'
import { ReferralStats as ReferralStatsType } from '@/types / referrals';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Star } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ReferralStatsProps {
=======
interface ReferralStatsProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  stats: ReferralStatsType,
  isLoading: boolean
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = [
    {
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
=======
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = [
    {

=======
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {}
  const statCards = []
    {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
interface ReferralStatsProps {;
  stats: ReferralStatsType;
  isLoading: boolean;
export function ReferralStats(): any ({ stats, isLoading }: ReferralStatsProps) {;
  const statCards = [;
    {;'
      title: 'Total Referrals',;"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";"
import { ReferralStats as ReferralStatsType } from "@/types/referrals";'
import { Award, Share, Star, TrendingUp } from 'lucide-react';'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';'
import { Star } from 'lucide-react';

interface ReferralStatsProps {;
  stats: ReferralStatsType,;
  isLoading: boolean;
}
export function ReferralStats(): any ({ stats, isLoading }: ReferralStatsProps) {;
  const statCards = [;
<<<<<<< HEAD
    {;
      title: 'Total Referrals',;
      icon: <Share className='h-5 w-5 text-muted-foreground' />,,
  description: "People you've invited",;
=======
    {;'
      title: 'Total Referrals',;'
      icon: <Share className='h-5 w-5 text-muted-foreground' />,;'"
      description: "People you've invited",;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    },;
    {;'
      title: 'Completed',;
<<<<<<< HEAD
      value: stats && stats.completedReferrals,;
      icon: <Star className='h-5 w-5 text-muted-foreground' />,,
  description: 'Signed up & completed onboarding',;
=======
      value: stats && stats.completedReferrals,;'
      icon: <Star className='h-5 w-5 text-muted-foreground' />,;'
      description: 'Signed up & completed onboarding',;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    },;
    {;'
      title: 'Pending',;
<<<<<<< HEAD
      value: stats && stats.pendingReferrals,;
      icon: <TrendingUp className='h-5 w-5 text-muted-foreground' />,,
  description: 'Not yet completed onboarding',;
    },;
    {;
      title: 'Total Rewards',;
      value: stats && stats.totalRewards > 0 ? `$${stats && stats.totalRewards.toFixed(2)}` : '-',;
      icon: <Award className='h-5 w-5 text-muted-foreground' />,,
  description: 'Credits earned from referrals',;
    },;
  ];
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  return (
=======
      value: stats && stats.pendingReferrals,;'
      icon: <TrendingUp className='h-5 w-5 text-muted-foreground' />,;'
      description: 'Not yet completed onboarding',;
    },;
    {;'
      title: 'Total Rewards',;'
      value: stats && stats.totalRewards > 0 ? `$${stats && stats.totalRewards.toFixed(2)}` : '-',;'
      icon: <Award className='h-5 w-5 text-muted-foreground' />,;'
      description: 'Credits earned from referrals',;
    },;
  ];


  return ('
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>;
<<<<<<< HEAD
      {statCards && statCards.map((card, i) => (        <Card key={i}>;'
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>;'
            <CardTitle className='text-sm font-medium'>{card && card.title}</CardTitle>            {card && card.icon}
=======
      {statCards && statCards.map((card, i) => (        <Card key={i}>;
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>;
            <CardTitle className='text-sm font-medium'>{card && card.title}</CardTitle>            {card && card.icon}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </CardHeader>;
          <CardContent>;
            {isLoading ? (;"
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">;"
            <CardTitle className="text-sm font-medium">{card && card.title}</CardTitle>;"
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">;
      {statCards && statCards.map((card, i) => (;
        <Card key={i}>;"
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">;"
            <CardTitle className="text-sm font-medium">{card && card.title}</CardTitle>;
            {card && card.icon}
          </CardHeader>;
          <CardContent>;
            {isLoading ? (;'
              <div className='h-6 w-20 bg-muted animate-pulse rounded' />;
            ) : (;
              <>;'
                <div className='text-2xl font-bold'>{card && card.value}</div>;'
                <p className='text-xs text-muted-foreground'>;
                  {card && card.description}"
                </p>              </>              <div className="h-6 w-20 bg-muted animate-pulse rounded" />;
            ) : (;
              <>;"
                <div className="text-2xl font-bold">{card && card.value}</div>;"
                <p className="text-xs text-muted-foreground">{card && card.description}</p>;
            )}
          </CardContent>;
        </Card>;
      ))}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  return (
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">"
      {statCards.map((card, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">"
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralStats as ReferralStatsType } from "@/types/referrals",
import { Award, Share, Star, TrendingUp } from 'lucide-react'

interface ReferralStatsProps {
  stats: ReferralStatsType,
  isLoading: boolean
}

export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = [
    {
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statCards.map((card, i) => (
        <Card key={i}>"
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">"
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
  stats: ReferralStatsType;
  isLoading: boolean
}
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = null;
    {
      title: 'Total Referrals'
      icon: <Share className='h-5 w-5 text-muted-foreground' />
      description: "People you've invited"
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />
=======
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            ) : (
<<<<<<< HEAD
              <>"
                <div className="text-2xl font-bold">{card.value}</div>"
                <p className="text-xs text-muted-foreground">{card.description}</p>
<<<<<<< HEAD
<<<<<<< HEAD
=======

      title: 'Total Referrals',
      icon: <Share className='h - 5 w - 5 text - muted - foreground' />,
=======
'
      title: 'Total Referrals','
      icon: <Share className='h - 5 w - 5 text - muted - foreground' />,'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
              <>
                <div className="text-2xl font-bold">{card.value}</div>"
                <p className="text-xs text-muted-foreground">{card.description}</p>"
      title: 'Total Referrals','
      icon: <Share className='h - 5 w - 5 text - muted - foreground' />,'
      description: "People you've invited","
    },
    {
      title: 'Completed','
      value: stats.completed_referrals,
      icon: <Star className='h - 5 w - 5 text - muted - foreground' />,'
      description: 'Signed up & completed onboarding','
    },
    {
      title: 'Pending','
      value: stats.pending_referrals,
      icon: <TrendingUp className='h - 5 w - 5 text - muted - foreground' />,'
      description: 'Not yet completed onboarding','
    },
    {
      title: 'Total Rewards','
      value: stats.total_rewards > 0 ? `$${stats.total_rewards.to_fixed (2)}` : '-','
      icon: <Award className='h - 5 w - 5 text - muted - foreground' />,'
      description: 'Credits earned from referrals','
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    },
  ];
  return ('
    <div className='grid gap - 4 md:grid - cols - 2 lg:grid - cols - 4'>;
<<<<<<< HEAD
      {stat_cards.map ((card, i) => (        <Card key={i}>;'
          <CardHeader className='flex flex - row items - center justify - between space - y-0 pb - 2'>;'
            <CardTitle className='text - sm font - medium'>{card.title}</CardTitle>            {card.icon}
=======
      {stat_cards.map ((card, i) => (        <Card key={i}>;
          <CardHeader className='flex flex - row items - center justify - between space - y-0 pb - 2'>;
            <CardTitle className='text - sm font - medium'>{card.title}</CardTitle>            {card.icon}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD
            {is_loading ? (
          <CardHeader className="flex flex - row items - center justify - between space - y-0 pb-2">;
            <CardTitle className="text - sm font-medium">{card.title}</CardTitle>;
    <div className="grid gap - 4 md:grid - cols - 2 lg:grid - cols-4">;
=======
            {is_loading ? ("
          <CardHeader className="flex flex - row items - center justify - between space - y-0 pb - 2">;"
            <CardTitle className="text - sm font - medium">{card.title}</CardTitle>;"
    <div className="grid gap - 4 md:grid - cols - 2 lg:grid - cols - 4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      {stat_cards.map ((card, i) => (
}
}
}
}
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />
            ) : (
              <>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">{card.description}</p>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </>
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralStats as ReferralStatsType } from "@/types/referrals",;
=======
              </>"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;"
import { ReferralStats as ReferralStatsType } from "@/types/referrals",;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Award, Share, Star, TrendingUp } from 'lucide-react';
interface ReferralStatsProps {;
  stats: ReferralStatsType,;
  isLoading: boolean;
}
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
export function ReferralStats({ stats, isLoading }:,  ReferralStatsProps) {;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {;
  const statCards = [;
    {;
      title: "Total Referrals",;
      value: stats.totalReferrals,;
      icon: <Share className="h-5 w-5 text-muted-foreground" />,,
  description: "People you've invited"},;
    {;
      title: "Completed",;
      value: stats.completedReferrals,;
      icon: <Star className="h-5 w-5 text-muted-foreground" />,,
  description: "Signed up & completed onboarding"},;
    {;
      title: "Pending",;
      value: stats.pendingReferrals,;
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />,,
  description: "Not yet completed onboarding"},;
    {;
      title: "Total Rewards",;
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : "-",;
      icon: <Award className="h-5 w-5 text-muted-foreground" />;",
      icon: <Award className="h-5 w-5 text-muted-foreground" />;
      description: "Credits earned from referrals"}];
      icon: <Award className="h-5 w-5 text-muted-foreground" />,
  description: "Credits earned from referrals"}];
  return (;
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">;
      {statCards.map((card, i) => (;
        <Card key={i}>;
          <CardHeader className="flex flex - row items - center justify - between space - y-0 pb-2">;
            <CardTitle className="text - sm font-medium">{card.title}</CardTitle>;
            {card.icon}
          </CardHeader>;
          <CardContent>;
            {is_loading ? (
              <div className='h - 6 w - 20 bg - muted animate - pulse rounded' />) : (
              <>;
                <div className='text - 2xl font - bold'>{card.value}</div>;
                <p className='text - xs text - muted - foreground'>;
                  {card.description}
                </p>              </>              <div className="h - 6 w - 20 bg - muted animate-pulse rounded" />) : (
              <>;
                <div className="text - 2xl font-bold">{card.value}</div>;
                <p className="text - xs text - muted-foreground">{card.description}</p>)}
=======
export function ReferralStats() { return null; }
      description: "People you've invited"},;
    {;"
      title: "Completed",;
      value: stats.completedReferrals,;"
      icon: <Star className="h-5 w-5 text-muted-foreground" />,;"
      description: "Signed up & completed onboarding"},;
    {;"
      title: "Pending",;
      value: stats.pendingReferrals,;"
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />,;"
      description: "Not yet completed onboarding"},;
    {;"
      title: "Total Rewards",;"`
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : "-",;"
      icon: <Award className="h-5 w-5 text-muted-foreground" />;"
      description: "Credits earned from referrals"}];
  return (;"
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">;
      {statCards.map((card, i) => (;

        <Card key={i}>;"
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">;"
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>;
            {card.icon}
          </CardHeader>;
          <CardContent>;
            {isLoading ? (;"
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />;
            ) : (;
              <>;"
                <div className="text-2xl font-bold">{card.value}</div>;"
                <p className="text-xs text-muted-foreground">{card.description}</p>;
              </>;
            )}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </CardContent>;
        </Card>))}
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
;
}}}}}}}}}}}}})))))))))))))]]
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
;
<div className='h-6 w-20 bg-muted animate-pulse rounded' />
            ) : (
              <>
                <div className='text-2xl font-bold'>{card.value}</div>
                <p className='text-xs text-muted-foreground'>
                  {card.description}
                </p>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
origin/cursor/automate-test-improve-and-merge-code-2533
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";""
import { ReferralStats as ReferralStatsType } from "@/types/referrals";""
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
  stats: ReferralStatsType,;
      icon: <Share className='h-5 w-5 text-muted-foreground' />,;

      icon: <Star className='h-5 w-5 text-muted-foreground' />,;

      icon: <TrendingUp className='h-5 w-5 text-muted-foreground' />,;

      icon: <Award className='h-5 w-5 text-muted-foreground' />,;

    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>;
</div>
      {statCards && statCards.map((card, i) => (        <Card key={i}>;

          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>;

            <CardTitle className='text-sm font-medium'>{card && card.title}            {card && card.icon}
          ;
          <CardContent>;

          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">;"
"
            <CardTitle className="text-sm font-medium">{card && card.title};""
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">;"
        <Card key={i}>;
            <CardTitle className="text-sm font-medium">{card && card.title};"
              <div className='h-6 w-20 bg-muted animate-pulse rounded' />;
              <>;
                <div className='text-2xl font-bold'>{card && card.value}</div>;
                <p className='text-xs text-muted-foreground'>;
</p>
                </p>              </>              <div className="h-6 w-20 bg-muted animate-pulse rounded" />;"
              <>;"
                <div className="text-2xl font-bold">{card && card.value}</div>;""
                <p className="text-xs text-muted-foreground">{card && card.description}</p>;"
        ;"
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">"
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">"
            <CardTitle className="text-sm font-medium">{card.title}"
          <CardContent>
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />"
              <>"
                <div className="text-2xl font-bold">{card.value}</div>""
                <p className="text-xs text-muted-foreground">{card.description}</p>""
      icon: <Share className='h - 5 w - 5 text - muted - foreground' />,

      icon: <Star className='h - 5 w - 5 text - muted - foreground' />,

      icon: <TrendingUp className='h - 5 w - 5 text - muted - foreground' />,

      icon: <Award className='h - 5 w - 5 text - muted - foreground' />,

    <div className='grid gap - 4 md:grid - cols - 2 lg:grid - cols - 4'>;
</div>)
      {stat_cards.map ((card, i) => (        <Card key={i}>;

          <CardHeader className='flex flex - row items - center justify - between space - y-0 pb - 2'>;

            <CardTitle className='text - sm font - medium'>{card.title}            {card.icon}

          <CardHeader className="flex flex - row items - center justify - between space - y-0 pb - 2">;"
            <CardTitle className="text - sm font - medium">{card.title};""
    <div className="grid gap - 4 md:grid - cols - 2 lg:grid - cols - 4">;"
              </>"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;""
import { ReferralStats as ReferralStatsType } from "@/types/referrals",;""
;)
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {;
      title: "Total Referrals",;"
      value: stats.totalReferrals,;"
      icon: <Share className="h-5 w-5 text-muted-foreground" />,;"
      icon: <Star className="h-5 w-5 text-muted-foreground" />,;"
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />,;"
      icon: <Award className="h-5 w-5 text-muted-foreground" />;"
            <CardTitle className="text-sm font-medium">{card.title};"
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />;"
                <div className="text-2xl font-bold">{card.value}</div>;""
                <p className="text-xs text-muted-foreground">{card.description}</p>;"
              </>;
            )}
    </div>;]"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
