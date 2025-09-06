<<<<<<< HEAD
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Trophy } from 'lucide-react';

export interface LeaderboardEntry {
  name: string;
  points: number;

interface UserLeaderboardProps {
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

export function UserLeaderboard({ entries }: UserLeaderboardProps) {
  return (
    <Card>
      <CardHeader>
<<<<<<< HEAD
        <CardTitle className='flex items-center gap-2'>
          <Trophy className='h-5 w-5' /> Leaderboard
=======
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5" /> Leaderboard
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
        <div className='space-y-2'>
          {entries.map((e, idx) => (
            <div
              key={e.name}
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50'
            >
              <span className='font-medium'>
                {idx + 1}. {e.name}
              </span>
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
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
