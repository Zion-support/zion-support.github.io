<<<<<<< HEAD

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralStats as ReferralStatsType } from "@/types/referrals";
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
interface ReferralStatsProps {
<<<<<<< HEAD
  stats: ReferralStatsType;
  isLoading: boolean
}
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = null;
=======
  stats: ReferralStatsType
  isLoading: boolean
}
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = [
=======
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReferralStats as ReferralStatsType } from '@/types/referrals';
import { Award, Share, Star, TrendingUp } from 'lucide-react';

interface ReferralStatsProps {
  stats: ReferralStatsType;
  isLoading: boolean;
}

export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = [
    {
      title: 'Total Referrals',
      value: stats.totalReferrals,
      icon: <Share className='h-5 w-5 text-muted-foreground' />,
      description: "People you've invited",
    },
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {statCards.map((card, i) => (        <Card key={i}>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
<<<<<<< HEAD
            <CardTitle className='text-sm font-medium'>{card.title}</CardTitle>            {card.icon}
          </CardHeader>
          <CardContent>
            {isLoading ? (
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statCards.map((card, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
=======
            <CardTitle className='text-sm font-medium'>{card.title}</CardTitle>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            {card.icon}
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className='h-6 w-20 bg-muted animate-pulse rounded' />
            ) : (
              <>
                <div className='text-2xl font-bold'>{card.value}</div>
                <p className='text-xs text-muted-foreground'>
                  {card.description}
<<<<<<< HEAD
                </p>              </>              <div className="h-6 w-20 bg-muted animate-pulse rounded" />
            ) : (
              <>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">{card.description}</p>
=======
                </p>
              </>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            )}
          </CardContent>
        </Card>
      ))}
    </div>
<<<<<<< HEAD
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
