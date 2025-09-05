
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Award } from "lucide-react",
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Award } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface LeaderboardEntry {
  rank: number,
  name: string,
  referrals: number
}

export function ReferralLeaderboard() {
  // This would typically be fetched from the server
  // For now, we'll use mock data
  const leaderboardData: LeaderboardEntry[] = [
<<<<<<< HEAD
    { rank: 1, name: "Alex Johnson", referrals: 24 },
    { rank: 2, name: "Jamie Smith", referrals: 18 },
    { rank: 3, name: "Taylor Wong", referrals: 15 },
    { rank: 4, name: "Casey Brown", referrals: 12 },
    { rank: 5, name: "Jordan Lee", referrals: 10 }],
=======
    { rank: 1, name: &quot;Alex Johnson&quot;, referrals: 24 },
    { rank: 2, name: &quot;Jamie Smith&quot;, referrals: 18 },
    { rank: 3, name: &quot;Taylor Wong&quot;, referrals: 15 },
    { rank: 4, name: &quot;Casey Brown&quot;, referrals: 12 },
    { rank: 5, name: &quot;Jordan Lee&quot;, referrals: 10 }];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <Card>
      <CardHeader>
        <CardTitle className=&quot;flex items-center gap-2&quot;>
          <Award className=&quot;h-5 w-5&quot; />
          Leaderboard
        </CardTitle>
        <CardDescription>Top referrers this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className=&quot;space-y-2&quot;>
          {leaderboardData.map((entry) => (
            <div 
              key={entry.rank}
              className=&quot;flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors&quot;
            >
              <div className=&quot;flex items-center gap-3&quot;>
                <div 
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry.rank === 1
                      ? &quot;bg-yellow-200 text-yellow-800&quot;
                      : entry.rank === 2
                      ? &quot;bg-slate-200 text-slate-800&quot;
                      : entry.rank === 3
                      ? &quot;bg-amber-200 text-amber-800&quot;
                      : &quot;bg-muted text-muted-foreground&quot;
                  }`}
                >
                  {entry.rank}
                </div>
                <span className=&quot;font-medium&quot;>{entry.name}</span>
              </div>
              <span className=&quot;text-sm&quot;>
                {entry.referrals} referral{entry.referrals !== 1 ? &quot;s&quot; : ""}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
