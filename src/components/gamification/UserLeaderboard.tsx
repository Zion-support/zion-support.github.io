<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
=======
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
import { Trophy } from 'lucide-react'
export interface LeaderboardEntry {
  name: string
  points: number
interface UserLeaderboardProps {
  entries: LeaderboardEntry[]
  entries: LeaderboardEntry[]
}
export interface LeaderboardEntry {
<<<<<<< HEAD
  name: string;
=======
  name: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  points: number
}
interface UserLeaderboardProps {
  entries: LeaderboardEntry[]
}
=======
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
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function UserLeaderboard({ entries }: UserLeaderboardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
<<<<<<< HEAD
          <Trophy className='h-5 w-5' /> Leaderboard        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5" /> Leaderboard
=======
          <Trophy className='h-5 w-5' /> Leaderboard
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
          {entries.map((e, idx) => (
            <div
              key={e.name}
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50'            <div
              key = {e.name,}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
            >
              <span className='font-medium'>
                {idx + 1}. {e.name}
              </span>
<<<<<<< HEAD
              <span className='text-sm'>{e.points} pts</span>            </div>              <span className="text-sm">{e.points} pts</span>
=======
              <span className='text-sm'>{e.points} pts</span>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
<<<<<<< HEAD
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
