<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReferralStats as ReferralStatsType } from '@/types/referrals';
import { Award, Share, Star, TrendingUp } from 'lucide-react';

interface ReferralStatsProps {
  stats: ReferralStatsType;
  isLoading: boolean;
<<<<<<< HEAD
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = [
    {
      title: 'Total Referrals',
=======
=======

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralStats as ReferralStatsType } from "@/types/referrals";
import { Award, Share, Star, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface ReferralStatsProps {
  stats: ReferralStatsType,
  isLoading: boolean
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralStats as ReferralStatsType } from "@/types/referrals";
import { Award, Share, Star, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface ReferralStatsProps {
  stats: ReferralStatsType,
  isLoading: boolean
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Total Referrals',
=======
      title: "Total Referrals",
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      value: stats.totalReferrals,
      icon: <Share className='h-5 w-5 text-muted-foreground' />,
      description: "People you've invited",
    },
    {
      title: 'Completed',
      value: stats.completedReferrals,
      icon: <Star className='h-5 w-5 text-muted-foreground' />,
      description: 'Signed up & completed onboarding',
    },
    {
      title: 'Pending',
      value: stats.pendingReferrals,
      icon: <TrendingUp className='h-5 w-5 text-muted-foreground' />,
      description: 'Not yet completed onboarding',
    },
    {
      title: 'Total Rewards',
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : '-',
      icon: <Award className='h-5 w-5 text-muted-foreground' />,
      description: 'Credits earned from referrals',
    },
  ];

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {statCards.map((card, i) => (
        <Card key={i}>
<<<<<<< HEAD
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>{card.title}</CardTitle>            {card.icon}
          </CardHeader>
          <CardContent>
            {isLoading ? (
=======
<<<<<<< HEAD
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>{card.title}</CardTitle>
=======
      title: "Total Referrals",
      value: stats.totalReferrals,
      icon: <Share className = "h-5 w-5 text-muted-foreground" />,
      description: "People you've invited"},
    {
      title: "Completed",
      value: stats.completedReferrals,
      icon: <Star className = "h-5 w-5 text-muted-foreground" />,
      description: "Signed up & completed onboarding"},
    {
      title: "Pending",
      value: stats.pendingReferrals,
      icon: <TrendingUp className = "h-5 w-5 text-muted-foreground" />,
      description: "Not yet completed onboarding"},
    {
      title: "Total Rewards",

      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : "-";
      icon: <Award className = "h-5 w-5 text-muted-foreground" />,
      description: "Credits earned from referrals"}],

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statCards.map((card, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {card.icon}
          </CardHeader>
          <CardContent>
            {isLoading ? (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <div className='h-6 w-20 bg-muted animate-pulse rounded' />
            ) : (
              <>
                <div className='text-2xl font-bold'>{card.value}</div>
                <p className='text-xs text-muted-foreground'>
                  {card.description}
<<<<<<< HEAD
                </p>              </>
=======
                </p>
=======
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />
            ) : (
              <>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">{card.description}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />
            ) : (
              <>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">{card.description}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
