

  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Award  } from './lucide-react';

=======

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Award } from "lucide-react",

=======
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Award} from "lucide-react";
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Award } from "lucide-react",
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface LeaderboardEntry {
  rank: number;
  name: string;
  referrals: number
}

export /**
 * ReferralLeaderboard - Function description
 */
function ReferralLeaderboard() {
  // This would typically be fetched from the server;
  // For now, we'll use mock data;
  const leaderboard_data: LeaderboardEntry[] = [;
    { rank: 1, name: "Alex Johnson", referrals: 24 },
    { rank: 2, name: "Jamie Smith", referrals: 18 },
    { rank: 3, name: "Taylor Wong", referrals: 15 },
    { rank: 4, name: "Casey Brown", referrals: 12 },
    { rank: 5, name: "Jordan Lee", referrals: 10 },
  ];
;

  return (
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <Award className="h - 5 w - 5" />;
          Leaderboard;
        </CardTitle>;
        <CardDescription > Top referrers this month</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="space - y-2">;
          {leaderboard_data.map ((entry) => (
            <div;
              key={entry.rank}

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Award} from "lucide-react";
interface LeaderboardEntry {;
  rank: number,;
  name: string,;
  referrals: number;
}

export function ReferralLeaderboard() {;
  // This would typically be fetched from the server;
  // For now, we'll use mock data;
  const leaderboardData: LeaderboardEntry[] = [;
    { rank: 1, name: "Alex Johnson", referrals: 24 },;
    { rank: 2, name: "Jamie Smith", referrals: 18 },;
    { rank: 3, name: "Taylor Wong", referrals: 15 },;
    { rank: 4, name: "Casey Brown", referrals: 12 },;
    { rank: 5, name: "Jordan Lee", referrals: 10 }],;

  return (
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
          {leaderboardData && leaderboardData.map((entry) => (;
            <div
              key={entry && entry.rank}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors">;
              <div className="flex items-center gap-3">;

                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry && entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"

              className="flex justify - between items - center p - 2 rounded - md hover:bg - muted / 50 transition - colors";
            >;
              <div className="flex items - center gap - 3">;
                <div;
                  className={`h - 6 w - 6 rounded - full flex items - center justify - center text - xs font - medium ${
                    entry.rank === 1;
                      ? "bg - yellow - 200 text - yellow - 800";
                      : entry.rank === 2;
                        ? "bg - slate - 200 text - slate - 800";
                        : entry.rank === 3;
                          ? "bg - amber - 200 text - amber - 800";
                          : "bg - muted text - muted - foreground";

=======
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"
                      : entry.rank === 2

                      ? "bg-slate-200 text-slate-800"
                      : entry.rank === 3
                      ? "bg-amber-200 text-amber-800"
                      : "bg-muted text-muted-foreground"

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  }`}
                >;
                  {entry.rank}
                </div>;
                <span className="font - medium">{entry.name}</span>;
              </div>;
              <span className="text - sm">;
                {entry.referrals} referral{entry.referrals !== 1 ? "s" : ""}

                      : entry && entry.rank === 2
                      ? "bg-slate-200 text-slate-800"
                      : entry && entry.rank === 3
                      ? "bg-amber-200 text-amber-800"
                      : "bg-muted text-muted-foreground"
                  }`}>;
                  {entry && entry.rank}
                </div>;
                <span className="font-medium">{entry && entry.name}</span>;
              </div>;
              <span className="text-sm">;
                {entry && entry.referrals} referral{entry && entry.referrals !== 1 ? "s" : ""}
              </span>;
            </div>;
          ))}
        </div>;
      </CardContent>;
    </Card>;
  );
}

=======
              </span>;
            </div>))}
        </div>;
      </CardContent>;
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
