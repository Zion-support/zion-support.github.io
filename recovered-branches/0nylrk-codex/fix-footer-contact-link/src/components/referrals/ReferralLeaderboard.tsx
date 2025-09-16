
import { Award } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  referrals: number;
}

export function ReferralLeaderboard() {
  // This would typically be fetched from the server

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />
          Leaderboard
        </CardTitle>
        <CardDescription>Top referrers this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {leaderboardData.map((entry) => (
            <div 
              key={entry.rank}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div 
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"
                      : entry.rank === 2
                      ? "bg-slate-200 text-slate-800"
                      : entry.rank === 3
                      ? "bg-amber-200 text-amber-800"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {entry.rank}
                </div>
                <span className="font-medium">{entry.name}</span>
              </div>
              <span className="text-sm">
                {entry.referrals} referral{entry.referrals !== 1 ? "s" : ""}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
