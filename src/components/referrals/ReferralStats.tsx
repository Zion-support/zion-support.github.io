
<<<<<<< HEAD

interface ReferralStatsProps {
  stats: ReferralStatsType,
  isLoading: boolean
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralStats as ReferralStatsType } from "@/types/referrals";
import { Award, Share, Star, TrendingUp } from 'lucide-react'

interface ReferralStatsProps {
  stats: ReferralStatsType;
  isLoading: boolean;
>>>>>>> origin/auto/autonomy-17186719616
}

export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = [
    {
      title: "Total Referrals",
      value: stats.totalReferrals,
      icon: <Share className="h-5 w-5 text-muted-foreground" />,
<<<<<<< HEAD
      description: "People you've invited"},
=======
      description: "People you've invited",
    },
>>>>>>> origin/auto/autonomy-17186719616
    {
      title: "Completed",
      value: stats.completedReferrals,
      icon: <Star className="h-5 w-5 text-muted-foreground" />,
<<<<<<< HEAD
      description: "Signed up & completed onboarding"},
=======
      description: "Signed up & completed onboarding",
    },
>>>>>>> origin/auto/autonomy-17186719616
    {
      title: "Pending",
      value: stats.pendingReferrals,
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />,
<<<<<<< HEAD
      description: "Not yet completed onboarding"},
=======
      description: "Not yet completed onboarding",
    },
>>>>>>> origin/auto/autonomy-17186719616
    {
      title: "Total Rewards",
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : "-",
      icon: <Award className="h-5 w-5 text-muted-foreground" />,
<<<<<<< HEAD
      description: "Credits earned from referrals"}],
=======
      description: "Credits earned from referrals",
    },
  ];
>>>>>>> origin/auto/autonomy-17186719616

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
                <p className="text-xs text-muted-foreground">{card.description}</p>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
