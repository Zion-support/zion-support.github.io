
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralStats as ReferralStatsType } from "@/types/referrals",
import { Award, Share, Star, TrendingUp } from "lucide-react",
=======
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { ReferralStats as ReferralStatsType } from &quot;@/types/referrals&quot;;
import { Award, Share, Star, TrendingUp } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface ReferralStatsProps {
  stats: ReferralStatsType,
  isLoading: boolean
}

export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = [
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
<<<<<<< HEAD
      title: "Total Rewards",
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : "-",
      icon: <Award className="h-5 w-5 text-muted-foreground" />,
      description: "Credits earned from referrals"}],
=======
      title: &quot;Total Rewards&quot;,
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : &quot;-&quot;,
      icon: <Award className=&quot;h-5 w-5 text-muted-foreground&quot; />,
      description: &quot;Credits earned from referrals&quot;}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
