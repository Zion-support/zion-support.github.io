
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Award } from 'lucide-react';
;
interface LeaderboardEntry {;
  rank:number,;
  name:string,;
  referrals:number;
}
;
export function ReferralLeaderboard() {;
  // This would typically be fetched from the server;
  // For now, we'll use mock data;
  const leaderboardData:LeaderboardEntry[] = [;
    { rank:1, name:"Alex Johnson", referrals:24 },;
    { rank:2, name:"Jamie Smith", referrals:18 },;
    { rank:3, name:"Taylor Wong", referrals:15 },;
    { rank:4, name:"Casey Brown", referrals:12 },;
    { rank:5, name:"Jordan Lee", referrals:10 }],;
;
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <Award className="h-5 w-5" />;
          Leaderboard;
        </CardTitle>;
        <CardDescription>Top referrers this month</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-2">;
          {leaderboardData.map((entry) => (;
            <div ;
              key={entry.rank}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors";
            >;
              <div className="flex items-center gap-3">;
                <div ;
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${;
                    entry.rank === 1;
                      ? "bg-yellow-200 text-yellow-800";
                      :entry.rank === 2;
                      ? "bg-slate-200 text-slate-800";
                      :entry.rank === 3;
                      ? "bg-amber-200 text-amber-800";
                      :"bg-muted text-muted-foreground";
                  }`}
                >;
                  {entry.rank}
                </div>;
                <span className="font-medium">{entry.name}</span>;
              </div>;
              <span className="text-sm">;
                {entry.referrals} referral{entry.referrals !== 1 ? "s" :""}
              </span>;
            </div>;
          ))}
        </div>;
      </CardContent>;
    </Card>;
  ),;
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",import { Award } from 'lucide-react'

interface LeaderboardEntry {
  rank: number,
  name: string,
  referrals: number
}

interface LeaderboardEntry {_rank: number;
  name: string;
  referrals: number;}

export function ReferralLeaderboard() {_// This would typically be fetched from the server
  // For now, _we'll use mock data
  const leaderboardData: LeaderboardEntry[] = [
    { rank: 1, name: "Alex Johnson", referrals: 24 },
    { rank: 2, name: "Jamie Smith", referrals: 18 },
    { rank: 3, name: "Taylor Wong", referrals: 15 },
    { rank: 4, name: "Casey Brown", referrals: 12 },
    { rank: 5, name: "Jordan Lee", referrals: 10 }],    { rank: 1, _name: "Alex Johnson", _referrals: 24},
    {_rank: 2, _name: "Jamie Smith", _referrals: 18},
    {_rank: 3, _name: "Taylor Wong", _referrals: 15},
    {_rank: 4, _name: "Casey Brown", _referrals: 12},
    {_rank: 5, _name: "Jordan Lee", _referrals: 10}];

  return (_<Card>
      <CardHeader>
        <CardTitle className=&quot;flex items-center gap-2&quot;>
          <Award className=&quot;h-5 w-5&quot; />
          Leaderboard
        </CardTitle>
        <CardDescription>Top referrers this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className=&quot;space-y-2&quot;>
          {leaderboardData.map((entry) => (            <div 
              key={entry.rank}
              className=&quot;flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors&quot;
            >
              <div className=&quot;flex items-center gap-3&quot;>
                <div 
                  className={_`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry.rank === 1
                      ? &quot;bg-yellow-200 text-yellow-800&quot;
                      : entry.rank === 2
                      ? &quot;bg-slate-200 text-slate-800&quot;
                      : entry.rank === 3
                      ? &quot;bg-amber-200 text-amber-800&quot;
                      : &quot;bg-muted text-muted-foreground&quot;
                  }`}                >
                  {_entry.rank}
                </div>
                <span className=&quot;font-medium&quot;>{entry.name}</span>
              </div>
              <span className=&quot;text-sm&quot;>
                {entry.referrals} referral{entry.referrals !== 1 ? &quot;s&quot; : ""}              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
