<<<<<<< HEAD:src-disabled/components/referrals/ReferralLeaderboard.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from 'lucide-react'
interface LeaderboardEntry {
  rank: number;
  name: string;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

interface LeaderboardEntry {
  rank: number,
=======
<<<<<<< HEAD
  rank: number
  name: string

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Award } from 'lucide-react'

interface LeaderboardEntry {
  name: string,
  referrals: number



  rank: number
  name: string
  referrals: number
  rank: number
  name: string

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Award } from 'lucide-react'

interface LeaderboardEntry {
  rank: number,
  name: string,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
rank: number,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLeaderboard.tsx
  name: string,
  referrals: number

}
<<<<<<< HEAD
=======

<<<<<<< HEAD:src-disabled/components/referrals/ReferralLeaderboard.tsx
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLeaderboard.tsx
export function ReferralLeaderboard() {
  // This would typically be fetched from the server
  // For now, we'll use mock data
  const leaderboardData: LeaderboardEntry[] = [
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
    { rank: 5, name: 'Jordan Lee', referrals: 10 }],

<<<<<<< HEAD:src-disabled/components/referrals/ReferralLeaderboard.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    { rank: 1, name: 'Alex Johnson', referrals: 24 },
    { rank: 2, name: 'Jamie Smith', referrals: 18 },
    { rank: 3, name: 'Taylor Wong', referrals: 15 },
    { rank: 4, name: 'Casey Brown', referrals: 12 },
    { rank: 5, name: 'Jordan Lee', referrals: 10 },
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ]
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLeaderboard.tsx
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Award className='h-5 w-5' />
          Leaderboard

    { rank: 2, name: 'Jamie Smith', referrals: 18 },
    { rank: 3, name: 'Taylor Wong', referrals: 15 },
    { rank: 4, name: 'Casey Brown', referrals: 12 },

    { rank: 5, name: 'Jordan Lee', referrals: 10 },

