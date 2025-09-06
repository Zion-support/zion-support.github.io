<<<<<<< HEAD
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Trophy } from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from 'lucide-react';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
export interface LeaderboardEntry {
  name: string;
  points: number;

interface UserLeaderboardProps {
  entries: LeaderboardEntry[];
=======
  entries: LeaderboardEntry[]
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export function UserLeaderboard({ entries }: UserLeaderboardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Trophy className='h-5 w-5' /> Leaderboard        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          {entries.map((e, idx) => (
            <div
              key={e.name}
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50'
=======
        <div className="space-y-2">
          {entries.map((e, idx,) => (
            <div
              key = {e.name,}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
            >
              <span className='font-medium'>
                {idx + 1}. {e.name}
              </span>
              <span className='text-sm'>{e.points} pts</span>            </div>
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
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
