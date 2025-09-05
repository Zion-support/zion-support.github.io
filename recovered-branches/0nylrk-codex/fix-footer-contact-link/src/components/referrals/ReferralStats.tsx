

interface ReferralStatsProps {_stats: ReferralStatsType;
  isLoading: boolean;}

export function ReferralStats(_{_stats, _isLoading}: ReferralStatsProps) {_const _statCards = [
    {
      title: "Total Referrals", _value: stats.totalReferrals, _icon: <Share className="h-5 w-5 text-muted-foreground" />, _description: "People you've invited"},
    {_title: "Completed", _value: stats.completedReferrals, _icon: <Star className="h-5 w-5 text-muted-foreground" />, _description: "Signed up & completed onboarding"},
    {_title: "Pending", _value: stats.pendingReferrals, _icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />, _description: "Not yet completed onboarding"},
    {_title: "Total Rewards", _value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : "-",
      icon: <Award className="h-5 w-5 text-muted-foreground" />,
      description: "Credits earned from referrals"}];

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
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