  return (
    <Card>

    { rank: 5, name: "Jordan Lee", referrals: 10 }]
<<<<<<< HEAD
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
        <CardDescription>Top referrers this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
          {leaderboardData.map(entry => (
            <div
              key={entry.rank}
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors'              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;'
} from '@/components/ui/card';'
import { Award } from 'lucide-react';
interface LeaderboardEntry {;
  rank: number;
  name: string;
  referrals: number;
  rank: number,;
  name: string,;
  referrals: number;
}
export function ReferralLeaderboard() { return null; }
    { rank: 1, name: 'Alex Johnson', referrals: 24 },;'
    { rank: 2, name: 'Jamie Smith', referrals: 18 },;'
    { rank: 3, name: 'Taylor Wong', referrals: 15 },;'
    { rank: 4, name: 'Casey Brown', referrals: 12 },;'
    { rank: 5, name: 'Jordan Lee', referrals: 10 },;
  ];

  return (
    <Card>;
      <CardHeader>;'
        <CardTitle className='flex items-center gap-2'>;''
          <Award className='h-5 w-5' />          Leaderboard    { rank: 1, name: 'Alex Johnson', referrals: 24 },;'
    { rank: 2, name: 'Jamie Smith', referrals: 18 },;'
    { rank: 3, name: 'Taylor Wong', referrals: 15 },;'
    { rank: 4, name: 'Casey Brown', referrals: 12 },;'
    { rank: 5, name: 'Jordan Lee', referrals: 10 }],;
  return (
    <Card>;
      <CardHeader>;'
        <CardTitle className='flex items-center gap-2'>;'
          <Award className='h-5 w-5' />;
        </CardTitle>;
        <CardDescription>Top referrers this month</CardDescription>;
      </CardHeader>;
      <CardContent>;'
        <div className='space-y-2'>;
          {leaderboardData && leaderboardData.map(entry => (;
            <div;
              key={entry && entry.rank}''
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors'              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors'>;'
              <div className='flex items-center gap-3'>;
                <div;
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${}
                    entry && entry.rank === 1'
                      ? 'bg-yellow-200 text-yellow-800'
                      : entry && entry.rank === 2'
                        ? 'bg-slate-200 text-slate-800'
                        : entry && entry.rank === 3'
                          ? 'bg-amber-200 text-amber-800'

<<<<<<< HEAD:src-disabled/components/referrals/ReferralLeaderboard.tsx
=======

<<<<<<< HEAD
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLeaderboard.tsx
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

<<<<<<< HEAD:src-disabled/components/referrals/ReferralLeaderboard.tsx
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLeaderboard.tsx
        <div className="space-y-2">
          {leaderboardData.map((entry) => (
            <div 

              key={entry.rank}

              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
<<<<<<< HEAD
=======

<<<<<<< HEAD:src-disabled/components/referrals/ReferralLeaderboard.tsx
            >

              <div className='flex items-center gap-3'>
                <div;`
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${}
                    entry.rank === 1"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >
                <div 
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry.rank === 1
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLeaderboard.tsx
                      ? "bg-yellow-200 text-yellow-800"

                      ? "bg-slate-200 text-slate-800"
                      : entry.rank === 3"
                      ? "bg-amber-200 text-amber-800"
<<<<<<< HEAD
                      : "bg-muted text-muted-foreground"
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
      </CardContent>
    </Card>
  )
}
=======

                      : 'bg-muted text-muted-foreground'

<<<<<<< HEAD:src-disabled/components/referrals/ReferralLeaderboard.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </CardContent>;
    </Card>;
  );
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLeaderboard.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;

interface LeaderboardEntry {;
  rank: number,;
  name: string,;
  referrals: number;
}
;

          <Award className='h-5 w-5' />;
          Leaderboard;
        </CardTitle>;
        <CardDescription>Top referrers this month</CardDescription>;
      </CardHeader>;
<<<<<<< HEAD:src-disabled/components/referrals/ReferralLeaderboard.tsx

                        ? 'bg-slate-200 text-slate-800'
                        : entry.rank === 3
                          ? 'bg-amber-200 text-amber-800'
                          : 'bg-muted text-muted-foreground'

=======
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      : "bg-muted text-muted-foreground";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLeaderboard.tsx
                  }`}
                >;
                  {entry.rank}
<<<<<<< HEAD:src-disabled/components/referrals/ReferralLeaderboard.tsx
=======
                </div>
                <span className="font-medium">{entry.name}</span>
              </div>
              <span className="text-sm">
                {entry.referrals} referral{entry.referrals !== 1 ? "s" : ""}
              </span>
            </div>
          ))}
<<<<<<< HEAD
=======
        </div>
      </CardContent>
    </Card>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLeaderboard.tsx

                <span className='font-medium'>{entry.name}</span>
              </div>'
              <span className='text-sm'>'
                {entry.referrals} referral{entry.referrals !== 1 ? 's' : ''}

<span className='font-medium'>{entry.name}</span>
              </div>
              <span className='text-sm'>
                {entry.referrals} referral{entry.referrals !== 1 ? 's' : ''}

                          : 'bg-muted text-muted-foreground'                  }`}>;
                  {entry && entry.rank}
                </div>;'
                <span className='font-medium'>{entry && entry.name}</span>;
              </div>;'
              <span className='text-sm'>;''
                {entry && entry.referrals} referral{entry && entry.referrals !== 1 ? 's' : ''}              </span>                      ? 'bg-slate-200 text-slate-800';
                      : entry && entry.rank === 3;'
                      ? 'bg-amber-200 text-amber-800';'
                      : 'bg-muted text-muted-foreground';
                >;
                  {entry && entry.rank}
                </div>;'
                <span className='font-medium'>{entry && entry.name}</span>;
              </div>;'
              <span className='text-sm'>;''
                {entry && entry.referrals} referral{entry && entry.referrals !== 1 ? 's' : ''}                <span className='font-medium'>{entry && entry.name}</span>;
              </div>;'
              <span className='text-sm'>;'
                {entry && entry.referrals} referral{entry && entry.referrals !== 1 ? 's' : ''}
            </div>;
          ))}
<<<<<<< HEAD:src-disabled/components/referrals/ReferralLeaderboard.tsx

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLeaderboard.tsx
        </div>;
      </CardContent>;
    </Card>;
  );
}

            </div>))}
        </div>;
      </CardContent>;
    </Card>);
<<<<<<< HEAD:src-disabled/components/referrals/ReferralLeaderboard.tsx
}
=======
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLeaderboard.tsx
