<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Award } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  referrals: number;
<<<<<<< HEAD
=======
=======

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

interface LeaderboardEntry {
=======

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

interface LeaderboardEntry {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  rank: number,
  name: string,
  referrals: number
}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export function ReferralLeaderboard() {
  // This would typically be fetched from the server
  // For now, we'll use mock data
  const leaderboardData: LeaderboardEntry[] = [
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    { rank: 1, name: 'Alex Johnson', referrals: 24 },
    { rank: 2, name: 'Jamie Smith', referrals: 18 },
    { rank: 3, name: 'Taylor Wong', referrals: 15 },
    { rank: 4, name: 'Casey Brown', referrals: 12 },
    { rank: 5, name: 'Jordan Lee', referrals: 10 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
<<<<<<< HEAD
          <Award className='h-5 w-5' />          Leaderboard
=======
          <Award className='h-5 w-5' />
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          Leaderboard
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </CardTitle>
        <CardDescription>Top referrers this month</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
        <div className='space-y-2'>
          {leaderboardData.map(entry => (
            <div
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='space-y-2'>
          {leaderboardData.map(entry => (
            <div
=======
        <div className="space-y-2">
          {leaderboardData.map((entry) => (
            <div 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              key={entry.rank}
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors'
            >
              <div className='flex items-center gap-3'>
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry.rank === 1
                      ? 'bg-yellow-200 text-yellow-800'
                      : entry.rank === 2
<<<<<<< HEAD
                        ? 'bg-slate-200 text-slate-800'
                        : entry.rank === 3
                          ? 'bg-amber-200 text-amber-800'
                          : 'bg-muted text-muted-foreground'                  }`}
                >
                  {entry.rank}
                </div>
                <span className='font-medium'>{entry.name}</span>
              </div>
              <span className='text-sm'>
                {entry.referrals} referral{entry.referrals !== 1 ? 's' : ''}              </span>
=======
<<<<<<< HEAD
                        ? 'bg-slate-200 text-slate-800'
                        : entry.rank === 3
                          ? 'bg-amber-200 text-amber-800'
                          : 'bg-muted text-muted-foreground'
=======
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
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      ? "bg-slate-200 text-slate-800"
                      : entry.rank === 3
                      ? "bg-amber-200 text-amber-800"
                      : "bg-muted text-muted-foreground";
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  }`}
                >
                  {entry.rank}
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                <span className='font-medium'>{entry.name}</span>
              </div>
              <span className='text-sm'>
                {entry.referrals} referral{entry.referrals !== 1 ? 's' : ''}
=======
                <span className="font-medium">{entry.name}</span>
              </div>
              <span className="text-sm">
                {entry.referrals} referral{entry.referrals !== 1 ? "s" : ""}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <span className="font-medium">{entry.name}</span>
              </div>
              <span className="text-sm">
                {entry.referrals} referral{entry.referrals !== 1 ? "s" : ""}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
