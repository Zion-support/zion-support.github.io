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
import { Trophy } from 'lucide-react';
<<<<<<< HEAD
=======
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export interface LeaderboardEntry {
  name: string;
  points: number;

interface UserLeaderboardProps {
<<<<<<< HEAD
  entries: LeaderboardEntry[];
=======
<<<<<<< HEAD
  entries: LeaderboardEntry[];
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

export interface LeaderboardEntry {
  name: string,
  points: number
}

interface UserLeaderboardProps {
  entries: LeaderboardEntry[]
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  entries: LeaderboardEntry[]
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export function UserLeaderboard({ entries }: UserLeaderboardProps) {
  return (
    <Card>
      <CardHeader>
<<<<<<< HEAD
        <CardTitle className='flex items-center gap-2'>
          <Trophy className='h-5 w-5' /> Leaderboard        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <CardTitle className='flex items-center gap-2'>
          <Trophy className='h-5 w-5' /> Leaderboard
=======
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5" /> Leaderboard
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5" /> Leaderboard
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='space-y-2'>
=======
        <div className="space-y-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          {entries.map((e, idx) => (
            <div
              key={e.name}
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50'
            >
              <span className='font-medium'>
                {idx + 1}. {e.name}
              </span>
<<<<<<< HEAD
              <span className='text-sm'>{e.points} pts</span>            </div>
=======
<<<<<<< HEAD
              <span className='text-sm'>{e.points} pts</span>
=======
        <div className="space-y-2">
          {entries.map((e, idx) => (
            <div
              key={e.name}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
            >
              <span className="font-medium">
                {idx + 1}. {e.name}
              </span>
              <span className="text-sm">{e.points} pts</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <span className="text-sm">{e.points} pts</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
