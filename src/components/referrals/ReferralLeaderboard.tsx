<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Award } from 'lucide-react'
interface LeaderboardEntry {
  rank: number
  name: string
  referrals: number
<<<<<<< HEAD
  rank: number
  name: string
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Award } from 'lucide-react'

interface LeaderboardEntry {
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  rank: number,
  name: string,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  referrals: number
}
export function ReferralLeaderboard() {
  // This would typically be fetched from the server
  // For now, we'll use mock data
  const leaderboardData: LeaderboardEntry[] = [
<<<<<<< HEAD
<<<<<<< HEAD
    { rank: 1, name: 'Alex Johnson', referrals: 24 }
    { rank: 2, name: 'Jamie Smith', referrals: 18 }
    { rank: 3, name: 'Taylor Wong', referrals: 15 }
    { rank: 4, name: 'Casey Brown', referrals: 12 }
    { rank: 5, name: 'Jordan Lee', referrals: 10 }
=======
    { rank: 1, name: 'Alex Johnson', referrals: 24 },
    { rank: 2, name: 'Jamie Smith', referrals: 18 },
    { rank: 3, name: 'Taylor Wong', referrals: 15 },
    { rank: 4, name: 'Casey Brown', referrals: 12 },
    { rank: 5, name: 'Jordan Lee', referrals: 10 },
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  ]
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Award className='h-5 w-5' />          Leaderboard    { rank: 1, name: "Alex Johnson", referrals: 24 }
    { rank: 2, name: "Jamie Smith", referrals: 18 }
    { rank: 3, name: "Taylor Wong", referrals: 15 }
    { rank: 4, name: "Casey Brown", referrals: 12 }
    { rank: 5, name: "Jordan Lee", referrals: 10 }]
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />
=======
    { rank: 1, name: "Alex Johnson", referrals: 24 },
    { rank: 2, name: "Jamie Smith", referrals: 18 },
    { rank: 3, name: "Taylor Wong", referrals: 15 },
    { rank: 4, name: "Casey Brown", referrals: 12 },
    { rank: 5, name: "Jordan Lee", referrals: 10 }],

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />
          Leaderboard
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        </CardTitle>
        <CardDescription>Top referrers this month</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
        <div className='space-y-2'>
          {leaderboardData.map(entry => (
            <div
              key={entry.rank}
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors'              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
=======
        <div className="space-y-2">
          {leaderboardData.map((entry) => (
            <div 
              key={entry.rank}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
                >
                  {entry.rank}
                </div>
                <span className='font-medium'>{entry.name}</span>
              </div>
              <span className='text-sm'>
                {entry.referrals} referral{entry.referrals !== 1 ? 's' : ''}                <span className="font-medium">{entry.name}</span>
              </div>
              <span className="text-sm">
                {entry.referrals} referral{entry.referrals !== 1 ? "s" : ""}
            </div>
          ))}
        </div>
<<<<<<< HEAD
      </CardContent>
    </Card>
  )
}
=======
      </CardContent>;
    </Card>;
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Award } from 'lucide-react';
interface LeaderboardEntry {;
  rank: number,;
  name: string,;
  referrals: number;
}
;
export function ReferralLeaderboard() {;
  // This would typically be fetched from the server;
  // For now, we'll use mock data;
  const leaderboardData: LeaderboardEntry[] = [;
    { rank: 1, name: "Alex Johnson", referrals: 24 },;
    { rank: 2, name: "Jamie Smith", referrals: 18 },;
    { rank: 3, name: "Taylor Wong", referrals: 15 },;
    { rank: 4, name: "Casey Brown", referrals: 12 };
    { rank: 5, name: "Jordan Lee", referrals: 10 }];
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
            <div;
              key={entry.rank}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors";
            >;
              <div className="flex items-center gap-3">;
                <div;
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${;
                    entry.rank === 1;
                      ? "bg-yellow-200 text-yellow-800";
                      : entry.rank === 2;
                      ? "bg-slate-200 text-slate-800";
                      : entry.rank === 3;
                      ? "bg-amber-200 text-amber-800";
                      : "bg-muted text-muted-foreground";
                  }`}
                >;
                  {entry.rank}
                </div>
                <span className="font-medium">{entry.name}</span>
              </div>
              <span className="text-sm">
                {entry.referrals} referral{entry.referrals !== 1 ? "s" : ""}
              </span>
            </div>
          ))}
        </div>;
      </CardContent>;
    </Card>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
