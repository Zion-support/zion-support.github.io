
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralStats as ReferralStatsType } from "@/types/referrals",;
import { Award, Share, Star, TrendingUp } from 'lucide-react';
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
              </>;
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralStats as ReferralStatsType } from "@/types/referrals",import { Award, Share, Star, TrendingUp } from 'lucide-react'

interface ReferralStatsProps {
  stats: ReferralStatsType,
  isLoading: boolean
}

interface ReferralStatsProps {_stats: ReferralStatsType;
  isLoading: boolean;}

export function ReferralStats(_{_stats, _isLoading}: ReferralStatsProps) {_const _statCards = [
    {
      title: &quot;Total Referrals&quot;,
      value: stats.totalReferrals,
      icon: <Share className=&quot;h-5 w-5 text-muted-foreground&quot; />,
      description: &quot;People you've invited&quot;},
    {
      title: &quot;Completed&quot;,
      value: stats.completedReferrals,
      icon: <Star className=&quot;h-5 w-5 text-muted-foreground&quot; />,
      description: &quot;Signed up & completed onboarding&quot;},
    {
      title: &quot;Pending&quot;,
      value: stats.pendingReferrals,
      icon: <TrendingUp className=&quot;h-5 w-5 text-muted-foreground&quot; />,
      description: &quot;Not yet completed onboarding&quot;},
    {
      title: "Total Rewards",
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : "-",      icon: <Award className="h-5 w-5 text-muted-foreground" />,
      description: "Credits earned from referrals"}],
      title: &quot;Total Rewards&quot;,
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : &quot;-&quot;,
      icon: <Award className=&quot;h-5 w-5 text-muted-foreground&quot; />,
      description: &quot;Credits earned from referrals&quot;}];

  return (
    <div className=&quot;grid gap-4 md:grid-cols-2 lg:grid-cols-4&quot;>
      {statCards.map((card, i) => (
        <Card key={i}>
          <CardHeader className=&quot;flex flex-row items-center justify-between space-y-0 pb-2&quot;>
            <CardTitle className=&quot;text-sm font-medium&quot;>{card.title}</CardTitle>
            {card.icon}
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className=&quot;h-6 w-20 bg-muted animate-pulse rounded&quot; />
            ) : (
              <>
                <div className=&quot;text-2xl font-bold&quot;>{card.value}</div>
                <p className=&quot;text-xs text-muted-foreground&quot;>{card.description}</p>              </>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
            )}
          </CardContent>;
        </Card>;
      ))}
<<<<<<< HEAD
    </div>;
  ),;
=======
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
