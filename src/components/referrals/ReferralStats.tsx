
import { Award, Share, Star, TrendingUp } from 'lucide-react'

interface ReferralStatsProps {

  stats: ReferralStatsType
  isLoading: boolean
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

interface ReferralStatsProps {
  stats: ReferralStatsType,
  is_loading: boolean;
}
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = [
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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
=======
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statCards.map((card, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            {card.icon}
          </CardHeader>
          <CardContent>
            {isLoading ? (

      title: 'Total Referrals',
      icon: <Share className='h - 5 w - 5 text - muted - foreground' />,
      description: "People you've invited",
    },
    {
      title: 'Completed',
      value: stats.completed_referrals,
      icon: <Star className='h - 5 w - 5 text - muted - foreground' />,
      description: 'Signed up & completed onboarding',
    },
    {
      title: 'Pending',
      value: stats.pending_referrals,
      icon: <TrendingUp className='h - 5 w - 5 text - muted - foreground' />,
      description: 'Not yet completed onboarding',
    },
    {
      title: 'Total Rewards',
      value: stats.total_rewards > 0 ? `$${stats.total_rewards.to_fixed (2)}` : '-',
      icon: <Award className='h - 5 w - 5 text - muted - foreground' />,
      description: 'Credits earned from referrals',
    },
  ];
  return (
    <div className='grid gap - 4 md:grid - cols - 2 lg:grid - cols - 4'>;
      {stat_cards.map ((card, i) => (        <Card key={i}>;
          <CardHeader className='flex flex - row items - center justify - between space - y-0 pb - 2'>;
            <CardTitle className='text - sm font - medium'>{card.title}</CardTitle>            {card.icon}
          </CardHeader>;
          <CardContent>;
            {is_loading ? (
          <CardHeader className="flex flex - row items - center justify - between space - y-0 pb - 2">;
            <CardTitle className="text - sm font - medium">{card.title}</CardTitle>;
    <div className="grid gap - 4 md:grid - cols - 2 lg:grid - cols - 4">;
      {stat_cards.map ((card, i) => (

=======
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
}
}
}
}
<<<<<<< HEAD
