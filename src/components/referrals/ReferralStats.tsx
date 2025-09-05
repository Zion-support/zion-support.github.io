
<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralStats as ReferralStatsType } from "@/types/referrals",
=======
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { ReferralStats as ReferralStatsType } from &quot;@/types/referrals&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Award, Share, Star, TrendingUp } from 'lucide-react'

interface ReferralStatsProps {
  stats: ReferralStatsType,
  isLoading: boolean
}
=======

interface ReferralStatsProps {_stats: ReferralStatsType;
  isLoading: boolean;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function ReferralStats(_{_stats, _isLoading}: ReferralStatsProps) {_const _statCards = [
    {
<<<<<<< HEAD
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
<<<<<<< HEAD
      title: "Total Rewards",
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : "-",
=======
      title: "Total Referrals", _value: stats.totalReferrals, _icon: <Share className="h-5 w-5 text-muted-foreground" />, _description: "People you've invited"},
    {_title: "Completed", _value: stats.completedReferrals, _icon: <Star className="h-5 w-5 text-muted-foreground" />, _description: "Signed up & completed onboarding"},
    {_title: "Pending", _value: stats.pendingReferrals, _icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />, _description: "Not yet completed onboarding"},
    {_title: "Total Rewards", _value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : "-",
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      icon: <Award className="h-5 w-5 text-muted-foreground" />,
      description: "Credits earned from referrals"}],
=======
      title: &quot;Total Rewards&quot;,
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : &quot;-&quot;,
      icon: <Award className=&quot;h-5 w-5 text-muted-foreground&quot; />,
      description: &quot;Credits earned from referrals&quot;}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
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
                <p className=&quot;text-xs text-muted-foreground&quot;>{card.description}</p>
=======
  return (_<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {_statCards.map((card, _i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{_card.title}</CardTitle>
            {_card.icon}
          </CardHeader>
          <CardContent>
            {_isLoading ? (
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />
            ) : (
              <>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">{_card.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
