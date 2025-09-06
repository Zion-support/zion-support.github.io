<<<<<<< HEAD


interface ReferralStatsProps {
  stats: ReferralStatsType
  isLoading: boolean


=======

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralStats as ReferralStatsType } from "@/types/referrals",
import { Award, Share, Star, TrendingUp } from 'lucide-react'



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface ReferralStatsProps {

  stats: ReferralStatsType
  isLoading: boolean
=======
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { ReferralStats as ReferralStatsType } from '@/types / referrals';
import { Award, Share, Star, TrendingUp } from 'lucide-react';
interface ReferralStatsProps {
  stats: ReferralStatsType;
  is_loading: boolean;
export /**
 * ReferralStats - Function description
 */
function ReferralStats() {
  const stat_cards = [;
    {
      title: 'Total Referrals',
import { Card, CardContent, CardHeader, CardTitle  } from '@/components / ui / card';
import { ReferralStats as ReferralStatsType  } from '@/types / referrals';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
import { Star } from 'lucide-react';
interface ReferralStatsProps {
  stats: ReferralStatsType,
  is_loading: boolean;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export /**
 * ReferralStats - Function description
 */
function ReferralStats() {
  const stat_cards = [;
    {

interface ReferralStatsProps {;
  stats: ReferralStatsType;
  isLoading: boolean;
export function ReferralStats(): any ({ stats, isLoading }: ReferralStatsProps) {;
  const statCards = [;
    {;
      title: 'Total Referrals',;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralStats as ReferralStatsType } from "@/types/referrals";
=======
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ReferralStats as ReferralStatsType } from '@/types/referrals'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Award, Share, Star, TrendingUp } from 'lucide-react'
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralStats as ReferralStatsType } from "@/types/referrals",
import { Award, Share, Star, TrendingUp } from 'lucide-react'

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface ReferralStatsProps {
  stats: ReferralStatsType
  isLoading: boolean
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = [
    {
<<<<<<< HEAD
      title: 'Total Referrals'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReferralStats as ReferralStatsType } from "@/types/referrals"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Star } from 'lucide-react'
<<<<<<< HEAD
=======
=======

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralStats as ReferralStatsType } from "@/types/referrals",
import { Award, Share, Star, TrendingUp } from 'lucide-react'

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ReferralStatsProps {

  stats: ReferralStatsType
  isLoading: boolean
}
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = [
    {
<<<<<<< HEAD
      title: 'Total Referrals'
      icon: <Share className='h-5 w-5 text-muted-foreground' />
      description: "People you've invited"
    }
=======
<<<<<<< HEAD
      title: 'Total Referrals',
      icon: <Share className='h-5 w-5 text-muted-foreground' />,
      description: "People you've invited",
    },
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>;
      {statCards && statCards.map((card, i) => (        <Card key={i}>;
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>;
            <CardTitle className='text-sm font-medium'>{card && card.title}</CardTitle>            {card && card.icon}
          </CardHeader>;
          <CardContent>;
            {isLoading ? (;
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">;
            <CardTitle className="text-sm font-medium">{card && card.title}</CardTitle>;
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">;
      {statCards && statCards.map((card, i) => (;
        <Card key={i}>;
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">;
            <CardTitle className="text-sm font-medium">{card && card.title}</CardTitle>;
            {card && card.icon}
          </CardHeader>;
          <CardContent>;
            {isLoading ? (;
              <div className='h-6 w-20 bg-muted animate-pulse rounded' />;
            ) : (;
              <>;
                <div className='text-2xl font-bold'>{card && card.value}</div>;
                <p className='text-xs text-muted-foreground'>;
                  {card && card.description}
                </p>              </>              <div className="h-6 w-20 bg-muted animate-pulse rounded" />;
            ) : (;
              <>;
                <div className="text-2xl font-bold">{card && card.value}</div>;
                <p className="text-xs text-muted-foreground">{card && card.description}</p>;

            )}
          </CardContent>;
        </Card>;
      ))}

  return (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            ) : (
              <>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">{card.description}</p>
<<<<<<< HEAD
            )}
          </CardContent>
        </Card>
      ))};
    </div>;
  );
};
}
<<<<<<< HEAD
=======
}
}
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
              </>
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralStats as ReferralStatsType } from "@/types/referrals",;
import { Award, Share, Star, TrendingUp } from 'lucide-react';
interface ReferralStatsProps {;
  stats: ReferralStatsType,;
  isLoading: boolean;
}
;
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {;
  const statCards = [;
    {;
      title: "Total Referrals",;
      value: stats.totalReferrals,;
      icon: <Share className="h-5 w-5 text-muted-foreground" />,;
      description: "People you've invited"},;
    {;
      title: "Completed",;
      value: stats.completedReferrals,;
      icon: <Star className="h-5 w-5 text-muted-foreground" />,;
      description: "Signed up & completed onboarding"},;
    {;
      title: "Pending",;
      value: stats.pendingReferrals,;
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />,;
      description: "Not yet completed onboarding"},;
    {;
      title: "Total Rewards",;
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : "-",;
      icon: <Award className="h-5 w-5 text-muted-foreground" />;
      description: "Credits earned from referrals"}];
  return (;
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">;
      {statCards.map((card, i) => (;

        <Card key={i}>;
          <CardHeader className="flex flex - row items - center justify - between space - y-0 pb - 2">;
            <CardTitle className="text - sm font - medium">{card.title}</CardTitle>;
            {card.icon}
          </CardHeader>;
          <CardContent>;
            {is_loading ? (
              <div className='h - 6 w - 20 bg - muted animate - pulse rounded' />) : (
              <>;
                <div className='text - 2xl font - bold'>{card.value}</div>;
                <p className='text - xs text - muted - foreground'>;
                  {card.description}
                </p>              </>              <div className="h - 6 w - 20 bg - muted animate - pulse rounded" />) : (
              <>;
                <div className="text - 2xl font - bold">{card.value}</div>;
                <p className="text - xs text - muted - foreground">{card.description}</p>)}
          </CardContent>;
        </Card>))}
    </div>);
}

;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
