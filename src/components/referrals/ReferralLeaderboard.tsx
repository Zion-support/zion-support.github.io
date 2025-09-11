<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
rank: number,
  name: string,
  referrals: number
}
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    { rank: 1, name: 'Alex Johnson', referrals: 24 },
    { rank: 2, name: 'Jamie Smith', referrals: 18 },
    { rank: 3, name: 'Taylor Wong', referrals: 15 },
    { rank: 4, name: 'Casey Brown', referrals: 12 },
    { rank: 5, name: 'Jordan Lee', referrals: 10 },
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Award } from 'lucide-react';
interface LeaderboardEntry {;
  rank: number;
  name: string;
  referrals: number;
  rank: number,;
  name: string,;
  referrals: number;
}
export function ReferralLeaderboard() {;
  // This would typically be fetched from the server;
  // For now, we'll use mock data;
  const leaderboardData: LeaderboardEntry[] = [;
    { rank: 1, name: 'Alex Johnson', referrals: 24 },;
    { rank: 2, name: 'Jamie Smith', referrals: 18 },;
    { rank: 3, name: 'Taylor Wong', referrals: 15 },;
    { rank: 4, name: 'Casey Brown', referrals: 12 },;
    { rank: 5, name: 'Jordan Lee', referrals: 10 },;
  ];

  return (
    <Card>;
      <CardHeader>;
        <CardTitle className='flex items-center gap-2'>;
          <Award className='h-5 w-5' />          Leaderboard    { rank: 1, name: "Alex Johnson", referrals: 24 },;
    { rank: 2, name: "Jamie Smith", referrals: 18 },;
    { rank: 3, name: "Taylor Wong", referrals: 15 },;
    { rank: 4, name: "Casey Brown", referrals: 12 },;
    { rank: 5, name: "Jordan Lee", referrals: 10 }],;
  return (
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <Award className="h-5 w-5" />;
        </CardTitle>;
        <CardDescription>Top referrers this month</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className='space-y-2'>;
          {leaderboardData && leaderboardData.map(entry => (;
            <div
              key={entry && entry.rank}
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors'              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors">;
              <div className='flex items-center gap-3'>;
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry && entry.rank === 1
                      ? 'bg-yellow-200 text-yellow-800'
                      : entry && entry.rank === 2
                        ? 'bg-slate-200 text-slate-800'
                        : entry && entry.rank === 3
                          ? 'bg-amber-200 text-amber-800'


<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />
          Leaderboard
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </CardTitle>
        <CardDescription>Top referrers this month</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className='space-y-2'>
          {leaderboardData.map(entry => (
            <div
              key={entry.rank}
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors'              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="space-y-2">
          {leaderboardData.map((entry) => (
            <div 
              key={entry.rank}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >
=======



            >
              <div className="flex items-center gap-3">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div 
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"
                      : entry.rank === 2
                      ? "bg-slate-200 text-slate-800"
                      : entry.rank === 3
                      ? "bg-amber-200 text-amber-800"
<<<<<<< HEAD
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

                      : "bg-muted text-muted-foreground"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                      : "bg-muted text-muted-foreground"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </CardContent>;
    </Card>;
  );
};

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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>
      </CardContent>
    </Card>


                          : 'bg-muted text-muted-foreground'                  }`}>;
                  {entry && entry.rank}
                </div>;
                <span className='font-medium'>{entry && entry.name}</span>;
              </div>;
              <span className='text-sm'>;
                {entry && entry.referrals} referral{entry && entry.referrals !== 1 ? 's' : ''}              </span>                      ? "bg-slate-200 text-slate-800";
                      : entry && entry.rank === 3;
                      ? "bg-amber-200 text-amber-800";
                      : "bg-muted text-muted-foreground";
                >;
                  {entry && entry.rank}
                </div>;
                <span className='font-medium'>{entry && entry.name}</span>;
              </div>;
              <span className='text-sm'>;
                {entry && entry.referrals} referral{entry && entry.referrals !== 1 ? 's' : ''}                <span className="font-medium">{entry && entry.name}</span>;
              </div>;
              <span className="text-sm">;
                {entry && entry.referrals} referral{entry && entry.referrals !== 1 ? "s" : ""}
            </div>;
          ))}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>;
      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD

  );
}

            </div>))}
        </div>;
      </CardContent>;
    </Card>);
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
