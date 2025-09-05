

interface LeaderboardEntry {_rank: number;
  name: string;
  referrals: number;}

export function ReferralLeaderboard() {_// This would typically be fetched from the server
  // For now, _we'll use mock data
  const leaderboardData: LeaderboardEntry[] = [
    { rank: 1, _name: "Alex Johnson", _referrals: 24},
    {_rank: 2, _name: "Jamie Smith", _referrals: 18},
    {_rank: 3, _name: "Taylor Wong", _referrals: 15},
    {_rank: 4, _name: "Casey Brown", _referrals: 12},
    {_rank: 5, _name: "Jordan Lee", _referrals: 10}];

  return (_<Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />
          Leaderboard
        </CardTitle>
        <CardDescription>Top referrers this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {_leaderboardData.map((entry) => (
            <div 
              key={entry.rank}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div 
                  className={_`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"
                      : entry.rank === 2
                      ? "bg-slate-200 text-slate-800"
                      : entry.rank === 3
                      ? "bg-amber-200 text-amber-800"
                      : "bg-muted text-muted-foreground"}`}
                >
                  {_entry.rank}
                </div>
                <span className="font-medium">{_entry.name}</span>
              </div>
              <span className="text-sm">
                {_entry.referrals} referral{_entry.referrals !== 1 ? "s" : ""}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
